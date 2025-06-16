
import http from 'http';
import request from 'supertest';
import app from '../../src/app.js';
import convertRates from '../../src/utils/convertRates.js';

let server;

beforeAll((done) => {
  server = http.createServer(app);
  server.listen(done);
});

afterAll((done) => {
  server.close(done);
});

const usdRates = {
  AUD: "1.54421400",
  EUR: "0.86750000",
  JPY: "143.62220000",
  USD: "1.00000000"
};

const testCases = [
  {
    base: 'USD',
    expectedRates: usdRates
  },
  {
    base: 'AUD',
    expectedRates: convertRates(usdRates, 'AUD')
  },
  {
    base: 'EUR',
    expectedRates: convertRates(usdRates, 'EUR')
  },
  {
    base: 'JPY',
    expectedRates: convertRates(usdRates, 'JPY')
  }
];

describe('GET /rates/:base', () => {

  beforeAll(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date('2025-06-16T12:00:00Z'));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test.each(testCases)(
    'responds with 200 and correct rates for $base',
    async ({ base, expectedRates }) => {
      const res = await request(server).get(`/rates/${base}`);
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual({
        data: {
          base,
          date: "2025-06-16",
          rates: {
            USD: expect.any(String),
            EUR: expect.any(String),
            JPY: expect.any(String),
            AUD: expect.any(String),
          }
        }
      });
    }
  );
});



