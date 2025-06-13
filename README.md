# Currency API

**A simple and reliable API for real-time currency exchange rates and conversions**

## API Routes

### GET /currencies

Fetches a list of supported currencies.

**Request:**

```
GET /currencies
```

**Response:**

```json
[
  {
    "id": "USD",
    "name": "United States Dollar"
  },
  {
    "id": "EUR",
    "name": "Euro"
  },
  {
    "id": "JPY",
    "name": "Japanese Yen"
  }
]
```
