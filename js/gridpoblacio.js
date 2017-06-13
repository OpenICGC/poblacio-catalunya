var serverName = "betaserver.icgc.cat";

var urlApp = document.location.href;

if (urlApp.indexOf('172.70.1.31') != -1) {
  serverName = "172.70.1.31";
}

var map;
var id_ = 'rp2014_qtree_level2_ofus_allvar_3857';
var layers_ = [];
var slider;
var arrayColors = ['#FFD400', '#FFA344', '#EF5122', '#CB5726', '#CF1020', '#8A171A'];
var _HOMES_Array = [0, 211, 422, 633, 844, 1055, 1267];
var _DONES_Array = [0, 191, 382, 572, 763, 954, 1146];
var _P_0_14_Array = [0, 88, 176, 264, 353, 441, 530];
var _P_15_64_Array = [0, 287, 573, 860, 1147, 1433, 1721];
var _P_65_I_MES_Array = [0, 119, 237, 356, 475, 593, 713];
var _P_ESPANYOL_Array = [0, 338, 675, 1013, 1351, 1688, 2026];
var _P_ESTRANGE_Array = [0, 230, 460, 690, 921, 1151, 1382];
var _P_NASC_CAT_Array = [0, 197, 394, 590, 787, 984, 1182];
var _P_NASC_RES_Array = [0, 142, 285, 427, 569, 712, 855];
var _P_NASC_EST_Array = [0, 241, 482, 723, 964, 1205, 1447];
var _TOTAL_Array = [0, 369, 792, 1188, 1585, 1981, 2378];
var _LAYER_ACTIVE = 'poblacio_grid';
var _DEFAULT_CLASS = "activeBT";
var _DEFAULT_PROPERTI = "TOTAL";
$(document).ready(function() {

  //arrayColors = chroma.scale(['#FFD400', '#cc0000']).mode('lch').colors(6);
  arrayColors = chroma.scale(['#00d8ff', '#7700ff']).mode('lch').colors(6);



  mapboxgl.accessToken = 'NOT-REQUIRED-WITH-YOUR-VECTOR-TILES-DATA';
  map = new mapboxgl.Map({
    container: 'map',
    center: [1.2293, 41.1246],
    pitch: 45,
    hash:true,
    bearing: -17.6,
    style: styleGris, //styleBlanc
    zoom: 13
  });
  map.addControl(new mapboxgl.NavigationControl());
  var setCenterFromLayer = true;
  /*
  map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true,
      watchPosition: true
    }
  }));
  */

  var popup = new mapboxgl.Popup({
    closeButton: false
  });


  //mostrar nivell zoom al costat copyright
  //var controldiv = document.getElementsByClassName("mapboxgl-ctrl-bottom-left")[0];
  //var zoom = document.createElement("div");

  jQuery('.mapboxgl-ctrl-top-right div:first')
    .append('<button id="bt_pitch" title="Perspectiva" class="mapboxgl-ctrl-icon glyphicon glyphicon-road"></button>');

  //zoom.setAttribute("class", "control-zoom");
  //controldiv.appendChild(zoom);
  map.on('moveend', function() {
  //  zoom.innerHTML = "Nivell zoom: " + parseFloat(map.getZoom()).toFixed(1) + "";
  });

  jQuery('#bt_pitch').on('click', function() {
    var pitch = parseInt(map.getPitch());
    pitch == 60 ? pitch = 0 : pitch = pitch + 30;
    map.easeTo({
      'pitch': pitch
    });

  });

  map.on('load', function() {

    map.getCanvas().style.cursor = 'default'

    map.addSource('vector_layer_', {
      "attribution": "Font: <a href='https://www.idescat.cat/' target='_blank'>Idescat</a>",
      "type": "vector",
      "center": [1.8457, 41.7262, 8],
      "description": "grid poblacio idescat",
      "format": "pbf",
      "maxzoom": 16,
      "minzoom": 6,
      "name": "gridpoblacio",
      "bounds": [0.2471923828125, 41.064100828659, 3.3013916015625, 43.390095665799],
      "basename": "gridpoblacio",
      "profile": "mercator",
      "scale": 1,
      "tiles": ["http://" + serverName + "/tileserver3/tileserver.php?%2Findex.json&callback=_callbacks_._0iuiar2as?/gridpoblacio/{z}/{x}/{y}.pbf"],
      "tilejson": "2.0.0",
      "scheme": "xyz",
      "grids": ["http://" + serverName + "/tileserver3/tileserver.php?%2Findex.json&callback=_callbacks_._0iuiar2as?/gridpoblacio/{z}/{x}/{y}.grid.json"],
      "vector_layers": [{
        "id": "rp2014_qtree_level2_ofus_allvar_3857",
        "description": "",
        "fields": {
          "ID": "Number",
          "TOTAL": "Number",
          "HOMES": "Number",
          "DONES": "Number",
          "P_0_14": "Number",
          "P_15_64": "Number",
          "P_65_I_MES": "Number",
          "P_ESPANYOL": "Number",
          "P_ESTRANGE": "Number",
          "P_NASC_CAT": "Number",
          "P_NASC_RES": "Number",
          "P_NASC_EST": "Number",
          "ID_PARE": "Number",
          "ORDRE_DIV": "Number",
          "GRD_FIXID": "String"
        }
      }],
      "zoom": 11,
      "tileUrl": "http://" + serverName + "/tileserver3/tileserver.php?%252Findex.json&callback=_callbacks_._0iuiar2as?/gridpoblacio/8/129/95.pbf"
    });

    map.addLayer({
      'id': _LAYER_ACTIVE,
      'source': 'vector_layer_',
      'source-layer': 'rp2014_qtree_level2_ofus_allvar_3857',
      interactive: true,
      'type': 'fill-extrusion',
      "paint": {
        'fill-extrusion-opacity': .9,
        "fill-extrusion-color": {
          "property": _DEFAULT_PROPERTI,
          "type": "exponential",
          "stops": [

            [0, arrayColors[0]],
            [369, arrayColors[0]],
            [792, arrayColors[1]],
            [1188, arrayColors[2]],
            [1585, arrayColors[3]],
            [1981, arrayColors[4]],
            [2377, arrayColors[5]]
          ]
        },

        "fill-extrusion-height": {
          "property": _DEFAULT_PROPERTI,
          "type": "exponential",
          "stops": [
            [0, 0],

            [369, 369],
            [792, 792],
            [1188, 1188],
            [1585, 1585],
            [1981, 1981],
            [2377, 2378],
          ],
        }

      },
      "filter": [">", _DEFAULT_PROPERTI, 0]

    }, "10100 9 Cap de comarca 8");

    generaLlegendaDinamica(null,null);

    map.on('mousemove', _LAYER_ACTIVE, function(e) {

      map.getCanvas().style.cursor = 'pointer';
      var feature = e.features[0];
      var _prop = getActivePropertie(_DEFAULT_CLASS);
      document.getElementById('pd').innerHTML = "<ul>" +
        "<li><strong>Per gènere:</strong></li>" +
        "<li><strong>Per gènere:</strong></li>" +
        "<li>Total: " + checkUndefined(feature.properties.TOTAL) + "</li>" +
        "<li>Homes: " + checkUndefined(feature.properties.HOMES) + "</li>" +
        "<li>Dones: " + checkUndefined(feature.properties.DONES) + "</li>" +
        "<li><strong>Per edats:</strong></li>" +
        "<li>0-14 anys: " + checkUndefined(feature.properties.P_0_14) + "</li>" +
        "<li>15-64 anys: " + checkUndefined(feature.properties.P_15_64) + "</li>" +
        "<li>65 i +: " + checkUndefined(feature.properties.P_65_I_MES) + "</li>" +
        "<li><strong>Per nacionalitat:</strong></li>" +
        "<li>Espanyola: " + checkUndefined(feature.properties.P_ESPANYOL) + "</li>" +
        "<li>Estrangera: " + checkUndefined(feature.properties.P_ESTRANGE) + "</li>" +
        "<li><strong>Nascuts a:</strong></li>" +
        "<li>Catalunya: " + checkUndefined(feature.properties.P_NASC_CAT) + "</li>" +
        "<li>Espanya: " + checkUndefined(feature.properties.P_NASC_RES) + "</li>" +
        "<li>Estranger: " + checkUndefined(feature.properties.P_NASC_EST) + "</li>" +
        "</ul>";
      popup.setLngLat(e.lngLat)
        .setText(feature.properties[_prop])
        .addTo(map);

    });

    map.on('click', _LAYER_ACTIVE, function() {
    $('#features').toggle();
    });
    map.on('click', function() {
    $('#features').hide();
    });


    map.on('mouseleave', _LAYER_ACTIVE, function() {
      map.getCanvas().style.cursor = '';
      popup.remove();

    });

  });



  createSlider();
  interaccioHTML();


});

