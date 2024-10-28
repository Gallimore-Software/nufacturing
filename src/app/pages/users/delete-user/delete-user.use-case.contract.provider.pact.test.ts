import { Verifier } from '@pact-foundation/pact';
import path from 'path';
import express from 'express';
import fs from 'fs';
import { Server } from 'http'; // Import the Server type from http

describe('Pact Verification - Delete User Use Case', () => {
  let server: Server;

  // Step 1: Set up a simple Express server to simulate the provider API
  beforeAll((done) => {
    const app = express();

    app.delete('/api/users/:id', (req, res) => {
      const userId = req.params.id;

      // Simulate different responses based on the Pact contract
      if (userId === '123') {
        res.status(200).json({ message: 'User deleted successfully' });
      } else if (userId === '999') {
        res.status(404).json({ message: 'User not found' });
      } else {
        res.status(400).json({ message: 'Bad request' });
      }
    });

    // Step 2: Start server on localhost:1234 (can change the port if needed)
    server = app.listen(1234, () => {
      console.log('Mock server running on http://127.0.0.1:1234');
      done();
    });
  });

  // Step 3: Run Pact Verifier against the local mock server
  it('should validate the expectations from the consumer contract', async () => {
    try {
      const pactPaths = [
        path.join(
          process.cwd(),
          'docs',
          'generated',
          'pacts',
          'UserClient-UserAPI.json'
        ),
        path.join(process.cwd(), 'pacts', 'UserClient-UserAPI.json'),
      ];

      const validPactUrls = pactPaths.filter((pactPath) =>
        fs.existsSync(pactPath)
      );

      if (validPactUrls.length === 0) {
        throw new Error('No valid pact file found at the specified paths');
      }

      const verifier = new Verifier({
        providerBaseUrl: 'http://127.0.0.1:1234', // Use localhost since the mock server is running locally
        pactUrls: validPactUrls,
        publishVerificationResult: true,
        providerVersion: '1.0.0',
        logLevel: 'info',
      });

      const output = await verifier.verifyProvider();
      console.log('Pact Verification Complete!', output);
    } catch (error) {
      console.error('Pact Verification Failed!', error);
      throw error;
    }
  });

  // Step 4: Stop the server after verification is complete
  afterAll((done) => {
    server.close(() => {
      console.log('Mock server stopped');
      done();
    });
  });
});
