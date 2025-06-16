import axios from 'axios';

let cachedData = null;
let cacheTimestamp = 0;
const CACHE_DURATION_MS = 5 * 60 * 1000; // 5 minutes

const SUPPORTED = ['USD', 'EUR', 'JPY', 'AUD'];

export async function getRates(currency = "USD") {
  const now = Date.now();

  if (cachedData && (now - cacheTimestamp < CACHE_DURATION_MS)) {
    return cachedData;
  }

  try {
    const url = `https://api.coinbase.com/v2/exchange-rates?currency=${currency}`;
    const response = await axios.get(url);

    if (response.status !== 200) {
      return null;
    }

    const rawRates = response.data.data.rates;

    // Filter only supported currencies
    const filteredRates = {};
    SUPPORTED.forEach((supportedCurrency) => {
      if (supportedCurrency === currency) {
        filteredRates[supportedCurrency] = "1.00000000"; // base currency rate is always 1
      } else if (rawRates[supportedCurrency]) {
        filteredRates[supportedCurrency] = rawRates[supportedCurrency];
      }
    });

    cachedData = filteredRates;
    cacheTimestamp = now;

    return cachedData;
  } catch (error) {
    throw new Error(`Failed to fetch ${currency} rates: ${error.message}`);
  }
}

export function resetCache() {
  cachedData = null;
  cacheTimestamp = 0;
}