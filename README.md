# Introduction

After watching some old pokemon episodes, i decided to build this API.

## Use Cases

This simple pokemon api is for everyone that is currently learning about http requests. It only shows the basic information of pokemon so you dont get overwhelmed by data.

## Authorization

You dont need an API key.

## Endpoints

---

Get list of all Pokemon

```http
GET api/v1/pokemon
```

Full request

```http
GET https://simplepokeapi.herokuapp.com/api/v1/pokemon
```

Response

```javascript
"status": "success",
    "results": 809,
    "data": {
        "data": [
            {
                "id": 1,
                "name": {
                    "english": "Bulbasaur",
                    "japanese": "フシギダネ",
                    "chinese": "妙蛙种子",
                    "french": "Bulbizarre"
                },
                "type": [
                    "Grass",
                    "Poison"
                ],
                "base": {
                    "HP": 45,

```

### Available Query Params

| Key        | Value                                                                                                                                  |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| type       | Normal, Fire, Water, Grass, Flying, Fighting, Poison, Electric, Ground, Rock, Psychic, Ice, Bug, Ghost, Steel, Dragon, Dark and Fairy. |
| generation | 1-7                                                                                                                                    |

### Examples

Getting every fire type of generation 4

```http
GET https://simplepokeapi.herokuapp.com/api/v1/pokemon?type=fire&generation=4
```

Showing generation 1 only

```http
GET https://simplepokeapi.herokuapp.com/api/v1/pokemon?generation=1
```

---

Get pokemon by national pokedex number

```http
GET api/v1/pokemon/:pokedexnumber
```

Example request

```http
GET https://simplepokeapi.herokuapp.com/api/v1/pokemon/151
```

example response

```javascript
{
    "status": "success",
    "data": {
        "data": [
            {
                "id": 151,
                "name": {
                    "english": "Mew",
                    "japanese": "ミュウ",
                    "chinese": "梦幻",
                    "french": "Mew"
                },
                "type": [
                    "Psychic"

```

---
