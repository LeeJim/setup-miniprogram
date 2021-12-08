module.exports = {
  "type": "object",
  "properties": {
    "publicComponents": {
      "type": "object",
      "additionalProperties": {
        "type": "string"
      }
    },
    "usingComponents": {
      "type": "object",
      "additionalProperties": {
        "type": "string"
      }
    },
    "pages": {
      "type": "object",
      "additionalProperties": {
        "type": "string"
      }
    },
    "main": {
      "type": "string"
    },
    "themeLocation": {
      "type": "string"
    },
    "lazyCodeLoading": {
      "enum": [
        "requiredComponents"
      ],
      "type": "string"
    },
    "workers": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$version": 1631795974264
}