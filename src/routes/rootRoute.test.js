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

describe('GET /', () => {
  it('should respond with API status', async () => {
    const res = await request(server).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: 'Hello world!' });
  });
});