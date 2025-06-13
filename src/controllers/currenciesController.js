
export const currenciesGet = (req, res) => {
  res.json({
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
};