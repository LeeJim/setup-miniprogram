module.exports = {
  "type": "object",
  "properties": {
    "desc": {
      "type": "string"
    },
    "rules": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "action": {
            "enum": [
              "allow",
              "disallow"
            ],
            "type": "string"
          },
          "page": {
            "type": "string"
          },
          "params": {
            "type": "array",
            "items": {}
          },
          "matching": {
            "enum": [
              "exact",
              "exclusive",
              "inclusive",
              "partial"
            ],
            "type": "string"
          },
          "priority": {
            "type": "number"
          }
        },
        "additionalProperties": false,
        "required": [
          "action",
          "page"
        ]
      }
    }
  },
  "additionalProperties": false,
  "required": [
    "rules"
  ],
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$version": 1631795974265
}