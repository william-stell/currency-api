import http from 'http';
import request from 'supertest';
import app from '../app.js';

import packageJson from '../../package.json';

let server;

beforeAll((done) => {
  server = http.createServer(app);
  server.listen(done);
});

afterAll((done) => {
  server.close(done);
});

describe('GET /status', () => {
  it('should respond with API status', async () => {
    const res = await request(server).get('/status');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({
      status: 'ok',
      version: packageJson.version
    });
  });
});