
export default function convertRates(rates, newBase) {
  const baseValue = parseFloat(rates[newBase]);
  const result = {};

  for (const [key, value] of Object.entries(rates)) {
    result[key] = (parseFloat(value) / baseValue).toFixed(8);
  }

  return result;
}