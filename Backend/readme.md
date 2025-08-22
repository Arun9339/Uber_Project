# User Registration Endpoint Documentation

## POST `/users/register`

Registers a new user in the system.

### Description

This endpoint allows a new user to register by providing their first name, last name, email, and password. The password will be securely hashed before storing in the database. On successful registration, a JWT authentication token is returned along with the user data.

### Request Body

Send a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

#### Field Requirements

- `fullname.firstname`: string, required, minimum 3 characters
- `fullname.lastname`: string, required, minimum 3 characters
- `email`: string, required, must be a valid email format
- `password`: string, required, minimum 6 characters

### Responses

| Status Code | Description                                 | Response Body Example                                      |
|-------------|---------------------------------------------|------------------------------------------------------------|
| 201         | User registered successfully                | `{ "user": { ... }, "token": "..." }`                      |
| 400         | Validation error or missing required fields | `{ "errors": [ { "msg": "...", "param": "...", ... } ] }`  |
| 500         | Internal server error                       | `{ "error": "Internal Server Error" }`                     |

### Example Success Response

```json
{
  "user": {
    "_id": "60f7c2b5e1d2c8a1b8e4d123",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": ""
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

<!--
This section provides an example of an error response that may be returned by the API.
Use this as a reference for understanding the structure and content of error messages.
-->
### Example Error Response

```json
{
  "errors": [
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location":
  ] "body"
    },
    {
      "msg": "Email is not valid",
      "param": "email",
      "location": "body"
    }
  


  