function checkUndefined(valor) {

var _val=valor;

  valor === undefined ? _val = 0 : _val='<b>'+valor+'</b>';

  return _val;

}


function changeCSSGradientColors(arrayColors) {


  $('#noUi-base').css({
    'background-color': arrayColors[0],
    'background': '-moz-linear-gradient(left, ' + arrayColors[0] + ' 0%, ' + arrayColors[1] + ' 20%, ' + arrayColors[2] + ' 40%, ' + arrayColors[3] + ' 60%, ' + arrayColors[4] + ' 78%, ' + arrayColors[5] + ' 99%, ' + arrayColors[5] + ' 100%)',
    'background-color': '-webkit-gradient(left top, right top, color-stop(0%, ' + arrayColors[1] + '), color-stop(20%, ' + arrayColors[1] + '), color-stop(40%, ' + arrayColors[2] + '), color-stop(60%, ' + arrayColors[3] + '), color-stop(78%, ' + arrayColors[4] + '), color-stop(99%, ' + arrayColors[5] + '), color-stop(100%, ' + arrayColors[5] + '))',
    'background': '-webkit-linear-gradient(left, ' + arrayColors[0] + ' 0%, ' + arrayColors[1] + ' 20%, ' + arrayColors[2] + ' 40%, ' + arrayColors[3] + ' 60%, ' + arrayColors[4] + ' 78%, ' + arrayColors[5] + ' 99%, ' + arrayColors[5] + ' 100%)',
    'background': '-o-linear-gradient(left, ' + arrayColors[0] + ' 0%, ' + arrayColors[1] + ' 20%, ' + arrayColors[2] + ' 40%, ' + arrayColors[3] + ' 60%, ' + arrayColors[4] + ' 78%, ' + arrayColors[5] + ' 99%, ' + arrayColors[5] + ' 100%)',
    'background': '-ms-linear-gradient(left, ' + arrayColors[0] + ' 0%, ' + arrayColors[1] + ' 20%, ' + arrayColors[2] + ' 40%, ' + arrayColors[3] + ' 60%, ' + arrayColors[4] + ' 78%, ' + arrayColors[5] + ' 99%, ' + arrayColors[5] + ' 100%)',
    'background': 'linear-gradient(to right, ' + arrayColors[0] + ' 0%, ' + arrayColors[1] + ' 20%, ' + arrayColors[2] + ' 40%, ' + arrayColors[3] + ' 60%, ' + arrayColors[4] + ' 78%, ' + arrayColors[5] + ' 99%, ' + arrayColors[5] + ' 100%)',
    'filter': 'progid:DXImageTransform.Microsoft.gradient( startColorstr=\'' + arrayColors[1] + '\', endColorstr=\'' + arrayColors[5] + '\', GradientType=1 )',
  });


}


