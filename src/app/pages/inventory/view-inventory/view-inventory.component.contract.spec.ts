import { PactWeb } from '@pact-foundation/pact-web';
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('Pact', () => {
  const provider = new PactWeb({
    consumer: 'FrontendConsumer',
    provider: 'BackendProvider',
    port: 1234,
  });

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeAll((done) => {
    provider.setup().then(() => done());
  });

  afterAll((done) => {
    provider.finalize().then(() => done());
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpClient],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    provider.verify();
    httpTestingController.verify();
  });

  it('should get inventory', (done) => {
    provider
      .addInteraction({
        state: 'inventory exists',
        uponReceiving: 'a request for inventory',
        withRequest: {
          method: 'GET',
          path: '/api/inventory',
        },
        willRespondWith: {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
          body: [{ id: 1, name: 'item1', quantity: 100 }],
        },
      })
      .then(() => {
        httpClient.get('/api/inventory').subscribe((response: any) => {
          expect(response).toEqual([{ id: 1, name: 'item1', quantity: 100 }]);
          done();
        }, done.fail);
      });
  });
});
