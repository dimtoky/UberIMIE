# Reset Password

Route for password reset

**URL** : `/users/resetpswd/`

**Method** : `POST`

**Auth required** : `NO`

**Request**

```json
{
    "token": "randomGeneratedString",
}
```
---

## Success Response

**Code** : `200`

```json
{
    "message": "Your password has been updated."
}
```

## Error Response


**Condition** : If token is not valid

**Code** : `401 Unauthorized`

```json
{
    "message": "Password reset token is invalid or has expired."
}
```



**Condition** : If password is empty

**Code** : `400 Bad Request`

```json
{
    "message": "User validation failed: password: Path `password` is required."
}
```


