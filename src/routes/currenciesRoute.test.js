import http from 'http';
import request from 'supertest';
import app from '../app.js';

let server;

beforeAll((done) => {
  server = http.createServer(app);
  server.listen(done);
});

afterAll((done) => {
  server.close(done);
});

describe('GET /currencies', () => {
  it('should respond with API status 200 and supported currencies', async () => {
    const res = await request(server).get('/currencies');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({
      data: [
        {
          id: "USD",
          name: "United States Dollar"
        },
        {
          id: "EUR",
          name: "Euro"
        },
        {
          id: "JPY",
          name: "Japanese Yen"
        }
      ]
    });
  });
});