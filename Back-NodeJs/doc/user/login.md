# Login

Route for user login

**URL** : `/users/login/`

**Method** : `POST`

**Auth required** : `NO`

**Request**

```json
{
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
        "message": "Login successful",
        "token": "cryptedToken"
    }
}
```

## Error Response

**Condition** : If email don't exist

**Code** : `400 Bad Request`

```json
{
     "error": "Email is wrong"
}
```

**Condition** : If password is wrong

**Code** : `400 Bad Request`

```json
{
    "error": "Password is wrong"
}
```

**Condition** : If email is not valid

**Code** : `400 Bad Request`

```json
{
     "error": "\"email\" must be a valid email"
}
```

**Condition** : If one field is empty

**Code** : `400 Bad Request`

```json
{
    "error": "\fied\" is not allowed to be empty"
}
```
