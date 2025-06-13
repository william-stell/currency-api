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

**Status Code:** 200 OK

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
