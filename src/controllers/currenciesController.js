
export const currenciesGet = (req, res) => {
  res.json({
    data: [
      {
        id: "AUD",
        name: "Australian Dollar"
      },
      {
        id: "EUR",
        name: "Euro"
      },
      {
        id: "JPY",
        name: "Japanese Yen"
      },
      {
        id: "USD",
        name: "United States Dollar"
      }
    ]
  });
};