module.exports = {
  "type": "object",
  "properties": {
    "miniprogramRoot": {
      "type": "string"
    },
    "pluginRoot": {
      "type": "string"
    },
    "pluginAppid": {
      "type": "string"
    },
    "jsserverRoot": {
      "type": "string"
    },
    "packOptions": {
      "type": "object",
      "properties": {
        "ignore": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "type": {
                "type": "string"
              },
              "value": {
                "type": "string"
              }
            },
            "additionalProperties": false,
            "required": [
              "type",
              "value"
            ]
          }
        }
      },
      "additionalProperties": false
    },
    "setting": {
      "type": "object",
      "properties": {
        "babelSetting": {
          "type": "object",
          "properties": {
            "outputPath": {
              "type": "string"
            }
          },
          "additionalProperties": false
        }
      },
      "additionalProperties": false
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$version": 1634545246254
}