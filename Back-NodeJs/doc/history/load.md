# Login

Route for itinerary history load 

**URL** : `/itinerary/load/`

**Method** : `POST`

**Auth required** : `YES`

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
    "error": null,
    "data": {
        "histories": "Array",
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
