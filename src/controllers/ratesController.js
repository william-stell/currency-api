import convertRates from '../utils/convertRates.js';
import { getRates } from '../services/currencyRatesService.js';

export const ratesGet = async (req, res) => {

  const base = (req.params.base || 'USD').toUpperCase();

  const usdRates = await getRates(base);

  // Validate if requested base is supported
  if (!usdRates) {
    return res.status(400).json({ error: `Unsupported base currency: ${base}` });
  }

  // Convert rates to requested base
  const convertedRates = convertRates(usdRates, base);

  res.json({
    data: {
      base,
      date: new Date().toISOString().slice(0, 10),
      rates: convertedRates
    }
  });
};