# Register

Route for user login

**URL** : `/users/login/`

**Method** : `POST`

**Auth required** : `NO`

**Request**

```json
{
    "email": "John@doe.com",
}
```
---

## Success Response

**Code** : `200`

```json
{
    "message": "A reset email has been sent to John@doe.com."
}
```

## Error Response


**Condition** : If email is not valid

**Code** : `400 Bad Request`

```json
{
    "message": "The email address John@doe.com is not associated with any account. Double-check your email address and try again."
}
```

