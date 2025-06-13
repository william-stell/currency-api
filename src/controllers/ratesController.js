import convertRates from '../utils/convertRates.js';

export const ratesGet = (req, res) => {
  const base = (req.params.base || 'USD').toUpperCase();

  // Original fixed rates with USD as base
  const usdRates = {
    AUD: "1.544214",
    EUR: "0.867500",
    JPY: "143.6222",
    USD: "1"
  };

  // Validate if requested base is supported
  if (!usdRates[base]) {
    return res.status(400).json({ error: `Unsupported base currency: ${base}` });
  }

  // Convert rates to requested base
  const convertedRates = convertRates(usdRates, base);

  res.json({
    data: {
      base,
      date: "2025-06-13",
      rates: convertedRates
    }
  });
};