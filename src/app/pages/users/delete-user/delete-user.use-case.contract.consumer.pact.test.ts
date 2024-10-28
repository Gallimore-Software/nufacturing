import { Pact, Matchers } from '@pact-foundation/pact';
import request from 'supertest';
import * as path from 'path';

const { like } = Matchers;

describe('Pact - Delete User Use Case with Mocked External Service', () => {
  const provider = new Pact({
    consumer: 'UserClient',
    provider: 'UserAPI',
    port: 1234, // Make sure the port is correct
    log: path.resolve(process.cwd(), 'logs', 'pact.log'),
    dir: path.resolve(process.cwd(), 'docs/generated/pacts'),
    logLevel: 'info',
    spec: 2,
  });

  // Make sure the provider mock server is set up before the test
  beforeAll(async () => {
    console.log('Setting up Pact mock server...');
    await provider.setup();
    console.log('Pact mock server is ready.');
  });

  // Verify the interactions after each test
  afterEach(async () => {
    console.log('Verifying Pact interactions...');
    await provider.verify();
    console.log('Pact interactions verified.');
  });

  // Finalize Pact after all tests
  afterAll(async () => {
    console.log('Finalizing Pact...');
    await provider.finalize();
  });

  describe('when a DELETE request is made to delete a user', () => {
    beforeAll(async () => {
      await provider.addInteraction({
        state: 'a user with ID 123 exists',
        uponReceiving: 'a request to delete a user',
        withRequest: {
          method: 'DELETE',
          path: '/api/users/123',
          headers: { Accept: 'application/json' },
        },
        willRespondWith: {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
          body: like({ message: 'User deleted successfully' }),
        },
      });
    });

    it('should successfully delete the user', async () => {
      // Use explicit IPv4 address to avoid "::1" (IPv6) issues
      const response = await request('http://127.0.0.1:1234') // Change to 127.0.0.1
        .delete('/api/users/123')
        .set('Accept', 'application/json');
      expect(response.status).toBe(200);
      expect(response.body).toEqual({ message: 'User deleted successfully' });
    });
  });

  describe('when a DELETE request is made for a non-existent user', () => {
    beforeAll(async () => {
      await provider.addInteraction({
        state: 'no user exists with ID 999',
        uponReceiving: 'a request to delete a non-existent user',
        withRequest: {
          method: 'DELETE',
          path: '/api/users/999',
          headers: { Accept: 'application/json' },
        },
        willRespondWith: {
          status: 404,
          headers: { 'Content-Type': 'application/json' },
          body: like({ message: 'User not found' }),
        },
      });
    });

    it('should return 404 for a non-existent user', async () => {
      // Use explicit IPv4 address to avoid "::1" (IPv6) issues
      const response = await request('http://127.0.0.1:1234') // Change to 127.0.0.1
        .delete('/api/users/999')
        .set('Accept', 'application/json');
      expect(response.status).toBe(404);
      expect(response.body).toEqual({ message: 'User not found' });
    });
  });
});
