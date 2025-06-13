# Currency API

**A simple and reliable API for real-time currency exchange rates and conversions**

## API Routes

### GET /currencies

Fetches a list of supported currencies.

**Request:**

```bash
GET /currencies
```

**Response:**

```json
{
  "data": [
    {
      "id": "AUD",
      "name": "Australian Dollar"
    },
    {
      "id": "EUR",
      "name": "Euro"
    },
    {
      "id": "JPY",
      "name": "Japanese Yen"
    },
    {
      "id": "USD",
      "name": "United States Dollar"
    }
  ]
}
```

**Status Code:** 200 OK

### GET /rates/:base

Returns live exchange rates for currencies relative to the specified base currency.

#### Request

- **Method:** GET
- **URL:** `/rates/:base`
- **Path Parameters:**

  - `base` (string, required): The base currency code (e.g., `USD`, `AUD`, `EUR`). Must be one of the supported currencies.

#### Response

- **Status:** 200 OK
- **Content-Type:** application/json
- **Body:**

```json
{
  "data": {
    "base": "AUD",
    "date": "2025-06-13",
    "rates": {
      "USD": "0.64750000",
      "EUR": "0.56140000",
      "JPY": "92.98300000",
      "AUD": "1.00000000"
    }
  }
}
```

#### Fields

| Field   | Type   | Description                                                                                                                |
| ------- | ------ | -------------------------------------------------------------------------------------------------------------------------- |
| `data`  | object | Wrapper object containing the response data.                                                                               |
| `base`  | string | The base currency code used for rate calculations.                                                                         |
| `date`  | string | The date the rates were last updated (YYYY-MM-DD).                                                                         |
| `rates` | object | A map of currency codes to their exchange rate against the base currency. Values are strings representing decimal numbers. |

#### Errors

- **400 Bad Request:**
  Returned when the provided `base` currency is not supported.

```json
{
  "error": "Unsupported base currency: XYZ"
}
```

#### Example

Request:

```http
GET /rates/USD
```

Response:

```json
{
  "data": {
    "base": "USD",
    "date": "2025-06-13",
    "rates": {
      "AUD": "1.54421400",
      "EUR": "0.86750000",
      "JPY": "143.62220000",
      "USD": "1.00000000"
    }
  }
}
```

### GET /status

Returns the current status of the API and its version.

**Request:**

```bash
GET /status
```

**Response:**

```json
{
  "status": "ok",
  "version": "<current version>"
}
```

**Status Code:** 200 OK