var optionsColorPicker = {
  customClass: 'colorpicker-2x',

  align: 'left',
  format: 'rgb'
};


function createSlider(){


    slider = document.getElementById('slider');



    noUiSlider.create(slider, {
      start: [_TOTAL_Array[0], _TOTAL_Array[6]],
      connect: true,
      format: {
        to: function(value) {
          return parseInt(value).toFixed(0);
        },
        from: function(value) {
          return parseInt(value).toFixed(0);
        }
      },
      //tooltips: [ true,null, true ],
      tooltips: true,
      range: {
        'min': _TOTAL_Array[0],
        'max': _TOTAL_Array[6]
      }
    });


    slider.noUiSlider.pips({
      mode: 'values',
      values: _TOTAL_Array,
      density: calculateDesity(_TOTAL_Array[0], _TOTAL_Array[6])
    });

    slider.noUiSlider.on('slide', function(values, handle) {
      $('.noUi-tooltip').show();

      if (map.getZoom() >= 12) {
        setFilterToMap(values)
      }
    });

    slider.noUiSlider.on('change', function(values, handle) {
      $('.noUi-tooltip').show();
      if (map.getZoom() < 12) {
        setFilterToMap(values)
      }
    });

    slider.noUiSlider.on('end', function(values, handle) {
      $('.noUi-tooltip').hide();

    });


}


