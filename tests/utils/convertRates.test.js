import convertRates from "../../src/utils/convertRates.js";

test('should calculate correct AUD rates from USD rates', () => {
  const usdRates = {
    AUD: "1.544214",
    EUR: "0.867500",
    JPY: "143.6222",
    USD: "1"
  };

  const result = convertRates(usdRates, "AUD");

  expect(result).toEqual({
    AUD: "1.00000000",
    EUR: "0.56177447",
    JPY: "93.00666876",
    USD: "0.64757864",
  });
});