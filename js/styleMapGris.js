
var serverName = "betaserver.icgc.cat";

var urlApp = document.location.href;

if (urlApp.indexOf('172.70.1.31') != -1) {
  serverName = "172.70.1.31";
}




var styleGris = {
    "version": 8,
    "sources": {
        "mtc25mgdb": {
            "type": "vector",
            "tiles": [
                "http://"+serverName+"/tileserver3/tileserver.php/mtc25mcomplet/{z}/{x}/{y}.pbf"
            ],
            "maxzoom": 15,
            "attribution": "Mapa: <a href='http://www.icgc.cat'>Institut Cartogràfic i Geològic de Catalunya</a>"
        },
        "mtc25mtopon": {
            "type": "raster",
            "tiles": [
                "http://"+serverName+"/tileserver3/tileserver.php/mtc25mgdb_topon_r/{z}/{x}/{y}.png"
            ],
            "maxzoom": 16,
            "attribution": "Mapa : <a href='http://www.icgc.cat'>Institut Cartogràfic i Geològic de Catalunya</a>"
        },
		"codiscarr25m": {
            "type": "vector",
            "tiles": [
                "http://"+serverName+"/tileserver3/tileserver.php/codiscarr25m/{z}/{x}/{y}.pbf"
            ],
            "maxzoom": 16,
            "attribution": "Mapa : <a href='http://www.icgc.cat'>Institut Cartogràfic i Geològic de Catalunya</a>"
        },
        "pictogrames": {
            "type": "vector",
            "tiles": [
                "http://"+serverName+"/tileserver3/tileserver.php/pictogrames/{z}/{x}/{y}.pbf"

            ],
            "maxzoom": 15,
            "attribution": "Mapa : <a href='http://www.icgc.cat'>Institut Cartogràfic i Geològic de Catalunya</a>"
        },
		  	"toponimia": {
            "type": "vector",
            "tiles": [
                "http://"+serverName+"/tileserver3/tileserver.php/redtopo/{z}/{x}/{y}.pbf"
            ],
            "maxzoom": 15,
            "attribution": "Mapa : <a href='http://www.icgc.cat'>Institut Cartogràfic i Geològic de Catalunya</a>"
        },
        "osm": {
            "type": "vector",
            "tiles": ["https://tile.mapzen.com/mapzen/vector/v1/all/{z}/{x}/{y}.mvt?api_key=vector-tiles-LM25tq4"]
        },
        "normals0": {
            "type": "raster",
            "tiles": [
                "http://"+serverName+"/tileserver3/tileserver.php?/normal6-12_v3/{z}/{x}/{y}.png"
                //"http://"+serverName+"/vectortiles/img/normal.jpg"
            ],
            "maxzoom": 13,

            "attribution": "Mapa : <a href='http://www.icgc.cat'>Institut Cartogràfic i Geològic de Catalunya</a>"
        },


        "normals": {
            "type": "raster",
            "tiles": [
                "http://"+serverName+"/tileserver3/tileserver.php?/norm2x2/{z}/{x}/{y}.png"
                //"http://"+serverName+"/vectortiles/img/normal.jpg"
            ],
            "maxzoom": 16,

            "attribution": "Mapa : <a href='http://www.icgc.cat'>Institut Cartogràfic i Geològic de Catalunya</a>"
        }
    },
      "light": {
        "anchor": "viewport",
        "color": "white",
        "intensity": 0.4,
        "position": [1.15, 45, 30]
    },

    "sprite": "http://"+serverName+"/vectortiles/sprites/maki",
    "glyphs": "http://"+serverName+"/glyphs/{fontstack}/{range}.pbf",
    "layers": [
      /*{
        "id": "normalMaps",
        "type": "raster",
        "source": "normals",
        "minzoom": 0,
        "maxzoom": 22
    },
    */

//*********************************INICI FONS*********************************
{
  "id": "background",
  "type": "background",
  "paint": {
    "background-color": "#323E3F",
  }
},
/*
{
        "id": "normalMaps",
        "type": "normal",
        "source": "normals",
        "minzoom": 13,
        "maxzoom": 16
    },

	{
            "id": "normalMaps0",
            "source": "normals0",
            "type": "normal",
            //"paint": {"raster-opacity": 0.85},
			"minzoom": 6,
        "maxzoom": 13
        },
    */

	 {
            "id": "water",
            "type": "fill",
            "source": "osm",
            "source-layer": "water",
            "filter": ["==", "$type", "Polygon"],
            "paint": {
                "fill-color": "#d3e1e5"
            }
		},
//*********************************FINAL FONS*********************************

//*********************************INICI POLIGONS*********************************
    {
    "interactive": true,
    "id": "riu_amb_doble_marge_0_pol",
    "filter": [
        "==",
        "$type",
        "Polygon"
    ],
    "type": "fill",
    "paint": {
        "fill-outline-color": {
            "base": 1,
            "stops": [
                [
                    7,
                    "rgba(204,204,204,0)"
                ],
                [
                    8,
                    "rgba(204,204,204,0.11)"
                ],
                [
                    9,
                    "rgba(204,204,204,0.22)"
                ],
                [
                    10,
                    "rgba(204,204,204,0.33)"
                ],
                [
                    11,
                    "rgba(204,204,204,0.44)"
                ],
                [
                    12,
                    "rgba(204,204,204,0.56)"
                ],
                [
                    13,
                    "rgba(204,204,204,0.67)"
                ],
                [
                    14,
                    "rgba(204,204,204,0.78)"
                ],
                [
                    15,
                    "rgba(204,204,204,0.89)"
                ],
                [
                    16,
                    "rgb(204,204,204)"
                ]
            ]
        },
        "fill-color": "#A1BDC1",
        "fill-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "riu_amb_doble_marge_0_pol",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "estany_1_pol",
    "filter": [
        "==",
        "$type",
        "Polygon"
    ],
    "type": "fill",
    "paint": {
        "fill-outline-color": {
            "base": 1,
            "stops": [
                [
                    7,
                    "rgba(204,204,204,0)"
                ],
                [
                    8,
                    "rgba(204,204,204,0.11)"
                ],
                [
                    9,
                    "rgba(204,204,204,0.22)"
                ],
                [
                    10,
                    "rgba(204,204,204,0.33)"
                ],
                [
                    11,
                    "rgba(204,204,204,0.44)"
                ],
                [
                    12,
                    "rgba(204,204,204,0.56)"
                ],
                [
                    13,
                    "rgba(204,204,204,0.67)"
                ],
                [
                    14,
                    "rgba(204,204,204,0.78)"
                ],
                [
                    15,
                    "rgba(204,204,204,0.89)"
                ],
                [
                    16,
                    "rgb(204,204,204)"
                ]
            ]
        },
        "fill-color": "#A1BDC1",
        "fill-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "estany_1_pol",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "embassament_3_pol",
    "filter": [
        "==",
        "$type",
        "Polygon"
    ],
    "type": "fill",
    "paint": {
        "fill-outline-color": {
            "base": 1,
            "stops": [
                [
                    7,
                    "rgba(204,204,204,0)"
                ],
                [
                    8,
                    "rgba(204,204,204,0.11)"
                ],
                [
                    9,
                    "rgba(204,204,204,0.22)"
                ],
                [
                    10,
                    "rgba(204,204,204,0.33)"
                ],
                [
                    11,
                    "rgba(204,204,204,0.44)"
                ],
                [
                    12,
                    "rgba(204,204,204,0.56)"
                ],
                [
                    13,
                    "rgba(204,204,204,0.67)"
                ],
                [
                    14,
                    "rgba(204,204,204,0.78)"
                ],
                [
                    15,
                    "rgba(204,204,204,0.89)"
                ],
                [
                    16,
                    "rgb(204,204,204)"
                ]
            ]
        },
        "fill-color": "#A1BDC1",
        "fill-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "embassament_3_pol",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "bassa_o_diposit_descobert_piscina_a_escala_5_pol",
    "filter": [
        "==",
        "$type",
        "Polygon"
    ],
    "type": "fill",
    "paint": {
        "fill-outline-color": {
            "base": 1,
            "stops": [
                [
                    12,
                    "rgba(204,204,204,0)"
                ],
                [
                    13,
                    "rgba(204,204,204,0.13)"
                ],
                [
                    14,
                    "rgba(204,204,204,0.25)"
                ],
                [
                    15,
                    "rgba(204,204,204,0.38)"
                ],
                [
                    16,
                    "rgba(204,204,204,0.5)"
                ]
            ]
        },
        "fill-color": "#A1BDC1",
        "fill-opacity": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.5
                ],
                [
                    13,
                    0.63
                ],
                [
                    14,
                    0.75
                ],
                [
                    15,
                    0.88
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "bassa_o_diposit_descobert_piscina_a_escala_5_pol",
    "minzoom": 12,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "estany_no_permanent_6_pol",
    "filter": [
        "==",
        "$type",
        "Polygon"
    ],
    "type": "fill",
    "paint": {
        "fill-outline-color": {
            "base": 1,
            "stops": [
                [
                    12,
                    "rgba(204,204,204,0)"
                ],
                [
                    13,
                    "rgba(204,204,204,0.13)"
                ],
                [
                    14,
                    "rgba(204,204,204,0.25)"
                ],
                [
                    15,
                    "rgba(204,204,204,0.38)"
                ],
                [
                    16,
                    "rgba(204,204,204,0.5)"
                ]
            ]
        },
        "fill-color": "#A1BDC1",
        "fill-opacity": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.2
                ],
                [
                    13,
                    0.2
                ],
                [
                    14,
                    0.2
                ],
                [
                    15,
                    0.2
                ],
                [
                    16,
                    0.2
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "estany_no_permanent_6_pol",
    "minzoom": 12,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "fabrica_nau_granja_9_pol",
    "filter": [
        "==",
        "$type",
        "Polygon"
    ],
    "type": "fill",
    "paint": {
        "fill-outline-color": {
            "base": 1,
            "stops": [
                [
                    7,
                    "rgba(216,216,216,0)"
                ],
                [
                    8,
                    "rgba(216,216,216,0)"
                ],
                [
                    9,
                    "rgba(216,216,216,0)"
                ],
                [
                    10,
                    "rgba(216,216,216,0)"
                ],
                [
                    11,
                    "rgba(216,216,216,0)"
                ],
                [
                    12,
                    "rgba(216,216,216,0)"
                ],
                [
                    13,
                    "rgba(216,216,216,0)"
                ],
                [
                    14,
                    "rgba(216,216,216,0)"
                ],
                [
                    15,
                    "rgba(216,216,216,0)"
                ],
                [
                    16,
                    "rgba(216,216,216,0)"
                ]
            ]
        },
        "fill-color": "#BFBFBF",
        "fill-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "fabrica_nau_granja_9_pol",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "edificacio_a_escala_0_pol",
    "filter": [
        "==",
        "$type",
        "Polygon"
    ],
    "type": "fill",
    "paint": {
        "fill-outline-color": {
            "base": 1,
            "stops": [
                [
                    7,
                    "rgba(216,216,216,0)"
                ],
                [
                    8,
                    "rgba(216,216,216,0)"
                ],
                [
                    9,
                    "rgba(216,216,216,0)"
                ],
                [
                    10,
                    "rgba(216,216,216,0)"
                ],
                [
                    11,
                    "rgba(216,216,216,0)"
                ],
                [
                    12,
                    "rgba(216,216,216,0)"
                ],
                [
                    13,
                    "rgba(216,216,216,0)"
                ],
                [
                    14,
                    "rgba(216,216,216,0)"
                ],
                [
                    15,
                    "rgba(216,216,216,0)"
                ],
                [
                    16,
                    "rgba(216,216,216,0)"
                ]
            ]
        },
        "fill-color": "#BFBFBF",
        "fill-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "edificacio_a_escala_0_pol",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "edificacio_aillada_8_pol",
    "filter": [
        "==",
        "$type",
        "Polygon"
    ],
    "type": "fill",
    "paint": {
        "fill-outline-color": {
            "base": 1,
            "stops": [
                [
                    10,
                    "rgba(216,216,216,0)"
                ],
                [
                    11,
                    "rgba(216,216,216,0)"
                ],
                [
                    12,
                    "rgba(216,216,216,0)"
                ],
                [
                    13,
                    "rgba(216,216,216,0)"
                ],
                [
                    14,
                    "rgba(216,216,216,0)"
                ],
                [
                    15,
                    "rgba(216,216,216,0)"
                ],
                [
                    16,
                    "rgba(216,216,216,0)"
                ]
            ]
        },
        "fill-color": "#BFBFBF",
        "fill-opacity": {
            "base": 1,
            "stops": [
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "edificacio_aillada_8_pol",
    "minzoom": 10,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "edificacio_en_construccio_1_pol",
    "filter": [
        "==",
        "$type",
        "Polygon"
    ],
    "type": "fill",
    "paint": {
        "fill-outline-color": {
            "base": 1,
            "stops": [
                [
                    11,
                    "rgba(216,216,216,0)"
                ],
                [
                    12,
                    "rgba(216,216,216,0)"
                ],
                [
                    13,
                    "rgba(216,216,216,0)"
                ],
                [
                    14,
                    "rgba(216,216,216,0)"
                ],
                [
                    15,
                    "rgba(216,216,216,0)"
                ],
                [
                    16,
                    "rgba(216,216,216,0)"
                ]
            ]
        },
        "fill-color": "#BFBFBF",
        "fill-opacity": {
            "base": 1,
            "stops": [
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "edificacio_en_construccio_1_pol",
    "minzoom": 11,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "edificacio_en_ruines_2_pol",
    "filter": [
        "==",
        "$type",
        "Polygon"
    ],
    "type": "fill",
    "paint": {
        "fill-outline-color": {
            "base": 1,
            "stops": [
                [
                    11,
                    "rgba(216,216,216,0)"
                ],
                [
                    12,
                    "rgba(216,216,216,0)"
                ],
                [
                    13,
                    "rgba(216,216,216,0)"
                ],
                [
                    14,
                    "rgba(216,216,216,0)"
                ],
                [
                    15,
                    "rgba(216,216,216,0)"
                ],
                [
                    16,
                    "rgba(216,216,216,0)"
                ]
            ]
        },
        "fill-color": "#BFBFBF",
        "fill-opacity": {
            "base": 1,
            "stops": [
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "edificacio_en_ruines_2_pol",
    "minzoom": 11,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "golf_banker_3_pol",
    "filter": [
        "==",
        "$type",
        "Polygon"
    ],
    "type": "fill",
    "paint": {
        "fill-outline-color": {
            "base": 1,
            "stops": [
                [
                    10,
                    "rgba(216,216,216,0.5)"
                ],
                [
                    11,
                    "rgba(216,216,216,0.5)"
                ],
                [
                    12,
                    "rgba(216,216,216,0.5)"
                ],
                [
                    13,
                    "rgba(216,216,216,0.5)"
                ],
                [
                    14,
                    "rgba(216,216,216,0.5)"
                ],
                [
                    15,
                    "rgba(216,216,216,0.5)"
                ],
                [
                    16,
                    "rgba(216,216,216,0.5)"
                ]
            ]
        },
        "fill-color": "#CCCCCC",
        "fill-opacity": {
            "base": 1,
            "stops": [
                [
                    10,
                    0.25
                ],
                [
                    11,
                    0.25
                ],
                [
                    12,
                    0.25
                ],
                [
                    13,
                    0.25
                ],
                [
                    14,
                    0.25
                ],
                [
                    15,
                    0.25
                ],
                [
                    16,
                    0.25
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "golf_banker_3_pol",
    "minzoom": 10,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "golf_carrer_4_pol",
    "filter": [
        "==",
        "$type",
        "Polygon"
    ],
    "type": "fill",
    "paint": {
        "fill-outline-color": {
            "base": 1,
            "stops": [
                [
                    10,
                    "rgba(216,216,216,0.5)"
                ],
                [
                    11,
                    "rgba(216,216,216,0.5)"
                ],
                [
                    12,
                    "rgba(216,216,216,0.5)"
                ],
                [
                    13,
                    "rgba(216,216,216,0.5)"
                ],
                [
                    14,
                    "rgba(216,216,216,0.5)"
                ],
                [
                    15,
                    "rgba(216,216,216,0.5)"
                ],
                [
                    16,
                    "rgba(216,216,216,0.5)"
                ]
            ]
        },
        "fill-color": "#CCCCCC",
        "fill-opacity": {
            "base": 1,
            "stops": [
                [
                    10,
                    0.25
                ],
                [
                    11,
                    0.25
                ],
                [
                    12,
                    0.25
                ],
                [
                    13,
                    0.25
                ],
                [
                    14,
                    0.25
                ],
                [
                    15,
                    0.25
                ],
                [
                    16,
                    0.25
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "golf_carrer_4_pol",
    "minzoom": 10,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "golf_green_5_pol",
    "filter": [
        "==",
        "$type",
        "Polygon"
    ],
    "type": "fill",
    "paint": {
        "fill-outline-color": {
            "base": 1,
            "stops": [
                [
                    10,
                    "rgba(216,216,216,0.5)"
                ],
                [
                    11,
                    "rgba(216,216,216,0.5)"
                ],
                [
                    12,
                    "rgba(216,216,216,0.5)"
                ],
                [
                    13,
                    "rgba(216,216,216,0.5)"
                ],
                [
                    14,
                    "rgba(216,216,216,0.5)"
                ],
                [
                    15,
                    "rgba(216,216,216,0.5)"
                ],
                [
                    16,
                    "rgba(216,216,216,0.5)"
                ]
            ]
        },
        "fill-color": "#CCCCCC",
        "fill-opacity": {
            "base": 1,
            "stops": [
                [
                    10,
                    0.25
                ],
                [
                    11,
                    0.25
                ],
                [
                    12,
                    0.25
                ],
                [
                    13,
                    0.25
                ],
                [
                    14,
                    0.25
                ],
                [
                    15,
                    0.25
                ],
                [
                    16,
                    0.25
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "golf_green_5_pol",
    "minzoom": 10,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "golf_sortida_6_pol",
    "filter": [
        "==",
        "$type",
        "Polygon"
    ],
    "type": "fill",
    "paint": {
        "fill-outline-color": {
            "base": 1,
            "stops": [
                [
                    10,
                    "rgba(216,216,216,0.5)"
                ],
                [
                    11,
                    "rgba(216,216,216,0.5)"
                ],
                [
                    12,
                    "rgba(216,216,216,0.5)"
                ],
                [
                    13,
                    "rgba(216,216,216,0.5)"
                ],
                [
                    14,
                    "rgba(216,216,216,0.5)"
                ],
                [
                    15,
                    "rgba(216,216,216,0.5)"
                ],
                [
                    16,
                    "rgba(216,216,216,0.5)"
                ]
            ]
        },
        "fill-color": "#CCCCCC",
        "fill-opacity": {
            "base": 1,
            "stops": [
                [
                    10,
                    0.25
                ],
                [
                    11,
                    0.25
                ],
                [
                    12,
                    0.25
                ],
                [
                    13,
                    0.25
                ],
                [
                    14,
                    0.25
                ],
                [
                    15,
                    0.25
                ],
                [
                    16,
                    0.25
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "golf_sortida_6_pol",
    "minzoom": 10,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "camp_o_zona_esportiva_golf_parc_jardi_7_pol",
    "filter": [
        "==",
        "$type",
        "Polygon"
    ],
    "type": "fill",
    "paint": {
        "fill-outline-color": {
            "base": 1,
            "stops": [
                [
                    10,
                    "rgba(216,216,216,0.5)"
                ],
                [
                    11,
                    "rgba(216,216,216,0.5)"
                ],
                [
                    12,
                    "rgba(216,216,216,0.5)"
                ],
                [
                    13,
                    "rgba(216,216,216,0.5)"
                ],
                [
                    14,
                    "rgba(216,216,216,0.5)"
                ],
                [
                    15,
                    "rgba(216,216,216,0.5)"
                ],
                [
                    16,
                    "rgba(216,216,216,0.5)"
                ]
            ]
        },
        "fill-color": "#CCCCCC",
        "fill-opacity": {
            "base": 1,
            "stops": [
                [
                    10,
                    0.25
                ],
                [
                    11,
                    0.25
                ],
                [
                    12,
                    0.25
                ],
                [
                    13,
                    0.25
                ],
                [
                    14,
                    0.25
                ],
                [
                    15,
                    0.25
                ],
                [
                    16,
                    0.25
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "camp_o_zona_esportiva_golf_parc_jardi_7_pol",
    "minzoom": 10,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "hivernacle_0_pol",
    "filter": [
        "==",
        "$type",
        "Polygon"
    ],
    "type": "fill",
    "paint": {
        "fill-outline-color": {
            "base": 1,
            "stops": [
                [
                    13,
                    "rgba(216,216,216,0.5)"
                ],
                [
                    14,
                    "rgba(216,216,216,0.5)"
                ],
                [
                    15,
                    "rgba(216,216,216,0.5)"
                ],
                [
                    16,
                    "rgba(216,216,216,0.5)"
                ]
            ]
        },
        "fill-color": "#BFBFBF",
        "fill-opacity": {
            "base": 1,
            "stops": [
                [
                    13,
                    0.1
                ],
                [
                    14,
                    0.15
                ],
                [
                    15,
                    0.2
                ],
                [
                    16,
                    0.25
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "hivernacle_0_pol",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "extraccions_1_pol",
    "filter": [
        "==",
        "$type",
        "Polygon"
    ],
    "type": "fill",
    "paint": {
        "fill-outline-color": {
            "base": 1,
            "stops": [
                [
                    12,
                    "rgba(216,216,216,0.5)"
                ],
                [
                    13,
                    "rgba(216,216,216,0.5)"
                ],
                [
                    14,
                    "rgba(216,216,216,0.5)"
                ],
                [
                    15,
                    "rgba(216,216,216,0.5)"
                ],
                [
                    16,
                    "rgba(216,216,216,0.5)"
                ]
            ]
        },
        "fill-color": "#BFBFBF",
        "fill-opacity": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.1
                ],
                [
                    13,
                    0.1
                ],
                [
                    14,
                    0.1
                ],
                [
                    15,
                    0.1
                ],
                [
                    16,
                    0.1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "extraccions_1_pol",
    "minzoom": 12,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "piscifactoria_5_pol",
    "filter": [
        "==",
        "$type",
        "Polygon"
    ],
    "type": "fill",
    "paint": {
        "fill-outline-color": {
            "base": 1,
            "stops": [
                [
                    11,
                    "rgba(216,216,216,0.5)"
                ],
                [
                    12,
                    "rgba(216,216,216,0.5)"
                ],
                [
                    13,
                    "rgba(216,216,216,0.5)"
                ],
                [
                    14,
                    "rgba(216,216,216,0.5)"
                ],
                [
                    15,
                    "rgba(216,216,216,0.5)"
                ],
                [
                    16,
                    "rgba(216,216,216,0.5)"
                ]
            ]
        },
        "fill-color": "#BFBFBF",
        "fill-opacity": {
            "base": 1,
            "stops": [
                [
                    11,
                    0.5
                ],
                [
                    12,
                    0.6
                ],
                [
                    13,
                    0.7
                ],
                [
                    14,
                    0.8
                ],
                [
                    15,
                    0.9
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "piscifactoria_5_pol",
    "minzoom": 11,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "escullera_4_pol",
    "filter": [
        "==",
        "$type",
        "Polygon"
    ],
    "type": "fill",
    "paint": {
        "fill-outline-color": "rgba(255, 0, 0, 0)",
        "fill-color": "rgba(255, 0, 0, 0)",
        "fill-opacity": 0
    },
    "source": "mtc25mgdb",
    "source-layer": "escullera_4_pol",
    "minzoom": 11,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "limit_d_aigua_poc_profunda_3_pol",
    "filter": [
        "==",
        "$type",
        "Polygon"
    ],
    "type": "fill",
    "paint": {
        "fill-outline-color": "rgba(255, 0, 0, 0)",
        "fill-color": "rgba(255, 0, 0, 0)",
        "fill-opacity": 0
    },
    "source": "mtc25mgdb",
    "source-layer": "limit_d_aigua_poc_profunda_3_pol",
    "minzoom": 11,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "litoral_batimetria_0_pol",
    "filter": [
        "==",
        "$type",
        "Polygon"
    ],
    "type": "fill",
    "paint": {
        "fill-outline-color": {
            "base": 1,
            "stops": [
                [
                    7,
                    "rgba(216,216,216,0.5)"
                ],
                [
                    8,
                    "rgba(216,216,216,0.5)"
                ],
                [
                    9,
                    "rgba(216,216,216,0.5)"
                ],
                [
                    10,
                    "rgba(216,216,216,0.5)"
                ],
                [
                    11,
                    "rgba(216,216,216,0.5)"
                ],
                [
                    12,
                    "rgba(216,216,216,0.5)"
                ],
                [
                    13,
                    "rgba(216,216,216,0.5)"
                ],
                [
                    14,
                    "rgba(216,216,216,0.5)"
                ],
                [
                    15,
                    "rgba(216,216,216,0.5)"
                ],
                [
                    16,
                    "rgba(216,216,216,0.5)"
                ]
            ]
        },
        "fill-color": "#BFBFBF",
        "fill-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.5
                ],
                [
                    8,
                    0.56
                ],
                [
                    9,
                    0.61
                ],
                [
                    10,
                    0.67
                ],
                [
                    11,
                    0.72
                ],
                [
                    12,
                    0.78
                ],
                [
                    13,
                    0.83
                ],
                [
                    14,
                    0.89
                ],
                [
                    15,
                    0.94
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "litoral_batimetria_0_pol",
    "minzoom": 7,
    "maxzoom": 16
},
//*********************************FINAL POLIGONS*********************************

//*********************************INICI LINIES*********************************
    {
    "interactive": true,
    "id": "limits_espais_naturals_protegits_parc_nacional_6_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#D7E8D7",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    15,
                    1.7
                ],
                [
                    16,
                    19.84
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    15,
                    1
                ],
                [
                    16,
                    0.25
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "parc_nacional_6_lin",
    "minzoom": 15,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "limits_espais_naturals_protegits_pn_0_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#D7E8D7",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    15,
                    1.28
                ],
                [
                    16,
                    14.88
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    15,
                    1
                ],
                [
                    16,
                    0.25
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "pn_0_lin",
    "minzoom": 15,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "limits_espais_naturals_protegits_zona_periferica_parc_nacional_7_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#D7E8D7",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    15,
                    1.28
                ],
                [
                    16,
                    14.88
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    15,
                    1
                ],
                [
                    16,
                    0.25
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "zona_periferica_parc_nacional_7_lin",
    "minzoom": 15,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "limits_espais_naturals_protegits_pn_mari_3_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#D7E8D7",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    15,
                    1.28
                ],
                [
                    16,
                    14.88
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    15,
                    1
                ],
                [
                    16,
                    0.25
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "pn_mari_3_lin",
    "minzoom": 15,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "limits_espais_naturals_protegits_altres_parcs_5_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#D7E8D7",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    15,
                    0.68
                ],
                [
                    16,
                    7.94
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    15,
                    1
                ],
                [
                    16,
                    0.25
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "altres_parcs_5_lin",
    "minzoom": 15,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "limits_espais_naturals_protegits_pein_1_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#D7E8D7",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    15,
                    1.02
                ],
                [
                    16,
                    11.91
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    15,
                    1
                ],
                [
                    16,
                    0.25
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "pein_1_lin",
    "minzoom": 15,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "limits_espais_naturals_protegits_pein_mari_4_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#D7E8D7",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    15,
                    1.02
                ],
                [
                    16,
                    11.91
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    15,
                    1
                ],
                [
                    16,
                    0.25
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "pein_mari_4_lin",
    "minzoom": 15,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "limits_espais_naturals_protegits_zona_exclosa_2_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#D7E8D7",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    15,
                    0.68
                ],
                [
                    16,
                    7.94
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    15,
                    1
                ],
                [
                    16,
                    0.25
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "zona_exclosa_2_lin",
    "minzoom": 15,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "limits_banda_estat_banda_0_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#CDC0C0",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    1.7
                ],
                [
                    8,
                    3.72
                ],
                [
                    9,
                    5.73
                ],
                [
                    10,
                    7.75
                ],
                [
                    11,
                    9.76
                ],
                [
                    12,
                    11.78
                ],
                [
                    13,
                    13.8
                ],
                [
                    14,
                    15.81
                ],
                [
                    15,
                    17.83
                ],
                [
                    16,
                    19.84
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.35
                ],
                [
                    8,
                    0.35
                ],
                [
                    9,
                    0.35
                ],
                [
                    10,
                    0.35
                ],
                [
                    11,
                    0.35
                ],
                [
                    12,
                    0.35
                ],
                [
                    13,
                    0.35
                ],
                [
                    14,
                    0.35
                ],
                [
                    15,
                    0.35
                ],
                [
                    16,
                    0.35
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "estat_banda_0_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "limits_banda_ccaa_1_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#CDC0C0",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    1.7
                ],
                [
                    8,
                    3.72
                ],
                [
                    9,
                    5.73
                ],
                [
                    10,
                    7.75
                ],
                [
                    11,
                    9.76
                ],
                [
                    12,
                    11.78
                ],
                [
                    13,
                    13.8
                ],
                [
                    14,
                    15.81
                ],
                [
                    15,
                    17.83
                ],
                [
                    16,
                    19.84
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.35
                ],
                [
                    8,
                    0.35
                ],
                [
                    9,
                    0.35
                ],
                [
                    10,
                    0.35
                ],
                [
                    11,
                    0.35
                ],
                [
                    12,
                    0.35
                ],
                [
                    13,
                    0.35
                ],
                [
                    14,
                    0.35
                ],
                [
                    15,
                    0.35
                ],
                [
                    16,
                    0.35
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "ccaa_1_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "limits_banda_comarcal_aprovat_2_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#CDC0C0",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    10,
                    1.28
                ],
                [
                    11,
                    3.54
                ],
                [
                    12,
                    5.81
                ],
                [
                    13,
                    8.08
                ],
                [
                    14,
                    10.35
                ],
                [
                    15,
                    12.61
                ],
                [
                    16,
                    14.88
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    10,
                    0.35
                ],
                [
                    11,
                    0.35
                ],
                [
                    12,
                    0.35
                ],
                [
                    13,
                    0.35
                ],
                [
                    14,
                    0.35
                ],
                [
                    15,
                    0.35
                ],
                [
                    16,
                    0.35
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "comarcal_aprovat_2_lin",
    "minzoom": 10,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "limits_banda_comarcal_pendent_aprovacio_3_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#CDC0C0",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    10,
                    1.28
                ],
                [
                    11,
                    3.54
                ],
                [
                    12,
                    5.81
                ],
                [
                    13,
                    8.08
                ],
                [
                    14,
                    10.35
                ],
                [
                    15,
                    12.61
                ],
                [
                    16,
                    14.88
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    10,
                    0.35
                ],
                [
                    11,
                    0.35
                ],
                [
                    12,
                    0.35
                ],
                [
                    13,
                    0.35
                ],
                [
                    14,
                    0.35
                ],
                [
                    15,
                    0.35
                ],
                [
                    16,
                    0.35
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "comarcal_pendent_aprovacio_3_lin",
    "minzoom": 10,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "limits_banda_comarcal_en_proces_4_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#CDC0C0",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    10,
                    1.28
                ],
                [
                    11,
                    3.54
                ],
                [
                    12,
                    5.81
                ],
                [
                    13,
                    8.08
                ],
                [
                    14,
                    10.35
                ],
                [
                    15,
                    12.61
                ],
                [
                    16,
                    14.88
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    10,
                    0.35
                ],
                [
                    11,
                    0.35
                ],
                [
                    12,
                    0.35
                ],
                [
                    13,
                    0.35
                ],
                [
                    14,
                    0.35
                ],
                [
                    15,
                    0.35
                ],
                [
                    16,
                    0.35
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "comarcal_en_proces_4_lin",
    "minzoom": 10,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "corbes_nivell_corba_de_nivell_mestra_0_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    14,
                    0.6
                ],
                [
                    15,
                    0.6
                ],
                [
                    16,
                    0.6
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    14,
                    0.35
                ],
                [
                    15,
                    0.35
                ],
                [
                    16,
                    0.35
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "corba_de_nivell_mestra_0_lin",
    "minzoom": 14,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "corbes_nivell_corba_de_nivell_mestra_de_depressio_1_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    14,
                    0.6
                ],
                [
                    15,
                    0.6
                ],
                [
                    16,
                    0.6
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    14,
                    0.35
                ],
                [
                    15,
                    0.35
                ],
                [
                    16,
                    0.35
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "corba_de_nivell_mestra_de_depressio_1_lin",
    "minzoom": 14,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "corbes_nivell_corba_de_nivell_mestra_en_gelera_2_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    14,
                    0.6
                ],
                [
                    15,
                    0.6
                ],
                [
                    16,
                    0.6
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    14,
                    0.35
                ],
                [
                    15,
                    0.35
                ],
                [
                    16,
                    0.35
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "corba_de_nivell_mestra_en_gelera_2_lin",
    "minzoom": 14,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "corbes_nivell_corba_de_nivell_senzilla_3_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    15,
                    0.3
                ],
                [
                    16,
                    0.3
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    15,
                    0.35
                ],
                [
                    16,
                    0.35
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "corba_de_nivell_senzilla_3_lin",
    "minzoom": 15,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "corbes_nivell_corba_de_nivell_senzilla_de_depressio_4_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    15,
                    0.3
                ],
                [
                    16,
                    0.3
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    15,
                    0.35
                ],
                [
                    16,
                    0.35
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "corba_de_nivell_senzilla_de_depressio_4_lin",
    "minzoom": 15,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "corbes_nivell_corba_de_nivell_senzilla_en_gelera_5_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    15,
                    0.3
                ],
                [
                    16,
                    0.3
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    15,
                    0.35
                ],
                [
                    16,
                    0.35
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "corba_de_nivell_senzilla_en_gelera_5_lin",
    "minzoom": 15,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "corbes_nivell_desmunt_6_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    15,
                    0.3
                ],
                [
                    16,
                    0.3
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    15,
                    0.35
                ],
                [
                    16,
                    0.35
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "desmunt_6_lin",
    "minzoom": 15,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "corbes_nivell_terraple_7_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    15,
                    0.3
                ],
                [
                    16,
                    0.3
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    15,
                    0.35
                ],
                [
                    16,
                    0.35
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "terraple_7_lin",
    "minzoom": 15,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "hidrografia_linia_riu_riera_torrent_0_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#A1BDC1",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    11,
                    0.13
                ],
                [
                    12,
                    0.4
                ],
                [
                    13,
                    0.67
                ],
                [
                    14,
                    0.94
                ],
                [
                    15,
                    1.22
                ],
                [
                    16,
                    1.49
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    11,
                    0.35
                ],
                [
                    12,
                    0.48
                ],
                [
                    13,
                    0.61
                ],
                [
                    14,
                    0.74
                ],
                [
                    15,
                    0.87
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "riu_riera_torrent_0_lin",
    "minzoom": 11,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "hidrografia_linia_canal_damplada_inferior_a_3_metres_1_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#A1BDC1",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    11,
                    0.13
                ],
                [
                    12,
                    0.4
                ],
                [
                    13,
                    0.67
                ],
                [
                    14,
                    0.94
                ],
                [
                    15,
                    1.22
                ],
                [
                    16,
                    1.49
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    11,
                    0.35
                ],
                [
                    12,
                    0.48
                ],
                [
                    13,
                    0.61
                ],
                [
                    14,
                    0.74
                ],
                [
                    15,
                    0.87
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "canal_damplada_inferior_a_3_metres_1_lin",
    "minzoom": 11,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "hidrografia_linia_canal_damplada_igual_o_superior_a_3_metres_2_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#A1BDC1",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    11,
                    0.34
                ],
                [
                    12,
                    1.07
                ],
                [
                    13,
                    1.79
                ],
                [
                    14,
                    2.52
                ],
                [
                    15,
                    3.24
                ],
                [
                    16,
                    3.97
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    11,
                    0.35
                ],
                [
                    12,
                    0.48
                ],
                [
                    13,
                    0.61
                ],
                [
                    14,
                    0.74
                ],
                [
                    15,
                    0.87
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "canal_damplada_igual_o_superior_a_3_metres_2_lin",
    "minzoom": 11,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "hidrografia_linia_canal_damplada_igual_o_superior_a_3_metres_2_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    11,
                    0.17
                ],
                [
                    12,
                    0.53
                ],
                [
                    13,
                    0.9
                ],
                [
                    14,
                    1.26
                ],
                [
                    15,
                    1.62
                ],
                [
                    16,
                    1.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    11,
                    0.25
                ],
                [
                    12,
                    0.4
                ],
                [
                    13,
                    0.55
                ],
                [
                    14,
                    0.7
                ],
                [
                    15,
                    0.85
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "canal_damplada_igual_o_superior_a_3_metres_2_lin",
    "minzoom": 11,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "hidrografia_linia_canal_en_c_p_3_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#A1BDC1",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.13
                ],
                [
                    13,
                    0.47
                ],
                [
                    14,
                    0.81
                ],
                [
                    15,
                    1.15
                ],
                [
                    16,
                    1.49
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.35
                ],
                [
                    13,
                    0.51
                ],
                [
                    14,
                    0.68
                ],
                [
                    15,
                    0.84
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            2,
            4,
            2,
            4,
            0
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "canal_en_c_p_3_lin",
    "minzoom": 12,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "hidrografia_linia_conduccio_daigua_4_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#A1BDC1",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.13
                ],
                [
                    13,
                    0.47
                ],
                [
                    14,
                    0.81
                ],
                [
                    15,
                    1.15
                ],
                [
                    16,
                    1.49
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.35
                ],
                [
                    13,
                    0.51
                ],
                [
                    14,
                    0.68
                ],
                [
                    15,
                    0.84
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "conduccio_daigua_4_lin",
    "minzoom": 12,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "hidrografia_linia_embassament_en_c_p_7_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#A1BDC1",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.13
                ],
                [
                    8,
                    0.28
                ],
                [
                    9,
                    0.43
                ],
                [
                    10,
                    0.58
                ],
                [
                    11,
                    0.73
                ],
                [
                    12,
                    0.88
                ],
                [
                    13,
                    1.03
                ],
                [
                    14,
                    1.19
                ],
                [
                    15,
                    1.34
                ],
                [
                    16,
                    1.49
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.35
                ],
                [
                    8,
                    0.42
                ],
                [
                    9,
                    0.49
                ],
                [
                    10,
                    0.57
                ],
                [
                    11,
                    0.64
                ],
                [
                    12,
                    0.71
                ],
                [
                    13,
                    0.78
                ],
                [
                    14,
                    0.86
                ],
                [
                    15,
                    0.93
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            1,
            3,
            2,
            3,
            1
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "embassament_en_c_p_7_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "hidrografia_linia_estany_no_permanent_aigues_maximes_8_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#A1BDC1",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.09
                ],
                [
                    13,
                    0.31
                ],
                [
                    14,
                    0.54
                ],
                [
                    15,
                    0.77
                ],
                [
                    16,
                    0.99
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.35
                ],
                [
                    13,
                    0.51
                ],
                [
                    14,
                    0.68
                ],
                [
                    15,
                    0.84
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            1,
            4,
            2,
            4,
            1
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "estany_no_permanent_aigues_maximes_8_lin",
    "minzoom": 12,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "hidrografia_linia_punt_de_perdua_de_drenatge_9_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#A1BDC1",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.13
                ],
                [
                    13,
                    0.47
                ],
                [
                    14,
                    0.81
                ],
                [
                    15,
                    1.15
                ],
                [
                    16,
                    1.49
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.35
                ],
                [
                    13,
                    0.51
                ],
                [
                    14,
                    0.68
                ],
                [
                    15,
                    0.84
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            2,
            4,
            2,
            4,
            0
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "punt_de_perdua_de_drenatge_9_lin",
    "minzoom": 12,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "hidrografia_linia_conduccio_subterrania_10_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#A1BDC1",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.13
                ],
                [
                    13,
                    0.47
                ],
                [
                    14,
                    0.81
                ],
                [
                    15,
                    1.15
                ],
                [
                    16,
                    1.49
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.35
                ],
                [
                    13,
                    0.51
                ],
                [
                    14,
                    0.68
                ],
                [
                    15,
                    0.84
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            1,
            5,
            2,
            5,
            1
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "conduccio_subterrania_10_lin",
    "minzoom": 12,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "hidrografia_linia_rambla_inundable_12_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#A1BDC1",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.13
                ],
                [
                    13,
                    0.47
                ],
                [
                    14,
                    0.81
                ],
                [
                    15,
                    1.15
                ],
                [
                    16,
                    1.49
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.35
                ],
                [
                    13,
                    0.51
                ],
                [
                    14,
                    0.68
                ],
                [
                    15,
                    0.84
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            2,
            4,
            2,
            4,
            2
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "rambla_inundable_12_lin",
    "minzoom": 12,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "hidrografia_linia_pattern_rambla_13_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#A1BDC1",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.04
                ],
                [
                    13,
                    0.16
                ],
                [
                    14,
                    0.27
                ],
                [
                    15,
                    0.38
                ],
                [
                    16,
                    0.5
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.35
                ],
                [
                    13,
                    0.51
                ],
                [
                    14,
                    0.68
                ],
                [
                    15,
                    0.84
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "pattern_rambla_13_lin",
    "minzoom": 12,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "hidrografia_linia_curs_teoric_11_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#A1BDC1",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.13
                ],
                [
                    13,
                    0.47
                ],
                [
                    14,
                    0.81
                ],
                [
                    15,
                    1.15
                ],
                [
                    16,
                    1.49
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.35
                ],
                [
                    13,
                    0.51
                ],
                [
                    14,
                    0.68
                ],
                [
                    15,
                    0.84
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            1,
            3,
            2,
            3,
            1
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "curs_teoric_11_lin",
    "minzoom": 12,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "limit_hidrografia_embassament_0_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#CCCCCC",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.09
                ],
                [
                    8,
                    0.19
                ],
                [
                    9,
                    0.29
                ],
                [
                    10,
                    0.39
                ],
                [
                    11,
                    0.49
                ],
                [
                    12,
                    0.59
                ],
                [
                    13,
                    0.69
                ],
                [
                    14,
                    0.79
                ],
                [
                    15,
                    0.89
                ],
                [
                    16,
                    0.99
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.75
                ],
                [
                    8,
                    0.78
                ],
                [
                    9,
                    0.81
                ],
                [
                    10,
                    0.83
                ],
                [
                    11,
                    0.86
                ],
                [
                    12,
                    0.89
                ],
                [
                    13,
                    0.92
                ],
                [
                    14,
                    0.94
                ],
                [
                    15,
                    0.97
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "embassament_0_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "limit_hidrografia_estany_1_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#CCCCCC",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.09
                ],
                [
                    8,
                    0.19
                ],
                [
                    9,
                    0.29
                ],
                [
                    10,
                    0.39
                ],
                [
                    11,
                    0.49
                ],
                [
                    12,
                    0.59
                ],
                [
                    13,
                    0.69
                ],
                [
                    14,
                    0.79
                ],
                [
                    15,
                    0.89
                ],
                [
                    16,
                    0.99
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.75
                ],
                [
                    8,
                    0.78
                ],
                [
                    9,
                    0.81
                ],
                [
                    10,
                    0.83
                ],
                [
                    11,
                    0.86
                ],
                [
                    12,
                    0.89
                ],
                [
                    13,
                    0.92
                ],
                [
                    14,
                    0.94
                ],
                [
                    15,
                    0.97
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "estany_1_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "limit_hidrografia_riu_doble_marge_2_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#CCCCCC",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.08
                ],
                [
                    8,
                    0.18
                ],
                [
                    9,
                    0.28
                ],
                [
                    10,
                    0.38
                ],
                [
                    11,
                    0.48
                ],
                [
                    12,
                    0.58
                ],
                [
                    13,
                    0.68
                ],
                [
                    14,
                    0.78
                ],
                [
                    15,
                    0.88
                ],
                [
                    16,
                    0.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.75
                ],
                [
                    8,
                    0.78
                ],
                [
                    9,
                    0.81
                ],
                [
                    10,
                    0.83
                ],
                [
                    11,
                    0.86
                ],
                [
                    12,
                    0.89
                ],
                [
                    13,
                    0.92
                ],
                [
                    14,
                    0.94
                ],
                [
                    15,
                    0.97
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "riu_doble_marge_2_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "limit_hidrografia_bassa_piscina_3_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#CCCCCC",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    11,
                    0.09
                ],
                [
                    12,
                    0.27
                ],
                [
                    13,
                    0.45
                ],
                [
                    14,
                    0.63
                ],
                [
                    15,
                    0.81
                ],
                [
                    16,
                    0.99
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    11,
                    0.25
                ],
                [
                    12,
                    0.4
                ],
                [
                    13,
                    0.55
                ],
                [
                    14,
                    0.7
                ],
                [
                    15,
                    0.85
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "bassa_piscina_3_lin",
    "minzoom": 11,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "limit_hidrografia_estany_no_permanent_4_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#CCCCCC",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    11,
                    0.09
                ],
                [
                    12,
                    0.27
                ],
                [
                    13,
                    0.45
                ],
                [
                    14,
                    0.63
                ],
                [
                    15,
                    0.81
                ],
                [
                    16,
                    0.99
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    11,
                    0.25
                ],
                [
                    12,
                    0.4
                ],
                [
                    13,
                    0.55
                ],
                [
                    14,
                    0.7
                ],
                [
                    15,
                    0.85
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            1,
            3,
            2,
            3,
            1
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "estany_no_permanent_4_lin",
    "minzoom": 11,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "limit_hidrografia_moll_dic_fluvial_limit_hidrografia_5_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#CCCCCC",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    11,
                    0.09
                ],
                [
                    12,
                    0.27
                ],
                [
                    13,
                    0.45
                ],
                [
                    14,
                    0.63
                ],
                [
                    15,
                    0.81
                ],
                [
                    16,
                    0.99
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    11,
                    0.25
                ],
                [
                    12,
                    0.4
                ],
                [
                    13,
                    0.55
                ],
                [
                    14,
                    0.7
                ],
                [
                    15,
                    0.85
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "moll_dic_fluvial_limit_hidrografia_5_lin",
    "minzoom": 11,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "hidrografia_construccions_mur_de_contencio_0_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#FFFFFF",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    11,
                    0.09
                ],
                [
                    12,
                    0.27
                ],
                [
                    13,
                    0.45
                ],
                [
                    14,
                    0.63
                ],
                [
                    15,
                    0.81
                ],
                [
                    16,
                    0.99
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    11,
                    0.25
                ],
                [
                    12,
                    0.4
                ],
                [
                    13,
                    0.55
                ],
                [
                    14,
                    0.7
                ],
                [
                    15,
                    0.85
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "mur_de_contencio_0_lin",
    "minzoom": 11,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "hidrografia_construccions_presa_resclosa_1_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#FFFFFF",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    11,
                    0.17
                ],
                [
                    12,
                    0.53
                ],
                [
                    13,
                    0.9
                ],
                [
                    14,
                    1.26
                ],
                [
                    15,
                    1.62
                ],
                [
                    16,
                    1.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    11,
                    0.25
                ],
                [
                    12,
                    0.4
                ],
                [
                    13,
                    0.55
                ],
                [
                    14,
                    0.7
                ],
                [
                    15,
                    0.85
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "presa_resclosa_1_lin",
    "minzoom": 11,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "hidrografia_construccions_moll_dic_fluvial_construccions_2_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#FFFFFF",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    11,
                    0.09
                ],
                [
                    12,
                    0.27
                ],
                [
                    13,
                    0.45
                ],
                [
                    14,
                    0.63
                ],
                [
                    15,
                    0.81
                ],
                [
                    16,
                    0.99
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    11,
                    0.25
                ],
                [
                    12,
                    0.4
                ],
                [
                    13,
                    0.55
                ],
                [
                    14,
                    0.7
                ],
                [
                    15,
                    0.85
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "moll_dic_fluvial_construccions_2_lin",
    "minzoom": 11,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "hidrografia_construccions_embarcador_fluvial_3_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#FFFFFF",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    11,
                    0.09
                ],
                [
                    12,
                    0.27
                ],
                [
                    13,
                    0.45
                ],
                [
                    14,
                    0.63
                ],
                [
                    15,
                    0.81
                ],
                [
                    16,
                    0.99
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    11,
                    0.25
                ],
                [
                    12,
                    0.4
                ],
                [
                    13,
                    0.55
                ],
                [
                    14,
                    0.7
                ],
                [
                    15,
                    0.85
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "embarcador_fluvial_3_lin",
    "minzoom": 11,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "litoral_linia_linia_de_costa_0_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#FFFFFF",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.13
                ],
                [
                    8,
                    0.28
                ],
                [
                    9,
                    0.43
                ],
                [
                    10,
                    0.58
                ],
                [
                    11,
                    0.73
                ],
                [
                    12,
                    0.88
                ],
                [
                    13,
                    1.03
                ],
                [
                    14,
                    1.19
                ],
                [
                    15,
                    1.34
                ],
                [
                    16,
                    1.49
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.75
                ],
                [
                    8,
                    0.78
                ],
                [
                    9,
                    0.81
                ],
                [
                    10,
                    0.83
                ],
                [
                    11,
                    0.86
                ],
                [
                    12,
                    0.89
                ],
                [
                    13,
                    0.92
                ],
                [
                    14,
                    0.94
                ],
                [
                    15,
                    0.97
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "linia_de_costa_0_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "litoral_linia_moll_dic_1_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#FFFFFF",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.1
                ],
                [
                    8,
                    0.22
                ],
                [
                    9,
                    0.34
                ],
                [
                    10,
                    0.46
                ],
                [
                    11,
                    0.59
                ],
                [
                    12,
                    0.71
                ],
                [
                    13,
                    0.83
                ],
                [
                    14,
                    0.95
                ],
                [
                    15,
                    1.07
                ],
                [
                    16,
                    1.19
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.75
                ],
                [
                    8,
                    0.78
                ],
                [
                    9,
                    0.81
                ],
                [
                    10,
                    0.83
                ],
                [
                    11,
                    0.86
                ],
                [
                    12,
                    0.89
                ],
                [
                    13,
                    0.92
                ],
                [
                    14,
                    0.94
                ],
                [
                    15,
                    0.97
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "moll_dic_1_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "litoral_linia_embarcador_3_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#FFFFFF",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    11,
                    0.09
                ],
                [
                    12,
                    0.27
                ],
                [
                    13,
                    0.45
                ],
                [
                    14,
                    0.63
                ],
                [
                    15,
                    0.81
                ],
                [
                    16,
                    0.99
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    11,
                    0.25
                ],
                [
                    12,
                    0.4
                ],
                [
                    13,
                    0.55
                ],
                [
                    14,
                    0.7
                ],
                [
                    15,
                    0.85
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "embarcador_3_lin",
    "minzoom": 11,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "litoral_linia_pantala_4_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#FFFFFF",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    11,
                    0.1
                ],
                [
                    12,
                    0.32
                ],
                [
                    13,
                    0.54
                ],
                [
                    14,
                    0.76
                ],
                [
                    15,
                    0.97
                ],
                [
                    16,
                    1.19
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    11,
                    0.25
                ],
                [
                    12,
                    0.4
                ],
                [
                    13,
                    0.55
                ],
                [
                    14,
                    0.7
                ],
                [
                    15,
                    0.85
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "pantala_4_lin",
    "minzoom": 11,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "litoral_linia_perfil_escullera_5_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#FFFFFF",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    11,
                    0.1
                ],
                [
                    12,
                    0.32
                ],
                [
                    13,
                    0.54
                ],
                [
                    14,
                    0.76
                ],
                [
                    15,
                    0.97
                ],
                [
                    16,
                    1.19
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    11,
                    0.25
                ],
                [
                    12,
                    0.4
                ],
                [
                    13,
                    0.55
                ],
                [
                    14,
                    0.7
                ],
                [
                    15,
                    0.85
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "perfil_escullera_5_lin",
    "minzoom": 11,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "litoral_linia_moll_dic_en_c_p_2_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#FFFFFF",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    11,
                    0.1
                ],
                [
                    12,
                    0.32
                ],
                [
                    13,
                    0.54
                ],
                [
                    14,
                    0.76
                ],
                [
                    15,
                    0.97
                ],
                [
                    16,
                    1.19
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    11,
                    0.25
                ],
                [
                    12,
                    0.4
                ],
                [
                    13,
                    0.55
                ],
                [
                    14,
                    0.7
                ],
                [
                    15,
                    0.85
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            3,
            3,
            0
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "moll_dic_en_c_p_2_lin",
    "minzoom": 11,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "litoral_linia_tancament_virtual_6_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#FFFFFF",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    11,
                    0.09
                ],
                [
                    12,
                    0.27
                ],
                [
                    13,
                    0.45
                ],
                [
                    14,
                    0.63
                ],
                [
                    15,
                    0.81
                ],
                [
                    16,
                    0.99
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    11,
                    0.25
                ],
                [
                    12,
                    0.4
                ],
                [
                    13,
                    0.55
                ],
                [
                    14,
                    0.7
                ],
                [
                    15,
                    0.85
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "tancament_virtual_6_lin",
    "minzoom": 11,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "litoral_linia_pattern_platja_7_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#FFFFFF",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    11,
                    0.04
                ],
                [
                    12,
                    0.13
                ],
                [
                    13,
                    0.22
                ],
                [
                    14,
                    0.31
                ],
                [
                    15,
                    0.41
                ],
                [
                    16,
                    0.5
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    11,
                    0.25
                ],
                [
                    12,
                    0.4
                ],
                [
                    13,
                    0.55
                ],
                [
                    14,
                    0.7
                ],
                [
                    15,
                    0.85
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "pattern_platja_7_lin",
    "minzoom": 11,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "usos_i_cobertes_del_sol_linia_abocador_1_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#D8D8D8",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.07
                ],
                [
                    13,
                    0.25
                ],
                [
                    14,
                    0.43
                ],
                [
                    15,
                    0.61
                ],
                [
                    16,
                    0.79
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "abocador_1_lin",
    "minzoom": 12,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "usos_i_cobertes_del_sol_linia_abocador_1_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.06
                ],
                [
                    13,
                    0.22
                ],
                [
                    14,
                    0.38
                ],
                [
                    15,
                    0.54
                ],
                [
                    16,
                    0.7
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "abocador_1_lin",
    "minzoom": 12,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "usos_i_cobertes_del_sol_linia_abocador_1_lin_3",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#D8D8D8",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.06
                ],
                [
                    13,
                    0.22
                ],
                [
                    14,
                    0.38
                ],
                [
                    15,
                    0.54
                ],
                [
                    16,
                    0.7
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "abocador_1_lin",
    "minzoom": 12,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "usos_i_cobertes_del_sol_linia_runes_mineres_2_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#D8D8D8",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.07
                ],
                [
                    13,
                    0.25
                ],
                [
                    14,
                    0.43
                ],
                [
                    15,
                    0.61
                ],
                [
                    16,
                    0.79
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "runes_mineres_2_lin",
    "minzoom": 12,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "usos_i_cobertes_del_sol_linia_runes_mineres_2_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.06
                ],
                [
                    13,
                    0.22
                ],
                [
                    14,
                    0.38
                ],
                [
                    15,
                    0.54
                ],
                [
                    16,
                    0.7
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "runes_mineres_2_lin",
    "minzoom": 12,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "usos_i_cobertes_del_sol_linia_runes_mineres_2_lin_3",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#D8D8D8",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.06
                ],
                [
                    13,
                    0.22
                ],
                [
                    14,
                    0.38
                ],
                [
                    15,
                    0.54
                ],
                [
                    16,
                    0.7
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "runes_mineres_2_lin",
    "minzoom": 12,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_en_tunel_autopista_en_tunel_0_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.13
                ],
                [
                    8,
                    0.28
                ],
                [
                    9,
                    0.43
                ],
                [
                    10,
                    0.58
                ],
                [
                    11,
                    0.73
                ],
                [
                    12,
                    0.88
                ],
                [
                    13,
                    1.03
                ],
                [
                    14,
                    1.19
                ],
                [
                    15,
                    1.34
                ],
                [
                    16,
                    1.49
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            2,
            4,
            1
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "autopista_en_tunel_0_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_en_tunel_autovia_en_tunel_1_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.13
                ],
                [
                    8,
                    0.28
                ],
                [
                    9,
                    0.43
                ],
                [
                    10,
                    0.58
                ],
                [
                    11,
                    0.73
                ],
                [
                    12,
                    0.88
                ],
                [
                    13,
                    1.03
                ],
                [
                    14,
                    1.19
                ],
                [
                    15,
                    1.34
                ],
                [
                    16,
                    1.49
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            2,
            4,
            1
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "autovia_en_tunel_1_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_en_tunel_autovia_blau_cel_en_tunel_13_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.13
                ],
                [
                    8,
                    0.28
                ],
                [
                    9,
                    0.43
                ],
                [
                    10,
                    0.58
                ],
                [
                    11,
                    0.73
                ],
                [
                    12,
                    0.88
                ],
                [
                    13,
                    1.03
                ],
                [
                    14,
                    1.19
                ],
                [
                    15,
                    1.34
                ],
                [
                    16,
                    1.49
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            2,
            4,
            1
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "autovia_blau_cel_en_tunel_13_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_en_tunel_enllac_autopista_tunel_12_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.09
                ],
                [
                    10,
                    0.21
                ],
                [
                    11,
                    0.34
                ],
                [
                    12,
                    0.47
                ],
                [
                    13,
                    0.6
                ],
                [
                    14,
                    0.73
                ],
                [
                    15,
                    0.86
                ],
                [
                    16,
                    0.99
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            2,
            4,
            1
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "enllac_autopista_tunel_12_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_en_tunel_enllac_autovia_tunel_10_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.07
                ],
                [
                    10,
                    0.17
                ],
                [
                    11,
                    0.28
                ],
                [
                    12,
                    0.38
                ],
                [
                    13,
                    0.48
                ],
                [
                    14,
                    0.59
                ],
                [
                    15,
                    0.69
                ],
                [
                    16,
                    0.79
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            2,
            4,
            1
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "enllac_autovia_tunel_10_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_en_tunel_enllac_autovia_blau_cel_en_tunel_14_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.07
                ],
                [
                    8,
                    0.15
                ],
                [
                    9,
                    0.23
                ],
                [
                    10,
                    0.31
                ],
                [
                    11,
                    0.39
                ],
                [
                    12,
                    0.47
                ],
                [
                    13,
                    0.55
                ],
                [
                    14,
                    0.63
                ],
                [
                    15,
                    0.71
                ],
                [
                    16,
                    0.79
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            2,
            4,
            1
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "enllac_autovia_blau_cel_en_tunel_14_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_en_tunel_via_preferent_doble_calcada_en_tunel_2_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.07
                ],
                [
                    8,
                    0.15
                ],
                [
                    9,
                    0.23
                ],
                [
                    10,
                    0.31
                ],
                [
                    11,
                    0.39
                ],
                [
                    12,
                    0.47
                ],
                [
                    13,
                    0.55
                ],
                [
                    14,
                    0.63
                ],
                [
                    15,
                    0.71
                ],
                [
                    16,
                    0.79
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            1,
            3,
            1
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "via_preferent_doble_calcada_en_tunel_2_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_en_tunel_via_preferent_en_tunel_3_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.07
                ],
                [
                    8,
                    0.15
                ],
                [
                    9,
                    0.23
                ],
                [
                    10,
                    0.31
                ],
                [
                    11,
                    0.39
                ],
                [
                    12,
                    0.47
                ],
                [
                    13,
                    0.55
                ],
                [
                    14,
                    0.63
                ],
                [
                    15,
                    0.71
                ],
                [
                    16,
                    0.79
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            1,
            3,
            1
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "via_preferent_en_tunel_3_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_en_tunel_enllac_xarxa_basica_en_tunel_11_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.09
                ],
                [
                    8,
                    0.19
                ],
                [
                    9,
                    0.29
                ],
                [
                    10,
                    0.39
                ],
                [
                    11,
                    0.49
                ],
                [
                    12,
                    0.59
                ],
                [
                    13,
                    0.69
                ],
                [
                    14,
                    0.79
                ],
                [
                    15,
                    0.89
                ],
                [
                    16,
                    0.99
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            2,
            4,
            1
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "enllac_xarxa_basica_en_tunel_11_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_en_tunel_xarxa_basica_doble_calcada_en_tunel_4_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.07
                ],
                [
                    8,
                    0.15
                ],
                [
                    9,
                    0.23
                ],
                [
                    10,
                    0.31
                ],
                [
                    11,
                    0.39
                ],
                [
                    12,
                    0.47
                ],
                [
                    13,
                    0.55
                ],
                [
                    14,
                    0.63
                ],
                [
                    15,
                    0.71
                ],
                [
                    16,
                    0.79
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            2,
            4,
            1
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "xarxa_basica_doble_calcada_en_tunel_4_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_en_tunel_xarxa_basica_en_tunel_5_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.07
                ],
                [
                    8,
                    0.15
                ],
                [
                    9,
                    0.23
                ],
                [
                    10,
                    0.31
                ],
                [
                    11,
                    0.39
                ],
                [
                    12,
                    0.47
                ],
                [
                    13,
                    0.55
                ],
                [
                    14,
                    0.63
                ],
                [
                    15,
                    0.71
                ],
                [
                    16,
                    0.79
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            1,
            3,
            1
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "xarxa_basica_en_tunel_5_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_en_tunel_xarxa_comarcal_doble_calcada_en_tunel_6_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    8,
                    0.07
                ],
                [
                    9,
                    0.16
                ],
                [
                    10,
                    0.25
                ],
                [
                    11,
                    0.34
                ],
                [
                    12,
                    0.43
                ],
                [
                    13,
                    0.52
                ],
                [
                    14,
                    0.61
                ],
                [
                    15,
                    0.7
                ],
                [
                    16,
                    0.79
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            1,
            3,
            1
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "xarxa_comarcal_doble_calcada_en_tunel_6_lin",
    "minzoom": 8,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_en_tunel_xarxa_comarcal_en_tunel_7_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    8,
                    0.07
                ],
                [
                    9,
                    0.16
                ],
                [
                    10,
                    0.25
                ],
                [
                    11,
                    0.34
                ],
                [
                    12,
                    0.43
                ],
                [
                    13,
                    0.52
                ],
                [
                    14,
                    0.61
                ],
                [
                    15,
                    0.7
                ],
                [
                    16,
                    0.79
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            1,
            3,
            1
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "xarxa_comarcal_en_tunel_7_lin",
    "minzoom": 8,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_en_tunel_xarxa_local_doble_calcada_en_tunel_8_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.07
                ],
                [
                    8,
                    0.15
                ],
                [
                    9,
                    0.23
                ],
                [
                    10,
                    0.31
                ],
                [
                    11,
                    0.39
                ],
                [
                    12,
                    0.47
                ],
                [
                    13,
                    0.55
                ],
                [
                    14,
                    0.63
                ],
                [
                    15,
                    0.71
                ],
                [
                    16,
                    0.79
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            1,
            3,
            1
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "xarxa_local_doble_calcada_en_tunel_8_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_en_tunel_xarxa_local_en_tunel_9_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.07
                ],
                [
                    8,
                    0.15
                ],
                [
                    9,
                    0.23
                ],
                [
                    10,
                    0.31
                ],
                [
                    11,
                    0.39
                ],
                [
                    12,
                    0.47
                ],
                [
                    13,
                    0.55
                ],
                [
                    14,
                    0.63
                ],
                [
                    15,
                    0.71
                ],
                [
                    16,
                    0.79
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            1,
            3,
            1
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "xarxa_local_en_tunel_9_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_en_c_p_autopista_en_c_p_0_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.13
                ],
                [
                    8,
                    0.28
                ],
                [
                    9,
                    0.43
                ],
                [
                    10,
                    0.58
                ],
                [
                    11,
                    0.73
                ],
                [
                    12,
                    0.88
                ],
                [
                    13,
                    1.03
                ],
                [
                    14,
                    1.19
                ],
                [
                    15,
                    1.34
                ],
                [
                    16,
                    1.49
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "autopista_en_c_p_0_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_en_c_p_autopista_en_c_p_0_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.13
                ],
                [
                    8,
                    0.28
                ],
                [
                    9,
                    0.43
                ],
                [
                    10,
                    0.58
                ],
                [
                    11,
                    0.73
                ],
                [
                    12,
                    0.88
                ],
                [
                    13,
                    1.03
                ],
                [
                    14,
                    1.19
                ],
                [
                    15,
                    1.34
                ],
                [
                    16,
                    1.49
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "autopista_en_c_p_0_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_en_c_p_autopista_en_c_p_0_lin_3",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.09
                ],
                [
                    8,
                    0.19
                ],
                [
                    9,
                    0.29
                ],
                [
                    10,
                    0.39
                ],
                [
                    11,
                    0.49
                ],
                [
                    12,
                    0.59
                ],
                [
                    13,
                    0.69
                ],
                [
                    14,
                    0.79
                ],
                [
                    15,
                    0.89
                ],
                [
                    16,
                    0.99
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "autopista_en_c_p_0_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_en_c_p_autovia_en_c_p_1_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.13
                ],
                [
                    8,
                    0.28
                ],
                [
                    9,
                    0.43
                ],
                [
                    10,
                    0.58
                ],
                [
                    11,
                    0.73
                ],
                [
                    12,
                    0.88
                ],
                [
                    13,
                    1.03
                ],
                [
                    14,
                    1.19
                ],
                [
                    15,
                    1.34
                ],
                [
                    16,
                    1.49
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "autovia_en_c_p_1_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_en_c_p_autovia_en_c_p_1_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.13
                ],
                [
                    8,
                    0.28
                ],
                [
                    9,
                    0.43
                ],
                [
                    10,
                    0.58
                ],
                [
                    11,
                    0.73
                ],
                [
                    12,
                    0.88
                ],
                [
                    13,
                    1.03
                ],
                [
                    14,
                    1.19
                ],
                [
                    15,
                    1.34
                ],
                [
                    16,
                    1.49
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "autovia_en_c_p_1_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_en_c_p_autovia_en_c_p_1_lin_3",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.09
                ],
                [
                    8,
                    0.19
                ],
                [
                    9,
                    0.29
                ],
                [
                    10,
                    0.39
                ],
                [
                    11,
                    0.49
                ],
                [
                    12,
                    0.59
                ],
                [
                    13,
                    0.69
                ],
                [
                    14,
                    0.79
                ],
                [
                    15,
                    0.89
                ],
                [
                    16,
                    0.99
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "autovia_en_c_p_1_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_en_c_p_via_preferent_doble_calcada_en_c_p_2_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.77
                ],
                [
                    8,
                    1.67
                ],
                [
                    9,
                    2.58
                ],
                [
                    10,
                    3.49
                ],
                [
                    11,
                    4.39
                ],
                [
                    12,
                    5.3
                ],
                [
                    13,
                    6.21
                ],
                [
                    14,
                    7.11
                ],
                [
                    15,
                    8.02
                ],
                [
                    16,
                    8.93
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            1,
            5,
            1
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "via_preferent_doble_calcada_en_c_p_2_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_en_c_p_via_preferent_doble_calcada_en_c_p_2_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.68
                ],
                [
                    8,
                    1.49
                ],
                [
                    9,
                    2.29
                ],
                [
                    10,
                    3.1
                ],
                [
                    11,
                    3.91
                ],
                [
                    12,
                    4.71
                ],
                [
                    13,
                    5.52
                ],
                [
                    14,
                    6.32
                ],
                [
                    15,
                    7.13
                ],
                [
                    16,
                    7.94
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            1,
            5,
            1
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "via_preferent_doble_calcada_en_c_p_2_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_en_c_p_via_preferent_doble_calcada_en_c_p_2_lin_3",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.09
                ],
                [
                    8,
                    0.19
                ],
                [
                    9,
                    0.29
                ],
                [
                    10,
                    0.39
                ],
                [
                    11,
                    0.49
                ],
                [
                    12,
                    0.59
                ],
                [
                    13,
                    0.69
                ],
                [
                    14,
                    0.79
                ],
                [
                    15,
                    0.89
                ],
                [
                    16,
                    0.99
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            1,
            5,
            1
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "via_preferent_doble_calcada_en_c_p_2_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_en_c_p_via_preferent_en_c_p_3_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.6
                ],
                [
                    8,
                    1.3
                ],
                [
                    9,
                    2.01
                ],
                [
                    10,
                    2.71
                ],
                [
                    11,
                    3.42
                ],
                [
                    12,
                    4.12
                ],
                [
                    13,
                    4.83
                ],
                [
                    14,
                    5.53
                ],
                [
                    15,
                    6.24
                ],
                [
                    16,
                    6.94
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            2,
            8,
            2
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "via_preferent_en_c_p_3_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_en_c_p_via_preferent_en_c_p_3_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.51
                ],
                [
                    8,
                    1.11
                ],
                [
                    9,
                    1.72
                ],
                [
                    10,
                    2.32
                ],
                [
                    11,
                    2.93
                ],
                [
                    12,
                    3.53
                ],
                [
                    13,
                    4.14
                ],
                [
                    14,
                    4.74
                ],
                [
                    15,
                    5.35
                ],
                [
                    16,
                    5.95
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            2,
            8,
            2
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "via_preferent_en_c_p_3_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_en_c_p_xarxa_basica_doble_calcada_en_c_p_4_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.85
                ],
                [
                    8,
                    1.86
                ],
                [
                    9,
                    2.87
                ],
                [
                    10,
                    3.87
                ],
                [
                    11,
                    4.88
                ],
                [
                    12,
                    5.89
                ],
                [
                    13,
                    6.9
                ],
                [
                    14,
                    7.91
                ],
                [
                    15,
                    8.91
                ],
                [
                    16,
                    9.92
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            1,
            5,
            1
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "xarxa_basica_doble_calcada_en_c_p_4_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_en_c_p_xarxa_basica_doble_calcada_en_c_p_4_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.6
                ],
                [
                    8,
                    1.3
                ],
                [
                    9,
                    2.01
                ],
                [
                    10,
                    2.71
                ],
                [
                    11,
                    3.42
                ],
                [
                    12,
                    4.12
                ],
                [
                    13,
                    4.83
                ],
                [
                    14,
                    5.53
                ],
                [
                    15,
                    6.24
                ],
                [
                    16,
                    6.94
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            1,
            5,
            1
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "xarxa_basica_doble_calcada_en_c_p_4_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_en_c_p_xarxa_basica_doble_calcada_en_c_p_4_lin_3",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.07
                ],
                [
                    8,
                    0.15
                ],
                [
                    9,
                    0.23
                ],
                [
                    10,
                    0.31
                ],
                [
                    11,
                    0.39
                ],
                [
                    12,
                    0.47
                ],
                [
                    13,
                    0.55
                ],
                [
                    14,
                    0.63
                ],
                [
                    15,
                    0.71
                ],
                [
                    16,
                    0.79
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            1,
            5,
            1
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "xarxa_basica_doble_calcada_en_c_p_4_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_en_c_p_xarxa_basica_en_c_p_5_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.6
                ],
                [
                    8,
                    1.3
                ],
                [
                    9,
                    2.01
                ],
                [
                    10,
                    2.71
                ],
                [
                    11,
                    3.42
                ],
                [
                    12,
                    4.12
                ],
                [
                    13,
                    4.83
                ],
                [
                    14,
                    5.53
                ],
                [
                    15,
                    6.24
                ],
                [
                    16,
                    6.94
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            2,
            8,
            2
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "xarxa_basica_en_c_p_5_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_en_c_p_xarxa_basica_en_c_p_5_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.51
                ],
                [
                    8,
                    1.11
                ],
                [
                    9,
                    1.72
                ],
                [
                    10,
                    2.32
                ],
                [
                    11,
                    2.93
                ],
                [
                    12,
                    3.53
                ],
                [
                    13,
                    4.14
                ],
                [
                    14,
                    4.74
                ],
                [
                    15,
                    5.35
                ],
                [
                    16,
                    5.95
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            2,
            8,
            2
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "xarxa_basica_en_c_p_5_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_en_c_p_xarxa_comarcal_doble_calcada_en_c_p_6_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    8,
                    0.6
                ],
                [
                    9,
                    1.39
                ],
                [
                    10,
                    2.18
                ],
                [
                    11,
                    2.98
                ],
                [
                    12,
                    3.77
                ],
                [
                    13,
                    4.56
                ],
                [
                    14,
                    5.36
                ],
                [
                    15,
                    6.15
                ],
                [
                    16,
                    6.94
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            1,
            5,
            1
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "xarxa_comarcal_doble_calcada_en_c_p_6_lin",
    "minzoom": 8,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_en_c_p_xarxa_comarcal_doble_calcada_en_c_p_6_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    8,
                    0.46
                ],
                [
                    9,
                    1.07
                ],
                [
                    10,
                    1.68
                ],
                [
                    11,
                    2.3
                ],
                [
                    12,
                    2.91
                ],
                [
                    13,
                    3.52
                ],
                [
                    14,
                    4.13
                ],
                [
                    15,
                    4.75
                ],
                [
                    16,
                    5.36
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            1,
            5,
            1
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "xarxa_comarcal_doble_calcada_en_c_p_6_lin",
    "minzoom": 8,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_en_c_p_xarxa_comarcal_doble_calcada_en_c_p_6_lin_3",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    8,
                    0.07
                ],
                [
                    9,
                    0.16
                ],
                [
                    10,
                    0.25
                ],
                [
                    11,
                    0.34
                ],
                [
                    12,
                    0.43
                ],
                [
                    13,
                    0.52
                ],
                [
                    14,
                    0.61
                ],
                [
                    15,
                    0.7
                ],
                [
                    16,
                    0.79
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            1,
            5,
            1
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "xarxa_comarcal_doble_calcada_en_c_p_6_lin",
    "minzoom": 8,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_en_c_p_xarxa_comarcal_en_c_p_7_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    8,
                    0.46
                ],
                [
                    9,
                    1.07
                ],
                [
                    10,
                    1.68
                ],
                [
                    11,
                    2.3
                ],
                [
                    12,
                    2.91
                ],
                [
                    13,
                    3.52
                ],
                [
                    14,
                    4.13
                ],
                [
                    15,
                    4.75
                ],
                [
                    16,
                    5.36
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            2,
            8,
            2
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "xarxa_comarcal_en_c_p_7_lin",
    "minzoom": 8,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_en_c_p_xarxa_comarcal_en_c_p_7_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    8,
                    0.37
                ],
                [
                    9,
                    0.87
                ],
                [
                    10,
                    1.37
                ],
                [
                    11,
                    1.87
                ],
                [
                    12,
                    2.37
                ],
                [
                    13,
                    2.87
                ],
                [
                    14,
                    3.37
                ],
                [
                    15,
                    3.87
                ],
                [
                    16,
                    4.37
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            2,
            8,
            2
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "xarxa_comarcal_en_c_p_7_lin",
    "minzoom": 8,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_en_c_p_xarxa_local_doble_calcada_en_c_p_8_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.51
                ],
                [
                    10,
                    1.29
                ],
                [
                    11,
                    2.07
                ],
                [
                    12,
                    2.84
                ],
                [
                    13,
                    3.62
                ],
                [
                    14,
                    4.4
                ],
                [
                    15,
                    5.18
                ],
                [
                    16,
                    5.95
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            1,
            5,
            1
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "xarxa_local_doble_calcada_en_c_p_8_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_en_c_p_xarxa_local_doble_calcada_en_c_p_8_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.37
                ],
                [
                    10,
                    0.94
                ],
                [
                    11,
                    1.51
                ],
                [
                    12,
                    2.08
                ],
                [
                    13,
                    2.65
                ],
                [
                    14,
                    3.23
                ],
                [
                    15,
                    3.8
                ],
                [
                    16,
                    4.37
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            1,
            5,
            1
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "xarxa_local_doble_calcada_en_c_p_8_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_en_c_p_xarxa_local_doble_calcada_en_c_p_8_lin_3",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.04
                ],
                [
                    10,
                    0.11
                ],
                [
                    11,
                    0.17
                ],
                [
                    12,
                    0.24
                ],
                [
                    13,
                    0.3
                ],
                [
                    14,
                    0.37
                ],
                [
                    15,
                    0.43
                ],
                [
                    16,
                    0.5
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            1,
            5,
            1
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "xarxa_local_doble_calcada_en_c_p_8_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_en_c_p_xarxa_local_en_c_p_9_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.43
                ],
                [
                    10,
                    1.07
                ],
                [
                    11,
                    1.72
                ],
                [
                    12,
                    2.37
                ],
                [
                    13,
                    3.02
                ],
                [
                    14,
                    3.66
                ],
                [
                    15,
                    4.31
                ],
                [
                    16,
                    4.96
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            2,
            8,
            2
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "xarxa_local_en_c_p_9_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_en_c_p_xarxa_local_en_c_p_9_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.34
                ],
                [
                    10,
                    0.86
                ],
                [
                    11,
                    1.38
                ],
                [
                    12,
                    1.9
                ],
                [
                    13,
                    2.41
                ],
                [
                    14,
                    2.93
                ],
                [
                    15,
                    3.45
                ],
                [
                    16,
                    3.97
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            2,
            8,
            2
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "xarxa_local_en_c_p_9_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_en_c_p_enllac_autopista_en_c_p_10_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.43
                ],
                [
                    10,
                    1.07
                ],
                [
                    11,
                    1.72
                ],
                [
                    12,
                    2.37
                ],
                [
                    13,
                    3.02
                ],
                [
                    14,
                    3.66
                ],
                [
                    15,
                    4.31
                ],
                [
                    16,
                    4.96
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            1,
            3,
            1
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "enllac_autopista_en_c_p_10_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_en_c_p_enllac_autopista_en_c_p_10_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.17
                ],
                [
                    10,
                    0.43
                ],
                [
                    11,
                    0.69
                ],
                [
                    12,
                    0.95
                ],
                [
                    13,
                    1.21
                ],
                [
                    14,
                    1.47
                ],
                [
                    15,
                    1.73
                ],
                [
                    16,
                    1.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            1,
            3,
            1
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "enllac_autopista_en_c_p_10_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_en_c_p_enllac_autovia_en_c_p_11_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.43
                ],
                [
                    10,
                    1.07
                ],
                [
                    11,
                    1.72
                ],
                [
                    12,
                    2.37
                ],
                [
                    13,
                    3.02
                ],
                [
                    14,
                    3.66
                ],
                [
                    15,
                    4.31
                ],
                [
                    16,
                    4.96
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            1,
            3,
            1
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "enllac_autovia_en_c_p_11_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_en_c_p_enllac_autovia_en_c_p_11_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.17
                ],
                [
                    10,
                    0.43
                ],
                [
                    11,
                    0.69
                ],
                [
                    12,
                    0.95
                ],
                [
                    13,
                    1.21
                ],
                [
                    14,
                    1.47
                ],
                [
                    15,
                    1.73
                ],
                [
                    16,
                    1.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            1,
            3,
            1
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "enllac_autovia_en_c_p_11_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_en_c_p_enllac_via_preferent_en_c_p_12_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.43
                ],
                [
                    10,
                    1.07
                ],
                [
                    11,
                    1.72
                ],
                [
                    12,
                    2.37
                ],
                [
                    13,
                    3.02
                ],
                [
                    14,
                    3.66
                ],
                [
                    15,
                    4.31
                ],
                [
                    16,
                    4.96
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            1,
            3,
            1
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "enllac_via_preferent_en_c_p_12_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_en_c_p_enllac_via_preferent_en_c_p_12_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.34
                ],
                [
                    10,
                    0.86
                ],
                [
                    11,
                    1.38
                ],
                [
                    12,
                    1.9
                ],
                [
                    13,
                    2.41
                ],
                [
                    14,
                    2.93
                ],
                [
                    15,
                    3.45
                ],
                [
                    16,
                    3.97
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            1,
            3,
            1
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "enllac_via_preferent_en_c_p_12_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_en_c_p_enllac_xarxa_basica_en_c_p_13_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.43
                ],
                [
                    10,
                    1.07
                ],
                [
                    11,
                    1.72
                ],
                [
                    12,
                    2.37
                ],
                [
                    13,
                    3.02
                ],
                [
                    14,
                    3.66
                ],
                [
                    15,
                    4.31
                ],
                [
                    16,
                    4.96
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            1,
            3,
            1
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "enllac_xarxa_basica_en_c_p_13_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_en_c_p_enllac_xarxa_basica_en_c_p_13_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.34
                ],
                [
                    10,
                    0.86
                ],
                [
                    11,
                    1.38
                ],
                [
                    12,
                    1.9
                ],
                [
                    13,
                    2.41
                ],
                [
                    14,
                    2.93
                ],
                [
                    15,
                    3.45
                ],
                [
                    16,
                    3.97
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            1,
            3,
            1
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "enllac_xarxa_basica_en_c_p_13_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_en_c_p_enllac_xarxa_comarcal_en_c_p_14_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.34
                ],
                [
                    10,
                    0.86
                ],
                [
                    11,
                    1.38
                ],
                [
                    12,
                    1.9
                ],
                [
                    13,
                    2.41
                ],
                [
                    14,
                    2.93
                ],
                [
                    15,
                    3.45
                ],
                [
                    16,
                    3.97
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            1,
            3,
            1
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "enllac_xarxa_comarcal_en_c_p_14_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_en_c_p_enllac_xarxa_comarcal_en_c_p_14_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.26
                ],
                [
                    10,
                    0.64
                ],
                [
                    11,
                    1.03
                ],
                [
                    12,
                    1.42
                ],
                [
                    13,
                    1.81
                ],
                [
                    14,
                    2.2
                ],
                [
                    15,
                    2.59
                ],
                [
                    16,
                    2.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            1,
            3,
            1
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "enllac_xarxa_comarcal_en_c_p_14_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_en_c_p_enllac_xarxa_local_en_c_p_15_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.34
                ],
                [
                    10,
                    0.86
                ],
                [
                    11,
                    1.38
                ],
                [
                    12,
                    1.9
                ],
                [
                    13,
                    2.41
                ],
                [
                    14,
                    2.93
                ],
                [
                    15,
                    3.45
                ],
                [
                    16,
                    3.97
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            1,
            3,
            1
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "enllac_xarxa_local_en_c_p_15_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_en_c_p_enllac_xarxa_local_en_c_p_15_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.26
                ],
                [
                    10,
                    0.64
                ],
                [
                    11,
                    1.03
                ],
                [
                    12,
                    1.42
                ],
                [
                    13,
                    1.81
                ],
                [
                    14,
                    2.2
                ],
                [
                    15,
                    2.59
                ],
                [
                    16,
                    2.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            1,
            3,
            1
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "enllac_xarxa_local_en_c_p_15_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "altres_vials_i_camins_vial_o_cami_no_pavimentat_entre_4_i_2_5_m_tunel_6_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.09
                ],
                [
                    13,
                    0.31
                ],
                [
                    14,
                    0.54
                ],
                [
                    15,
                    0.77
                ],
                [
                    16,
                    0.99
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.25
                ],
                [
                    13,
                    0.44
                ],
                [
                    14,
                    0.63
                ],
                [
                    15,
                    0.81
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            3,
            2,
            3,
            2
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "vial_o_cami_no_pavimentat_entre_4_i_2_5_m_tunel_6_lin",
    "minzoom": 12,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "altres_vials_i_camins_vial_o_cami_no_pavimentat_2_5_metres_5_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.17
                ],
                [
                    13,
                    0.62
                ],
                [
                    14,
                    1.08
                ],
                [
                    15,
                    1.53
                ],
                [
                    16,
                    1.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.25
                ],
                [
                    13,
                    0.44
                ],
                [
                    14,
                    0.63
                ],
                [
                    15,
                    0.81
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            2,
            1,
            2,
            1
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "vial_o_cami_no_pavimentat_2_5_metres_5_lin",
    "minzoom": 12,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "altres_vials_i_camins_vial_o_cami_no_pavimentat_4_metres_3_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.34
                ],
                [
                    13,
                    1.25
                ],
                [
                    14,
                    2.15
                ],
                [
                    15,
                    3.06
                ],
                [
                    16,
                    3.97
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.25
                ],
                [
                    13,
                    0.44
                ],
                [
                    14,
                    0.63
                ],
                [
                    15,
                    0.81
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "vial_o_cami_no_pavimentat_4_metres_3_lin",
    "minzoom": 12,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "altres_vials_i_camins_vial_o_cami_no_pavimentat_4_metres_3_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.17
                ],
                [
                    13,
                    0.62
                ],
                [
                    14,
                    1.08
                ],
                [
                    15,
                    1.53
                ],
                [
                    16,
                    1.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.25
                ],
                [
                    13,
                    0.44
                ],
                [
                    14,
                    0.63
                ],
                [
                    15,
                    0.81
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "vial_o_cami_no_pavimentat_4_metres_3_lin",
    "minzoom": 12,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "altres_vials_i_camins_vial_o_cami_no_pavimentat_entre_4_i_2_5_metres_4_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.17
                ],
                [
                    13,
                    0.62
                ],
                [
                    14,
                    1.08
                ],
                [
                    15,
                    1.53
                ],
                [
                    16,
                    1.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.25
                ],
                [
                    13,
                    0.44
                ],
                [
                    14,
                    0.63
                ],
                [
                    15,
                    0.81
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "vial_o_cami_no_pavimentat_entre_4_i_2_5_metres_4_lin",
    "minzoom": 12,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "altres_vials_i_camins_vial_o_cami_pavimentat_4_m_en_c_p_7_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.43
                ],
                [
                    13,
                    1.56
                ],
                [
                    14,
                    2.69
                ],
                [
                    15,
                    3.83
                ],
                [
                    16,
                    4.96
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.5
                ],
                [
                    13,
                    0.63
                ],
                [
                    14,
                    0.75
                ],
                [
                    15,
                    0.88
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            2,
            2,
            2,
            2
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "vial_o_cami_pavimentat_4_m_en_c_p_7_lin",
    "minzoom": 12,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "altres_vials_i_camins_vial_o_cami_pavimentat_4_m_en_c_p_7_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.26
                ],
                [
                    13,
                    0.94
                ],
                [
                    14,
                    1.62
                ],
                [
                    15,
                    2.3
                ],
                [
                    16,
                    2.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.5
                ],
                [
                    13,
                    0.63
                ],
                [
                    14,
                    0.75
                ],
                [
                    15,
                    0.88
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            2,
            2,
            2,
            2
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "vial_o_cami_pavimentat_4_m_en_c_p_7_lin",
    "minzoom": 12,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "altres_vials_i_camins_vial_o_cami_pavimentat_4_m_en_tunel_8_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.43
                ],
                [
                    13,
                    1.56
                ],
                [
                    14,
                    2.69
                ],
                [
                    15,
                    3.83
                ],
                [
                    16,
                    4.96
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.5
                ],
                [
                    13,
                    0.63
                ],
                [
                    14,
                    0.75
                ],
                [
                    15,
                    0.88
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            1,
            3,
            1
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "vial_o_cami_pavimentat_4_m_en_tunel_8_lin",
    "minzoom": 12,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "altres_vials_i_camins_vial_o_cami_pavimentat_4_m_en_tunel_8_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.3
                ],
                [
                    13,
                    1.09
                ],
                [
                    14,
                    1.89
                ],
                [
                    15,
                    2.68
                ],
                [
                    16,
                    3.47
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.5
                ],
                [
                    13,
                    0.63
                ],
                [
                    14,
                    0.75
                ],
                [
                    15,
                    0.88
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            1,
            3,
            1
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "vial_o_cami_pavimentat_4_m_en_tunel_8_lin",
    "minzoom": 12,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "altres_vials_i_camins_vial_pavimentat_2_5_metres_2_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.17
                ],
                [
                    13,
                    0.62
                ],
                [
                    14,
                    1.08
                ],
                [
                    15,
                    1.53
                ],
                [
                    16,
                    1.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.5
                ],
                [
                    13,
                    0.63
                ],
                [
                    14,
                    0.75
                ],
                [
                    15,
                    0.88
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            2,
            1,
            2,
            1
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "vial_pavimentat_2_5_metres_2_lin",
    "minzoom": 12,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "altres_vials_i_camins_vial_pavimentat_4_metres_0_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.43
                ],
                [
                    13,
                    1.56
                ],
                [
                    14,
                    2.69
                ],
                [
                    15,
                    3.83
                ],
                [
                    16,
                    4.96
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.5
                ],
                [
                    13,
                    0.63
                ],
                [
                    14,
                    0.75
                ],
                [
                    15,
                    0.88
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "vial_pavimentat_4_metres_0_lin",
    "minzoom": 12,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "altres_vials_i_camins_vial_pavimentat_4_metres_0_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.26
                ],
                [
                    13,
                    0.94
                ],
                [
                    14,
                    1.62
                ],
                [
                    15,
                    2.3
                ],
                [
                    16,
                    2.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.5
                ],
                [
                    13,
                    0.63
                ],
                [
                    14,
                    0.75
                ],
                [
                    15,
                    0.88
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "vial_pavimentat_4_metres_0_lin",
    "minzoom": 12,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "altres_vials_i_camins_vial_pavimentat_entre_4_i_2_5_metres_1_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.17
                ],
                [
                    13,
                    0.62
                ],
                [
                    14,
                    1.08
                ],
                [
                    15,
                    1.53
                ],
                [
                    16,
                    1.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.5
                ],
                [
                    13,
                    0.63
                ],
                [
                    14,
                    0.75
                ],
                [
                    15,
                    0.88
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "vial_pavimentat_entre_4_i_2_5_metres_1_lin",
    "minzoom": 12,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "altres_vials_i_camins_vial_pavimentat_entre_4_i_2_5_metres_tunel_9_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.09
                ],
                [
                    13,
                    0.31
                ],
                [
                    14,
                    0.54
                ],
                [
                    15,
                    0.77
                ],
                [
                    16,
                    0.99
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.5
                ],
                [
                    13,
                    0.63
                ],
                [
                    14,
                    0.75
                ],
                [
                    15,
                    0.88
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            3,
            2,
            3,
            2
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "vial_pavimentat_entre_4_i_2_5_metres_tunel_9_lin",
    "minzoom": 12,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_enllac_xarxa_basica_perfil_21_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.43
                ],
                [
                    10,
                    1.07
                ],
                [
                    11,
                    1.72
                ],
                [
                    12,
                    2.37
                ],
                [
                    13,
                    3.02
                ],
                [
                    14,
                    3.66
                ],
                [
                    15,
                    4.31
                ],
                [
                    16,
                    4.96
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_enllac_xarxa_basica_21_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_xarxa_basica_perfil_13_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.68
                ],
                [
                    8,
                    1.49
                ],
                [
                    9,
                    2.29
                ],
                [
                    10,
                    3.1
                ],
                [
                    11,
                    3.91
                ],
                [
                    12,
                    4.71
                ],
                [
                    13,
                    5.52
                ],
                [
                    14,
                    6.32
                ],
                [
                    15,
                    7.13
                ],
                [
                    16,
                    7.94
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_xarxa_basica_13_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_enllac_autopista_18_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.43
                ],
                [
                    10,
                    1.07
                ],
                [
                    11,
                    1.72
                ],
                [
                    12,
                    2.37
                ],
                [
                    13,
                    3.02
                ],
                [
                    14,
                    3.66
                ],
                [
                    15,
                    4.31
                ],
                [
                    16,
                    4.96
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_enllac_autopista_18_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_enllac_autopista_18_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.41
                ],
                [
                    10,
                    1.03
                ],
                [
                    11,
                    1.65
                ],
                [
                    12,
                    2.27
                ],
                [
                    13,
                    2.9
                ],
                [
                    14,
                    3.52
                ],
                [
                    15,
                    4.14
                ],
                [
                    16,
                    4.76
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_enllac_autopista_18_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_enllac_autopista_18_lin_3",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.17
                ],
                [
                    10,
                    0.43
                ],
                [
                    11,
                    0.69
                ],
                [
                    12,
                    0.95
                ],
                [
                    13,
                    1.21
                ],
                [
                    14,
                    1.47
                ],
                [
                    15,
                    1.73
                ],
                [
                    16,
                    1.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_enllac_autopista_18_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_enllac_autovia_19_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.43
                ],
                [
                    10,
                    1.07
                ],
                [
                    11,
                    1.72
                ],
                [
                    12,
                    2.37
                ],
                [
                    13,
                    3.02
                ],
                [
                    14,
                    3.66
                ],
                [
                    15,
                    4.31
                ],
                [
                    16,
                    4.96
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_enllac_autovia_19_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_enllac_autovia_19_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.41
                ],
                [
                    10,
                    1.03
                ],
                [
                    11,
                    1.65
                ],
                [
                    12,
                    2.27
                ],
                [
                    13,
                    2.9
                ],
                [
                    14,
                    3.52
                ],
                [
                    15,
                    4.14
                ],
                [
                    16,
                    4.76
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_enllac_autovia_19_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_enllac_autovia_19_lin_3",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.17
                ],
                [
                    10,
                    0.43
                ],
                [
                    11,
                    0.69
                ],
                [
                    12,
                    0.95
                ],
                [
                    13,
                    1.21
                ],
                [
                    14,
                    1.47
                ],
                [
                    15,
                    1.73
                ],
                [
                    16,
                    1.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_enllac_autovia_19_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_enllac_autovia_blau_cel_26_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.43
                ],
                [
                    8,
                    0.93
                ],
                [
                    9,
                    1.43
                ],
                [
                    10,
                    1.94
                ],
                [
                    11,
                    2.44
                ],
                [
                    12,
                    2.94
                ],
                [
                    13,
                    3.45
                ],
                [
                    14,
                    3.95
                ],
                [
                    15,
                    4.46
                ],
                [
                    16,
                    4.96
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_enllac_autovia_blau_cel_26_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_enllac_autovia_blau_cel_26_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.17
                ],
                [
                    8,
                    0.37
                ],
                [
                    9,
                    0.57
                ],
                [
                    10,
                    0.77
                ],
                [
                    11,
                    0.98
                ],
                [
                    12,
                    1.18
                ],
                [
                    13,
                    1.38
                ],
                [
                    14,
                    1.58
                ],
                [
                    15,
                    1.78
                ],
                [
                    16,
                    1.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_enllac_autovia_blau_cel_26_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_enllac_autovia_groc_27_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.43
                ],
                [
                    8,
                    0.93
                ],
                [
                    9,
                    1.43
                ],
                [
                    10,
                    1.94
                ],
                [
                    11,
                    2.44
                ],
                [
                    12,
                    2.94
                ],
                [
                    13,
                    3.45
                ],
                [
                    14,
                    3.95
                ],
                [
                    15,
                    4.46
                ],
                [
                    16,
                    4.96
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_enllac_autovia_groc_27_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_enllac_autovia_groc_27_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.17
                ],
                [
                    8,
                    0.37
                ],
                [
                    9,
                    0.57
                ],
                [
                    10,
                    0.77
                ],
                [
                    11,
                    0.98
                ],
                [
                    12,
                    1.18
                ],
                [
                    13,
                    1.38
                ],
                [
                    14,
                    1.58
                ],
                [
                    15,
                    1.78
                ],
                [
                    16,
                    1.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_enllac_autovia_groc_27_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_enllac_via_preferent_20_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.43
                ],
                [
                    8,
                    0.93
                ],
                [
                    9,
                    1.43
                ],
                [
                    10,
                    1.94
                ],
                [
                    11,
                    2.44
                ],
                [
                    12,
                    2.94
                ],
                [
                    13,
                    3.45
                ],
                [
                    14,
                    3.95
                ],
                [
                    15,
                    4.46
                ],
                [
                    16,
                    4.96
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_enllac_via_preferent_20_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_enllac_via_preferent_20_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.34
                ],
                [
                    8,
                    0.74
                ],
                [
                    9,
                    1.15
                ],
                [
                    10,
                    1.55
                ],
                [
                    11,
                    1.95
                ],
                [
                    12,
                    2.36
                ],
                [
                    13,
                    2.76
                ],
                [
                    14,
                    3.16
                ],
                [
                    15,
                    3.57
                ],
                [
                    16,
                    3.97
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_enllac_via_preferent_20_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_enllac_x_basica_doble_calcada_31_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.43
                ],
                [
                    8,
                    0.93
                ],
                [
                    9,
                    1.43
                ],
                [
                    10,
                    1.94
                ],
                [
                    11,
                    2.44
                ],
                [
                    12,
                    2.94
                ],
                [
                    13,
                    3.45
                ],
                [
                    14,
                    3.95
                ],
                [
                    15,
                    4.46
                ],
                [
                    16,
                    4.96
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_enllac_x_basica_doble_calcada_31_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_enllac_x_basica_doble_calcada_31_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.41
                ],
                [
                    8,
                    0.89
                ],
                [
                    9,
                    1.38
                ],
                [
                    10,
                    1.86
                ],
                [
                    11,
                    2.34
                ],
                [
                    12,
                    2.83
                ],
                [
                    13,
                    3.31
                ],
                [
                    14,
                    3.79
                ],
                [
                    15,
                    4.28
                ],
                [
                    16,
                    4.76
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_enllac_x_basica_doble_calcada_31_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_enllac_x_basica_doble_calcada_31_lin_3",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.17
                ],
                [
                    8,
                    0.37
                ],
                [
                    9,
                    0.57
                ],
                [
                    10,
                    0.77
                ],
                [
                    11,
                    0.98
                ],
                [
                    12,
                    1.18
                ],
                [
                    13,
                    1.38
                ],
                [
                    14,
                    1.58
                ],
                [
                    15,
                    1.78
                ],
                [
                    16,
                    1.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_enllac_x_basica_doble_calcada_31_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_enllac_xarxa_basica_21_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.43
                ],
                [
                    10,
                    1.07
                ],
                [
                    11,
                    1.72
                ],
                [
                    12,
                    2.37
                ],
                [
                    13,
                    3.02
                ],
                [
                    14,
                    3.66
                ],
                [
                    15,
                    4.31
                ],
                [
                    16,
                    4.96
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    0
                ],
                [
                    10,
                    0
                ],
                [
                    11,
                    0
                ],
                [
                    12,
                    0
                ],
                [
                    13,
                    0
                ],
                [
                    14,
                    0
                ],
                [
                    15,
                    0
                ],
                [
                    16,
                    0
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_enllac_xarxa_basica_21_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_enllac_xarxa_basica_21_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.34
                ],
                [
                    10,
                    0.86
                ],
                [
                    11,
                    1.38
                ],
                [
                    12,
                    1.9
                ],
                [
                    13,
                    2.41
                ],
                [
                    14,
                    2.93
                ],
                [
                    15,
                    3.45
                ],
                [
                    16,
                    3.97
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_enllac_xarxa_basica_21_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_enllac_x_comarcal_doble_calcada_32_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.43
                ],
                [
                    10,
                    1.07
                ],
                [
                    11,
                    1.72
                ],
                [
                    12,
                    2.37
                ],
                [
                    13,
                    3.02
                ],
                [
                    14,
                    3.66
                ],
                [
                    15,
                    4.31
                ],
                [
                    16,
                    4.96
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_enllac_x_comarcal_doble_calcada_32_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_enllac_x_comarcal_doble_calcada_32_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.41
                ],
                [
                    10,
                    1.03
                ],
                [
                    11,
                    1.65
                ],
                [
                    12,
                    2.27
                ],
                [
                    13,
                    2.9
                ],
                [
                    14,
                    3.52
                ],
                [
                    15,
                    4.14
                ],
                [
                    16,
                    4.76
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_enllac_x_comarcal_doble_calcada_32_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_enllac_x_comarcal_doble_calcada_32_lin_3",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.17
                ],
                [
                    10,
                    0.43
                ],
                [
                    11,
                    0.69
                ],
                [
                    12,
                    0.95
                ],
                [
                    13,
                    1.21
                ],
                [
                    14,
                    1.47
                ],
                [
                    15,
                    1.73
                ],
                [
                    16,
                    1.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_enllac_x_comarcal_doble_calcada_32_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_enllac_xarxa_comarcal_22_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.34
                ],
                [
                    10,
                    0.86
                ],
                [
                    11,
                    1.38
                ],
                [
                    12,
                    1.9
                ],
                [
                    13,
                    2.41
                ],
                [
                    14,
                    2.93
                ],
                [
                    15,
                    3.45
                ],
                [
                    16,
                    3.97
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_enllac_xarxa_comarcal_22_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_enllac_xarxa_comarcal_22_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.26
                ],
                [
                    10,
                    0.64
                ],
                [
                    11,
                    1.03
                ],
                [
                    12,
                    1.42
                ],
                [
                    13,
                    1.81
                ],
                [
                    14,
                    2.2
                ],
                [
                    15,
                    2.59
                ],
                [
                    16,
                    2.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_enllac_xarxa_comarcal_22_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_enllac_x_local_doble_calcada_33_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.43
                ],
                [
                    8,
                    0.93
                ],
                [
                    9,
                    1.43
                ],
                [
                    10,
                    1.94
                ],
                [
                    11,
                    2.44
                ],
                [
                    12,
                    2.94
                ],
                [
                    13,
                    3.45
                ],
                [
                    14,
                    3.95
                ],
                [
                    15,
                    4.46
                ],
                [
                    16,
                    4.96
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_enllac_x_local_doble_calcada_33_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_enllac_x_local_doble_calcada_33_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.41
                ],
                [
                    8,
                    0.89
                ],
                [
                    9,
                    1.38
                ],
                [
                    10,
                    1.86
                ],
                [
                    11,
                    2.34
                ],
                [
                    12,
                    2.83
                ],
                [
                    13,
                    3.31
                ],
                [
                    14,
                    3.79
                ],
                [
                    15,
                    4.28
                ],
                [
                    16,
                    4.76
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_enllac_x_local_doble_calcada_33_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_enllac_x_local_doble_calcada_33_lin_3",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.17
                ],
                [
                    8,
                    0.37
                ],
                [
                    9,
                    0.57
                ],
                [
                    10,
                    0.77
                ],
                [
                    11,
                    0.98
                ],
                [
                    12,
                    1.18
                ],
                [
                    13,
                    1.38
                ],
                [
                    14,
                    1.58
                ],
                [
                    15,
                    1.78
                ],
                [
                    16,
                    1.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_enllac_x_local_doble_calcada_33_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_enllac_xarxa_local_23_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.34
                ],
                [
                    10,
                    0.86
                ],
                [
                    11,
                    1.38
                ],
                [
                    12,
                    1.9
                ],
                [
                    13,
                    2.41
                ],
                [
                    14,
                    2.93
                ],
                [
                    15,
                    3.45
                ],
                [
                    16,
                    3.97
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_enllac_xarxa_local_23_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_enllac_xarxa_local_23_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.26
                ],
                [
                    10,
                    0.64
                ],
                [
                    11,
                    1.03
                ],
                [
                    12,
                    1.42
                ],
                [
                    13,
                    1.81
                ],
                [
                    14,
                    2.2
                ],
                [
                    15,
                    2.59
                ],
                [
                    16,
                    2.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_enllac_xarxa_local_23_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_sobre_enllac_autopista_2_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.43
                ],
                [
                    10,
                    1.07
                ],
                [
                    11,
                    1.72
                ],
                [
                    12,
                    2.37
                ],
                [
                    13,
                    3.02
                ],
                [
                    14,
                    3.66
                ],
                [
                    15,
                    4.31
                ],
                [
                    16,
                    4.96
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "sobre_enllac_autopista_2_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_sobre_enllac_autopista_2_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.41
                ],
                [
                    10,
                    1.03
                ],
                [
                    11,
                    1.65
                ],
                [
                    12,
                    2.27
                ],
                [
                    13,
                    2.9
                ],
                [
                    14,
                    3.52
                ],
                [
                    15,
                    4.14
                ],
                [
                    16,
                    4.76
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "sobre_enllac_autopista_2_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_sobre_enllac_autopista_2_lin_3",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.17
                ],
                [
                    10,
                    0.43
                ],
                [
                    11,
                    0.69
                ],
                [
                    12,
                    0.95
                ],
                [
                    13,
                    1.21
                ],
                [
                    14,
                    1.47
                ],
                [
                    15,
                    1.73
                ],
                [
                    16,
                    1.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "sobre_enllac_autopista_2_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_sobre_enllac_autovia_3_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.43
                ],
                [
                    10,
                    1.07
                ],
                [
                    11,
                    1.72
                ],
                [
                    12,
                    2.37
                ],
                [
                    13,
                    3.02
                ],
                [
                    14,
                    3.66
                ],
                [
                    15,
                    4.31
                ],
                [
                    16,
                    4.96
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "sobre_enllac_autovia_3_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_sobre_enllac_autovia_3_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.41
                ],
                [
                    10,
                    1.03
                ],
                [
                    11,
                    1.65
                ],
                [
                    12,
                    2.27
                ],
                [
                    13,
                    2.9
                ],
                [
                    14,
                    3.52
                ],
                [
                    15,
                    4.14
                ],
                [
                    16,
                    4.76
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "sobre_enllac_autovia_3_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_sobre_enllac_autovia_3_lin_3",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.17
                ],
                [
                    10,
                    0.43
                ],
                [
                    11,
                    0.69
                ],
                [
                    12,
                    0.95
                ],
                [
                    13,
                    1.21
                ],
                [
                    14,
                    1.47
                ],
                [
                    15,
                    1.73
                ],
                [
                    16,
                    1.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "sobre_enllac_autovia_3_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_sobre_enllac_autovia_blau_cel_34_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.43
                ],
                [
                    8,
                    0.93
                ],
                [
                    9,
                    1.43
                ],
                [
                    10,
                    1.94
                ],
                [
                    11,
                    2.44
                ],
                [
                    12,
                    2.94
                ],
                [
                    13,
                    3.45
                ],
                [
                    14,
                    3.95
                ],
                [
                    15,
                    4.46
                ],
                [
                    16,
                    4.96
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "sobre_enllac_autovia_blau_cel_34_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_sobre_enllac_autovia_blau_cel_34_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.41
                ],
                [
                    8,
                    0.89
                ],
                [
                    9,
                    1.38
                ],
                [
                    10,
                    1.86
                ],
                [
                    11,
                    2.34
                ],
                [
                    12,
                    2.83
                ],
                [
                    13,
                    3.31
                ],
                [
                    14,
                    3.79
                ],
                [
                    15,
                    4.28
                ],
                [
                    16,
                    4.76
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "sobre_enllac_autovia_blau_cel_34_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_sobre_enllac_autovia_blau_cel_34_lin_3",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.17
                ],
                [
                    8,
                    0.37
                ],
                [
                    9,
                    0.57
                ],
                [
                    10,
                    0.77
                ],
                [
                    11,
                    0.98
                ],
                [
                    12,
                    1.18
                ],
                [
                    13,
                    1.38
                ],
                [
                    14,
                    1.58
                ],
                [
                    15,
                    1.78
                ],
                [
                    16,
                    1.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "sobre_enllac_autovia_blau_cel_34_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_sobre_enllac_via_preferent_4_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.43
                ],
                [
                    8,
                    0.93
                ],
                [
                    9,
                    1.43
                ],
                [
                    10,
                    1.94
                ],
                [
                    11,
                    2.44
                ],
                [
                    12,
                    2.94
                ],
                [
                    13,
                    3.45
                ],
                [
                    14,
                    3.95
                ],
                [
                    15,
                    4.46
                ],
                [
                    16,
                    4.96
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "sobre_enllac_via_preferent_4_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_sobre_enllac_via_preferent_4_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.34
                ],
                [
                    8,
                    0.74
                ],
                [
                    9,
                    1.15
                ],
                [
                    10,
                    1.55
                ],
                [
                    11,
                    1.95
                ],
                [
                    12,
                    2.36
                ],
                [
                    13,
                    2.76
                ],
                [
                    14,
                    3.16
                ],
                [
                    15,
                    3.57
                ],
                [
                    16,
                    3.97
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "sobre_enllac_via_preferent_4_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_sobre_enllac_x_basica_doble_calcada_28_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.43
                ],
                [
                    8,
                    0.93
                ],
                [
                    9,
                    1.43
                ],
                [
                    10,
                    1.94
                ],
                [
                    11,
                    2.44
                ],
                [
                    12,
                    2.94
                ],
                [
                    13,
                    3.45
                ],
                [
                    14,
                    3.95
                ],
                [
                    15,
                    4.46
                ],
                [
                    16,
                    4.96
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "sobre_enllac_x_basica_doble_calcada_28_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_sobre_enllac_x_basica_doble_calcada_28_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.17
                ],
                [
                    8,
                    0.37
                ],
                [
                    9,
                    0.57
                ],
                [
                    10,
                    0.77
                ],
                [
                    11,
                    0.98
                ],
                [
                    12,
                    1.18
                ],
                [
                    13,
                    1.38
                ],
                [
                    14,
                    1.58
                ],
                [
                    15,
                    1.78
                ],
                [
                    16,
                    1.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "sobre_enllac_x_basica_doble_calcada_28_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_sobre_enllac_xarxa_basica_5_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.43
                ],
                [
                    10,
                    1.07
                ],
                [
                    11,
                    1.72
                ],
                [
                    12,
                    2.37
                ],
                [
                    13,
                    3.02
                ],
                [
                    14,
                    3.66
                ],
                [
                    15,
                    4.31
                ],
                [
                    16,
                    4.96
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "sobre_enllac_xarxa_basica_5_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_sobre_enllac_xarxa_basica_5_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.34
                ],
                [
                    10,
                    0.86
                ],
                [
                    11,
                    1.38
                ],
                [
                    12,
                    1.9
                ],
                [
                    13,
                    2.41
                ],
                [
                    14,
                    2.93
                ],
                [
                    15,
                    3.45
                ],
                [
                    16,
                    3.97
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "sobre_enllac_xarxa_basica_5_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_sobre_enllac_x_comarcal_doble_calcada_29_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.43
                ],
                [
                    10,
                    1.07
                ],
                [
                    11,
                    1.72
                ],
                [
                    12,
                    2.37
                ],
                [
                    13,
                    3.02
                ],
                [
                    14,
                    3.66
                ],
                [
                    15,
                    4.31
                ],
                [
                    16,
                    4.96
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "sobre_enllac_x_comarcal_doble_calcada_29_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_sobre_enllac_x_comarcal_doble_calcada_29_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.41
                ],
                [
                    10,
                    1.03
                ],
                [
                    11,
                    1.65
                ],
                [
                    12,
                    2.27
                ],
                [
                    13,
                    2.9
                ],
                [
                    14,
                    3.52
                ],
                [
                    15,
                    4.14
                ],
                [
                    16,
                    4.76
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "sobre_enllac_x_comarcal_doble_calcada_29_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_sobre_enllac_x_comarcal_doble_calcada_29_lin_3",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.17
                ],
                [
                    10,
                    0.43
                ],
                [
                    11,
                    0.69
                ],
                [
                    12,
                    0.95
                ],
                [
                    13,
                    1.21
                ],
                [
                    14,
                    1.47
                ],
                [
                    15,
                    1.73
                ],
                [
                    16,
                    1.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "sobre_enllac_x_comarcal_doble_calcada_29_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_sobre_enllac_xarxa_comarcal_6_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.34
                ],
                [
                    10,
                    0.86
                ],
                [
                    11,
                    1.38
                ],
                [
                    12,
                    1.9
                ],
                [
                    13,
                    2.41
                ],
                [
                    14,
                    2.93
                ],
                [
                    15,
                    3.45
                ],
                [
                    16,
                    3.97
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "sobre_enllac_xarxa_comarcal_6_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_sobre_enllac_xarxa_comarcal_6_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.26
                ],
                [
                    10,
                    0.64
                ],
                [
                    11,
                    1.03
                ],
                [
                    12,
                    1.42
                ],
                [
                    13,
                    1.81
                ],
                [
                    14,
                    2.2
                ],
                [
                    15,
                    2.59
                ],
                [
                    16,
                    2.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "sobre_enllac_xarxa_comarcal_6_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_sobre_enllac_x_local_doble_calcada_30_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.43
                ],
                [
                    8,
                    0.93
                ],
                [
                    9,
                    1.43
                ],
                [
                    10,
                    1.94
                ],
                [
                    11,
                    2.44
                ],
                [
                    12,
                    2.94
                ],
                [
                    13,
                    3.45
                ],
                [
                    14,
                    3.95
                ],
                [
                    15,
                    4.46
                ],
                [
                    16,
                    4.96
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "sobre_enllac_x_local_doble_calcada_30_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_sobre_enllac_x_local_doble_calcada_30_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.41
                ],
                [
                    8,
                    0.89
                ],
                [
                    9,
                    1.38
                ],
                [
                    10,
                    1.86
                ],
                [
                    11,
                    2.34
                ],
                [
                    12,
                    2.83
                ],
                [
                    13,
                    3.31
                ],
                [
                    14,
                    3.79
                ],
                [
                    15,
                    4.28
                ],
                [
                    16,
                    4.76
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "sobre_enllac_x_local_doble_calcada_30_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_sobre_enllac_x_local_doble_calcada_30_lin_3",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.17
                ],
                [
                    8,
                    0.37
                ],
                [
                    9,
                    0.57
                ],
                [
                    10,
                    0.77
                ],
                [
                    11,
                    0.98
                ],
                [
                    12,
                    1.18
                ],
                [
                    13,
                    1.38
                ],
                [
                    14,
                    1.58
                ],
                [
                    15,
                    1.78
                ],
                [
                    16,
                    1.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "sobre_enllac_x_local_doble_calcada_30_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_sobre_enllac_xarxa_local_7_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.34
                ],
                [
                    10,
                    0.86
                ],
                [
                    11,
                    1.38
                ],
                [
                    12,
                    1.9
                ],
                [
                    13,
                    2.41
                ],
                [
                    14,
                    2.93
                ],
                [
                    15,
                    3.45
                ],
                [
                    16,
                    3.97
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "sobre_enllac_xarxa_local_7_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_sobre_enllac_xarxa_local_7_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.26
                ],
                [
                    10,
                    0.64
                ],
                [
                    11,
                    1.03
                ],
                [
                    12,
                    1.42
                ],
                [
                    13,
                    1.81
                ],
                [
                    14,
                    2.2
                ],
                [
                    15,
                    2.59
                ],
                [
                    16,
                    2.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "sobre_enllac_xarxa_local_7_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_autopista_8_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    1.02
                ],
                [
                    8,
                    2.23
                ],
                [
                    9,
                    3.44
                ],
                [
                    10,
                    4.65
                ],
                [
                    11,
                    5.86
                ],
                [
                    12,
                    7.07
                ],
                [
                    13,
                    8.28
                ],
                [
                    14,
                    9.49
                ],
                [
                    15,
                    10.7
                ],
                [
                    16,
                    11.91
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_autopista_8_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_autopista_8_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.6
                ],
                [
                    8,
                    1.3
                ],
                [
                    9,
                    2.01
                ],
                [
                    10,
                    2.71
                ],
                [
                    11,
                    3.42
                ],
                [
                    12,
                    4.12
                ],
                [
                    13,
                    4.83
                ],
                [
                    14,
                    5.53
                ],
                [
                    15,
                    6.24
                ],
                [
                    16,
                    6.94
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_autopista_8_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_autopista_8_lin_3",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.09
                ],
                [
                    8,
                    0.19
                ],
                [
                    9,
                    0.29
                ],
                [
                    10,
                    0.39
                ],
                [
                    11,
                    0.49
                ],
                [
                    12,
                    0.59
                ],
                [
                    13,
                    0.69
                ],
                [
                    14,
                    0.79
                ],
                [
                    15,
                    0.89
                ],
                [
                    16,
                    0.99
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_autopista_8_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_autovia_9_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    1.02
                ],
                [
                    8,
                    2.23
                ],
                [
                    9,
                    3.44
                ],
                [
                    10,
                    4.65
                ],
                [
                    11,
                    5.86
                ],
                [
                    12,
                    7.07
                ],
                [
                    13,
                    8.28
                ],
                [
                    14,
                    9.49
                ],
                [
                    15,
                    10.7
                ],
                [
                    16,
                    11.91
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_autovia_9_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_autovia_9_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.51
                ],
                [
                    8,
                    1.11
                ],
                [
                    9,
                    1.72
                ],
                [
                    10,
                    2.32
                ],
                [
                    11,
                    2.93
                ],
                [
                    12,
                    3.53
                ],
                [
                    13,
                    4.14
                ],
                [
                    14,
                    4.74
                ],
                [
                    15,
                    5.35
                ],
                [
                    16,
                    5.95
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_autovia_9_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_autovia_9_lin_3",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.07
                ],
                [
                    8,
                    0.15
                ],
                [
                    9,
                    0.23
                ],
                [
                    10,
                    0.31
                ],
                [
                    11,
                    0.39
                ],
                [
                    12,
                    0.47
                ],
                [
                    13,
                    0.55
                ],
                [
                    14,
                    0.63
                ],
                [
                    15,
                    0.71
                ],
                [
                    16,
                    0.79
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_autovia_9_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_autovia_blau_cel_24_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    1.02
                ],
                [
                    8,
                    2.23
                ],
                [
                    9,
                    3.44
                ],
                [
                    10,
                    4.65
                ],
                [
                    11,
                    5.86
                ],
                [
                    12,
                    7.07
                ],
                [
                    13,
                    8.28
                ],
                [
                    14,
                    9.49
                ],
                [
                    15,
                    10.7
                ],
                [
                    16,
                    11.91
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_autovia_blau_cel_24_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_autovia_blau_cel_24_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.51
                ],
                [
                    8,
                    1.11
                ],
                [
                    9,
                    1.72
                ],
                [
                    10,
                    2.32
                ],
                [
                    11,
                    2.93
                ],
                [
                    12,
                    3.53
                ],
                [
                    13,
                    4.14
                ],
                [
                    14,
                    4.74
                ],
                [
                    15,
                    5.35
                ],
                [
                    16,
                    5.95
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_autovia_blau_cel_24_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_autovia_blau_cel_24_lin_3",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.07
                ],
                [
                    8,
                    0.15
                ],
                [
                    9,
                    0.23
                ],
                [
                    10,
                    0.31
                ],
                [
                    11,
                    0.39
                ],
                [
                    12,
                    0.47
                ],
                [
                    13,
                    0.55
                ],
                [
                    14,
                    0.63
                ],
                [
                    15,
                    0.71
                ],
                [
                    16,
                    0.79
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_autovia_blau_cel_24_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_autovia_groc_25_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    1.02
                ],
                [
                    8,
                    2.23
                ],
                [
                    9,
                    3.44
                ],
                [
                    10,
                    4.65
                ],
                [
                    11,
                    5.86
                ],
                [
                    12,
                    7.07
                ],
                [
                    13,
                    8.28
                ],
                [
                    14,
                    9.49
                ],
                [
                    15,
                    10.7
                ],
                [
                    16,
                    11.91
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_autovia_groc_25_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_autovia_groc_25_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.51
                ],
                [
                    8,
                    1.11
                ],
                [
                    9,
                    1.72
                ],
                [
                    10,
                    2.32
                ],
                [
                    11,
                    2.93
                ],
                [
                    12,
                    3.53
                ],
                [
                    13,
                    4.14
                ],
                [
                    14,
                    4.74
                ],
                [
                    15,
                    5.35
                ],
                [
                    16,
                    5.95
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_autovia_groc_25_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_autovia_groc_25_lin_3",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.07
                ],
                [
                    8,
                    0.15
                ],
                [
                    9,
                    0.23
                ],
                [
                    10,
                    0.31
                ],
                [
                    11,
                    0.39
                ],
                [
                    12,
                    0.47
                ],
                [
                    13,
                    0.55
                ],
                [
                    14,
                    0.63
                ],
                [
                    15,
                    0.71
                ],
                [
                    16,
                    0.79
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_autovia_groc_25_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_via_preferent_11_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.85
                ],
                [
                    8,
                    1.86
                ],
                [
                    9,
                    2.87
                ],
                [
                    10,
                    3.87
                ],
                [
                    11,
                    4.88
                ],
                [
                    12,
                    5.89
                ],
                [
                    13,
                    6.9
                ],
                [
                    14,
                    7.91
                ],
                [
                    15,
                    8.91
                ],
                [
                    16,
                    9.92
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_via_preferent_11_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_via_preferent_11_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.71
                ],
                [
                    8,
                    1.56
                ],
                [
                    9,
                    2.41
                ],
                [
                    10,
                    3.25
                ],
                [
                    11,
                    4.1
                ],
                [
                    12,
                    4.95
                ],
                [
                    13,
                    5.79
                ],
                [
                    14,
                    6.64
                ],
                [
                    15,
                    7.49
                ],
                [
                    16,
                    8.33
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_via_preferent_11_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_via_preferent_doble_calcada_10_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.85
                ],
                [
                    8,
                    1.86
                ],
                [
                    9,
                    2.87
                ],
                [
                    10,
                    3.87
                ],
                [
                    11,
                    4.88
                ],
                [
                    12,
                    5.89
                ],
                [
                    13,
                    6.9
                ],
                [
                    14,
                    7.91
                ],
                [
                    15,
                    8.91
                ],
                [
                    16,
                    9.92
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_via_preferent_doble_calcada_10_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_via_preferent_doble_calcada_10_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.77
                ],
                [
                    8,
                    1.67
                ],
                [
                    9,
                    2.58
                ],
                [
                    10,
                    3.49
                ],
                [
                    11,
                    4.39
                ],
                [
                    12,
                    5.3
                ],
                [
                    13,
                    6.21
                ],
                [
                    14,
                    7.11
                ],
                [
                    15,
                    8.02
                ],
                [
                    16,
                    8.93
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_via_preferent_doble_calcada_10_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_via_preferent_doble_calcada_10_lin_3",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.07
                ],
                [
                    8,
                    0.15
                ],
                [
                    9,
                    0.23
                ],
                [
                    10,
                    0.31
                ],
                [
                    11,
                    0.39
                ],
                [
                    12,
                    0.47
                ],
                [
                    13,
                    0.55
                ],
                [
                    14,
                    0.63
                ],
                [
                    15,
                    0.71
                ],
                [
                    16,
                    0.79
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_via_preferent_doble_calcada_10_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_xarxa_basica_13_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.68
                ],
                [
                    8,
                    1.49
                ],
                [
                    9,
                    2.29
                ],
                [
                    10,
                    3.1
                ],
                [
                    11,
                    3.91
                ],
                [
                    12,
                    4.71
                ],
                [
                    13,
                    5.52
                ],
                [
                    14,
                    6.32
                ],
                [
                    15,
                    7.13
                ],
                [
                    16,
                    7.94
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    0
                ],
                [
                    8,
                    0
                ],
                [
                    9,
                    0
                ],
                [
                    10,
                    0
                ],
                [
                    11,
                    0
                ],
                [
                    12,
                    0
                ],
                [
                    13,
                    0
                ],
                [
                    14,
                    0
                ],
                [
                    15,
                    0
                ],
                [
                    16,
                    0
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_xarxa_basica_13_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_xarxa_basica_13_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.6
                ],
                [
                    8,
                    1.3
                ],
                [
                    9,
                    2.01
                ],
                [
                    10,
                    2.71
                ],
                [
                    11,
                    3.42
                ],
                [
                    12,
                    4.12
                ],
                [
                    13,
                    4.83
                ],
                [
                    14,
                    5.53
                ],
                [
                    15,
                    6.24
                ],
                [
                    16,
                    6.94
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_xarxa_basica_13_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_xarxa_basica_doble_calcada_12_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    1.02
                ],
                [
                    8,
                    2.23
                ],
                [
                    9,
                    3.44
                ],
                [
                    10,
                    4.65
                ],
                [
                    11,
                    5.86
                ],
                [
                    12,
                    7.07
                ],
                [
                    13,
                    8.28
                ],
                [
                    14,
                    9.49
                ],
                [
                    15,
                    10.7
                ],
                [
                    16,
                    11.91
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_xarxa_basica_doble_calcada_12_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_xarxa_basica_doble_calcada_12_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.51
                ],
                [
                    8,
                    1.11
                ],
                [
                    9,
                    1.72
                ],
                [
                    10,
                    2.32
                ],
                [
                    11,
                    2.93
                ],
                [
                    12,
                    3.53
                ],
                [
                    13,
                    4.14
                ],
                [
                    14,
                    4.74
                ],
                [
                    15,
                    5.35
                ],
                [
                    16,
                    5.95
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_xarxa_basica_doble_calcada_12_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_xarxa_basica_doble_calcada_12_lin_3",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.07
                ],
                [
                    8,
                    0.15
                ],
                [
                    9,
                    0.23
                ],
                [
                    10,
                    0.31
                ],
                [
                    11,
                    0.39
                ],
                [
                    12,
                    0.47
                ],
                [
                    13,
                    0.55
                ],
                [
                    14,
                    0.63
                ],
                [
                    15,
                    0.71
                ],
                [
                    16,
                    0.79
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_xarxa_basica_doble_calcada_12_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_xarxa_comarcal_15_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    8,
                    0.51
                ],
                [
                    9,
                    1.19
                ],
                [
                    10,
                    1.87
                ],
                [
                    11,
                    2.55
                ],
                [
                    12,
                    3.23
                ],
                [
                    13,
                    3.91
                ],
                [
                    14,
                    4.59
                ],
                [
                    15,
                    5.27
                ],
                [
                    16,
                    5.95
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_xarxa_comarcal_15_lin",
    "minzoom": 8,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_xarxa_comarcal_15_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    8,
                    0.43
                ],
                [
                    9,
                    0.99
                ],
                [
                    10,
                    1.56
                ],
                [
                    11,
                    2.13
                ],
                [
                    12,
                    2.69
                ],
                [
                    13,
                    3.26
                ],
                [
                    14,
                    3.83
                ],
                [
                    15,
                    4.39
                ],
                [
                    16,
                    4.96
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_xarxa_comarcal_15_lin",
    "minzoom": 8,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_xarxa_comarcal_doble_calcada_14_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    8,
                    0.68
                ],
                [
                    9,
                    1.59
                ],
                [
                    10,
                    2.49
                ],
                [
                    11,
                    3.4
                ],
                [
                    12,
                    4.31
                ],
                [
                    13,
                    5.22
                ],
                [
                    14,
                    6.12
                ],
                [
                    15,
                    7.03
                ],
                [
                    16,
                    7.94
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_xarxa_comarcal_doble_calcada_14_lin",
    "minzoom": 8,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_xarxa_comarcal_doble_calcada_14_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    8,
                    0.54
                ],
                [
                    9,
                    1.27
                ],
                [
                    10,
                    2
                ],
                [
                    11,
                    2.72
                ],
                [
                    12,
                    3.45
                ],
                [
                    13,
                    4.17
                ],
                [
                    14,
                    4.9
                ],
                [
                    15,
                    5.62
                ],
                [
                    16,
                    6.35
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_xarxa_comarcal_doble_calcada_14_lin",
    "minzoom": 8,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_xarxa_comarcal_doble_calcada_14_lin_3",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    8,
                    0.07
                ],
                [
                    9,
                    0.16
                ],
                [
                    10,
                    0.25
                ],
                [
                    11,
                    0.34
                ],
                [
                    12,
                    0.43
                ],
                [
                    13,
                    0.52
                ],
                [
                    14,
                    0.61
                ],
                [
                    15,
                    0.7
                ],
                [
                    16,
                    0.79
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_xarxa_comarcal_doble_calcada_14_lin",
    "minzoom": 8,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_xarxa_local_17_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.43
                ],
                [
                    10,
                    1.07
                ],
                [
                    11,
                    1.72
                ],
                [
                    12,
                    2.37
                ],
                [
                    13,
                    3.02
                ],
                [
                    14,
                    3.66
                ],
                [
                    15,
                    4.31
                ],
                [
                    16,
                    4.96
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_xarxa_local_17_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_xarxa_local_17_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.34
                ],
                [
                    10,
                    0.86
                ],
                [
                    11,
                    1.38
                ],
                [
                    12,
                    1.9
                ],
                [
                    13,
                    2.41
                ],
                [
                    14,
                    2.93
                ],
                [
                    15,
                    3.45
                ],
                [
                    16,
                    3.97
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_xarxa_local_17_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_xarxa_local_doble_calcada_16_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.6
                ],
                [
                    10,
                    1.5
                ],
                [
                    11,
                    2.41
                ],
                [
                    12,
                    3.32
                ],
                [
                    13,
                    4.22
                ],
                [
                    14,
                    5.13
                ],
                [
                    15,
                    6.04
                ],
                [
                    16,
                    6.94
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_xarxa_local_doble_calcada_16_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_xarxa_local_doble_calcada_16_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.46
                ],
                [
                    10,
                    1.16
                ],
                [
                    11,
                    1.86
                ],
                [
                    12,
                    2.56
                ],
                [
                    13,
                    3.26
                ],
                [
                    14,
                    3.96
                ],
                [
                    15,
                    4.66
                ],
                [
                    16,
                    5.36
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_xarxa_local_doble_calcada_16_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_normal_xarxa_local_doble_calcada_16_lin_3",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.07
                ],
                [
                    10,
                    0.17
                ],
                [
                    11,
                    0.28
                ],
                [
                    12,
                    0.38
                ],
                [
                    13,
                    0.48
                ],
                [
                    14,
                    0.59
                ],
                [
                    15,
                    0.69
                ],
                [
                    16,
                    0.79
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "normal_xarxa_local_doble_calcada_16_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_sobre_xarxa_comarcal_0_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    8,
                    0.51
                ],
                [
                    9,
                    1.19
                ],
                [
                    10,
                    1.87
                ],
                [
                    11,
                    2.55
                ],
                [
                    12,
                    3.23
                ],
                [
                    13,
                    3.91
                ],
                [
                    14,
                    4.59
                ],
                [
                    15,
                    5.27
                ],
                [
                    16,
                    5.95
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "sobre_xarxa_comarcal_0_lin",
    "minzoom": 8,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_sobre_xarxa_comarcal_0_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    8,
                    0.43
                ],
                [
                    9,
                    0.99
                ],
                [
                    10,
                    1.56
                ],
                [
                    11,
                    2.13
                ],
                [
                    12,
                    2.69
                ],
                [
                    13,
                    3.26
                ],
                [
                    14,
                    3.83
                ],
                [
                    15,
                    4.39
                ],
                [
                    16,
                    4.96
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "sobre_xarxa_comarcal_0_lin",
    "minzoom": 8,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_sobre_xarxa_local_1_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.43
                ],
                [
                    10,
                    1.07
                ],
                [
                    11,
                    1.72
                ],
                [
                    12,
                    2.37
                ],
                [
                    13,
                    3.02
                ],
                [
                    14,
                    3.66
                ],
                [
                    15,
                    4.31
                ],
                [
                    16,
                    4.96
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "sobre_xarxa_local_1_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_sobre_i_normal_sobre_xarxa_local_1_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.34
                ],
                [
                    10,
                    0.86
                ],
                [
                    11,
                    1.38
                ],
                [
                    12,
                    1.9
                ],
                [
                    13,
                    2.41
                ],
                [
                    14,
                    2.93
                ],
                [
                    15,
                    3.45
                ],
                [
                    16,
                    3.97
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "sobre_xarxa_local_1_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "xarxa_ferroviaria_altres_ferrocarrils_9_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#999999",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.3
                ],
                [
                    8,
                    0.65
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1.36
                ],
                [
                    11,
                    1.71
                ],
                [
                    12,
                    2.06
                ],
                [
                    13,
                    2.41
                ],
                [
                    14,
                    2.77
                ],
                [
                    15,
                    3.12
                ],
                [
                    16,
                    3.47
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "altres_ferrocarrils_9_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "xarxa_ferroviaria_altres_ferrocarrils_en_c_p_10_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#999999",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.13
                ],
                [
                    8,
                    0.28
                ],
                [
                    9,
                    0.43
                ],
                [
                    10,
                    0.58
                ],
                [
                    11,
                    0.73
                ],
                [
                    12,
                    0.88
                ],
                [
                    13,
                    1.03
                ],
                [
                    14,
                    1.19
                ],
                [
                    15,
                    1.34
                ],
                [
                    16,
                    1.49
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "altres_ferrocarrils_en_c_p_10_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "xarxa_ferroviaria_altres_ferrocarrils_en_tunel_11_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#999999",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.17
                ],
                [
                    8,
                    0.37
                ],
                [
                    9,
                    0.57
                ],
                [
                    10,
                    0.77
                ],
                [
                    11,
                    0.98
                ],
                [
                    12,
                    1.18
                ],
                [
                    13,
                    1.38
                ],
                [
                    14,
                    1.58
                ],
                [
                    15,
                    1.78
                ],
                [
                    16,
                    1.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            8,
            8,
            8,
            8,
            8,
            8
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "altres_ferrocarrils_en_tunel_11_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "xarxa_ferroviaria_altres_ferrocarrils_en_tunel_11_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.09
                ],
                [
                    8,
                    0.19
                ],
                [
                    9,
                    0.29
                ],
                [
                    10,
                    0.39
                ],
                [
                    11,
                    0.49
                ],
                [
                    12,
                    0.59
                ],
                [
                    13,
                    0.69
                ],
                [
                    14,
                    0.79
                ],
                [
                    15,
                    0.89
                ],
                [
                    16,
                    0.99
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "altres_ferrocarrils_en_tunel_11_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "xarxa_ferroviaria_pati_de_vies_altres_ferrocarrils_17_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#999999",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.17
                ],
                [
                    8,
                    0.37
                ],
                [
                    9,
                    0.57
                ],
                [
                    10,
                    0.77
                ],
                [
                    11,
                    0.98
                ],
                [
                    12,
                    1.18
                ],
                [
                    13,
                    1.38
                ],
                [
                    14,
                    1.58
                ],
                [
                    15,
                    1.78
                ],
                [
                    16,
                    1.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "pati_de_vies_altres_ferrocarrils_17_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "xarxa_ferroviaria_tramvia_18_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#999999",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.17
                ],
                [
                    8,
                    0.37
                ],
                [
                    9,
                    0.57
                ],
                [
                    10,
                    0.77
                ],
                [
                    11,
                    0.98
                ],
                [
                    12,
                    1.18
                ],
                [
                    13,
                    1.38
                ],
                [
                    14,
                    1.58
                ],
                [
                    15,
                    1.78
                ],
                [
                    16,
                    1.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "tramvia_18_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "xarxa_ferroviaria_tramvia_en_tunel_19_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#999999",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.09
                ],
                [
                    8,
                    0.19
                ],
                [
                    9,
                    0.29
                ],
                [
                    10,
                    0.39
                ],
                [
                    11,
                    0.49
                ],
                [
                    12,
                    0.59
                ],
                [
                    13,
                    0.69
                ],
                [
                    14,
                    0.79
                ],
                [
                    15,
                    0.89
                ],
                [
                    16,
                    0.99
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "tramvia_en_tunel_19_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "xarxa_ferroviaria_tramvia_en_tunel_19_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.17
                ],
                [
                    8,
                    0.37
                ],
                [
                    9,
                    0.57
                ],
                [
                    10,
                    0.77
                ],
                [
                    11,
                    0.98
                ],
                [
                    12,
                    1.18
                ],
                [
                    13,
                    1.38
                ],
                [
                    14,
                    1.58
                ],
                [
                    15,
                    1.78
                ],
                [
                    16,
                    1.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            8,
            8,
            8,
            8,
            8,
            8
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "tramvia_en_tunel_19_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "xarxa_ferroviaria_pati_de_vies_de_renfe_12_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#999999",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.17
                ],
                [
                    8,
                    0.37
                ],
                [
                    9,
                    0.57
                ],
                [
                    10,
                    0.77
                ],
                [
                    11,
                    0.98
                ],
                [
                    12,
                    1.18
                ],
                [
                    13,
                    1.38
                ],
                [
                    14,
                    1.58
                ],
                [
                    15,
                    1.78
                ],
                [
                    16,
                    1.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "pati_de_vies_de_renfe_12_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "xarxa_ferroviaria_xarxa_renfe_en_tunel_8_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#999999",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.17
                ],
                [
                    8,
                    0.37
                ],
                [
                    9,
                    0.57
                ],
                [
                    10,
                    0.77
                ],
                [
                    11,
                    0.98
                ],
                [
                    12,
                    1.18
                ],
                [
                    13,
                    1.38
                ],
                [
                    14,
                    1.58
                ],
                [
                    15,
                    1.78
                ],
                [
                    16,
                    1.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            8,
            8,
            8,
            8,
            8,
            8
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "xarxa_renfe_en_tunel_8_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "xarxa_ferroviaria_xarxa_renfe_6_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#999999",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.3
                ],
                [
                    8,
                    0.65
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1.36
                ],
                [
                    11,
                    1.71
                ],
                [
                    12,
                    2.06
                ],
                [
                    13,
                    2.41
                ],
                [
                    14,
                    2.77
                ],
                [
                    15,
                    3.12
                ],
                [
                    16,
                    3.47
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "xarxa_renfe_6_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "xarxa_ferroviaria_xarxa_renfe_en_c_p_7_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#999999",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.13
                ],
                [
                    8,
                    0.28
                ],
                [
                    9,
                    0.43
                ],
                [
                    10,
                    0.58
                ],
                [
                    11,
                    0.73
                ],
                [
                    12,
                    0.88
                ],
                [
                    13,
                    1.03
                ],
                [
                    14,
                    1.19
                ],
                [
                    15,
                    1.34
                ],
                [
                    16,
                    1.49
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "xarxa_renfe_en_c_p_7_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "xarxa_ferroviaria_pati_de_vies_d_fgc_13_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#999999",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.17
                ],
                [
                    8,
                    0.37
                ],
                [
                    9,
                    0.57
                ],
                [
                    10,
                    0.77
                ],
                [
                    11,
                    0.98
                ],
                [
                    12,
                    1.18
                ],
                [
                    13,
                    1.38
                ],
                [
                    14,
                    1.58
                ],
                [
                    15,
                    1.78
                ],
                [
                    16,
                    1.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "pati_de_vies_d_fgc_13_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "xarxa_ferroviaria_ferrocarril_de_la_generalitat_fgc_3_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#999999",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.3
                ],
                [
                    8,
                    0.65
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1.36
                ],
                [
                    11,
                    1.71
                ],
                [
                    12,
                    2.06
                ],
                [
                    13,
                    2.41
                ],
                [
                    14,
                    2.77
                ],
                [
                    15,
                    3.12
                ],
                [
                    16,
                    3.47
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "ferrocarril_de_la_generalitat_fgc_3_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "xarxa_ferroviaria_ferrocarril_de_la_generalitat_fgc_en_c_p_4_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#999999",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.13
                ],
                [
                    8,
                    0.28
                ],
                [
                    9,
                    0.43
                ],
                [
                    10,
                    0.58
                ],
                [
                    11,
                    0.73
                ],
                [
                    12,
                    0.88
                ],
                [
                    13,
                    1.03
                ],
                [
                    14,
                    1.19
                ],
                [
                    15,
                    1.34
                ],
                [
                    16,
                    1.49
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "ferrocarril_de_la_generalitat_fgc_en_c_p_4_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "xarxa_ferroviaria_ferrocarril_de_la_generalitat_fgc_en_tunel_5_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#999999",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.09
                ],
                [
                    8,
                    0.19
                ],
                [
                    9,
                    0.29
                ],
                [
                    10,
                    0.39
                ],
                [
                    11,
                    0.49
                ],
                [
                    12,
                    0.59
                ],
                [
                    13,
                    0.69
                ],
                [
                    14,
                    0.79
                ],
                [
                    15,
                    0.89
                ],
                [
                    16,
                    0.99
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "ferrocarril_de_la_generalitat_fgc_en_tunel_5_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "xarxa_ferroviaria_linia_dalta_velocitat_lav_14_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#999999",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.6
                ],
                [
                    8,
                    1.3
                ],
                [
                    9,
                    2.01
                ],
                [
                    10,
                    2.71
                ],
                [
                    11,
                    3.42
                ],
                [
                    12,
                    4.12
                ],
                [
                    13,
                    4.83
                ],
                [
                    14,
                    5.53
                ],
                [
                    15,
                    6.24
                ],
                [
                    16,
                    6.94
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "linia_dalta_velocitat_lav_14_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "xarxa_ferroviaria_linia_dalta_velocitat_lav_14_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.3
                ],
                [
                    8,
                    0.65
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1.36
                ],
                [
                    11,
                    1.71
                ],
                [
                    12,
                    2.06
                ],
                [
                    13,
                    2.41
                ],
                [
                    14,
                    2.77
                ],
                [
                    15,
                    3.12
                ],
                [
                    16,
                    3.47
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "linia_dalta_velocitat_lav_14_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "xarxa_ferroviaria_linia_dalta_velocitat_lav_14_lin_3",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.21
                ],
                [
                    8,
                    0.46
                ],
                [
                    9,
                    0.72
                ],
                [
                    10,
                    0.97
                ],
                [
                    11,
                    1.22
                ],
                [
                    12,
                    1.47
                ],
                [
                    13,
                    1.72
                ],
                [
                    14,
                    1.98
                ],
                [
                    15,
                    2.23
                ],
                [
                    16,
                    2.48
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "linia_dalta_velocitat_lav_14_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "xarxa_ferroviaria_linia_dalta_velocitat_lav_en_c_p_15_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#999999",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.6
                ],
                [
                    8,
                    1.3
                ],
                [
                    9,
                    2.01
                ],
                [
                    10,
                    2.71
                ],
                [
                    11,
                    3.42
                ],
                [
                    12,
                    4.12
                ],
                [
                    13,
                    4.83
                ],
                [
                    14,
                    5.53
                ],
                [
                    15,
                    6.24
                ],
                [
                    16,
                    6.94
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "linia_dalta_velocitat_lav_en_c_p_15_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "xarxa_ferroviaria_linia_dalta_velocitat_lav_en_c_p_15_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.3
                ],
                [
                    8,
                    0.65
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1.36
                ],
                [
                    11,
                    1.71
                ],
                [
                    12,
                    2.06
                ],
                [
                    13,
                    2.41
                ],
                [
                    14,
                    2.77
                ],
                [
                    15,
                    3.12
                ],
                [
                    16,
                    3.47
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            2,
            2,
            2,
            2,
            2,
            2
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "linia_dalta_velocitat_lav_en_c_p_15_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "xarxa_ferroviaria_linia_dalta_velocitat_lav_en_c_p_15_lin_3",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.21
                ],
                [
                    8,
                    0.46
                ],
                [
                    9,
                    0.72
                ],
                [
                    10,
                    0.97
                ],
                [
                    11,
                    1.22
                ],
                [
                    12,
                    1.47
                ],
                [
                    13,
                    1.72
                ],
                [
                    14,
                    1.98
                ],
                [
                    15,
                    2.23
                ],
                [
                    16,
                    2.48
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "linia_dalta_velocitat_lav_en_c_p_15_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "xarxa_ferroviaria_linia_dalta_velocitat_lav_en_tunel_16_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#999999",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.6
                ],
                [
                    8,
                    1.3
                ],
                [
                    9,
                    2.01
                ],
                [
                    10,
                    2.71
                ],
                [
                    11,
                    3.42
                ],
                [
                    12,
                    4.12
                ],
                [
                    13,
                    4.83
                ],
                [
                    14,
                    5.53
                ],
                [
                    15,
                    6.24
                ],
                [
                    16,
                    6.94
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "linia_dalta_velocitat_lav_en_tunel_16_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "xarxa_ferroviaria_linia_dalta_velocitat_lav_en_tunel_16_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.3
                ],
                [
                    8,
                    0.65
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1.36
                ],
                [
                    11,
                    1.71
                ],
                [
                    12,
                    2.06
                ],
                [
                    13,
                    2.41
                ],
                [
                    14,
                    2.77
                ],
                [
                    15,
                    3.12
                ],
                [
                    16,
                    3.47
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            3,
            2,
            3,
            2
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "linia_dalta_velocitat_lav_en_tunel_16_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "xarxa_ferroviaria_linia_dalta_velocitat_lav_en_tunel_16_lin_3",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.21
                ],
                [
                    8,
                    0.46
                ],
                [
                    9,
                    0.72
                ],
                [
                    10,
                    0.97
                ],
                [
                    11,
                    1.22
                ],
                [
                    12,
                    1.47
                ],
                [
                    13,
                    1.72
                ],
                [
                    14,
                    1.98
                ],
                [
                    15,
                    2.23
                ],
                [
                    16,
                    2.48
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "linia_dalta_velocitat_lav_en_tunel_16_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "xarxa_ferroviaria_tren_de_gran_velocitat_0_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#999999",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.85
                ],
                [
                    8,
                    1.86
                ],
                [
                    9,
                    2.87
                ],
                [
                    10,
                    3.87
                ],
                [
                    11,
                    4.88
                ],
                [
                    12,
                    5.89
                ],
                [
                    13,
                    6.9
                ],
                [
                    14,
                    7.91
                ],
                [
                    15,
                    8.91
                ],
                [
                    16,
                    9.92
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "tren_de_gran_velocitat_0_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "xarxa_ferroviaria_tren_de_gran_velocitat_0_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.43
                ],
                [
                    8,
                    0.93
                ],
                [
                    9,
                    1.43
                ],
                [
                    10,
                    1.94
                ],
                [
                    11,
                    2.44
                ],
                [
                    12,
                    2.94
                ],
                [
                    13,
                    3.45
                ],
                [
                    14,
                    3.95
                ],
                [
                    15,
                    4.46
                ],
                [
                    16,
                    4.96
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "tren_de_gran_velocitat_0_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "xarxa_ferroviaria_tren_de_gran_velocitat_0_lin_3",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.29
                ],
                [
                    8,
                    0.63
                ],
                [
                    9,
                    0.97
                ],
                [
                    10,
                    1.32
                ],
                [
                    11,
                    1.66
                ],
                [
                    12,
                    2
                ],
                [
                    13,
                    2.35
                ],
                [
                    14,
                    2.69
                ],
                [
                    15,
                    3.03
                ],
                [
                    16,
                    3.37
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "tren_de_gran_velocitat_0_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "xarxa_ferroviaria_tren_de_gran_velocitat_en_c_p_1_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#999999",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.85
                ],
                [
                    8,
                    1.86
                ],
                [
                    9,
                    2.87
                ],
                [
                    10,
                    3.87
                ],
                [
                    11,
                    4.88
                ],
                [
                    12,
                    5.89
                ],
                [
                    13,
                    6.9
                ],
                [
                    14,
                    7.91
                ],
                [
                    15,
                    8.91
                ],
                [
                    16,
                    9.92
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "tren_de_gran_velocitat_en_c_p_1_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "xarxa_ferroviaria_tren_de_gran_velocitat_en_c_p_1_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.43
                ],
                [
                    8,
                    0.93
                ],
                [
                    9,
                    1.43
                ],
                [
                    10,
                    1.94
                ],
                [
                    11,
                    2.44
                ],
                [
                    12,
                    2.94
                ],
                [
                    13,
                    3.45
                ],
                [
                    14,
                    3.95
                ],
                [
                    15,
                    4.46
                ],
                [
                    16,
                    4.96
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            2,
            2,
            2,
            2,
            2,
            2
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "tren_de_gran_velocitat_en_c_p_1_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "xarxa_ferroviaria_tren_de_gran_velocitat_en_c_p_1_lin_3",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.29
                ],
                [
                    8,
                    0.63
                ],
                [
                    9,
                    0.97
                ],
                [
                    10,
                    1.32
                ],
                [
                    11,
                    1.66
                ],
                [
                    12,
                    2
                ],
                [
                    13,
                    2.35
                ],
                [
                    14,
                    2.69
                ],
                [
                    15,
                    3.03
                ],
                [
                    16,
                    3.37
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "tren_de_gran_velocitat_en_c_p_1_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "xarxa_ferroviaria_tren_de_gran_velocitat_en_tunel_2_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#999999",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.85
                ],
                [
                    8,
                    1.86
                ],
                [
                    9,
                    2.87
                ],
                [
                    10,
                    3.87
                ],
                [
                    11,
                    4.88
                ],
                [
                    12,
                    5.89
                ],
                [
                    13,
                    6.9
                ],
                [
                    14,
                    7.91
                ],
                [
                    15,
                    8.91
                ],
                [
                    16,
                    9.92
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "tren_de_gran_velocitat_en_tunel_2_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "xarxa_ferroviaria_tren_de_gran_velocitat_en_tunel_2_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.43
                ],
                [
                    8,
                    0.93
                ],
                [
                    9,
                    1.43
                ],
                [
                    10,
                    1.94
                ],
                [
                    11,
                    2.44
                ],
                [
                    12,
                    2.94
                ],
                [
                    13,
                    3.45
                ],
                [
                    14,
                    3.95
                ],
                [
                    15,
                    4.46
                ],
                [
                    16,
                    4.96
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            3,
            2,
            3,
            2
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "tren_de_gran_velocitat_en_tunel_2_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "xarxa_ferroviaria_tren_de_gran_velocitat_en_tunel_2_lin_3",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.29
                ],
                [
                    8,
                    0.63
                ],
                [
                    9,
                    0.97
                ],
                [
                    10,
                    1.32
                ],
                [
                    11,
                    1.66
                ],
                [
                    12,
                    2
                ],
                [
                    13,
                    2.35
                ],
                [
                    14,
                    2.69
                ],
                [
                    15,
                    3.03
                ],
                [
                    16,
                    3.37
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "tren_de_gran_velocitat_en_tunel_2_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "altres_vials_i_camins_prioritaris_vial_pavimentat_4_metres_prioritaris_0_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.43
                ],
                [
                    13,
                    1.56
                ],
                [
                    14,
                    2.69
                ],
                [
                    15,
                    3.83
                ],
                [
                    16,
                    4.96
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "vial_pavimentat_4_metres_prioritaris_0_lin",
    "minzoom": 12,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "altres_vials_i_camins_prioritaris_vial_pavimentat_4_metres_prioritaris_0_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.26
                ],
                [
                    13,
                    0.94
                ],
                [
                    14,
                    1.62
                ],
                [
                    15,
                    2.3
                ],
                [
                    16,
                    2.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "vial_pavimentat_4_metres_prioritaris_0_lin",
    "minzoom": 12,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "altres_vials_i_camins_prioritaris_vial_pavimentat_entre_4_i_2_5_metres_prioritaris_1_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.17
                ],
                [
                    13,
                    0.62
                ],
                [
                    14,
                    1.08
                ],
                [
                    15,
                    1.53
                ],
                [
                    16,
                    1.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "vial_pavimentat_entre_4_i_2_5_metres_prioritaris_1_lin",
    "minzoom": 12,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "altres_vials_i_camins_prioritaris_vial_o_cami_no_pavimentat_4_metres_prioritaris_2_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.34
                ],
                [
                    13,
                    1.25
                ],
                [
                    14,
                    2.15
                ],
                [
                    15,
                    3.06
                ],
                [
                    16,
                    3.97
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "vial_o_cami_no_pavimentat_4_metres_prioritaris_2_lin",
    "minzoom": 12,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "altres_vials_i_camins_prioritaris_vial_o_cami_no_pavimentat_4_metres_prioritaris_2_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.17
                ],
                [
                    13,
                    0.62
                ],
                [
                    14,
                    1.08
                ],
                [
                    15,
                    1.53
                ],
                [
                    16,
                    1.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "vial_o_cami_no_pavimentat_4_metres_prioritaris_2_lin",
    "minzoom": 12,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "altres_vials_i_camins_prioritaris_vial_o_cami_no_pavimentat_entre_4_i_2_5_metres_prioritaris_4_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.17
                ],
                [
                    13,
                    0.62
                ],
                [
                    14,
                    1.08
                ],
                [
                    15,
                    1.53
                ],
                [
                    16,
                    1.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "vial_o_cami_no_pavimentat_entre_4_i_2_5_metres_prioritaris_4_lin",
    "minzoom": 12,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_enllac_enllac_xarxa_basica_nivell_1_6_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.43
                ],
                [
                    10,
                    1.07
                ],
                [
                    11,
                    1.72
                ],
                [
                    12,
                    2.37
                ],
                [
                    13,
                    3.02
                ],
                [
                    14,
                    3.66
                ],
                [
                    15,
                    4.31
                ],
                [
                    16,
                    4.96
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "enllac_xarxa_basica_nivell_1_6_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_enllac_enllac_xarxa_basica_nivell_1_6_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.34
                ],
                [
                    10,
                    0.86
                ],
                [
                    11,
                    1.38
                ],
                [
                    12,
                    1.9
                ],
                [
                    13,
                    2.41
                ],
                [
                    14,
                    2.93
                ],
                [
                    15,
                    3.45
                ],
                [
                    16,
                    3.97
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "enllac_xarxa_basica_nivell_1_6_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_enllac_enllac_autopista_0_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.43
                ],
                [
                    10,
                    1.07
                ],
                [
                    11,
                    1.72
                ],
                [
                    12,
                    2.37
                ],
                [
                    13,
                    3.02
                ],
                [
                    14,
                    3.66
                ],
                [
                    15,
                    4.31
                ],
                [
                    16,
                    4.96
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "enllac_autopista_0_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_enllac_enllac_autopista_0_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.41
                ],
                [
                    10,
                    1.03
                ],
                [
                    11,
                    1.65
                ],
                [
                    12,
                    2.27
                ],
                [
                    13,
                    2.9
                ],
                [
                    14,
                    3.52
                ],
                [
                    15,
                    4.14
                ],
                [
                    16,
                    4.76
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "enllac_autopista_0_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_enllac_enllac_autopista_0_lin_3",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#D8D8D8",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.17
                ],
                [
                    10,
                    0.43
                ],
                [
                    11,
                    0.69
                ],
                [
                    12,
                    0.95
                ],
                [
                    13,
                    1.21
                ],
                [
                    14,
                    1.47
                ],
                [
                    15,
                    1.73
                ],
                [
                    16,
                    1.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "enllac_autopista_0_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_enllac_enllac_autovia_1_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.43
                ],
                [
                    10,
                    1.07
                ],
                [
                    11,
                    1.72
                ],
                [
                    12,
                    2.37
                ],
                [
                    13,
                    3.02
                ],
                [
                    14,
                    3.66
                ],
                [
                    15,
                    4.31
                ],
                [
                    16,
                    4.96
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "enllac_autovia_1_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_enllac_enllac_autovia_1_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.17
                ],
                [
                    10,
                    0.43
                ],
                [
                    11,
                    0.69
                ],
                [
                    12,
                    0.95
                ],
                [
                    13,
                    1.21
                ],
                [
                    14,
                    1.47
                ],
                [
                    15,
                    1.73
                ],
                [
                    16,
                    1.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "enllac_autovia_1_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_enllac_enllac_autovia_blau_cel_11_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.43
                ],
                [
                    8,
                    0.93
                ],
                [
                    9,
                    1.43
                ],
                [
                    10,
                    1.94
                ],
                [
                    11,
                    2.44
                ],
                [
                    12,
                    2.94
                ],
                [
                    13,
                    3.45
                ],
                [
                    14,
                    3.95
                ],
                [
                    15,
                    4.46
                ],
                [
                    16,
                    4.96
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "enllac_autovia_blau_cel_11_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_enllac_enllac_autovia_blau_cel_11_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.17
                ],
                [
                    8,
                    0.37
                ],
                [
                    9,
                    0.57
                ],
                [
                    10,
                    0.77
                ],
                [
                    11,
                    0.98
                ],
                [
                    12,
                    1.18
                ],
                [
                    13,
                    1.38
                ],
                [
                    14,
                    1.58
                ],
                [
                    15,
                    1.78
                ],
                [
                    16,
                    1.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "enllac_autovia_blau_cel_11_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_enllac_enllac_autovia_groga_7_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.43
                ],
                [
                    8,
                    0.93
                ],
                [
                    9,
                    1.43
                ],
                [
                    10,
                    1.94
                ],
                [
                    11,
                    2.44
                ],
                [
                    12,
                    2.94
                ],
                [
                    13,
                    3.45
                ],
                [
                    14,
                    3.95
                ],
                [
                    15,
                    4.46
                ],
                [
                    16,
                    4.96
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "enllac_autovia_groga_7_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_enllac_enllac_autovia_groga_7_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.17
                ],
                [
                    8,
                    0.37
                ],
                [
                    9,
                    0.57
                ],
                [
                    10,
                    0.77
                ],
                [
                    11,
                    0.98
                ],
                [
                    12,
                    1.18
                ],
                [
                    13,
                    1.38
                ],
                [
                    14,
                    1.58
                ],
                [
                    15,
                    1.78
                ],
                [
                    16,
                    1.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "enllac_autovia_groga_7_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_enllac_enllac_via_preferent_2_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.43
                ],
                [
                    8,
                    0.93
                ],
                [
                    9,
                    1.43
                ],
                [
                    10,
                    1.94
                ],
                [
                    11,
                    2.44
                ],
                [
                    12,
                    2.94
                ],
                [
                    13,
                    3.45
                ],
                [
                    14,
                    3.95
                ],
                [
                    15,
                    4.46
                ],
                [
                    16,
                    4.96
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "enllac_via_preferent_2_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_enllac_enllac_via_preferent_2_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.34
                ],
                [
                    8,
                    0.74
                ],
                [
                    9,
                    1.15
                ],
                [
                    10,
                    1.55
                ],
                [
                    11,
                    1.95
                ],
                [
                    12,
                    2.36
                ],
                [
                    13,
                    2.76
                ],
                [
                    14,
                    3.16
                ],
                [
                    15,
                    3.57
                ],
                [
                    16,
                    3.97
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "enllac_via_preferent_2_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_enllac_enllac_xarxa_basica_doble_calcada_8_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.43
                ],
                [
                    8,
                    0.93
                ],
                [
                    9,
                    1.43
                ],
                [
                    10,
                    1.94
                ],
                [
                    11,
                    2.44
                ],
                [
                    12,
                    2.94
                ],
                [
                    13,
                    3.45
                ],
                [
                    14,
                    3.95
                ],
                [
                    15,
                    4.46
                ],
                [
                    16,
                    4.96
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "enllac_xarxa_basica_doble_calcada_8_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_enllac_enllac_xarxa_basica_doble_calcada_8_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.41
                ],
                [
                    8,
                    0.89
                ],
                [
                    9,
                    1.38
                ],
                [
                    10,
                    1.86
                ],
                [
                    11,
                    2.34
                ],
                [
                    12,
                    2.83
                ],
                [
                    13,
                    3.31
                ],
                [
                    14,
                    3.79
                ],
                [
                    15,
                    4.28
                ],
                [
                    16,
                    4.76
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "enllac_xarxa_basica_doble_calcada_8_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_enllac_enllac_xarxa_basica_doble_calcada_8_lin_3",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.17
                ],
                [
                    8,
                    0.37
                ],
                [
                    9,
                    0.57
                ],
                [
                    10,
                    0.77
                ],
                [
                    11,
                    0.98
                ],
                [
                    12,
                    1.18
                ],
                [
                    13,
                    1.38
                ],
                [
                    14,
                    1.58
                ],
                [
                    15,
                    1.78
                ],
                [
                    16,
                    1.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "enllac_xarxa_basica_doble_calcada_8_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_enllac_enllac_xarxa_basica_3_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.43
                ],
                [
                    10,
                    1.07
                ],
                [
                    11,
                    1.72
                ],
                [
                    12,
                    2.37
                ],
                [
                    13,
                    3.02
                ],
                [
                    14,
                    3.66
                ],
                [
                    15,
                    4.31
                ],
                [
                    16,
                    4.96
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "enllac_xarxa_basica_3_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_enllac_enllac_xarxa_basica_3_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.34
                ],
                [
                    10,
                    0.86
                ],
                [
                    11,
                    1.38
                ],
                [
                    12,
                    1.9
                ],
                [
                    13,
                    2.41
                ],
                [
                    14,
                    2.93
                ],
                [
                    15,
                    3.45
                ],
                [
                    16,
                    3.97
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "enllac_xarxa_basica_3_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_enllac_enllac_xarxa_comarcal_doble_calcada_9_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.43
                ],
                [
                    10,
                    1.07
                ],
                [
                    11,
                    1.72
                ],
                [
                    12,
                    2.37
                ],
                [
                    13,
                    3.02
                ],
                [
                    14,
                    3.66
                ],
                [
                    15,
                    4.31
                ],
                [
                    16,
                    4.96
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "enllac_xarxa_comarcal_doble_calcada_9_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_enllac_enllac_xarxa_comarcal_doble_calcada_9_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.41
                ],
                [
                    10,
                    1.03
                ],
                [
                    11,
                    1.65
                ],
                [
                    12,
                    2.27
                ],
                [
                    13,
                    2.9
                ],
                [
                    14,
                    3.52
                ],
                [
                    15,
                    4.14
                ],
                [
                    16,
                    4.76
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "enllac_xarxa_comarcal_doble_calcada_9_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_enllac_enllac_xarxa_comarcal_doble_calcada_9_lin_3",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.17
                ],
                [
                    10,
                    0.43
                ],
                [
                    11,
                    0.69
                ],
                [
                    12,
                    0.95
                ],
                [
                    13,
                    1.21
                ],
                [
                    14,
                    1.47
                ],
                [
                    15,
                    1.73
                ],
                [
                    16,
                    1.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "enllac_xarxa_comarcal_doble_calcada_9_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_enllac_enllac_xarxa_comarcal_4_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.34
                ],
                [
                    10,
                    0.86
                ],
                [
                    11,
                    1.38
                ],
                [
                    12,
                    1.9
                ],
                [
                    13,
                    2.41
                ],
                [
                    14,
                    2.93
                ],
                [
                    15,
                    3.45
                ],
                [
                    16,
                    3.97
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "enllac_xarxa_comarcal_4_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_enllac_enllac_xarxa_comarcal_4_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.26
                ],
                [
                    10,
                    0.64
                ],
                [
                    11,
                    1.03
                ],
                [
                    12,
                    1.42
                ],
                [
                    13,
                    1.81
                ],
                [
                    14,
                    2.2
                ],
                [
                    15,
                    2.59
                ],
                [
                    16,
                    2.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "enllac_xarxa_comarcal_4_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_enllac_enllac_xarxa_local_doble_calcada_10_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.43
                ],
                [
                    8,
                    0.93
                ],
                [
                    9,
                    1.43
                ],
                [
                    10,
                    1.94
                ],
                [
                    11,
                    2.44
                ],
                [
                    12,
                    2.94
                ],
                [
                    13,
                    3.45
                ],
                [
                    14,
                    3.95
                ],
                [
                    15,
                    4.46
                ],
                [
                    16,
                    4.96
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "enllac_xarxa_local_doble_calcada_10_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_enllac_enllac_xarxa_local_doble_calcada_10_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.41
                ],
                [
                    8,
                    0.89
                ],
                [
                    9,
                    1.38
                ],
                [
                    10,
                    1.86
                ],
                [
                    11,
                    2.34
                ],
                [
                    12,
                    2.83
                ],
                [
                    13,
                    3.31
                ],
                [
                    14,
                    3.79
                ],
                [
                    15,
                    4.28
                ],
                [
                    16,
                    4.76
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "enllac_xarxa_local_doble_calcada_10_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_enllac_enllac_xarxa_local_doble_calcada_10_lin_3",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.17
                ],
                [
                    8,
                    0.37
                ],
                [
                    9,
                    0.57
                ],
                [
                    10,
                    0.77
                ],
                [
                    11,
                    0.98
                ],
                [
                    12,
                    1.18
                ],
                [
                    13,
                    1.38
                ],
                [
                    14,
                    1.58
                ],
                [
                    15,
                    1.78
                ],
                [
                    16,
                    1.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "enllac_xarxa_local_doble_calcada_10_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_enllac_enllac_xarxa_local_5_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.34
                ],
                [
                    10,
                    0.86
                ],
                [
                    11,
                    1.38
                ],
                [
                    12,
                    1.9
                ],
                [
                    13,
                    2.41
                ],
                [
                    14,
                    2.93
                ],
                [
                    15,
                    3.45
                ],
                [
                    16,
                    3.97
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "enllac_xarxa_local_5_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_enllac_enllac_xarxa_local_5_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.26
                ],
                [
                    10,
                    0.64
                ],
                [
                    11,
                    1.03
                ],
                [
                    12,
                    1.42
                ],
                [
                    13,
                    1.81
                ],
                [
                    14,
                    2.2
                ],
                [
                    15,
                    2.59
                ],
                [
                    16,
                    2.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "enllac_xarxa_local_5_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_autopista_1_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    1.28
                ],
                [
                    8,
                    2.79
                ],
                [
                    9,
                    4.3
                ],
                [
                    10,
                    5.81
                ],
                [
                    11,
                    7.32
                ],
                [
                    12,
                    8.83
                ],
                [
                    13,
                    10.35
                ],
                [
                    14,
                    11.86
                ],
                [
                    15,
                    13.37
                ],
                [
                    16,
                    14.88
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "autopista_1_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_autopista_1_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.6
                ],
                [
                    8,
                    1.3
                ],
                [
                    9,
                    2.01
                ],
                [
                    10,
                    2.71
                ],
                [
                    11,
                    3.42
                ],
                [
                    12,
                    4.12
                ],
                [
                    13,
                    4.83
                ],
                [
                    14,
                    5.53
                ],
                [
                    15,
                    6.24
                ],
                [
                    16,
                    6.94
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "autopista_1_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_autopista_1_lin_3",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.09
                ],
                [
                    8,
                    0.19
                ],
                [
                    9,
                    0.29
                ],
                [
                    10,
                    0.39
                ],
                [
                    11,
                    0.49
                ],
                [
                    12,
                    0.59
                ],
                [
                    13,
                    0.69
                ],
                [
                    14,
                    0.79
                ],
                [
                    15,
                    0.89
                ],
                [
                    16,
                    0.99
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "autopista_1_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_autovia_3_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    1.02
                ],
                [
                    8,
                    2.23
                ],
                [
                    9,
                    3.44
                ],
                [
                    10,
                    4.65
                ],
                [
                    11,
                    5.86
                ],
                [
                    12,
                    7.07
                ],
                [
                    13,
                    8.28
                ],
                [
                    14,
                    9.49
                ],
                [
                    15,
                    10.7
                ],
                [
                    16,
                    11.91
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "autovia_3_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_autovia_3_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.51
                ],
                [
                    8,
                    1.11
                ],
                [
                    9,
                    1.72
                ],
                [
                    10,
                    2.32
                ],
                [
                    11,
                    2.93
                ],
                [
                    12,
                    3.53
                ],
                [
                    13,
                    4.14
                ],
                [
                    14,
                    4.74
                ],
                [
                    15,
                    5.35
                ],
                [
                    16,
                    5.95
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "autovia_3_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_autovia_3_lin_3",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.07
                ],
                [
                    8,
                    0.15
                ],
                [
                    9,
                    0.23
                ],
                [
                    10,
                    0.31
                ],
                [
                    11,
                    0.39
                ],
                [
                    12,
                    0.47
                ],
                [
                    13,
                    0.55
                ],
                [
                    14,
                    0.63
                ],
                [
                    15,
                    0.71
                ],
                [
                    16,
                    0.79
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "autovia_3_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_autovia_blau_cel_17_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    1.02
                ],
                [
                    8,
                    2.23
                ],
                [
                    9,
                    3.44
                ],
                [
                    10,
                    4.65
                ],
                [
                    11,
                    5.86
                ],
                [
                    12,
                    7.07
                ],
                [
                    13,
                    8.28
                ],
                [
                    14,
                    9.49
                ],
                [
                    15,
                    10.7
                ],
                [
                    16,
                    11.91
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "autovia_blau_cel_17_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_autovia_blau_cel_17_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.51
                ],
                [
                    8,
                    1.11
                ],
                [
                    9,
                    1.72
                ],
                [
                    10,
                    2.32
                ],
                [
                    11,
                    2.93
                ],
                [
                    12,
                    3.53
                ],
                [
                    13,
                    4.14
                ],
                [
                    14,
                    4.74
                ],
                [
                    15,
                    5.35
                ],
                [
                    16,
                    5.95
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "autovia_blau_cel_17_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_autovia_blau_cel_17_lin_3",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.07
                ],
                [
                    8,
                    0.15
                ],
                [
                    9,
                    0.23
                ],
                [
                    10,
                    0.31
                ],
                [
                    11,
                    0.39
                ],
                [
                    12,
                    0.47
                ],
                [
                    13,
                    0.55
                ],
                [
                    14,
                    0.63
                ],
                [
                    15,
                    0.71
                ],
                [
                    16,
                    0.79
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "autovia_blau_cel_17_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_via_preferent_7_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.85
                ],
                [
                    8,
                    1.86
                ],
                [
                    9,
                    2.87
                ],
                [
                    10,
                    3.87
                ],
                [
                    11,
                    4.88
                ],
                [
                    12,
                    5.89
                ],
                [
                    13,
                    6.9
                ],
                [
                    14,
                    7.91
                ],
                [
                    15,
                    8.91
                ],
                [
                    16,
                    9.92
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "via_preferent_7_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_via_preferent_7_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.71
                ],
                [
                    8,
                    1.56
                ],
                [
                    9,
                    2.41
                ],
                [
                    10,
                    3.25
                ],
                [
                    11,
                    4.1
                ],
                [
                    12,
                    4.95
                ],
                [
                    13,
                    5.79
                ],
                [
                    14,
                    6.64
                ],
                [
                    15,
                    7.49
                ],
                [
                    16,
                    8.33
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "via_preferent_7_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_via_preferent_doble_calcada_5_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.85
                ],
                [
                    8,
                    1.86
                ],
                [
                    9,
                    2.87
                ],
                [
                    10,
                    3.87
                ],
                [
                    11,
                    4.88
                ],
                [
                    12,
                    5.89
                ],
                [
                    13,
                    6.9
                ],
                [
                    14,
                    7.91
                ],
                [
                    15,
                    8.91
                ],
                [
                    16,
                    9.92
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "via_preferent_doble_calcada_5_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_via_preferent_doble_calcada_5_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.77
                ],
                [
                    8,
                    1.67
                ],
                [
                    9,
                    2.58
                ],
                [
                    10,
                    3.49
                ],
                [
                    11,
                    4.39
                ],
                [
                    12,
                    5.3
                ],
                [
                    13,
                    6.21
                ],
                [
                    14,
                    7.11
                ],
                [
                    15,
                    8.02
                ],
                [
                    16,
                    8.93
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "via_preferent_doble_calcada_5_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_via_preferent_doble_calcada_5_lin_3",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.07
                ],
                [
                    8,
                    0.15
                ],
                [
                    9,
                    0.23
                ],
                [
                    10,
                    0.31
                ],
                [
                    11,
                    0.39
                ],
                [
                    12,
                    0.47
                ],
                [
                    13,
                    0.55
                ],
                [
                    14,
                    0.63
                ],
                [
                    15,
                    0.71
                ],
                [
                    16,
                    0.79
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "via_preferent_doble_calcada_5_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_xarxa_basica_9_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.68
                ],
                [
                    8,
                    1.49
                ],
                [
                    9,
                    2.29
                ],
                [
                    10,
                    3.1
                ],
                [
                    11,
                    3.91
                ],
                [
                    12,
                    4.71
                ],
                [
                    13,
                    5.52
                ],
                [
                    14,
                    6.32
                ],
                [
                    15,
                    7.13
                ],
                [
                    16,
                    7.94
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "xarxa_basica_9_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_xarxa_basica_9_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.6
                ],
                [
                    8,
                    1.3
                ],
                [
                    9,
                    2.01
                ],
                [
                    10,
                    2.71
                ],
                [
                    11,
                    3.42
                ],
                [
                    12,
                    4.12
                ],
                [
                    13,
                    4.83
                ],
                [
                    14,
                    5.53
                ],
                [
                    15,
                    6.24
                ],
                [
                    16,
                    6.94
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "xarxa_basica_9_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_xarxa_basica_doble_calcada_8_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    1.02
                ],
                [
                    8,
                    2.23
                ],
                [
                    9,
                    3.44
                ],
                [
                    10,
                    4.65
                ],
                [
                    11,
                    5.86
                ],
                [
                    12,
                    7.07
                ],
                [
                    13,
                    8.28
                ],
                [
                    14,
                    9.49
                ],
                [
                    15,
                    10.7
                ],
                [
                    16,
                    11.91
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "xarxa_basica_doble_calcada_8_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_xarxa_basica_doble_calcada_8_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.51
                ],
                [
                    8,
                    1.11
                ],
                [
                    9,
                    1.72
                ],
                [
                    10,
                    2.32
                ],
                [
                    11,
                    2.93
                ],
                [
                    12,
                    3.53
                ],
                [
                    13,
                    4.14
                ],
                [
                    14,
                    4.74
                ],
                [
                    15,
                    5.35
                ],
                [
                    16,
                    5.95
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "xarxa_basica_doble_calcada_8_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_xarxa_basica_doble_calcada_8_lin_3",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.07
                ],
                [
                    8,
                    0.15
                ],
                [
                    9,
                    0.23
                ],
                [
                    10,
                    0.31
                ],
                [
                    11,
                    0.39
                ],
                [
                    12,
                    0.47
                ],
                [
                    13,
                    0.55
                ],
                [
                    14,
                    0.63
                ],
                [
                    15,
                    0.71
                ],
                [
                    16,
                    0.79
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "xarxa_basica_doble_calcada_8_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_xarxa_comarcal_11_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.51
                ],
                [
                    8,
                    1.11
                ],
                [
                    9,
                    1.72
                ],
                [
                    10,
                    2.32
                ],
                [
                    11,
                    2.93
                ],
                [
                    12,
                    3.53
                ],
                [
                    13,
                    4.14
                ],
                [
                    14,
                    4.74
                ],
                [
                    15,
                    5.35
                ],
                [
                    16,
                    5.95
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "xarxa_comarcal_11_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_xarxa_comarcal_11_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.43
                ],
                [
                    8,
                    0.93
                ],
                [
                    9,
                    1.43
                ],
                [
                    10,
                    1.94
                ],
                [
                    11,
                    2.44
                ],
                [
                    12,
                    2.94
                ],
                [
                    13,
                    3.45
                ],
                [
                    14,
                    3.95
                ],
                [
                    15,
                    4.46
                ],
                [
                    16,
                    4.96
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "xarxa_comarcal_11_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_xarxa_comarcal_doble_calcada_10_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.68
                ],
                [
                    8,
                    1.49
                ],
                [
                    9,
                    2.29
                ],
                [
                    10,
                    3.1
                ],
                [
                    11,
                    3.91
                ],
                [
                    12,
                    4.71
                ],
                [
                    13,
                    5.52
                ],
                [
                    14,
                    6.32
                ],
                [
                    15,
                    7.13
                ],
                [
                    16,
                    7.94
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "xarxa_comarcal_doble_calcada_10_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_xarxa_comarcal_doble_calcada_10_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.54
                ],
                [
                    8,
                    1.19
                ],
                [
                    9,
                    1.83
                ],
                [
                    10,
                    2.48
                ],
                [
                    11,
                    3.12
                ],
                [
                    12,
                    3.77
                ],
                [
                    13,
                    4.41
                ],
                [
                    14,
                    5.06
                ],
                [
                    15,
                    5.7
                ],
                [
                    16,
                    6.35
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "xarxa_comarcal_doble_calcada_10_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_xarxa_comarcal_doble_calcada_10_lin_3",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.07
                ],
                [
                    8,
                    0.15
                ],
                [
                    9,
                    0.23
                ],
                [
                    10,
                    0.31
                ],
                [
                    11,
                    0.39
                ],
                [
                    12,
                    0.47
                ],
                [
                    13,
                    0.55
                ],
                [
                    14,
                    0.63
                ],
                [
                    15,
                    0.71
                ],
                [
                    16,
                    0.79
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "xarxa_comarcal_doble_calcada_10_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_xarxa_local_13_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    8,
                    0.43
                ],
                [
                    9,
                    0.99
                ],
                [
                    10,
                    1.56
                ],
                [
                    11,
                    2.13
                ],
                [
                    12,
                    2.69
                ],
                [
                    13,
                    3.26
                ],
                [
                    14,
                    3.83
                ],
                [
                    15,
                    4.39
                ],
                [
                    16,
                    4.96
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "xarxa_local_13_lin",
    "minzoom": 8,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_xarxa_local_13_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    8,
                    0.34
                ],
                [
                    9,
                    0.79
                ],
                [
                    10,
                    1.25
                ],
                [
                    11,
                    1.7
                ],
                [
                    12,
                    2.15
                ],
                [
                    13,
                    2.61
                ],
                [
                    14,
                    3.06
                ],
                [
                    15,
                    3.51
                ],
                [
                    16,
                    3.97
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "xarxa_local_13_lin",
    "minzoom": 8,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_xarxa_local_doble_calcada_12_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    8,
                    0.6
                ],
                [
                    9,
                    1.39
                ],
                [
                    10,
                    2.18
                ],
                [
                    11,
                    2.98
                ],
                [
                    12,
                    3.77
                ],
                [
                    13,
                    4.56
                ],
                [
                    14,
                    5.36
                ],
                [
                    15,
                    6.15
                ],
                [
                    16,
                    6.94
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "xarxa_local_doble_calcada_12_lin",
    "minzoom": 8,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_xarxa_local_doble_calcada_12_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    8,
                    0.46
                ],
                [
                    9,
                    1.07
                ],
                [
                    10,
                    1.68
                ],
                [
                    11,
                    2.3
                ],
                [
                    12,
                    2.91
                ],
                [
                    13,
                    3.52
                ],
                [
                    14,
                    4.13
                ],
                [
                    15,
                    4.75
                ],
                [
                    16,
                    5.36
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "xarxa_local_doble_calcada_12_lin",
    "minzoom": 8,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_xarxa_local_doble_calcada_12_lin_3",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    8,
                    0.07
                ],
                [
                    9,
                    0.16
                ],
                [
                    10,
                    0.25
                ],
                [
                    11,
                    0.34
                ],
                [
                    12,
                    0.43
                ],
                [
                    13,
                    0.52
                ],
                [
                    14,
                    0.61
                ],
                [
                    15,
                    0.7
                ],
                [
                    16,
                    0.79
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "xarxa_local_doble_calcada_12_lin",
    "minzoom": 8,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_enllac_autovia_2on_nivell_14_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    8,
                    0.43
                ],
                [
                    9,
                    0.99
                ],
                [
                    10,
                    1.56
                ],
                [
                    11,
                    2.13
                ],
                [
                    12,
                    2.69
                ],
                [
                    13,
                    3.26
                ],
                [
                    14,
                    3.83
                ],
                [
                    15,
                    4.39
                ],
                [
                    16,
                    4.96
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "enllac_autovia_2on_nivell_14_lin",
    "minzoom": 8,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_enllac_autovia_2on_nivell_14_lin_2",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#323E3F",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    8,
                    0.41
                ],
                [
                    9,
                    0.95
                ],
                [
                    10,
                    1.5
                ],
                [
                    11,
                    2.04
                ],
                [
                    12,
                    2.59
                ],
                [
                    13,
                    3.13
                ],
                [
                    14,
                    3.67
                ],
                [
                    15,
                    4.22
                ],
                [
                    16,
                    4.76
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "enllac_autovia_2on_nivell_14_lin",
    "minzoom": 8,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_enllac_autovia_2on_nivell_14_lin_3",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    8,
                    0.17
                ],
                [
                    9,
                    0.4
                ],
                [
                    10,
                    0.62
                ],
                [
                    11,
                    0.85
                ],
                [
                    12,
                    1.08
                ],
                [
                    13,
                    1.3
                ],
                [
                    14,
                    1.53
                ],
                [
                    15,
                    1.76
                ],
                [
                    16,
                    1.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "enllac_autovia_2on_nivell_14_lin",
    "minzoom": 8,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_carril_bus_vao_15_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.34
                ],
                [
                    8,
                    0.74
                ],
                [
                    9,
                    1.15
                ],
                [
                    10,
                    1.55
                ],
                [
                    11,
                    1.95
                ],
                [
                    12,
                    2.36
                ],
                [
                    13,
                    2.76
                ],
                [
                    14,
                    3.16
                ],
                [
                    15,
                    3.57
                ],
                [
                    16,
                    3.97
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "carril_bus_vao_15_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vials_prioritaris_carril_bus_vao_enllac_16_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.17
                ],
                [
                    8,
                    0.37
                ],
                [
                    9,
                    0.57
                ],
                [
                    10,
                    0.77
                ],
                [
                    11,
                    0.98
                ],
                [
                    12,
                    1.18
                ],
                [
                    13,
                    1.38
                ],
                [
                    14,
                    1.58
                ],
                [
                    15,
                    1.78
                ],
                [
                    16,
                    1.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "carril_bus_vao_enllac_16_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "xarxa_ferroviaria_prioritaris_altres_ferrocarrils_prioritari_3_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#D8D8D8",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.3
                ],
                [
                    8,
                    0.65
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1.36
                ],
                [
                    11,
                    1.71
                ],
                [
                    12,
                    2.06
                ],
                [
                    13,
                    2.41
                ],
                [
                    14,
                    2.77
                ],
                [
                    15,
                    3.12
                ],
                [
                    16,
                    3.47
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "altres_ferrocarrils_prioritari_3_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "xarxa_ferroviaria_prioritaris_xarxa_renfe_prioritari_2_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#D8D8D8",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.3
                ],
                [
                    8,
                    0.65
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1.36
                ],
                [
                    11,
                    1.71
                ],
                [
                    12,
                    2.06
                ],
                [
                    13,
                    2.41
                ],
                [
                    14,
                    2.77
                ],
                [
                    15,
                    3.12
                ],
                [
                    16,
                    3.47
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "xarxa_renfe_prioritari_2_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "xarxa_ferroviaria_prioritaris_ferrocarril_de_la_generalitat_fgc_prioritari_1_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#D8D8D8",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.3
                ],
                [
                    8,
                    0.65
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1.36
                ],
                [
                    11,
                    1.71
                ],
                [
                    12,
                    2.06
                ],
                [
                    13,
                    2.41
                ],
                [
                    14,
                    2.77
                ],
                [
                    15,
                    3.12
                ],
                [
                    16,
                    3.47
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "ferrocarril_de_la_generalitat_fgc_prioritari_1_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "xarxa_ferroviaria_prioritaris_tren_de_gran_velocitat_prioritari_0_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#D8D8D8",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.07
                ],
                [
                    8,
                    0.15
                ],
                [
                    9,
                    0.23
                ],
                [
                    10,
                    0.31
                ],
                [
                    11,
                    0.39
                ],
                [
                    12,
                    0.47
                ],
                [
                    13,
                    0.55
                ],
                [
                    14,
                    0.63
                ],
                [
                    15,
                    0.71
                ],
                [
                    16,
                    0.79
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "tren_de_gran_velocitat_prioritari_0_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "transport_per_cable_cremallera_funicular_0_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#D8D8D8",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.09
                ],
                [
                    10,
                    0.21
                ],
                [
                    11,
                    0.34
                ],
                [
                    12,
                    0.47
                ],
                [
                    13,
                    0.6
                ],
                [
                    14,
                    0.73
                ],
                [
                    15,
                    0.86
                ],
                [
                    16,
                    0.99
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.25
                ],
                [
                    10,
                    0.36
                ],
                [
                    11,
                    0.46
                ],
                [
                    12,
                    0.57
                ],
                [
                    13,
                    0.68
                ],
                [
                    14,
                    0.79
                ],
                [
                    15,
                    0.89
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "cremallera_funicular_0_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "transport_per_cable_cremallera_funicular_en_tunel_1_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#D8D8D8",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.09
                ],
                [
                    10,
                    0.21
                ],
                [
                    11,
                    0.34
                ],
                [
                    12,
                    0.47
                ],
                [
                    13,
                    0.6
                ],
                [
                    14,
                    0.73
                ],
                [
                    15,
                    0.86
                ],
                [
                    16,
                    0.99
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.25
                ],
                [
                    10,
                    0.36
                ],
                [
                    11,
                    0.46
                ],
                [
                    12,
                    0.57
                ],
                [
                    13,
                    0.68
                ],
                [
                    14,
                    0.79
                ],
                [
                    15,
                    0.89
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            0,
            1,
            2,
            2,
            2,
            2,
            2,
            1
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "cremallera_funicular_en_tunel_1_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "transport_per_cable_teleferic_2_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#D8D8D8",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.13
                ],
                [
                    10,
                    0.32
                ],
                [
                    11,
                    0.52
                ],
                [
                    12,
                    0.71
                ],
                [
                    13,
                    0.91
                ],
                [
                    14,
                    1.1
                ],
                [
                    15,
                    1.29
                ],
                [
                    16,
                    1.49
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.25
                ],
                [
                    10,
                    0.36
                ],
                [
                    11,
                    0.46
                ],
                [
                    12,
                    0.57
                ],
                [
                    13,
                    0.68
                ],
                [
                    14,
                    0.79
                ],
                [
                    15,
                    0.89
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "teleferic_2_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "transport_per_cable_telecabina_telecadira_3_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#D8D8D8",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.13
                ],
                [
                    10,
                    0.32
                ],
                [
                    11,
                    0.52
                ],
                [
                    12,
                    0.71
                ],
                [
                    13,
                    0.91
                ],
                [
                    14,
                    1.1
                ],
                [
                    15,
                    1.29
                ],
                [
                    16,
                    1.49
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.25
                ],
                [
                    10,
                    0.36
                ],
                [
                    11,
                    0.46
                ],
                [
                    12,
                    0.57
                ],
                [
                    13,
                    0.68
                ],
                [
                    14,
                    0.79
                ],
                [
                    15,
                    0.89
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "telecabina_telecadira_3_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "transport_per_cable_telesqui_4_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#D8D8D8",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.13
                ],
                [
                    10,
                    0.32
                ],
                [
                    11,
                    0.52
                ],
                [
                    12,
                    0.71
                ],
                [
                    13,
                    0.91
                ],
                [
                    14,
                    1.1
                ],
                [
                    15,
                    1.29
                ],
                [
                    16,
                    1.49
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.25
                ],
                [
                    10,
                    0.36
                ],
                [
                    11,
                    0.46
                ],
                [
                    12,
                    0.57
                ],
                [
                    13,
                    0.68
                ],
                [
                    14,
                    0.79
                ],
                [
                    15,
                    0.89
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "telesqui_4_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "transport_per_cable_cinta_transportadora_5_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#D8D8D8",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.13
                ],
                [
                    10,
                    0.32
                ],
                [
                    11,
                    0.52
                ],
                [
                    12,
                    0.71
                ],
                [
                    13,
                    0.91
                ],
                [
                    14,
                    1.1
                ],
                [
                    15,
                    1.29
                ],
                [
                    16,
                    1.49
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.25
                ],
                [
                    10,
                    0.36
                ],
                [
                    11,
                    0.46
                ],
                [
                    12,
                    0.57
                ],
                [
                    13,
                    0.68
                ],
                [
                    14,
                    0.79
                ],
                [
                    15,
                    0.89
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "cinta_transportadora_5_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "ponts_ponts_0_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#D8D8D8",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.09
                ],
                [
                    13,
                    0.31
                ],
                [
                    14,
                    0.54
                ],
                [
                    15,
                    0.77
                ],
                [
                    16,
                    0.99
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "ponts_0_lin",
    "minzoom": 12,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "tunel_tunel_0_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#D8D8D8",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.09
                ],
                [
                    13,
                    0.31
                ],
                [
                    14,
                    0.54
                ],
                [
                    15,
                    0.77
                ],
                [
                    16,
                    0.99
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "tunel_0_lin",
    "minzoom": 12,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "aeroports_pista_d_aeroport_aerodrom_0_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#D8D8D8",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.09
                ],
                [
                    10,
                    0.21
                ],
                [
                    11,
                    0.34
                ],
                [
                    12,
                    0.47
                ],
                [
                    13,
                    0.6
                ],
                [
                    14,
                    0.73
                ],
                [
                    15,
                    0.86
                ],
                [
                    16,
                    0.99
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "pista_d_aeroport_aerodrom_0_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "aeroports_pista_d_aeroport_detall_2_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#D8D8D8",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.04
                ],
                [
                    10,
                    0.11
                ],
                [
                    11,
                    0.17
                ],
                [
                    12,
                    0.24
                ],
                [
                    13,
                    0.3
                ],
                [
                    14,
                    0.37
                ],
                [
                    15,
                    0.43
                ],
                [
                    16,
                    0.5
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "pista_d_aeroport_detall_2_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "aeroports_area_d_aterratge_1_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#D8D8D8",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    9,
                    0.09
                ],
                [
                    10,
                    0.21
                ],
                [
                    11,
                    0.34
                ],
                [
                    12,
                    0.47
                ],
                [
                    13,
                    0.6
                ],
                [
                    14,
                    0.73
                ],
                [
                    15,
                    0.86
                ],
                [
                    16,
                    0.99
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "area_d_aterratge_1_lin",
    "minzoom": 9,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "poblament_i_construccions_linies_linies_de_camps_esportius_2_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#CCCCCC",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.09
                ],
                [
                    13,
                    0.31
                ],
                [
                    14,
                    0.54
                ],
                [
                    15,
                    0.77
                ],
                [
                    16,
                    0.99
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "linies_de_camps_esportius_2_lin",
    "minzoom": 12,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "poblament_i_construccions_linies_limit_de_recinte_1_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#CCCCCC",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.09
                ],
                [
                    13,
                    0.31
                ],
                [
                    14,
                    0.54
                ],
                [
                    15,
                    0.77
                ],
                [
                    16,
                    0.99
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "limit_de_recinte_1_lin",
    "minzoom": 12,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "poblament_i_construccions_linies_muralla_0_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#D8D8D8",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    12,
                    0.13
                ],
                [
                    13,
                    0.47
                ],
                [
                    14,
                    0.81
                ],
                [
                    15,
                    1.15
                ],
                [
                    16,
                    1.49
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "muralla_0_lin",
    "minzoom": 12,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "poblament_i_construccions_linies_tallafocs_3_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#D8D8D8",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    15,
                    0.34
                ],
                [
                    16,
                    3.97
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    15,
                    0
                ],
                [
                    16,
                    0
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "tallafocs_3_lin",
    "minzoom": 15,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "usos_i_cobertes_del_sol_volcans_con_volcanic_0_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#D8D8D8",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    10,
                    0.1
                ],
                [
                    11,
                    0.28
                ],
                [
                    12,
                    0.46
                ],
                [
                    13,
                    0.65
                ],
                [
                    14,
                    0.83
                ],
                [
                    15,
                    1.01
                ],
                [
                    16,
                    1.19
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    10,
                    0.5
                ],
                [
                    11,
                    0.58
                ],
                [
                    12,
                    0.67
                ],
                [
                    13,
                    0.75
                ],
                [
                    14,
                    0.83
                ],
                [
                    15,
                    0.92
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "con_volcanic_0_lin",
    "minzoom": 10,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "usos_i_cobertes_del_sol_volcans_linia_de_pendent_2_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#D8D8D8",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    10,
                    0.09
                ],
                [
                    11,
                    0.24
                ],
                [
                    12,
                    0.39
                ],
                [
                    13,
                    0.54
                ],
                [
                    14,
                    0.69
                ],
                [
                    15,
                    0.84
                ],
                [
                    16,
                    0.99
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    10,
                    0.5
                ],
                [
                    11,
                    0.58
                ],
                [
                    12,
                    0.67
                ],
                [
                    13,
                    0.75
                ],
                [
                    14,
                    0.83
                ],
                [
                    15,
                    0.92
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "linia_de_pendent_2_lin",
    "minzoom": 10,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "usos_i_cobertes_del_sol_volcans_volca_1_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#D8D8D8",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    10,
                    0.3
                ],
                [
                    11,
                    0.83
                ],
                [
                    12,
                    1.37
                ],
                [
                    13,
                    1.9
                ],
                [
                    14,
                    2.43
                ],
                [
                    15,
                    2.97
                ],
                [
                    16,
                    3.5
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    10,
                    0.5
                ],
                [
                    11,
                    0.58
                ],
                [
                    12,
                    0.67
                ],
                [
                    13,
                    0.75
                ],
                [
                    14,
                    0.83
                ],
                [
                    15,
                    0.92
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "volca_1_lin",
    "minzoom": 10,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "energia_i_telecomunicacions_linia_centre_productor_i_transformador_d_energia_0_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#D8D8D8",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    11,
                    0.13
                ],
                [
                    12,
                    0.4
                ],
                [
                    13,
                    0.67
                ],
                [
                    14,
                    0.94
                ],
                [
                    15,
                    1.22
                ],
                [
                    16,
                    1.49
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    11,
                    0.25
                ],
                [
                    12,
                    0.4
                ],
                [
                    13,
                    0.55
                ],
                [
                    14,
                    0.7
                ],
                [
                    15,
                    0.85
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "centre_productor_i_transformador_d_energia_0_lin",
    "minzoom": 11,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "energia_i_telecomunicacions_linia_linia_electrica_2_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#D8D8D8",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    15,
                    0.09
                ],
                [
                    16,
                    0.99
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    15,
                    0.25
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "linia_electrica_2_lin",
    "minzoom": 15,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "energia_i_telecomunicacions_linia_parc_eolic_1_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#D8D8D8",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    11,
                    0.09
                ],
                [
                    12,
                    0.27
                ],
                [
                    13,
                    0.45
                ],
                [
                    14,
                    0.63
                ],
                [
                    15,
                    0.81
                ],
                [
                    16,
                    0.99
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    11,
                    0.25
                ],
                [
                    12,
                    0.4
                ],
                [
                    13,
                    0.55
                ],
                [
                    14,
                    0.7
                ],
                [
                    15,
                    0.85
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "parc_eolic_1_lin",
    "minzoom": 11,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "energia_i_telecomunicacions_linia_conduccio_de_combustible_3_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#D8D8D8",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    13,
                    0.13
                ],
                [
                    14,
                    0.58
                ],
                [
                    15,
                    1.03
                ],
                [
                    16,
                    1.49
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    13,
                    0.25
                ],
                [
                    14,
                    0.5
                ],
                [
                    15,
                    0.75
                ],
                [
                    16,
                    1
                ]
            ]
        }
    },
    "source": "mtc25mgdb",
    "source-layer": "conduccio_de_combustible_3_lin",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "limits_administratius_estat_administratius_0_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#CDC0C0",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.26
                ],
                [
                    8,
                    0.56
                ],
                [
                    9,
                    0.86
                ],
                [
                    10,
                    1.16
                ],
                [
                    11,
                    1.46
                ],
                [
                    12,
                    1.77
                ],
                [
                    13,
                    2.07
                ],
                [
                    14,
                    2.37
                ],
                [
                    15,
                    2.67
                ],
                [
                    16,
                    2.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            4.25,
            5.95,
            4.25,
            5.95,
            4.25,
            5.95
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "estat_administratius_0_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "limits_administratius_comunitat_autonoma_1_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#CDC0C0",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    7,
                    0.26
                ],
                [
                    8,
                    0.56
                ],
                [
                    9,
                    0.86
                ],
                [
                    10,
                    1.16
                ],
                [
                    11,
                    1.46
                ],
                [
                    12,
                    1.77
                ],
                [
                    13,
                    2.07
                ],
                [
                    14,
                    2.37
                ],
                [
                    15,
                    2.67
                ],
                [
                    16,
                    2.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    7,
                    1
                ],
                [
                    8,
                    1
                ],
                [
                    9,
                    1
                ],
                [
                    10,
                    1
                ],
                [
                    11,
                    1
                ],
                [
                    12,
                    1
                ],
                [
                    13,
                    1
                ],
                [
                    14,
                    1
                ],
                [
                    15,
                    1
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            4.25,
            9.35,
            4.25,
            9.35
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "comunitat_autonoma_1_lin",
    "minzoom": 7,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "limits_administratius_comarca_aprovat_2_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#CDC0C0",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    10,
                    0.26
                ],
                [
                    11,
                    0.71
                ],
                [
                    12,
                    1.16
                ],
                [
                    13,
                    1.62
                ],
                [
                    14,
                    2.07
                ],
                [
                    15,
                    2.52
                ],
                [
                    16,
                    2.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    10,
                    0.65
                ],
                [
                    11,
                    0.71
                ],
                [
                    12,
                    0.77
                ],
                [
                    13,
                    0.82
                ],
                [
                    14,
                    0.88
                ],
                [
                    15,
                    0.94
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            4.25,
            2.55,
            4.25,
            2.55,
            4.25,
            2.55
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "comarca_aprovat_2_lin",
    "minzoom": 10,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "limits_administratius_comarca_pendent_daprovacio_3_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#CDC0C0",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    10,
                    0.26
                ],
                [
                    11,
                    0.71
                ],
                [
                    12,
                    1.16
                ],
                [
                    13,
                    1.62
                ],
                [
                    14,
                    2.07
                ],
                [
                    15,
                    2.52
                ],
                [
                    16,
                    2.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    10,
                    0.65
                ],
                [
                    11,
                    0.71
                ],
                [
                    12,
                    0.77
                ],
                [
                    13,
                    0.82
                ],
                [
                    14,
                    0.88
                ],
                [
                    15,
                    0.94
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            4.25,
            5.95,
            4.25,
            5.95,
            4.25,
            5.95
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "comarca_pendent_daprovacio_3_lin",
    "minzoom": 10,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "limits_administratius_comarca_en_proces_4_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#CDC0C0",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    10,
                    0.26
                ],
                [
                    11,
                    0.71
                ],
                [
                    12,
                    1.16
                ],
                [
                    13,
                    1.62
                ],
                [
                    14,
                    2.07
                ],
                [
                    15,
                    2.52
                ],
                [
                    16,
                    2.98
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    10,
                    0.65
                ],
                [
                    11,
                    0.71
                ],
                [
                    12,
                    0.77
                ],
                [
                    13,
                    0.82
                ],
                [
                    14,
                    0.88
                ],
                [
                    15,
                    0.94
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            4.25,
            5.95,
            4.25,
            5.95,
            4.25,
            5.95
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "comarca_en_proces_4_lin",
    "minzoom": 10,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "limits_administratius_municipi_aprovat_5_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#CDC0C0",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    11,
                    0.13
                ],
                [
                    12,
                    0.4
                ],
                [
                    13,
                    0.67
                ],
                [
                    14,
                    0.94
                ],
                [
                    15,
                    1.22
                ],
                [
                    16,
                    1.49
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    11,
                    0.65
                ],
                [
                    12,
                    0.72
                ],
                [
                    13,
                    0.79
                ],
                [
                    14,
                    0.86
                ],
                [
                    15,
                    0.93
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            4.25,
            2.55,
            4.25,
            2.55,
            4.25,
            2.55
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "municipi_aprovat_5_lin",
    "minzoom": 11,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "limits_administratius_municipi_pendent_daprovacio_6_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#CDC0C0",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    11,
                    0.13
                ],
                [
                    12,
                    0.4
                ],
                [
                    13,
                    0.67
                ],
                [
                    14,
                    0.94
                ],
                [
                    15,
                    1.22
                ],
                [
                    16,
                    1.49
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    11,
                    0.65
                ],
                [
                    12,
                    0.72
                ],
                [
                    13,
                    0.79
                ],
                [
                    14,
                    0.86
                ],
                [
                    15,
                    0.93
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            4.25,
            5.95,
            4.25,
            5.95,
            4.25,
            5.95
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "municipi_pendent_daprovacio_6_lin",
    "minzoom": 11,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "limits_administratius_municipi_en_proces_7_lin",
    "filter": [
        "==",
        "$type",
        "LineString"
    ],
    "type": "line",
    "line-cap": "round",
    "paint": {
        "line-color": "#CDC0C0",
        "line-width": {
            "base": 1,
            "stops": [
                [
                    11,
                    0.13
                ],
                [
                    12,
                    0.4
                ],
                [
                    13,
                    0.67
                ],
                [
                    14,
                    0.94
                ],
                [
                    15,
                    1.22
                ],
                [
                    16,
                    1.49
                ]
            ]
        },
        "line-opacity": {
            "base": 1,
            "stops": [
                [
                    11,
                    0.65
                ],
                [
                    12,
                    0.72
                ],
                [
                    13,
                    0.79
                ],
                [
                    14,
                    0.86
                ],
                [
                    15,
                    0.93
                ],
                [
                    16,
                    1
                ]
            ]
        },
        "line-dasharray": [
            4.25,
            5.95,
            4.25,
            5.95,
            4.25,
            5.95
        ]
    },
    "source": "mtc25mgdb",
    "source-layer": "municipi_en_proces_7_lin",
    "minzoom": 11,
    "maxzoom": 16
},
//*********************************FINAL LINIES*********************************

//*************************INICI TOPONIMIA MTC25M RASTER***********************
/*	{
        "id": "mtc25mtopon",
        "type": "raster",
        "source": "mtc25mtopon",
        "minzoom": 13,
        "maxzoom": 16
    },*/
//*************************FINAL TOPONIMIA MTC25M RASTER***********************
//*********************************INICI PUNTS*********************************
    {
    "interactive": true,
    "id": "museu_1_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            1
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "J",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#A5A5A5",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "monestir_2_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            2
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "I",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "torre_de_defensa_de_guaita_3_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            3
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": ")",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "element_d_interes_4_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            4
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "O",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "edifici_d_interes_5_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            5
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "o",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "colonia_industrial_6_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            6
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "h",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "arbre_monumental_7_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            7
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "4",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "bosc_destacat_8_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            8
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "0",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "curiositat_natural_indret_pintoresc_9_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            9
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "i",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vista_panoramica_10_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            10
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "&",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "centre_punt_d_informacio_11_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            11
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "D",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "area_de_picnic_12_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            12
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "8",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "senderisme_13_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            13
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "+",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "hipica_14_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            14
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "B",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "golf_15_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            15
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "A",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "estacio_d_esqui_alpi_16_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            16
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "v",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "estacio_d_esqui_de_fons_17_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            17
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "u",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "refugi_amb_guarda_19_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            19
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "U",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "refugi_sense_guarda_20_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            20
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "V",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "residencia_casa_de_pages_21_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            21
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": ",",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "alberg_internacional_22_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            22
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": ":",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "balneari_25_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            25
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "9",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "estacio_d_autobusos_26_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            26
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "M",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "estacio_de_ferrocarril_27_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            27
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "w",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "cremallera_funicular_28_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            28
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "k",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "patrimoni_industrial_29_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            29
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "O",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "conjunt_monumental_o_urbanistic_30_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            30
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "i",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "espai_natural_protegit_31_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            31
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "s",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "centre_punt_d_iniformacio_de_parc_32_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            32
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "D",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "canoa_caiac_33_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            33
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "c",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "cabana_34_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            34
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "V",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "teleferic_35_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            35
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "(",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "aparcament_36_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            36
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "3",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "taxi_37_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            37
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "<",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "itinerari_adaptat_38_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            38
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "E",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "policia_mossos_d_esquadra_39_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            39
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "P",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "hospital_blau_40_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            40
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "C",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "aeroport_41_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            41
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "2",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "aerodrom_42_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            42
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "1",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "port_estacio_maritima_43_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            43
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "S",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "port_esportiu_44_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            44
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "R",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "far_45_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            45
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "x",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "casino_46_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            46
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "d",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "denominacio_d_origen_vi_47_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            47
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "p",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "denominacio_d_origen_cava_48_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            48
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "m",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "observatori_de_fauna_49_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            49
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "K",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "immersio_submarinisme_50_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            50
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "l",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "rem_piraguisme_51_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            51
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "W",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "surf_de_vela_52_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            52
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": ">",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "paracaigudisme_53_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            53
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "L",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "esglesia_ermita_d_interes_54_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            54
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "r",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "restes_historicoarqueologiques_55_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            55
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "X",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "pont_56_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            56
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "Q",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "edifici_d_interes_turistic_57_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            57
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "H",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "font_surgencia_58_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            58
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "y",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "castell_59_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            59
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "e",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "edifici_interes_arquitectonic_60_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            60
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "G",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "claustre_61_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            61
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "g",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "parc_natural_62_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            62
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "t",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "cova_63_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            63
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "j",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "vela_64_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            64
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "%",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "salt_d_aigua_65_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            65
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "Z",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "parc_jardi_botanic_66_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            66
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "a",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "megalit_dolmen_67_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            67
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "F",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "parc_tematic_aquatic_68_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            68
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "N",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "denominacio_d_origen_oli_69_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            69
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "n",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "hospital_vermell_70_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            70
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "C",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "centre_btt_71_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            71
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "=",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "artesania_72_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            72
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "5",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "celler_73_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            73
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "f",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "gastronomia_74_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            74
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "z",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "globus_75_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            75
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": ".",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "refugi_amb_clau_77_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            77
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "T",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "allotjament_turistic_78_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            78
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": ";",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "zona_fruitera_79_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            79
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "/",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "equipament_educatiu_80_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            80
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "q",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "avenc_82_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            82
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "6",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "aparcament_autocaravanes_83_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            83
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "7",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "hotel_100_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            100
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "?",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "hostal_pensio_101_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            101
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "_",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "camping_102_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            102
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "b",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},{
    "interactive": true,
    "id": "riu_navegable_1000_poi",
    "filter": [
        "all",
        [
            "==",
            "$type",
            "Point"
        ],
        [
            "==",
            "ruleid",
            1000
        ]
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "pictos_25_icgc-Regular"
        ],
        "text-field": "Y",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    7.199999999999999
                ],
                [
                    14,
                    20.88
                ],
                [
                    15,
                    34.32
                ],
                [
                    16,
                    48
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#D8D8D8",
        "text-opacity": 0
    },
    "source": "pictogrames",
    "source-layer": "pictogrames",
    "minzoom": 13,
    "maxzoom": 16
},
/*
{
    "interactive": true,
    "id": "codi_vial_color_20",
	    "filter": [
            "==",
            "color",
            20
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "Open Sans Bold"
        ],
        "text-field": "{textstring}",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    9,
                    9
                ],
                [
                    14,
                    16
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#FFFFFF",
        "text-opacity": 1,
		"text-halo-color": "#A0A0A0",
		"text-halo-width": 1
    },
    "source": "codiscarr25m",
    "source-layer": "codi_vial",
    "minzoom": 9,
    "maxzoom": 14
},
{
    "interactive": true,
    "id": "codi_vial_color_21",
	    "filter": [
            "==",
            "color",
            21
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "Open Sans Bold"
        ],
        "text-field": "{textstring}",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    12,
                    9
                ],
                [
                    14,
                    16
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#FFFFFF",
        "text-opacity": 1,
		"text-halo-color": "#A0A0A0",
		"text-halo-width": 1
    },
    "source": "codiscarr25m",
    "source-layer": "codi_vial",
    "minzoom": 12,
    "maxzoom": 14
},
{
    "interactive": true,
    "id": "codi_vial_color_22",
	    "filter": [
            "==",
            "color",
            22
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "Open Sans Bold"
        ],
        "text-field": "{textstring}",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    10,
                    9
                ],
                [
                    14,
                    16
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#FFFFFF",
        "text-opacity": 1,
		"text-halo-color": "#A0A0A0",
		"text-halo-width": 1
    },
    "source": "codiscarr25m",
    "source-layer": "codi_vial",
    "minzoom": 10,
    "maxzoom": 14
},
{
    "interactive": true,
    "id": "codi_vial_color_23",
	    "filter": [
            "==",
            "color",
            23
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "Open Sans Bold"
        ],
        "text-field": "{textstring}",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    10,
                    9
                ],
                [
                    14,
                    16
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#FFFFFF",
        "text-opacity": 1,
		"text-halo-color": "#A0A0A0",
		"text-halo-width": 1
    },
    "source": "codiscarr25m",
    "source-layer": "codi_vial",
    "minzoom": 10,
    "maxzoom": 14
},
{
    "interactive": true,
    "id": "codi_vial_color_24",
	    "filter": [
            "==",
            "color",
            24
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "Open Sans Bold"
        ],
        "text-field": "{textstring}",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    11,
                    9
                ],
                [
                    14,
                    16
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#FFFFFF",
        "text-opacity": 1,
		"text-halo-color": "#A0A0A0",
		"text-halo-width": 1
    },
    "source": "codiscarr25m",
    "source-layer": "codi_vial",
    "minzoom": 11,
    "maxzoom": 14
},
{
    "interactive": true,
    "id": "codi_vial_color_25",
	    "filter": [
            "==",
            "color",
            25
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "Open Sans Bold"
        ],
        "text-field": "{textstring}",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    11,
                    9
                ],
                [
                    14,
                    16
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#FFFFFF",
        "text-opacity": 1,
		"text-halo-color": "#A0A0A0",
		"text-halo-width": 1
    },
    "source": "codiscarr25m",
    "source-layer": "codi_vial",
    "minzoom": 11,
    "maxzoom": 14
},
{
    "interactive": true,
    "id": "codi_vial_color_26",
	    "filter": [
            "==",
            "color",
            26
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "Open Sans Bold"
        ],
        "text-field": "{textstring}",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    12,
                    9
                ],
                [
                    14,
                    16
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#FFFFFF",
        "text-opacity": 1,
		"text-halo-color": "#A0A0A0",
		"text-halo-width": 1
    },
    "source": "codiscarr25m",
    "source-layer": "codi_vial",
    "minzoom": 12,
    "maxzoom": 14
},
{
    "interactive": true,
    "id": "codi_vial_color_28",
	    "filter": [
            "==",
            "color",
            28
    ],
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "Open Sans Bold"
        ],
        "text-field": "{textstring}",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    12,
                    9
                ],
                [
                    14,
                    16
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#FFFFFF",
        "text-opacity": 1,
		"text-halo-color": "#A0A0A0",
		"text-halo-width": 1
    },
    "source": "codiscarr25m",
    "source-layer": "codi_vial",
    "minzoom": 12,
    "maxzoom": 14
},
*/
//*********************************FINAL CODI CARRETERES*********************************
//********************************* INICI PK ********************************************
/*
{
    "interactive": true,
    "id": "pk",
    "type": "symbol",
    "layout": {
        "visibility": "visible",
        "text-font": [
            "Open Sans Regular"
        ],
        "text-field": "{textstring}",
        "text-size": {
            "base": 1,
            "stops": [
                [
                    13,
                    8
                ],
                [
                    14,
                    12
                ]
            ]
        }
    },
    "paint": {
        "text-color": "#A0A0A0",
        "text-opacity": 1,
		"text-halo-color": "#FFFFFF",
		"text-halo-width": 1,
    },
    "source": "codiscarr25m",
    "source-layer": "pk",
    "minzoom": 13,
    "maxzoom": 14
}
*/
//********************************* FINAL PK*********************************************
	]
};