function interaccioHTML() {


initLlocs('#controlbox');

  $.extend(optionsColorPicker, {
    color: '#ffcc00'
  });


  $('#c_init').colorpicker(optionsColorPicker).on('changeColor.colorpicker',
    function(event) {
      $('#c_init').css('background-color', event.color.toHex());
      arrayColors[0] = event.color.toHex();
      arrayColors = chroma.scale([arrayColors[0], arrayColors[5]]).mode('lch').colors(6);
      changeLayerColorPaintProperties(getActivePropertie(_DEFAULT_CLASS), false);

    });


  $('#c_end').colorpicker(optionsColorPicker).on('changeColor.colorpicker',
    function(event) {

      $('#c_end').css('background-color', event.color.toHex());
      arrayColors[5] = event.color.toHex();
      arrayColors = chroma.scale([arrayColors[0], arrayColors[5]]).mode('lch').colors(6);
      changeLayerColorPaintProperties(getActivePropertie(_DEFAULT_CLASS), false);

    });

  $('#c_init').colorpicker('setValue', arrayColors[0]);
  $('#c_init').css('background-color', arrayColors[0]);
  $('#c_end').colorpicker('setValue', arrayColors[5]);
  $('#c_end').css('background-color', arrayColors[5]);

  $('#burguer-menu-icon').click(function() {

        if($(this).hasClass('fa-chevron-circle-down')){

        $(this).removeClass('fa-chevron-circle-down');
        $(this).addClass('fa-chevron-circle-up');

        }else{
            $(this).removeClass('fa-chevron-circle-up');
          $(this).addClass('fa-chevron-circle-down');

        }
        $('.map-overlay').toggle();
    $('#div_panel').toggle();
  });

  $('.btn-xs').click(function() {
    removeClass(_DEFAULT_CLASS);
    $(this).addClass(_DEFAULT_CLASS);

    changeLayerColorPaintProperties($(this).attr('data'), true);

  });

  $('div.noUi-base').prop('id', 'noUi-base');
  changeCSSGradientColors(arrayColors);
}


function setFilterToMap(values) {

  var _prop = getActivePropertie(_DEFAULT_CLASS);
  map.setFilter(_LAYER_ACTIVE, ["all", [">", _prop, parseInt(values[0])],
    ["<", _prop, parseInt(values[1])]
  ]);

}








function removeClass(_className) {
  $('.btn-xs').each(function() {
    $(this).removeClass(_className);
  });
}


function getActivePropertie(_className) {

  var defaultProperti = _DEFAULT_PROPERTI;
  $('.btn-xs').each(function() {
    if ($(this).hasClass(_className)) {
      defaultProperti = $(this).attr('data')
      return defaultProperti;
    }
  });

  return defaultProperti;

}


function calculateDesity(min, max) {

  return parseInt(max - min / 6).toFixed(0);


}


function setValorsSlider(valors) {


  slider.noUiSlider.updateOptions({
    range: {
      'min': valors[0],
      'max': valors[6]
    }
  });
  slider.noUiSlider.set([valors[0], valors[6]]);

  slider.noUiSlider.pips({
    mode: 'values',
    values: valors,
    density: calculateDesity(valors[0], valors[6])
  });


}





function generaLlegendaDinamica(_quantiles,titol) {

  var layers = ['0-369', '369-792', '792-1188', '1188-1586', '1586-1981', '1981-2377'];


  if (_quantiles != null) {
    layers = [
      _quantiles[0].toString() + '-' + _quantiles[1].toString(),
      _quantiles[1].toString() + '-' + _quantiles[2].toString(),
      _quantiles[2].toString() + '-' + _quantiles[3].toString(),
      _quantiles[3].toString() + '-' + _quantiles[4].toString(),
      _quantiles[4].toString() + '-' + _quantiles[5].toString(),
      _quantiles[5].toString() + '-' + _quantiles[6].toString()
    ];

  }

if (titol == null) {titol="Total";}

  legend.innerHTML = "";
  // create legend
    legend.innerHTML = '<div id="tit_llegenda">'+titol+'</div>';
  for (i = 0; i < layers.length; i++) {
    var layer = layers[i];
    var color = arrayColors[i];
    var item = document.createElement('div');
    var key = document.createElement('span');
    key.className = 'legend-key';
    key.style.backgroundColor = color;
    var value = document.createElement('span');
    value.innerHTML = layer;
    item.appendChild(key);
    item.appendChild(value);
    legend.appendChild(item);
  }

}

