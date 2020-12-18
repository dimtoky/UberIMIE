# Register

Route for new user register

**URL** : `/users/register/`

**Method** : `POST`

**Auth required** : `NO`

**Request**

```json
{
    "name": "John Doe",
    "email": "John@doe.com",
    "password": "password123",
}
```
---

## Success Response

**Code** : `200`

```json
{
     "error": null,
    "data": {
        "_id": "someID",
        "name": "John Doe",
        "email": "John@doe.com",
        "date": "2020-12-18T14:10:11.684Z",
        "__v": 0
    }
}
```

## Error Response

**Condition** : If email is used

**Code** : `400 Bad Request`

```json
{
      "error": "Email already exists"
}
```

**Condition** : If one field is empty

**Code** : `400 Bad Request`

```json
{
    "error": "\fied\" is not allowed to be empty"
}
```

**Condition** : If email is not valid

**Code** : `400 Bad Request`

```json
{
     "error": "\"email\" must be a valid email"
}
```

**Condition** : If one fied is too short

**Code** : `400 Bad Request`

```json
{
     "error": "\field\" length must be at least X characters long"
}
```
