import { jest } from '@jest/globals';
import axios from 'axios';
import { getRates, resetCache } from '../../src/services/currencyRatesService.js';

// Mock axios
jest.mock('axios');

describe('getRates', () => {

  beforeEach(() => {
    jest.clearAllMocks();
    resetCache();
  });

  it('fetches and caches rates', async () => {
    // Mock axios response
    axios.get.mockResolvedValueOnce({
      status: 200,
      data: {
        data: {
          currency: 'USD',
          rates: {
            EUR: '0.85',
            JPY: '110.0',
          },
        },
      },
    });

    // First call hits axios.get
    const firstResult = await getRates();
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(firstResult.EUR).toBe('0.85');

    // Second call within cache time returns cached data (no new axios.get)
    const secondResult = await getRates();
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(secondResult).toEqual(firstResult);
  });

  it('fetches new data after cache expires', async () => {

    jest.useFakeTimers();

    // Mock Date.now()
    let currentTime = Date.now();
    jest.spyOn(Date, 'now').mockImplementation(() => currentTime);

    axios.get.mockResolvedValueOnce({
      status: 200,
      data: { data: { currency: 'USD', rates: { EUR: '0.85' } } },
    });

    const result1 = await getRates();
    expect(axios.get).toHaveBeenCalledTimes(1);

    // Advance time past cache duration
    currentTime += 5 * 60 * 1000 + 1000; // 5 minutes + 1 second
    jest.advanceTimersByTime(5 * 60 * 1000 + 1000);

    axios.get.mockResolvedValueOnce({
      status: 200,
      data: { data: { currency: 'USD', rates: { EUR: '0.80' } } },
    });

    const result2 = await getRates();
    expect(axios.get).toHaveBeenCalledTimes(2);
    expect(result2.EUR).toBe('0.80');

    // Restore Date.now()
    Date.now.mockRestore();
    jest.useRealTimers();
  });
});