function changeLayerProperties(layer, value) {

  var style = {
    "paint": {
      'fill-extrusion-opacity': .9,
      "fill-extrusion-color": {
        "property": value,
        "type": "exponential"
      },
      "fill-extrusion-height": {
        "property": value,
        "type": "exponential"
      }
    }
  };

  var values = [];
  var titol="Total";
  switch (value) {

    case "HOMES":
      values = _HOMES_Array;
      titol="Homes";
      break;
    case "DONES":
      values = _DONES_Array;
      titol="Dones";
      break;
    case "P_0_14":
      values = _P_0_14_Array;
      titol="0-14 anys";
      break;
    case "P_15_64":
      values = _P_15_64_Array;
      titol="15-64 anys";
      break;
    case "P_65_I_MES":
      values = _P_65_I_MES_Array;
      titol="65 i més anys";
      break;
    case "P_ESPANYOL":
      values = _P_ESPANYOL_Array;
      titol="Nacionalitat espanyola";
      break;
    case "P_ESTRANGE":
      values = _P_ESTRANGE_Array;
      titol="Nacionalitat estrangera";
      break;
    case "P_NASC_CAT":
      values = _P_NASC_CAT_Array;
      titol="Nascuts a Catalunya";
      break;
    case "P_NASC_RES":
      values = _P_NASC_RES_Array;
        titol="Nascuts a Espanya";
      break;
    case "P_NASC_EST":
      values = _P_NASC_EST_Array;
        titol="Nascuts a Estranger";
      break;
    default:
  titol="Total";
      values = _TOTAL_Array;

  }
  style = createStyleFromArray(values, style);
  generaLlegendaDinamica(values,titol);

  setValorsSlider(values);
  return style;


}



function createStyleFromArray(_quantilesArray, style) {

  style.paint["fill-extrusion-color"].stops = [
    [_quantilesArray[0], arrayColors[0]],
    [_quantilesArray[1], arrayColors[0]],
    [_quantilesArray[2], arrayColors[1]],
    [_quantilesArray[3], arrayColors[2]],
    [_quantilesArray[4], arrayColors[3]],
    [_quantilesArray[5], arrayColors[4]],
    [_quantilesArray[6], arrayColors[5]]
  ];

  style.paint["fill-extrusion-height"].stops = [
    [_quantilesArray[0], _quantilesArray[0]],
    [_quantilesArray[1], _quantilesArray[1]],
    [_quantilesArray[2], _quantilesArray[2]],
    [_quantilesArray[3], _quantilesArray[3]],
    [_quantilesArray[4], _quantilesArray[4]],
    [_quantilesArray[5], _quantilesArray[5]],
    [_quantilesArray[6], _quantilesArray[6]]
  ];


  return style;

}

function changeLayerColorPaintProperties(data, filter) {

  var style = changeLayerProperties(_LAYER_ACTIVE, data);
  try{
  map.setPaintProperty(_LAYER_ACTIVE, 'fill-extrusion-color', style.paint["fill-extrusion-color"]);
  map.setPaintProperty(_LAYER_ACTIVE, 'fill-extrusion-height', style.paint["fill-extrusion-height"]);

        if (filter) {
          map.setFilter(_LAYER_ACTIVE, ['>', data, 0]);
        }
    }catch(Err){

    }
  changeCSSGradientColors(arrayColors);


}

/*

TOTAL int Població
HOMES int Homes
DONES int Dones
P_0_14 int Població < 15 anys
P_15_64 int Població de 15 a 64 anys
P_65_I_MES int Població de 65 anys i més
P_ESPANYOL int Població espanyola
P_ESTRANGE int Població estrangera
P_NASC_CAT int Població nascuda a Catalunya
P_NASC_RES int Població nascuda a la resta d’Espanya
P_NASC_EST int Població nascuda a l’estranger
ID_PARE int Identificador de l’element pare dins

*/
