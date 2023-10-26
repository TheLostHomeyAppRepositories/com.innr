"ids": {
  "modelId": "RCL 110",
  "manufacturerName": "innr"
},
"endpoints": {
  "endpointDescriptors": [
    {
      "endpointId": 1,
      "applicationProfileId": 49246,
      "applicationDeviceId": 256,
      "applicationDeviceVersion": 0,
      "_reserved1": 2,
      "inputClusters": [
        0,
        3,
        4,
        5,
        6,
        8
      ],
      "outputClusters": [
        25
      ]
    },
    {
      "endpointId": 2,
      "applicationProfileId": 49246,
      "applicationDeviceId": 4096,
      "applicationDeviceVersion": 0,
      "_reserved1": 2,
      "inputClusters": [
        4096
      ],
      "outputClusters": []
    }
  ],
  "endpoints": {
    "1": {
      "clusters": {
        "basic": {
          "attributes": "UNSUP_GENERAL_COMMAND",
          "commandsGenerated": "UNSUP_GENERAL_COMMAND",
          "commandsReceived": "UNSUP_GENERAL_COMMAND"
        },
        "identify": {
          "attributes": "UNSUP_GENERAL_COMMAND",
          "commandsGenerated": "UNSUP_GENERAL_COMMAND",
          "commandsReceived": "UNSUP_GENERAL_COMMAND"
        },
        "groups": {
          "attributes": "UNSUP_GENERAL_COMMAND",
          "commandsGenerated": "UNSUP_GENERAL_COMMAND",
          "commandsReceived": "UNSUP_GENERAL_COMMAND"
        },
        "scenes": {
          "attributes": "UNSUP_GENERAL_COMMAND",
          "commandsGenerated": "UNSUP_GENERAL_COMMAND",
          "commandsReceived": "UNSUP_GENERAL_COMMAND"
        },
        "onOff": {
          "attributes": "UNSUP_GENERAL_COMMAND",
          "commandsGenerated": "UNSUP_GENERAL_COMMAND",
          "commandsReceived": "UNSUP_GENERAL_COMMAND"
        },
        "levelControl": {
          "attributes": "UNSUP_GENERAL_COMMAND",
          "commandsGenerated": "UNSUP_GENERAL_COMMAND",
          "commandsReceived": "UNSUP_GENERAL_COMMAND"
        }
      },
      "bindings": {
        "ota": {
          "attributes": "UNSUP_GENERAL_COMMAND",
          "commandsGenerated": "UNSUP_GENERAL_COMMAND",
          "commandsReceived": "UNSUP_GENERAL_COMMAND"
        }
      }
    },
    "2": {
      "clusters": {
        "touchlink": {}
      },
      "bindings": {}
    }
  }
}
