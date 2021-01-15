# Get All Itinerary History

Route to get all Itinerary History

**URL** : `/itinerary`

**Method** : `POST`

**Auth required** : `NO`

**Request**

```json
{
    "start":
        {
            "lat": 48.9551203,
            "lng": 2.3091952
        }, 
    "coords": [
        {
            "lat": 48.9960813,
            "lng": 2.3796245
        }  
        ],
    "len": 1
}
```
---

## Success Response

**Code** : `200`

```json
  "error": null,
  "itinary": [
    {
      "routes": [
        {
          "weight_name": "auto",
          "weight": 1907.052,
          "duration": 1522.691,
          "distance": 8914.812,
          "legs": [
            {
              "steps": [
                {
                  "maneuver": {
                    "type": "depart",
                    "instruction": "Se diriger vers le sud sur la rue Dumas",
                    "bearing_after": 191,
                    "bearing_before": 0,
                    "location": [
                      2.309916,
                      48.955023
                    ]
                  },
                  "intersections": [
                    {
                      "entry": [
                        true
                      ],
                      "bearings": [
                        191
                      ],
                      "duration": 19.871,
                      "mapbox_streets_v8": {
                        "class": "street"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 21.857,
                      "geometry_index": 0,
                      "location": [
                        2.309916,
                        48.955023
                      ]
                    },
                    {
                      "bearings": [
                        11,
                        187
                      ],
                      "entry": [
                        false,
                        true
                      ],
                      "in": 0,
                      "turn_weight": 1.5,
                      "turn_duration": 0.024,
                      "mapbox_streets_v8": {
                        "class": "street"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 1,
                      "geometry_index": 2,
                      "location": [
                        2.309728,
                        48.95439
                      ]
                    }
                  ],
                  "weight": 28.448,
                  "duration": 24.523,
                  "distance": 89.755,
                  "name": "Rue Dumas",
                  "driving_side": "right",
                  "mode": "driving",
                  "geometry": {
                    "coordinates": [
                      [
                        2.309916,
                        48.955023
                      ],
                      [
                        2.309892,
                        48.954947
                      ],
                      [
                        2.309728,
                        48.95439
                      ],
                      [
                        2.309713,
                        48.954317
                      ],
                      [
                        2.309701,
                        48.954233
                      ]
                    ],
                    "type": "LineString"
                  }
                },
                {
                  "maneuver": {
                    "type": "end of road",
                    "instruction": "Tourner à gauche sur la rue de Paris",
                    "modifier": "left",
                    "bearing_after": 97,
                    "bearing_before": 186,
                    "location": [
                      2.309701,
                      48.954233
                    ]
                  },
                  "intersections": [
                    {
                      "entry": [
                        false,
                        true
                      ],
                      "in": 0,
                      "bearings": [
                        6,
                        97
                      ],
                      "duration": 18.235,
                      "turn_weight": 12.5,
                      "turn_duration": 5.275,
                      "mapbox_streets_v8": {
                        "class": "street"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 1,
                      "weight": 26.756,
                      "geometry_index": 4,
                      "location": [
                        2.309701,
                        48.954233
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        116,
                        286
                      ],
                      "duration": 10.333,
                      "turn_weight": 1.5,
                      "turn_duration": 0.013,
                      "mapbox_streets_v8": {
                        "class": "street"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 12.852,
                      "geometry_index": 8,
                      "location": [
                        2.310423,
                        48.954147
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        130,
                        310
                      ],
                      "duration": 1.927,
                      "turn_weight": 1.5,
                      "turn_duration": 0.007,
                      "mapbox_streets_v8": {
                        "class": "street"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 3.612,
                      "geometry_index": 11,
                      "location": [
                        2.310904,
                        48.953934
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        145,
                        310
                      ],
                      "duration": 3.914,
                      "turn_weight": 2.25,
                      "turn_duration": 2.019,
                      "mapbox_streets_v8": {
                        "class": "street"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 4.334,
                      "geometry_index": 12,
                      "location": [
                        2.310984,
                        48.95389
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        137,
                        325
                      ],
                      "duration": 17.654,
                      "turn_weight": 1.5,
                      "turn_duration": 0.033,
                      "mapbox_streets_v8": {
                        "class": "street"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 20.883,
                      "geometry_index": 13,
                      "location": [
                        2.311065,
                        48.953815
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        118,
                        305
                      ],
                      "duration": 3.254,
                      "turn_weight": 1.5,
                      "turn_duration": 0.033,
                      "mapbox_streets_v8": {
                        "class": "street"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 5.043,
                      "geometry_index": 16,
                      "location": [
                        2.311953,
                        48.953228
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        118,
                        298
                      ],
                      "duration": 6.063,
                      "turn_weight": 1.5,
                      "mapbox_streets_v8": {
                        "class": "street"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 8.169,
                      "geometry_index": 18,
                      "location": [
                        2.312153,
                        48.953159
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        111,
                        295
                      ],
                      "duration": 9.626,
                      "turn_weight": 2.85,
                      "turn_duration": 0.026,
                      "mapbox_streets_v8": {
                        "class": "street"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 13.41,
                      "geometry_index": 20,
                      "location": [
                        2.31255,
                        48.953031
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        103,
                        286
                      ],
                      "duration": 16.342,
                      "turn_weight": 2.85,
                      "turn_duration": 0.022,
                      "mapbox_streets_v8": {
                        "class": "street"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 20.394,
                      "geometry_index": 25,
                      "location": [
                        2.313576,
                        48.952792
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        45,
                        270
                      ],
                      "duration": 3.182,
                      "turn_weight": 12,
                      "turn_duration": 0.542,
                      "mapbox_streets_v8": {
                        "class": "street"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 14.838,
                      "geometry_index": 30,
                      "location": [
                        2.315422,
                        48.952646
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        38,
                        218
                      ],
                      "duration": 1.447,
                      "turn_weight": 2.4,
                      "turn_duration": 0.007,
                      "mapbox_streets_v8": {
                        "class": "street"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 3.948,
                      "geometry_index": 33,
                      "location": [
                        2.315626,
                        48.95279
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        40,
                        218
                      ],
                      "duration": 3.447,
                      "turn_weight": 24.2,
                      "turn_duration": 2.007,
                      "mapbox_streets_v8": {
                        "class": "street"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 25.748,
                      "geometry_index": 35,
                      "location": [
                        2.31573,
                        48.952878
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        39,
                        220
                      ],
                      "duration": 36.648,
                      "turn_weight": 12,
                      "turn_duration": 2.019,
                      "mapbox_streets_v8": {
                        "class": "tertiary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 49.226,
                      "geometry_index": 38,
                      "location": [
                        2.315909,
                        48.953017
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        37,
                        223
                      ],
                      "duration": 1.055,
                      "turn_weight": 4,
                      "turn_duration": 0.026,
                      "mapbox_streets_v8": {
                        "class": "tertiary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 5.131,
                      "geometry_index": 44,
                      "location": [
                        2.31759,
                        48.954446
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        36,
                        217
                      ],
                      "duration": 17.207,
                      "turn_weight": 4,
                      "turn_duration": 0.007,
                      "mapbox_streets_v8": {
                        "class": "tertiary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 22.92,
                      "geometry_index": 46,
                      "location": [
                        2.317642,
                        48.954492
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        36,
                        216
                      ],
                      "duration": 3.128,
                      "turn_weight": 1,
                      "turn_duration": 0.008,
                      "mapbox_streets_v8": {
                        "class": "tertiary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 4.432,
                      "geometry_index": 50,
                      "location": [
                        2.318671,
                        48.955435
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        36,
                        216
                      ],
                      "duration": 15.056,
                      "turn_weight": 1.9,
                      "turn_duration": 0.008,
                      "mapbox_streets_v8": {
                        "class": "tertiary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 18.077,
                      "geometry_index": 51,
                      "location": [
                        2.318878,
                        48.955625
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        65,
                        236
                      ],
                      "duration": 6.643,
                      "turn_weight": 1,
                      "turn_duration": 0.012,
                      "mapbox_streets_v8": {
                        "class": "tertiary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 8.129,
                      "geometry_index": 56,
                      "location": [
                        2.320797,
                        48.956993
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        69,
                        246
                      ],
                      "duration": 16.07,
                      "turn_weight": 1,
                      "turn_duration": 0.008,
                      "mapbox_streets_v8": {
                        "class": "tertiary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 18.668,
                      "geometry_index": 58,
                      "location": [
                        2.321233,
                        48.957123
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        67,
                        247
                      ],
                      "duration": 7.762,
                      "turn_weight": 1,
                      "turn_duration": 0.008,
                      "mapbox_streets_v8": {
                        "class": "tertiary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 9.529,
                      "geometry_index": 60,
                      "location": [
                        2.322704,
                        48.957523
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        66,
                        248
                      ],
                      "duration": 4.451,
                      "turn_weight": 1,
                      "turn_duration": 0.021,
                      "mapbox_streets_v8": {
                        "class": "tertiary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 5.874,
                      "geometry_index": 62,
                      "location": [
                        2.323418,
                        48.957717
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        67,
                        246
                      ],
                      "duration": 37.669,
                      "turn_weight": 1,
                      "turn_duration": 0.008,
                      "mapbox_streets_v8": {
                        "class": "tertiary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 42.428,
                      "geometry_index": 63,
                      "location": [
                        2.323822,
                        48.957836
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        57,
                        239
                      ],
                      "duration": 4.342,
                      "turn_weight": 1.5,
                      "turn_duration": 0.022,
                      "mapbox_streets_v8": {
                        "class": "tertiary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 6.144,
                      "geometry_index": 66,
                      "location": [
                        2.325521,
                        48.95833
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        68,
                        237
                      ],
                      "duration": 3.164,
                      "turn_weight": 1.5,
                      "turn_duration": 0.014,
                      "mapbox_streets_v8": {
                        "class": "tertiary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 4.886,
                      "geometry_index": 68,
                      "location": [
                        2.325726,
                        48.958417
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        74,
                        248
                      ],
                      "duration": 9.131,
                      "turn_weight": 1,
                      "turn_duration": 0.011,
                      "mapbox_streets_v8": {
                        "class": "tertiary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 10.804,
                      "geometry_index": 70,
                      "location": [
                        2.325908,
                        48.958466
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        75,
                        254
                      ],
                      "duration": 2.648,
                      "turn_weight": 1,
                      "turn_duration": 0.008,
                      "mapbox_streets_v8": {
                        "class": "tertiary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 3.838,
                      "geometry_index": 72,
                      "location": [
                        2.326412,
                        48.958562
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        79,
                        255
                      ],
                      "duration": 4.089,
                      "turn_weight": 1,
                      "turn_duration": 0.009,
                      "mapbox_streets_v8": {
                        "class": "tertiary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 5.386,
                      "geometry_index": 73,
                      "location": [
                        2.326555,
                        48.958587
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        82,
                        259
                      ],
                      "duration": 35.528,
                      "turn_weight": 1,
                      "turn_duration": 0.008,
                      "mapbox_streets_v8": {
                        "class": "tertiary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 39.184,
                      "geometry_index": 74,
                      "location": [
                        2.326779,
                        48.958616
                      ]
                    },
                    {
                      "bearings": [
                        129,
                        287
                      ],
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "turn_weight": 2.25,
                      "turn_duration": 0.032,
                      "mapbox_streets_v8": {
                        "class": "tertiary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "geometry_index": 83,
                      "location": [
                        2.328772,
                        48.958659
                      ]
                    }
                  ],
                  "weight": 427.61,
                  "duration": 310.018,
                  "distance": 1756,
                  "name": "Rue de Paris",
                  "driving_side": "right",
                  "mode": "driving",
                  "geometry": {
                    "coordinates": [
                      [
                        2.309701,
                        48.954233
                      ],
                      [
                        2.309799,
                        48.954225
                      ],
                      [
                        2.310144,
                        48.954196
                      ],
                      [
                        2.310299,
                        48.954174
                      ],
                      [
                        2.310423,
                        48.954147
                      ],
                      [
                        2.310555,
                        48.954109
                      ],
                      [
                        2.310694,
                        48.95405
                      ],
                      [
                        2.310904,
                        48.953934
                      ],
                      [
                        2.310984,
                        48.95389
                      ],
                      [
                        2.311065,
                        48.953815
                      ],
                      [
                        2.311475,
                        48.953524
                      ],
                      [
                        2.31173,
                        48.95333
                      ],
                      [
                        2.311953,
                        48.953228
                      ],
                      [
                        2.312064,
                        48.953191
                      ],
                      [
                        2.312153,
                        48.953159
                      ],
                      [
                        2.312463,
                        48.953053
                      ],
                      [
                        2.31255,
                        48.953031
                      ],
                      [
                        2.312578,
                        48.953024
                      ],
                      [
                        2.312667,
                        48.953001
                      ],
                      [
                        2.312909,
                        48.952942
                      ],
                      [
                        2.313304,
                        48.952842
                      ],
                      [
                        2.313576,
                        48.952792
                      ],
                      [
                        2.314003,
                        48.952729
                      ],
                      [
                        2.314428,
                        48.952684
                      ],
                      [
                        2.314627,
                        48.952674
                      ],
                      [
                        2.31533,
                        48.95264
                      ],
                      [
                        2.315422,
                        48.952646
                      ],
                      [
                        2.315495,
                        48.952678
                      ],
                      [
                        2.315558,
                        48.952734
                      ],
                      [
                        2.315626,
                        48.95279
                      ],
                      [
                        2.315653,
                        48.95281
                      ],
                      [
                        2.31573,
                        48.952878
                      ],
                      [
                        2.315792,
                        48.952927
                      ],
                      [
                        2.315817,
                        48.952946
                      ],
                      [
                        2.315909,
                        48.953017
                      ],
                      [
                        2.315973,
                        48.953069
                      ],
                      [
                        2.316149,
                        48.953214
                      ],
                      [
                        2.316672,
                        48.953723
                      ],
                      [
                        2.316865,
                        48.953925
                      ],
                      [
                        2.31713,
                        48.95412
                      ],
                      [
                        2.31759,
                        48.954446
                      ],
                      [
                        2.317619,
                        48.954472
                      ],
                      [
                        2.317642,
                        48.954492
                      ],
                      [
                        2.317673,
                        48.95452
                      ],
                      [
                        2.317745,
                        48.954586
                      ],
                      [
                        2.318097,
                        48.954909
                      ],
                      [
                        2.318671,
                        48.955435
                      ],
                      [
                        2.318878,
                        48.955625
                      ],
                      [
                        2.319804,
                        48.956474
                      ],
                      [
                        2.32035,
                        48.95677
                      ],
                      [
                        2.320592,
                        48.956908
                      ],
                      [
                        2.320699,
                        48.95695
                      ],
                      [
                        2.320797,
                        48.956993
                      ],
                      [
                        2.321046,
                        48.95707
                      ],
                      [
                        2.321233,
                        48.957123
                      ],
                      [
                        2.321793,
                        48.957264
                      ],
                      [
                        2.322704,
                        48.957523
                      ],
                      [
                        2.322848,
                        48.957563
                      ],
                      [
                        2.323418,
                        48.957717
                      ],
                      [
                        2.323822,
                        48.957836
                      ],
                      [
                        2.325286,
                        48.958235
                      ],
                      [
                        2.325409,
                        48.958277
                      ],
                      [
                        2.325521,
                        48.95833
                      ],
                      [
                        2.325632,
                        48.958381
                      ],
                      [
                        2.325726,
                        48.958417
                      ],
                      [
                        2.325787,
                        48.958437
                      ],
                      [
                        2.325908,
                        48.958466
                      ],
                      [
                        2.326007,
                        48.958486
                      ],
                      [
                        2.326412,
                        48.958562
                      ],
                      [
                        2.326555,
                        48.958587
                      ],
                      [
                        2.326779,
                        48.958616
                      ],
                      [
                        2.327251,
                        48.95866
                      ],
                      [
                        2.32802,
                        48.958733
                      ],
                      [
                        2.328089,
                        48.958737
                      ],
                      [
                        2.328191,
                        48.958739
                      ],
                      [
                        2.328279,
                        48.958735
                      ],
                      [
                        2.328348,
                        48.95873
                      ],
                      [
                        2.328499,
                        48.958714
                      ],
                      [
                        2.32864,
                        48.958691
                      ],
                      [
                        2.328772,
                        48.958659
                      ],
                      [
                        2.328907,
                        48.958581
                      ],
                      [
                        2.329062,
                        48.958512
                      ],
                      [
                        2.329167,
                        48.958462
                      ]
                    ],
                    "type": "LineString"
                  }
                },
                {
                  "maneuver": {
                    "type": "turn",
                    "instruction": "Tourner à gauche sur la route de Saint-Leu (D 928)",
                    "modifier": "left",
                    "bearing_after": 2,
                    "bearing_before": 125,
                    "location": [
                      2.329167,
                      48.958462
                    ]
                  },
                  "ref": "D 928",
                  "intersections": [
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        82,
                        305
                      ],
                      "duration": 1.314,
                      "turn_weight": 21,
                      "turn_duration": 0.504,
                      "mapbox_streets_v8": {
                        "class": "tertiary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 21.871,
                      "geometry_index": 86,
                      "location": [
                        2.329167,
                        48.958462
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        2,
                        262
                      ],
                      "duration": 7.36,
                      "turn_weight": 12,
                      "turn_duration": 4.202,
                      "mapbox_streets_v8": {
                        "class": "primary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 15.395,
                      "geometry_index": 87,
                      "location": [
                        2.329283,
                        48.958473
                      ]
                    },
                    {
                      "entry": [
                        false,
                        true
                      ],
                      "in": 0,
                      "bearings": [
                        163,
                        345
                      ],
                      "duration": 6.436,
                      "turn_duration": 0.008,
                      "mapbox_streets_v8": {
                        "class": "primary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 1,
                      "weight": 6.911,
                      "geometry_index": 91,
                      "location": [
                        2.329201,
                        48.958913
                      ]
                    },
                    {
                      "entry": [
                        false,
                        true
                      ],
                      "in": 0,
                      "bearings": [
                        165,
                        340
                      ],
                      "duration": 1.2,
                      "mapbox_streets_v8": {
                        "class": "primary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 1,
                      "weight": 1.29,
                      "geometry_index": 92,
                      "location": [
                        2.329112,
                        48.959129
                      ]
                    },
                    {
                      "bearings": [
                        160,
                        323
                      ],
                      "entry": [
                        false,
                        true
                      ],
                      "in": 0,
                      "turn_duration": 0.071,
                      "mapbox_streets_v8": {
                        "class": "primary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 1,
                      "geometry_index": 94,
                      "location": [
                        2.329087,
                        48.959173
                      ]
                    }
                  ],
                  "weight": 54.496,
                  "duration": 24.782,
                  "distance": 124,
                  "name": "Route de Saint-Leu (D 928)",
                  "driving_side": "right",
                  "mode": "driving",
                  "geometry": {
                    "coordinates": [
                      [
                        2.329167,
                        48.958462
                      ],
                      [
                        2.329283,
                        48.958473
                      ],
                      [
                        2.329285,
                        48.958561
                      ],
                      [
                        2.329297,
                        48.958623
                      ],
                      [
                        2.329286,
                        48.958744
                      ],
                      [
                        2.329201,
                        48.958913
                      ],
                      [
                        2.329112,
                        48.959129
                      ],
                      [
                        2.329089,
                        48.959169
                      ],
                      [
                        2.329087,
                        48.959173
                      ],
                      [
                        2.329078,
                        48.959189
                      ],
                      [
                        2.329016,
                        48.959253
                      ],
                      [
                        2.328918,
                        48.959322
                      ],
                      [
                        2.328762,
                        48.959404
                      ]
                    ],
                    "type": "LineString"
                  }
                },
                {
                  "maneuver": {
                    "type": "turn",
                    "instruction": "Tourner à droite sur la rue d’Épinay (D 193)",
                    "modifier": "right",
                    "bearing_after": 66,
                    "bearing_before": 311,
                    "location": [
                      2.328762,
                      48.959404
                    ]
                  },
                  "ref": "D 193",
                  "intersections": [
                    {
                      "entry": [
                        false,
                        true
                      ],
                      "in": 0,
                      "bearings": [
                        131,
                        331
                      ],
                      "duration": 2.884,
                      "turn_weight": 3.6,
                      "turn_duration": 0.026,
                      "mapbox_streets_v8": {
                        "class": "secondary_link"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 1,
                      "weight": 6.671,
                      "geometry_index": 98,
                      "location": [
                        2.328762,
                        48.959404
                      ]
                    },
                    {
                      "bearings": [
                        66,
                        221
                      ],
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "turn_weight": 5.75,
                      "turn_duration": 0.035,
                      "mapbox_streets_v8": {
                        "class": "secondary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "geometry_index": 105,
                      "location": [
                        2.328814,
                        48.959777
                      ]
                    }
                  ],
                  "weight": 237.849,
                  "duration": 212.618,
                  "distance": 1448,
                  "name": "Rue d'Épinay (D 193)",
                  "driving_side": "right",
                  "mode": "driving",
                  "geometry": {
                    "coordinates": [
                      [
                        2.328762,
                        48.959404
                      ],
                      [
                        2.328682,
                        48.959477
                      ],
                      [
                        2.328648,
                        48.959519
                      ],
                      [
                        2.328626,
                        48.959561
                      ],
                      [
                        2.328627,
                        48.959619
                      ],
                      [
                        2.328632,
                        48.959658
                      ],
                      [
                        2.328696,
                        48.959708
                      ],
                      [
                        2.328814,
                        48.959777
                      ],
                      [
                        2.32885,
                        48.959788
                      ],
                      [
                        2.329037,
                        48.959841
                      ],
                      [
                        2.32933,
                        48.95993
                      ],
                      [
                        2.329778,
                        48.960112
                      ],
                      [
                        2.33009,
                        48.960262
                      ],
                      [
                        2.330281,
                        48.960359
                      ],
                      [
                        2.33078,
                        48.960605
                      ],
                      [
                        2.331028,
                        48.960747
                      ],
                      [
                        2.331622,
                        48.961082
                      ],
                      [
                        2.331912,
                        48.961279
                      ],
                      [
                        2.33195,
                        48.961305
                      ],
                      [
                        2.331989,
                        48.961335
                      ],
                      [
                        2.332253,
                        48.961534
                      ],
                      [
                        2.332469,
                        48.961706
                      ],
                      [
                        2.332636,
                        48.961839
                      ],
                      [
                        2.333048,
                        48.962169
                      ],
                      [
                        2.333318,
                        48.962386
                      ],
                      [
                        2.33371,
                        48.962682
                      ],
                      [
                        2.33386,
                        48.962774
                      ],
                      [
                        2.33388,
                        48.962787
                      ],
                      [
                        2.334396,
                        48.963146
                      ],
                      [
                        2.33515,
                        48.963651
                      ],
                      [
                        2.335266,
                        48.963728
                      ],
                      [
                        2.335474,
                        48.963872
                      ],
                      [
                        2.33559,
                        48.963952
                      ],
                      [
                        2.335784,
                        48.964084
                      ],
                      [
                        2.335879,
                        48.96415
                      ],
                      [
                        2.336242,
                        48.964456
                      ],
                      [
                        2.336511,
                        48.964715
                      ],
                      [
                        2.336799,
                        48.96501
                      ],
                      [
                        2.337131,
                        48.965352
                      ],
                      [
                        2.337547,
                        48.965819
                      ],
                      [
                        2.33791,
                        48.966252
                      ],
                      [
                        2.338315,
                        48.966734
                      ],
                      [
                        2.338404,
                        48.966828
                      ],
                      [
                        2.338665,
                        48.967103
                      ],
                      [
                        2.338868,
                        48.967325
                      ],
                      [
                        2.338949,
                        48.967411
                      ],
                      [
                        2.33931,
                        48.967785
                      ],
                      [
                        2.339404,
                        48.967886
                      ],
                      [
                        2.339509,
                        48.967999
                      ],
                      [
                        2.339697,
                        48.968217
                      ],
                      [
                        2.339989,
                        48.968591
                      ],
                      [
                        2.340268,
                        48.968907
                      ],
                      [
                        2.340629,
                        48.969282
                      ],
                      [
                        2.340748,
                        48.969369
                      ]
                    ],
                    "type": "LineString"
                  }
                },
                {
                  "maneuver": {
                    "type": "turn",
                    "instruction": "Tourner à droite sur la rue Jean Missout",
                    "modifier": "right",
                    "bearing_after": 107,
                    "bearing_before": 38,
                    "location": [
                      2.340748,
                      48.969369
                    ]
                  },
                  "intersections": [
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        107,
                        218
                      ],
                      "duration": 25.695,
                      "turn_weight": 8,
                      "turn_duration": 0.652,
                      "mapbox_streets_v8": {
                        "class": "secondary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 34.922,
                      "geometry_index": 151,
                      "location": [
                        2.340748,
                        48.969369
                      ]
                    },
                    {
                      "bearings": [
                        153,
                        296
                      ],
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "turn_weight": 2.25,
                      "turn_duration": 0.082,
                      "mapbox_streets_v8": {
                        "class": "secondary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "geometry_index": 161,
                      "location": [
                        2.342721,
                        48.968778
                      ]
                    }
                  ],
                  "weight": 40.634,
                  "duration": 28.999,
                  "distance": 177,
                  "name": "Rue Jean Missout",
                  "driving_side": "right",
                  "mode": "driving",
                  "geometry": {
                    "coordinates": [
                      [
                        2.340748,
                        48.969369
                      ],
                      [
                        2.340874,
                        48.96936
                      ],
                      [
                        2.341435,
                        48.96919
                      ],
                      [
                        2.341466,
                        48.969181
                      ],
                      [
                        2.341786,
                        48.969077
                      ],
                      [
                        2.342178,
                        48.968952
                      ],
                      [
                        2.342359,
                        48.968894
                      ],
                      [
                        2.342547,
                        48.968834
                      ],
                      [
                        2.342575,
                        48.968825
                      ],
                      [
                        2.342655,
                        48.968799
                      ],
                      [
                        2.342721,
                        48.968778
                      ],
                      [
                        2.342762,
                        48.968731
                      ],
                      [
                        2.342802,
                        48.968679
                      ],
                      [
                        2.342826,
                        48.96864
                      ]
                    ],
                    "type": "LineString"
                  }
                },
                {
                  "maneuver": {
                    "type": "roundabout",
                    "exit": 2,
                    "instruction": "Prendre le rond-point, puis la seconde sortie sur la rue Jean Missout",
                    "modifier": "straight",
                    "bearing_after": 157,
                    "bearing_before": 153,
                    "location": [
                      2.342826,
                      48.96864
                    ]
                  },
                  "intersections": [
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        157,
                        333
                      ],
                      "duration": 2.209,
                      "turn_weight": 5.5,
                      "turn_duration": 0.009,
                      "mapbox_streets_v8": {
                        "class": "roundabout"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 7.865,
                      "geometry_index": 164,
                      "location": [
                        2.342826,
                        48.96864
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        108,
                        337
                      ],
                      "duration": 1.307,
                      "turn_duration": 0.671,
                      "mapbox_streets_v8": {
                        "class": "roundabout"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 0.683,
                      "geometry_index": 168,
                      "location": [
                        2.342879,
                        48.968557
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        80,
                        288
                      ],
                      "duration": 1.059,
                      "mapbox_streets_v8": {
                        "class": "roundabout"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 1.138,
                      "geometry_index": 169,
                      "location": [
                        2.342912,
                        48.96855
                      ]
                    },
                    {
                      "bearings": [
                        33,
                        260
                      ],
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "turn_duration": 0.671,
                      "mapbox_streets_v8": {
                        "class": "roundabout"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "geometry_index": 171,
                      "location": [
                        2.342981,
                        48.968558
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        90,
                        213
                      ],
                      "duration": 3.906,
                      "turn_weight": 6,
                      "turn_duration": 0.306,
                      "mapbox_streets_v8": {
                        "class": "secondary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 9.87,
                      "geometry_index": 174,
                      "location": [
                        2.343037,
                        48.968615
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        116,
                        270
                      ],
                      "duration": 13.429,
                      "turn_weight": 0.75,
                      "turn_duration": 0.037,
                      "mapbox_streets_v8": {
                        "class": "secondary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 15.146,
                      "geometry_index": 175,
                      "location": [
                        2.343257,
                        48.968614
                      ]
                    },
                    {
                      "bearings": [
                        108,
                        296
                      ],
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "turn_weight": 1,
                      "turn_duration": 0.033,
                      "mapbox_streets_v8": {
                        "class": "secondary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "geometry_index": 177,
                      "location": [
                        2.3444,
                        48.968252
                      ]
                    }
                  ],
                  "weight": 46.671,
                  "duration": 32.817,
                  "distance": 188,
                  "name": "Rue Jean Missout",
                  "driving_side": "right",
                  "mode": "driving",
                  "geometry": {
                    "coordinates": [
                      [
                        2.342826,
                        48.96864
                      ],
                      [
                        2.342822,
                        48.968616
                      ],
                      [
                        2.34283,
                        48.968592
                      ],
                      [
                        2.34285,
                        48.968572
                      ],
                      [
                        2.342879,
                        48.968557
                      ],
                      [
                        2.342912,
                        48.96855
                      ],
                      [
                        2.342948,
                        48.96855
                      ],
                      [
                        2.342981,
                        48.968558
                      ],
                      [
                        2.343009,
                        48.968572
                      ],
                      [
                        2.343028,
                        48.968592
                      ],
                      [
                        2.343037,
                        48.968615
                      ],
                      [
                        2.343257,
                        48.968614
                      ],
                      [
                        2.343383,
                        48.968574
                      ],
                      [
                        2.3444,
                        48.968252
                      ],
                      [
                        2.344685,
                        48.96819
                      ],
                      [
                        2.34481,
                        48.968184
                      ],
                      [
                        2.344978,
                        48.968187
                      ],
                      [
                        2.345097,
                        48.968194
                      ]
                    ],
                    "type": "LineString"
                  }
                },
                {
                  "maneuver": {
                    "type": "turn",
                    "instruction": "Tourner légèrement à gauche sur la rue de Villetaneuse",
                    "modifier": "slight left",
                    "bearing_after": 68,
                    "bearing_before": 87,
                    "location": [
                      2.345097,
                      48.968194
                    ]
                  },
                  "intersections": [
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        68,
                        267
                      ],
                      "duration": 88.44,
                      "turn_weight": 5.75,
                      "turn_duration": 0.077,
                      "mapbox_streets_v8": {
                        "class": "secondary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 100.741,
                      "geometry_index": 181,
                      "location": [
                        2.345097,
                        48.968194
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        25,
                        206
                      ],
                      "duration": 34.113,
                      "turn_weight": 7,
                      "turn_duration": 0.019,
                      "mapbox_streets_v8": {
                        "class": "secondary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 43.651,
                      "geometry_index": 196,
                      "location": [
                        2.348332,
                        48.97248
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        19,
                        199
                      ],
                      "duration": 199.271,
                      "turn_weight": 9,
                      "turn_duration": 0.019,
                      "mapbox_streets_v8": {
                        "class": "secondary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 223.196,
                      "geometry_index": 202,
                      "location": [
                        2.34919,
                        48.973812
                      ]
                    },
                    {
                      "bearings": [
                        117,
                        295
                      ],
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "turn_weight": 6,
                      "turn_duration": 0.007,
                      "mapbox_streets_v8": {
                        "class": "secondary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "geometry_index": 245,
                      "location": [
                        2.364148,
                        48.977423
                      ]
                    }
                  ],
                  "weight": 389.824,
                  "duration": 336.592,
                  "distance": 2014.999,
                  "name": "Rue de Villetaneuse",
                  "driving_side": "right",
                  "mode": "driving",
                  "geometry": {
                    "coordinates": [
                      [
                        2.345097,
                        48.968194
                      ],
                      [
                        2.345249,
                        48.968228
                      ],
                      [
                        2.345385,
                        48.968272
                      ],
                      [
                        2.345526,
                        48.968348
                      ],
                      [
                        2.345645,
                        48.968438
                      ],
                      [
                        2.345888,
                        48.968743
                      ],
                      [
                        2.346376,
                        48.969463
                      ],
                      [
                        2.346561,
                        48.96975
                      ],
                      [
                        2.346962,
                        48.970372
                      ],
                      [
                        2.347014,
                        48.970444
                      ],
                      [
                        2.347298,
                        48.970893
                      ],
                      [
                        2.347722,
                        48.971566
                      ],
                      [
                        2.347801,
                        48.971714
                      ],
                      [
                        2.347981,
                        48.971972
                      ],
                      [
                        2.348273,
                        48.972413
                      ],
                      [
                        2.348332,
                        48.97248
                      ],
                      [
                        2.348385,
                        48.972555
                      ],
                      [
                        2.348666,
                        48.972956
                      ],
                      [
                        2.349072,
                        48.973591
                      ],
                      [
                        2.349087,
                        48.973619
                      ],
                      [
                        2.349095,
                        48.973633
                      ],
                      [
                        2.34919,
                        48.973812
                      ],
                      [
                        2.349286,
                        48.973992
                      ],
                      [
                        2.349314,
                        48.974037
                      ],
                      [
                        2.349319,
                        48.974045
                      ],
                      [
                        2.349487,
                        48.974252
                      ],
                      [
                        2.349587,
                        48.974364
                      ],
                      [
                        2.34976,
                        48.974558
                      ],
                      [
                        2.34992,
                        48.974706
                      ],
                      [
                        2.350131,
                        48.974863
                      ],
                      [
                        2.350277,
                        48.974972
                      ],
                      [
                        2.35054,
                        48.975169
                      ],
                      [
                        2.350702,
                        48.975291
                      ],
                      [
                        2.351188,
                        48.975605
                      ],
                      [
                        2.351442,
                        48.975741
                      ],
                      [
                        2.35163,
                        48.975825
                      ],
                      [
                        2.351667,
                        48.975841
                      ],
                      [
                        2.351802,
                        48.975899
                      ],
                      [
                        2.351986,
                        48.975971
                      ],
                      [
                        2.352059,
                        48.975998
                      ],
                      [
                        2.352095,
                        48.976011
                      ],
                      [
                        2.352148,
                        48.976029
                      ],
                      [
                        2.352413,
                        48.976124
                      ],
                      [
                        2.352805,
                        48.976242
                      ],
                      [
                        2.354515,
                        48.976783
                      ],
                      [
                        2.354818,
                        48.97688
                      ],
                      [
                        2.355566,
                        48.977107
                      ],
                      [
                        2.355783,
                        48.977175
                      ],
                      [
                        2.356435,
                        48.977378
                      ],
                      [
                        2.356815,
                        48.977479
                      ],
                      [
                        2.357035,
                        48.977531
                      ],
                      [
                        2.357304,
                        48.977581
                      ],
                      [
                        2.357695,
                        48.977636
                      ],
                      [
                        2.35868,
                        48.977778
                      ],
                      [
                        2.359243,
                        48.977849
                      ],
                      [
                        2.359983,
                        48.977984
                      ],
                      [
                        2.360217,
                        48.978026
                      ],
                      [
                        2.360627,
                        48.978108
                      ],
                      [
                        2.360838,
                        48.978129
                      ],
                      [
                        2.361045,
                        48.978131
                      ],
                      [
                        2.361435,
                        48.978127
                      ],
                      [
                        2.362072,
                        48.978042
                      ],
                      [
                        2.362348,
                        48.977978
                      ],
                      [
                        2.363935,
                        48.977488
                      ],
                      [
                        2.364148,
                        48.977423
                      ],
                      [
                        2.36451,
                        48.977301
                      ],
                      [
                        2.36458,
                        48.977286
                      ],
                      [
                        2.364657,
                        48.977293
                      ]
                    ],
                    "type": "LineString"
                  }
                },
                {
                  "maneuver": {
                    "type": "turn",
                    "instruction": "Tourner à droite sur la route de Calais (D 301)",
                    "modifier": "right",
                    "bearing_after": 165,
                    "bearing_before": 105,
                    "location": [
                      2.364657,
                      48.977293
                    ]
                  },
                  "ref": "D 301",
                  "intersections": [
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        165,
                        285
                      ],
                      "duration": 31.938,
                      "turn_weight": 9,
                      "turn_duration": 0.395,
                      "mapbox_streets_v8": {
                        "class": "primary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 43.697,
                      "geometry_index": 248,
                      "location": [
                        2.364657,
                        48.977293
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        165,
                        345
                      ],
                      "duration": 17.321,
                      "turn_duration": 0.007,
                      "mapbox_streets_v8": {
                        "class": "primary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 19.479,
                      "geometry_index": 249,
                      "location": [
                        2.365305,
                        48.975696
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        165,
                        345
                      ],
                      "duration": 3.607,
                      "turn_duration": 0.007,
                      "mapbox_streets_v8": {
                        "class": "primary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 4.05,
                      "geometry_index": 250,
                      "location": [
                        2.365655,
                        48.974814
                      ]
                    },
                    {
                      "bearings": [
                        173,
                        345
                      ],
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "turn_duration": 0.012,
                      "mapbox_streets_v8": {
                        "class": "primary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "geometry_index": 251,
                      "location": [
                        2.365725,
                        48.974647
                      ]
                    }
                  ],
                  "weight": 80.442,
                  "duration": 64.625,
                  "distance": 366,
                  "name": "Route de Calais (D 301)",
                  "driving_side": "right",
                  "mode": "driving",
                  "geometry": {
                    "coordinates": [
                      [
                        2.364657,
                        48.977293
                      ],
                      [
                        2.365305,
                        48.975696
                      ],
                      [
                        2.365655,
                        48.974814
                      ],
                      [
                        2.365725,
                        48.974647
                      ],
                      [
                        2.365824,
                        48.974153
                      ],
                      [
                        2.36583,
                        48.974092
                      ]
                    ],
                    "type": "LineString"
                  }
                },
                {
                  "maneuver": {
                    "type": "turn",
                    "instruction": "Tourner franchement à gauche sur l’avenue de la Division Leclerc (D 316)",
                    "modifier": "sharp left",
                    "bearing_after": 20,
                    "bearing_before": 174,
                    "location": [
                      2.36583,
                      48.974092
                    ]
                  },
                  "ref": "D 316",
                  "intersections": [
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        20,
                        354
                      ],
                      "duration": 9.562,
                      "turn_weight": 12.7,
                      "turn_duration": 7.478,
                      "mapbox_streets_v8": {
                        "class": "primary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 15.045,
                      "geometry_index": 253,
                      "location": [
                        2.36583,
                        48.974092
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        25,
                        200
                      ],
                      "duration": 2.674,
                      "turn_weight": 13.2,
                      "turn_duration": 0.01,
                      "mapbox_streets_v8": {
                        "class": "primary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 16.197,
                      "geometry_index": 254,
                      "location": [
                        2.365982,
                        48.974368
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        20,
                        204
                      ],
                      "duration": 13.56,
                      "turn_duration": 0.024,
                      "mapbox_streets_v8": {
                        "class": "primary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 14.89,
                      "geometry_index": 256,
                      "location": [
                        2.366193,
                        48.974669
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        19,
                        197
                      ],
                      "duration": 25.828,
                      "turn_duration": 0.007,
                      "mapbox_streets_v8": {
                        "class": "primary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 28.403,
                      "geometry_index": 260,
                      "location": [
                        2.367022,
                        48.976265
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "classes": [
                        "tunnel"
                      ],
                      "in": 1,
                      "bearings": [
                        16,
                        199
                      ],
                      "duration": 1.642,
                      "mapbox_streets_v8": {
                        "class": "primary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 1.806,
                      "geometry_index": 261,
                      "location": [
                        2.367973,
                        48.97803
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        18,
                        196
                      ],
                      "duration": 13.32,
                      "mapbox_streets_v8": {
                        "class": "primary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 14.652,
                      "geometry_index": 262,
                      "location": [
                        2.368071,
                        48.978252
                      ]
                    },
                    {
                      "bearings": [
                        17,
                        198
                      ],
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "turn_weight": 0.5,
                      "turn_duration": 0.021,
                      "mapbox_streets_v8": {
                        "class": "primary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "geometry_index": 263,
                      "location": [
                        2.368842,
                        48.979834
                      ]
                    }
                  ],
                  "weight": 133.136,
                  "duration": 104.465,
                  "distance": 1003,
                  "name": "Avenue de la Division Leclerc (D 316)",
                  "driving_side": "right",
                  "mode": "driving",
                  "geometry": {
                    "coordinates": [
                      [
                        2.36583,
                        48.974092
                      ],
                      [
                        2.365982,
                        48.974368
                      ],
                      [
                        2.366172,
                        48.974632
                      ],
                      [
                        2.366193,
                        48.974669
                      ],
                      [
                        2.366269,
                        48.974801
                      ],
                      [
                        2.366422,
                        48.975108
                      ],
                      [
                        2.366767,
                        48.975731
                      ],
                      [
                        2.367022,
                        48.976265
                      ],
                      [
                        2.367973,
                        48.97803
                      ],
                      [
                        2.368071,
                        48.978252
                      ],
                      [
                        2.368842,
                        48.979834
                      ],
                      [
                        2.369564,
                        48.981382
                      ],
                      [
                        2.369801,
                        48.981863
                      ],
                      [
                        2.370091,
                        48.982244
                      ],
                      [
                        2.370387,
                        48.982564
                      ]
                    ],
                    "type": "LineString"
                  }
                },
                {
                  "maneuver": {
                    "type": "roundabout",
                    "exit": 3,
                    "instruction": "Prendre le rond-point, puis la troisième sortie sur l’avenue de la Division Leclerc (D 10)",
                    "modifier": "straight",
                    "bearing_after": 41,
                    "bearing_before": 31,
                    "location": [
                      2.370387,
                      48.982564
                    ]
                  },
                  "ref": "D 10",
                  "intersections": [
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        41,
                        211
                      ],
                      "duration": 6.313,
                      "turn_weight": 5.5,
                      "turn_duration": 0.014,
                      "mapbox_streets_v8": {
                        "class": "roundabout"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 12.43,
                      "geometry_index": 267,
                      "location": [
                        2.370387,
                        48.982564
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        30,
                        208
                      ],
                      "duration": 2.708,
                      "turn_duration": 0.008,
                      "mapbox_streets_v8": {
                        "class": "roundabout"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 2.97,
                      "geometry_index": 271,
                      "location": [
                        2.370597,
                        48.982756
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        50,
                        210
                      ],
                      "duration": 3.628,
                      "turn_duration": 0.028,
                      "mapbox_streets_v8": {
                        "class": "roundabout"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 3.96,
                      "geometry_index": 272,
                      "location": [
                        2.37068,
                        48.98285
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        32,
                        230
                      ],
                      "duration": 5.723,
                      "turn_duration": 0.066,
                      "mapbox_streets_v8": {
                        "class": "roundabout"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 6.223,
                      "geometry_index": 273,
                      "location": [
                        2.3709,
                        48.98297
                      ]
                    },
                    {
                      "entry": [
                        false,
                        true
                      ],
                      "in": 0,
                      "bearings": [
                        171,
                        311
                      ],
                      "duration": 2.349,
                      "turn_duration": 0.349,
                      "mapbox_streets_v8": {
                        "class": "roundabout"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 1,
                      "weight": 2.2,
                      "geometry_index": 278,
                      "location": [
                        2.370983,
                        48.983215
                      ]
                    },
                    {
                      "bearings": [
                        131,
                        262
                      ],
                      "entry": [
                        false,
                        true
                      ],
                      "in": 0,
                      "turn_duration": 0.72,
                      "mapbox_streets_v8": {
                        "class": "roundabout"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 1,
                      "geometry_index": 280,
                      "location": [
                        2.370883,
                        48.983273
                      ]
                    },
                    {
                      "bearings": [
                        77,
                        320
                      ],
                      "entry": [
                        false,
                        true
                      ],
                      "in": 0,
                      "turn_weight": 5,
                      "turn_duration": 0.449,
                      "mapbox_streets_v8": {
                        "class": "secondary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 1,
                      "geometry_index": 283,
                      "location": [
                        2.370593,
                        48.983239
                      ]
                    }
                  ],
                  "weight": 42.227000000000004,
                  "duration": 30.476,
                  "distance": 145,
                  "name": "Avenue de la Division Leclerc (D 10)",
                  "driving_side": "right",
                  "mode": "driving",
                  "geometry": {
                    "coordinates": [
                      [
                        2.370387,
                        48.982564
                      ],
                      [
                        2.370506,
                        48.982612
                      ],
                      [
                        2.370541,
                        48.982653
                      ],
                      [
                        2.37058,
                        48.982725
                      ],
                      [
                        2.370597,
                        48.982756
                      ],
                      [
                        2.37068,
                        48.98285
                      ],
                      [
                        2.3709,
                        48.98297
                      ],
                      [
                        2.370942,
                        48.982992
                      ],
                      [
                        2.371031,
                        48.98304
                      ],
                      [
                        2.371045,
                        48.983106
                      ],
                      [
                        2.371021,
                        48.983177
                      ],
                      [
                        2.370983,
                        48.983215
                      ],
                      [
                        2.370965,
                        48.983233
                      ],
                      [
                        2.370883,
                        48.983273
                      ],
                      [
                        2.370828,
                        48.983286
                      ],
                      [
                        2.370727,
                        48.983292
                      ],
                      [
                        2.370593,
                        48.983239
                      ],
                      [
                        2.370431,
                        48.983364
                      ]
                    ],
                    "type": "LineString"
                  }
                },
                {
                  "maneuver": {
                    "type": "continue",
                    "instruction": "Tourner à droite pour rester sur l’avenue de la Division Leclerc (D 10)",
                    "modifier": "right",
                    "bearing_after": 16,
                    "bearing_before": 320,
                    "location": [
                      2.370431,
                      48.983364
                    ]
                  },
                  "ref": "D 10",
                  "intersections": [
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        16,
                        140
                      ],
                      "duration": 5.295,
                      "turn_weight": 1,
                      "turn_duration": 0.287,
                      "mapbox_streets_v8": {
                        "class": "secondary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 6.51,
                      "geometry_index": 284,
                      "location": [
                        2.370431,
                        48.983364
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        17,
                        196
                      ],
                      "duration": 9.194,
                      "turn_weight": 0.5,
                      "turn_duration": 0.007,
                      "mapbox_streets_v8": {
                        "class": "secondary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 10.605,
                      "geometry_index": 285,
                      "location": [
                        2.370554,
                        48.98364
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        18,
                        198
                      ],
                      "duration": 13.407,
                      "turn_weight": 0.5,
                      "turn_duration": 0.019,
                      "mapbox_streets_v8": {
                        "class": "secondary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 15.226,
                      "geometry_index": 287,
                      "location": [
                        2.370869,
                        48.984275
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        18,
                        198
                      ],
                      "duration": 10.819,
                      "turn_weight": 0.5,
                      "turn_duration": 0.019,
                      "mapbox_streets_v8": {
                        "class": "secondary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 12.38,
                      "geometry_index": 288,
                      "location": [
                        2.371369,
                        48.985291
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        19,
                        198
                      ],
                      "duration": 21.619,
                      "turn_weight": 0.5,
                      "turn_duration": 0.019,
                      "mapbox_streets_v8": {
                        "class": "secondary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 24.26,
                      "geometry_index": 292,
                      "location": [
                        2.371651,
                        48.985857
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        19,
                        197
                      ],
                      "duration": 27.882,
                      "turn_weight": 2,
                      "turn_duration": 2.007,
                      "mapbox_streets_v8": {
                        "class": "secondary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 30.463,
                      "geometry_index": 294,
                      "location": [
                        2.372034,
                        48.986624
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        19,
                        199
                      ],
                      "duration": 5.486,
                      "turn_weight": 0.5,
                      "turn_duration": 0.019,
                      "mapbox_streets_v8": {
                        "class": "secondary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 6.513,
                      "geometry_index": 296,
                      "location": [
                        2.372535,
                        48.9876
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        19,
                        199
                      ],
                      "duration": 3.851,
                      "turn_weight": 0.5,
                      "turn_duration": 0.019,
                      "mapbox_streets_v8": {
                        "class": "secondary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 4.715,
                      "geometry_index": 297,
                      "location": [
                        2.372713,
                        48.987947
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        19,
                        199
                      ],
                      "duration": 6.987,
                      "turn_weight": 0.5,
                      "turn_duration": 0.019,
                      "mapbox_streets_v8": {
                        "class": "secondary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 8.165,
                      "geometry_index": 298,
                      "location": [
                        2.372858,
                        48.988229
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        19,
                        199
                      ],
                      "duration": 26.505,
                      "turn_weight": 0.5,
                      "turn_duration": 0.019,
                      "mapbox_streets_v8": {
                        "class": "secondary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 29.634,
                      "geometry_index": 299,
                      "location": [
                        2.373118,
                        48.988736
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        18,
                        199
                      ],
                      "duration": 17.505,
                      "turn_weight": 0.5,
                      "turn_duration": 0.019,
                      "mapbox_streets_v8": {
                        "class": "secondary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 19.734,
                      "geometry_index": 300,
                      "location": [
                        2.374021,
                        48.990493
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        22,
                        199
                      ],
                      "duration": 2.209,
                      "turn_weight": 11,
                      "turn_duration": 0.009,
                      "mapbox_streets_v8": {
                        "class": "secondary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 13.42,
                      "geometry_index": 302,
                      "location": [
                        2.374168,
                        48.990781
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        20,
                        202
                      ],
                      "duration": 8.419,
                      "turn_weight": 11,
                      "turn_duration": 0.019,
                      "mapbox_streets_v8": {
                        "class": "secondary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 20.24,
                      "geometry_index": 303,
                      "location": [
                        2.374222,
                        48.99087
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        19,
                        200
                      ],
                      "duration": 1.221,
                      "turn_weight": 0.5,
                      "turn_duration": 0.021,
                      "mapbox_streets_v8": {
                        "class": "secondary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 1.82,
                      "geometry_index": 305,
                      "location": [
                        2.374455,
                        48.991282
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        22,
                        199
                      ],
                      "duration": 4.98,
                      "turn_weight": 0.5,
                      "turn_duration": 0.009,
                      "mapbox_streets_v8": {
                        "class": "secondary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 5.969,
                      "geometry_index": 306,
                      "location": [
                        2.374485,
                        48.991339
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        28,
                        202
                      ],
                      "duration": 6.354,
                      "turn_weight": 0.5,
                      "turn_duration": 0.011,
                      "mapbox_streets_v8": {
                        "class": "secondary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 7.477,
                      "geometry_index": 307,
                      "location": [
                        2.374629,
                        48.991578
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        38,
                        208
                      ],
                      "duration": 9.271,
                      "turn_weight": 0.5,
                      "turn_duration": 0.014,
                      "mapbox_streets_v8": {
                        "class": "secondary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 10.683,
                      "geometry_index": 308,
                      "location": [
                        2.374871,
                        48.991873
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        39,
                        211
                      ],
                      "duration": 3.299,
                      "turn_weight": 0.5,
                      "turn_duration": 0.012,
                      "mapbox_streets_v8": {
                        "class": "secondary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 4.116,
                      "geometry_index": 310,
                      "location": [
                        2.375299,
                        48.99227
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        48,
                        219
                      ],
                      "duration": 21.443,
                      "turn_weight": 0.5,
                      "mapbox_streets_v8": {
                        "class": "secondary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 24.088,
                      "geometry_index": 311,
                      "location": [
                        2.37548,
                        48.992417
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        62,
                        229
                      ],
                      "duration": 9.557,
                      "turn_weight": 0.75,
                      "turn_duration": 0.017,
                      "mapbox_streets_v8": {
                        "class": "secondary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 11.244,
                      "geometry_index": 314,
                      "location": [
                        2.376877,
                        48.993234
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        59,
                        240
                      ],
                      "duration": 5.527,
                      "turn_weight": 2,
                      "turn_duration": 0.007,
                      "mapbox_streets_v8": {
                        "class": "secondary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 8.072,
                      "geometry_index": 317,
                      "location": [
                        2.377512,
                        48.993463
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        39,
                        239
                      ],
                      "duration": 15.33,
                      "turn_weight": 0.75,
                      "turn_duration": 0.083,
                      "mapbox_streets_v8": {
                        "class": "secondary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 17.141,
                      "geometry_index": 319,
                      "location": [
                        2.377786,
                        48.99357
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        35,
                        216
                      ],
                      "duration": 2.125,
                      "turn_weight": 0.5,
                      "turn_duration": 0.007,
                      "mapbox_streets_v8": {
                        "class": "secondary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 2.776,
                      "geometry_index": 323,
                      "location": [
                        2.378384,
                        48.994085
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        32,
                        215
                      ],
                      "duration": 8.251,
                      "turn_weight": 0.5,
                      "turn_duration": 0.022,
                      "mapbox_streets_v8": {
                        "class": "secondary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 9.346,
                      "geometry_index": 324,
                      "location": [
                        2.378464,
                        48.994159
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        30,
                        212
                      ],
                      "duration": 3.142,
                      "turn_weight": 0.5,
                      "turn_duration": 0.022,
                      "mapbox_streets_v8": {
                        "class": "secondary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 3.854,
                      "geometry_index": 325,
                      "location": [
                        2.378697,
                        48.994407
                      ]
                    },
                    {
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "bearings": [
                        25,
                        210
                      ],
                      "duration": 4.026,
                      "turn_weight": 0.5,
                      "turn_duration": 0.026,
                      "mapbox_streets_v8": {
                        "class": "secondary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "weight": 4.8,
                      "geometry_index": 326,
                      "location": [
                        2.378783,
                        48.994506
                      ]
                    },
                    {
                      "bearings": [
                        17,
                        205
                      ],
                      "entry": [
                        true,
                        false
                      ],
                      "in": 1,
                      "turn_weight": 6,
                      "turn_duration": 0.036,
                      "mapbox_streets_v8": {
                        "class": "secondary"
                      },
                      "is_urban": true,
                      "admin_index": 0,
                      "out": 0,
                      "geometry_index": 328,
                      "location": [
                        2.378898,
                        48.994671
                      ]
                    }
                  ],
                  "weight": 425.714,
                  "duration": 352.776,
                  "distance": 1603.06,
                  "name": "Avenue de la Division Leclerc (D 10)",
                  "driving_side": "right",
                  "mode": "driving",
                  "geometry": {
                    "coordinates": [
                      [
                        2.370431,
                        48.983364
                      ],
                      [
                        2.370554,
                        48.98364
                      ],
                      [
                        2.370596,
                        48.983734
                      ],
                      [
                        2.370869,
                        48.984275
                      ],
                      [
                        2.371369,
                        48.985291
                      ],
                      [
                        2.371448,
                        48.985451
                      ],
                      [
                        2.371527,
                        48.985612
                      ],
                      [
                        2.371628,
                        48.985811
                      ],
                      [
                        2.371651,
                        48.985857
                      ],
                      [
                        2.37197,
                        48.986482
                      ],
                      [
                        2.372034,
                        48.986624
                      ],
                      [
                        2.372088,
                        48.98673
                      ],
                      [
                        2.372535,
                        48.9876
                      ],
                      [
                        2.372713,
                        48.987947
                      ],
                      [
                        2.372858,
                        48.988229
                      ],
                      [
                        2.373118,
                        48.988736
                      ],
                      [
                        2.374021,
                        48.990493
                      ],
                      [
                        2.374095,
                        48.990639
                      ],
                      [
                        2.374168,
                        48.990781
                      ],
                      [
                        2.374222,
                        48.99087
                      ],
                      [
                        2.374273,
                        48.990961
                      ],
                      [
                        2.374455,
                        48.991282
                      ],
                      [
                        2.374485,
                        48.991339
                      ],
                      [
                        2.374629,
                        48.991578
                      ],
                      [
                        2.374871,
                        48.991873
                      ],
                      [
                        2.375207,
                        48.992154
                      ],
                      [
                        2.375299,
                        48.99227
                      ],
                      [
                        2.37548,
                        48.992417
                      ],
                      [
                        2.375652,
                        48.992519
                      ],
                      [
                        2.376753,
                        48.993163
                      ],
                      [
                        2.376877,
                        48.993234
                      ],
                      [
                        2.376951,
                        48.993262
                      ],
                      [
                        2.377265,
                        48.993369
                      ],
                      [
                        2.377512,
                        48.993463
                      ],
                      [
                        2.377624,
                        48.993506
                      ],
                      [
                        2.377786,
                        48.99357
                      ],
                      [
                        2.377904,
                        48.993658
                      ],
                      [
                        2.377985,
                        48.993731
                      ],
                      [
                        2.378343,
                        48.994046
                      ],
                      [
                        2.378384,
                        48.994085
                      ],
                      [
                        2.378464,
                        48.994159
                      ],
                      [
                        2.378697,
                        48.994407
                      ],
                      [
                        2.378783,
                        48.994506
                      ],
                      [
                        2.378822,
                        48.994562
                      ],
                      [
                        2.378898,
                        48.994671
                      ],
                      [
                        2.378989,
                        48.994863
                      ],
                      [
                        2.379401,
                        48.996113
                      ]
                    ],
                    "type": "LineString"
                  }
                },
                {
                  "maneuver": {
                    "type": "arrive",
                    "instruction": "Vous êtes arrivé à votre destination, sur la droite",
                    "modifier": "right",
                    "bearing_after": 0,
                    "bearing_before": 12,
                    "location": [
                      2.379401,
                      48.996113
                    ]
                  },
                  "ref": "D 10",
                  "intersections": [
                    {
                      "bearings": [
                        192
                      ],
                      "entry": [
                        true
                      ],
                      "in": 0,
                      "admin_index": 0,
                      "geometry_index": 330,
                      "location": [
                        2.379401,
                        48.996113
                      ]
                    }
                  ],
                  "weight": 0,
                  "duration": 0,
                  "distance": 0,
                  "name": "Avenue de la Division Leclerc (D 10)",
                  "driving_side": "right",
                  "mode": "driving",
                  "geometry": {
                    "coordinates": [
                      [
                        2.379401,
                        48.996113
                      ],
                      [
                        2.379401,
                        48.996113
                      ]
                    ],
                    "type": "LineString"
                  }
                }
              ],
              "admins": [
                {
                  "iso_3166_1_alpha3": "FRA",
                  "iso_3166_1": "FR"
                }
              ],
              "duration": 1522.691,
              "distance": 8914.812,
              "weight": 1907.052,
              "summary": "Rue de Villetaneuse, Avenue de la Division Leclerc"
            }
          ],
          "geometry": {
            "coordinates": [
              [
                2.309916,
                48.955023
              ],
              [
                2.309701,
                48.954233
              ],
              [
                2.312463,
                48.953053
              ],
              [
                2.315422,
                48.952646
              ],
              [
                2.320592,
                48.956908
              ],
              [
                2.326412,
                48.958562
              ],
              [
                2.329167,
                48.958462
              ],
              [
                2.328762,
                48.959404
              ],
              [
                2.335879,
                48.96415
              ],
              [
                2.340748,
                48.969369
              ],
              [
                2.342826,
                48.96864
              ],
              [
                2.343037,
                48.968615
              ],
              [
                2.345097,
                48.968194
              ],
              [
                2.349487,
                48.974252
              ],
              [
                2.351442,
                48.975741
              ],
              [
                2.360627,
                48.978108
              ],
              [
                2.364657,
                48.977293
              ],
              [
                2.36583,
                48.974092
              ],
              [
                2.370387,
                48.982564
              ],
              [
                2.370593,
                48.983239
              ],
              [
                2.370431,
                48.983364
              ],
              [
                2.374629,
                48.991578
              ],
              [
                2.378464,
                48.994159
              ],
              [
                2.379401,
                48.996113
              ]
            ],
            "type": "LineString"
          }
        }
      ],
      "waypoints": [
        {
          "distance": 53.783,
          "name": "Rue Dumas",
          "location": [
            2.309916,
            48.955023
          ]
        },
        {
          "distance": 16.713,
          "name": "Rue Pierre Brossolette",
          "location": [
            2.379401,
            48.996113
          ]
        }
      ],
      "code": "Ok",
      "uuid": "pWhwvzNyAuDGZ9XCRbD4E9yFL6ctPcu4jL44muADstMfTu2t3yk_nw=="
    }
  ]
```

## Error Response

**Code** : `400`
**Condition** : If "start" or "coords" or "len" are not valid or not exist
```json
{
  "error": "Invalid request"
}
```