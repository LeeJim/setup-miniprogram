module.exports = {
  "type": "object",
  "properties": {
    "__warning__": {
      "type": "string"
    },
    "pages": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "window": {
      "$ref": "#/definitions/IWindow"
    },
    "plugins": {
      "type": "object",
      "additionalProperties": {
        "$ref": "#/definitions/IPluginConfig"
      }
    },
    "entryPagePath": {
      "type": "string"
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
    "workers": {
      "type": "string"
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
    "preloadRule": {
      "type": "object",
      "additionalProperties": {
        "type": "object",
        "properties": {
          "network": {
            "enum": [
              "all",
              "wifi"
            ],
            "type": "string"
          },
          "packages": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        },
        "additionalProperties": false,
        "required": [
          "packages"
        ]
      }
    },
    "usingComponents": {
      "type": "object",
      "additionalProperties": {
        "type": "string"
      }
    },
    "tabBar": {
      "$ref": "#/definitions/ITabBar"
    },
    "requiredBackgroundModes": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "mimeTypeDeclarations": {
      "type": "object",
      "additionalProperties": {
        "type": "array",
        "items": {
          "type": "string"
        }
      }
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
    "debug": {
      "type": "boolean"
    },
    "resizable": {
      "type": "boolean"
    },
    "functionalPages": {
      "anyOf": [
        {
          "type": "object",
          "properties": {
            "independent": {
              "type": "boolean"
            }
          },
          "additionalProperties": false,
          "required": [
            "independent"
          ]
        },
        {
          "type": "boolean"
        }
      ]
    },
    "cloud": {
      "type": "boolean"
    },
    "openDataContext": {
      "type": "string"
    },
    "openLocationPagePath": {
      "type": "string"
    },
    "sitemapLocation": {
      "type": "string"
    },
    "serviceProviderTicket": {
      "type": "string"
    },
    "style": {
      "enum": [
        "v2"
      ],
      "type": "string"
    },
    "useExtendedLib": {
      "type": "object",
      "additionalProperties": {
        "type": [
          "string",
          "boolean"
        ]
      }
    },
    "entranceDeclare": {
      "type": "object",
      "properties": {
        "locationMessage": {
          "type": "object",
          "properties": {
            "path": {
              "type": "string"
            },
            "query": {
              "type": "string"
            }
          },
          "additionalProperties": false
        }
      },
      "additionalProperties": false
    },
    "darkmode": {
      "type": "boolean"
    },
    "themeLocation": {
      "type": "string"
    },
    "theme": {
      "type": "string"
    },
    "singlePage": {
      "type": "object",
      "properties": {
        "navigationBarFit": {
          "enum": [
            "float",
            "squeezed"
          ],
          "type": "string"
        }
      },
      "additionalProperties": false
    },
    "lazyCodeLoading": {
      "enum": [
        "requiredComponents"
      ],
      "type": "string"
    },
    "enablePassiveEvent": {
      "anyOf": [
        {
          "type": "object",
          "additionalProperties": {
            "type": "boolean"
          }
        },
        {
          "type": "boolean"
        }
      ]
    },
    "supportedMaterials": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ISupportMaterial"
      }
    },
    "requireBackgroundModes": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "embeddedAppIdList": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  "additionalProperties": false,
  "required": [
    "pages"
  ],
  "definitions": {
    "IWindow": {
      "type": "object",
      "properties": {
        "backgroundColorTop": {
          "type": "string"
        },
        "backgroundColorBottom": {
          "type": "string"
        },
        "backgroundColorContent": {
          "type": "string"
        },
        "backgroundColor": {
          "type": "string"
        },
        "enablePullDownRefresh": {
          "type": "boolean"
        },
        "navigationBarTextStyle": {
          "enum": [
            "black",
            "white"
          ],
          "type": "string"
        },
        "navigationBarTitleText": {
          "type": "string"
        },
        "navigationStyle": {
          "enum": [
            "custom",
            "default"
          ],
          "type": "string"
        },
        "backgroundTextStyle": {
          "enum": [
            "dark",
            "light"
          ],
          "type": "string"
        },
        "onReachBottomDistance": {
          "type": "number"
        },
        "pageOrientation": {
          "enum": [
            "auto",
            "landscape",
            "portrait"
          ],
          "type": "string"
        },
        "navigationBarBackgroundColor": {
          "type": "string"
        },
        "renderingMode": {
          "enum": [
            "mixed",
            "seperated"
          ],
          "type": "string"
        },
        "restartStrategy": {
          "enum": [
            "homePage",
            "homePageAndLatestPage"
          ],
          "type": "string"
        },
        "visualEffectInBackground": {
          "enum": [
            "hidden",
            "none"
          ],
          "type": "string"
        },
        "initialRenderingCache": {
          "enum": [
            "dynamic",
            "static"
          ],
          "type": "string"
        }
      },
      "additionalProperties": false
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
        "export": {
          "type": "string"
        }
      },
      "additionalProperties": false,
      "required": [
        "provider",
        "version"
      ]
    },
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
        "pages": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "plugins": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#/definitions/IPluginConfig"
          }
        },
        "useExtendedLib": {
          "type": "object",
          "additionalProperties": {
            "type": [
              "string",
              "boolean"
            ]
          }
        }
      },
      "additionalProperties": false,
      "required": [
        "pages",
        "root"
      ]
    },
    "ITabBar": {
      "type": "object",
      "properties": {
        "custom": {
          "type": "boolean"
        },
        "list": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "pagePath": {
                "type": "string"
              },
              "text": {
                "type": "string"
              },
              "iconPath": {
                "type": "string"
              },
              "selectedIconPath": {
                "type": "string"
              }
            },
            "additionalProperties": false,
            "required": [
              "pagePath"
            ]
          }
        },
        "borderStyle": {
          "enum": [
            "black",
            "white"
          ],
          "type": "string"
        },
        "position": {
          "enum": [
            "bottom",
            "top"
          ],
          "type": "string"
        },
        "color": {
          "type": "string"
        },
        "selectedColor": {
          "type": "string"
        },
        "backgroundColor": {
          "type": "string"
        }
      },
      "additionalProperties": false,
      "required": [
        "list"
      ]
    },
    "ISupportMaterial": {
      "type": "object",
      "properties": {
        "materialType": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "desc": {
          "type": "string"
        },
        "path": {
          "type": "string"
        }
      },
      "additionalProperties": false,
      "required": [
        "desc",
        "materialType",
        "name",
        "path"
      ]
    }
  },
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$version": 1634545172515
}