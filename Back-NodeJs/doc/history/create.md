# Login

Route for user login

**URL** : `/itinerary/save/`

**Method** : `POST`

**Auth required** : `YES`

**Request**

```json
{
    "email": "John@doe.com",
    "data": "",
}
```
---

## Success Response

**Code** : `200`

```json
{
    "error": null,
    "data": {
        "error": null,
        "savedItinerary": "data"
    }
}
```

## Error Response

**Condition** : If email don't exist

**Code** : `401 Unauthorized`

```json
{
     "error": "Access denied"
}
```

**Condition** : If password is wrong

**Code** : `400 Bad Request`

```json
{
    "error": "Token is not valid"
}
```
