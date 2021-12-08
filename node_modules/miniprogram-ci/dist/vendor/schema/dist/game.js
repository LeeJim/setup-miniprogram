module.exports = {
  "type": "object",
  "properties": {
    "deviceOrientation": {
      "enum": [
        "landscape",
        "landscapeLeft",
        "landscapeRight",
        "portrait"
      ],
      "type": "string"
    },
    "networkTimeout": {
      "type": "object",
      "properties": {
        "request": {
          "type": "number"
        },
        "connectSocket": {
          "type": "number"
        },
        "uploadFile": {
          "type": "number"
        },
        "downloadFile": {
          "type": "number"
        }
      },
      "additionalProperties": false
    },
    "openDataContext": {
      "type": "string"
    },
    "showStatusBar": {
      "type": "boolean"
    },
    "workers": {
      "type": "string"
    },
    "disableSetUserStorageFromMiniProgram": {
      "type": "boolean"
    },
    "permission": {
      "type": "object",
      "properties": {
        "scope.userLocation": {
          "type": "object",
          "properties": {
            "desc": {
              "type": "string"
            }
          },
          "additionalProperties": false,
          "required": [
            "desc"
          ]
        }
      },
      "additionalProperties": false
    },
    "subPackages": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ISubPackageItem"
      }
    },
    "subpackages": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ISubPackageItem"
      }
    },
    "loadingImageInfo": {
      "type": "object",
      "properties": {
        "path": {
          "type": "string"
        },
        "progressBarColor": {
          "type": "string"
        }
      },
      "additionalProperties": false,
      "required": [
        "path"
      ]
    },
    "plugins": {
      "type": "object",
      "additionalProperties": {
        "$ref": "#/definitions/IPluginConfig"
      }
    },
    "resizable": {
      "type": "boolean"
    },
    "lockStepOptions": {
      "type": "object",
      "properties": {
        "gameTick": {
          "type": "number"
        },
        "heartBeatTick": {
          "type": "number"
        },
        "offlineTimeLength": {
          "type": "number"
        },
        "UDPReliabilityStrategy": {
          "type": "number"
        },
        "dataType": {
          "enum": [
            "ArrayBuffer",
            "String"
          ],
          "type": "string"
        }
      },
      "additionalProperties": false
    }
  },
  "additionalProperties": false,
  "definitions": {
    "ISubPackageItem": {
      "type": "object",
      "properties": {
        "independent": {
          "type": "boolean"
        },
        "name": {
          "type": "string"
        },
        "root": {
          "type": "string"
        },
        "plugins": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#/definitions/IPluginConfig"
          }
        }
      },
      "additionalProperties": false,
      "required": [
        "root"
      ]
    },
    "IPluginConfig": {
      "type": "object",
      "properties": {
        "provider": {
          "type": "string"
        },
        "version": {
          "type": "string"
        },
        "path": {
          "type": "string"
        },
        "contexts": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "type": {
                "enum": [
                  "gameContext",
                  "isolatedContext",
                  "openDataContext"
                ],
                "type": "string"
              }
            },
            "additionalProperties": false,
            "required": [
              "type"
            ]
          }
        }
      },
      "additionalProperties": false,
      "required": [
        "provider",
        "version"
      ]
    }
  },
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$version": 1634549519331
}