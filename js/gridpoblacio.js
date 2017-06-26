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
var arrayFilters = [0, 2378];//7478797


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

  var TOTAL_Catalunya=7478797;
	var	HOMES_total=3662644;
	var	DONES_total=3771210;
	var	P_0_14_total=959248;
	var	P_15_64_total=4963774;
	var	P_65_I_MES_total=1236859;
	var	P_ESPANYOL_total=5383294;
	var	P_ESTRANGE_total=1070905;
	var	P_NASC_CAT_total=4745689;
	var	P_NASC_RES_total=1209516;
	var	P_NASC_EST_total=1216264;


var _LAYER_ACTIVE = 'poblacio_grid';
var _LAYER_ACTIVE_SELECTED = 'poblacio_grid_selected';
var color_selected = "#ffff00";
var _DEFAULT_CLASS = "activeBT";
var _DEFAULT_PROPERTI = "TOTAL";
var objApp = {};
var arrayXYZPB = [1.2293, 41.1246, 13, 45, -17.6];
$(document).ready(function() {

  //arrayColors = chroma.scale(['#FFD400', '#cc0000']).mode('lch').colors(6);
  arrayColors = chroma.scale(['#EFD905', '#7700ff']).mode('lch').colors(6);
  arrayValues = _TOTAL_Array;



  if ($.url('?XYZPB')) {
    try {
      arrayXYZPB = $.url('?XYZPB').split(",");
      console.info(arrayXYZPB);
    } catch (err) {}
  }


  console.info($.url('?COLORS'));
  if ($.url('?COLORS')) {
    try {
      var _cc = $.url('?COLORS').split(",");
      console.info(_cc);
      arrayColors = chroma.scale(["#" + _cc[0], "#" + _cc[1]]).mode('lch').colors(6);
    } catch (err) {
      console.info(err);
    }
  }

  if ($.url('?FILTERS')) {
    try {
      arrayFilters = $.url('?FILTERS').split(",");
    } catch (err) {
      console.info(err);
    }
  }




  mapboxgl.accessToken = 'NOT-REQUIRED-WITH-YOUR-VECTOR-TILES-DATA';
  map = new mapboxgl.Map({
    container: 'map',
    center: [arrayXYZPB[0], arrayXYZPB[1]],
    pitch: arrayXYZPB[3],
    hash: false,
    bearing: arrayXYZPB[4],
    style: styleGris, //styleBlanc
    zoom: arrayXYZPB[2]
  });

  map.setMaxZoom(14.45);
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


  jQuery('.mapboxgl-ctrl-top-right div:first')
    .append('<button id="bt_pitch" title="Perspectiva" class="mapboxgl-ctrl-icon glyphicon glyphicon-road"></button>');


  jQuery('#bt_pitch').on('click', function() {
    var pitch = parseInt(map.getPitch());
    pitch == 60 ? pitch = 0 : pitch = pitch + 30;
    map.easeTo({
      'pitch': pitch
    });

  });

  dataTable(null);

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







    generaLlegendaDinamica(null, null);

    map.on('mousemove', _LAYER_ACTIVE, function(e) {

      map.getCanvas().style.cursor = 'pointer';
      var feature = e.features[0];
      var _prop = getActivePropertie(_DEFAULT_CLASS);

      dataTable(feature);

      popup.setLngLat(e.lngLat)
        .setText(feature.properties[_prop])
        .addTo(map);

    });

    map.on('click', _LAYER_ACTIVE, function() {
      //  $('#features').toggle();
    });


    map.on('mouseleave', _LAYER_ACTIVE, function() {
      map.getCanvas().style.cursor = '';
      popup.remove();
      dataTable(null);
      /*
      if (map.getZoom() >= 11) {
        map.setFilter(_LAYER_ACTIVE_SELECTED, ['==', "ID", ""]);
      }
      */

    });

    if ($.url('?PROP')) {
      try {
        _DEFAULT_PROPERTI = $.url('?PROP');
        setActivePropertie(_DEFAULT_PROPERTI)
      } catch (err) {
        console.info(err);
      }
    }
    if ($.url('?FILTERS')) {
      try {
        arrayFilters = $.url('?FILTERS').split(",");
        updateSliderLimits(arrayFilters);
      } catch (err) {}
    }

  });

  createSlider(arrayValues);
  interaccioHTML();









});

function checkUndefined(valor) {
  var _val = valor;
  valor === undefined ? _val = 0 : _val = valor;
  return _val;
}


function dataTable(feature) {
  if (feature) {
    document.getElementById('taula_dades').innerHTML = "<table style='width:100%'>" +
      "<tr><th colspan='3'><strong>Per Gènere</strong></th></tr>" +
      "<tr>" +
      "<td>Total: " + checkUndefined(feature.properties.TOTAL) + "</td>" +
      "<td>Homes: " + checkUndefined(feature.properties.HOMES) + "</td>" +
      "<td>Dones: " + checkUndefined(feature.properties.DONES) + "</td>" +
      "</tr>" +
      "<tr><th colspan='3'><strong>Per edats</strong></th></tr>" +
      "<tr>" +
      "<td>0-14 anys: " + checkUndefined(feature.properties.P_0_14) + "</td>" +
      "<td>15-64 anys: " + checkUndefined(feature.properties.P_15_64) + "</td>" +
      "<td>65 i +: " + checkUndefined(feature.properties.P_65_I_MES) + "</td>" +
      "</tr>" +
      "<tr><th colspan='2'><strong>Per nacionalitat:</strong></th></tr>" +
      "<td>Espanyola: " + checkUndefined(feature.properties.P_ESPANYOL) + "</td>" +
      "<td>Estrangera: " + checkUndefined(feature.properties.P_ESTRANGE) + "</td>" +
      "</tr>" +
      "<tr><th colspan='3'><strong>Nascuts a:</strong></th></tr>" +
      "<td>Catalunya: " + checkUndefined(feature.properties.P_NASC_CAT) + "</td>" +
      "<td>Espanya: " + checkUndefined(feature.properties.P_NASC_RES) + "</td>" +
      "<td>Estranger: " + checkUndefined(feature.properties.P_NASC_EST) + "</td>" +
      "</tr>" +
      "</table>";
  } else {
    document.getElementById('taula_dades').innerHTML = "<table style='width:100%'>" +
      "<tr><th colspan='3'><strong>Per Gènere</strong></th></tr>" +
      "<tr>" +
      "<td>Total: - </td>" +
      "<td>Homes: - </td>" +
      "<td>Dones: - </td>" +
      "</tr>" +
      "<tr><th colspan='3'><strong>Per edats</strong></th></tr>" +
      "<tr>" +
      "<td>0-14 anys: - </td>" +
      "<td>15-64 anys: - </td>" +
      "<td>65 i +: - </td>" +
      "</tr>" +
      "<tr><th colspan='2'><strong>Per nacionalitat:</strong></th></tr>" +
      "<td>Espanyola: - </td>" +
      "<td>Estrangera: - </td>" +
      "</tr>" +
      "<tr><th colspan='3'><strong>Nascuts a:</strong></th></tr>" +
      "<td>Catalunya: - </td>" +
      "<td>Espanya: - </td>" +
      "<td>Estranger: - </td>" +
      "</tr>" +
      "</table>";

  }


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


function createSlider(arrayValues) {

  slider = document.getElementById('slider');
  noUiSlider.create(slider, {
    start: [arrayValues[0], arrayValues[6]],
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
      'min': arrayValues[0],
      'max': arrayValues[6]
    }
  });


  slider.noUiSlider.pips({
    mode: 'values',
    values: arrayValues,
    density: calculateDesity(arrayValues[0], arrayValues[6])
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


    $('#ull_capa').click(function() {
          if ($(this).hasClass('fa-eye')) { //obert
                $(this).removeClass('fa-eye');
                $(this).addClass('fa-eye-slash');
                  map.setPaintProperty(_LAYER_ACTIVE, 'fill-extrusion-opacity', 0);
            }else{
                $(this).addClass('fa-eye');
                $(this).removeClass('fa-eye-slash');
                  map.setPaintProperty(_LAYER_ACTIVE, 'fill-extrusion-opacity', .9);
            }

    });

  $('#burguer-menu-icon').click(function() {

    if ($(this).hasClass('fa-chevron-circle-down')) { //obert
      $(this).removeClass('fa-chevron-circle-down');
      $(this).addClass('fa-chevron-circle-up');
      console.info($('#social'));
      $('.social_in').hide();
      $('.social_out').show();
      $('#titol').css('width', '90%');
    } else {

      $(this).removeClass('fa-chevron-circle-up');
      $(this).addClass('fa-chevron-circle-down');
      $('.social_out').hide();
      $('.social_in').show();
      $('#titol').css('width', '100%');
    }
    $('.map-overlay').toggle();
    $('#div_panel_body').toggle();
    $('.panel-footer').toggle();



  });



  $('#bt_vincle').on('click', function() {

    var temaActiu = getActivePropertie(_DEFAULT_CLASS);

    var params = "?XYZPB=" + map.getCenter().lng.toFixed(6) + "," + map.getCenter().lat.toFixed(6) + "," + map.getZoom().toFixed(0) + "," + map.getPitch().toFixed(1) + "," + map.getBearing().toFixed(1) +
      "&PROP=" + temaActiu +
      "&COLORS=" + arrayColors[0].replace('#', '') + "," + arrayColors[5].replace('#', '') +
      "&FILTERS=" + arrayFilters[0] + "," + arrayFilters[1] + "&";
    var currentURL = "http://" + $.url('hostname') + $.url('path') + params;

    $('#urlMap').val(currentURL);
    var iframecode = '<iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="' + currentURL + '" ></iframe>';
    $('#iframeMap').html(iframecode);
    $('#enllacamodal').modal('show');
  });


  //$(document).hotkeys('alt+ctrl+j', 'alt+ctrl+m', function(){
  $(document).bind('keydown', 'alt+ctrl+m', function() {

    map.flyTo({
      center: [1.7662, 41.3019],
      zoom: 13.43
    });
    //  $('#alertmodal .alertmodal-body').html("Ups!! que està passant aqui? <i class='fa fa-comment-o' aria-hidden='true'></i>");
    //  $('#alertmodal').modal('show');
  });


  if ($(document).height() < 640) {
    $("#burguer-menu-icon").trigger("click");
  }

  $('.btn-xs').click(function() {
    removeClass(_DEFAULT_CLASS);
    $(this).addClass(_DEFAULT_CLASS);
    changeLayerColorPaintProperties($(this).attr('data'), true);
  });

  $('div.noUi-base').prop('id', 'noUi-base');
  changeCSSGradientColors(arrayColors);


  jQuery('#bt_capture').on('click', function() {
    $('#md_print').modal({
      show: true
    });
  });

}


function setFilterToMap(values) {

  arrayFilters[0] = parseInt(values[0]);
  arrayFilters[1] = parseInt(values[1]);
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


function setActivePropertie(PROP) {

  $('.btn-xs').each(function() {
    var po = $(this).attr('data');

    if (po == PROP) {
      removeClass(_DEFAULT_CLASS);
      $(this).addClass(_DEFAULT_CLASS);
      changeLayerColorPaintProperties(PROP, null);

    }


  });

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


function updateSliderLimits(valors) {

  slider.noUiSlider.set([valors[0], valors[1]]);
  setFilterToMap(valors);

}


function generaLlegendaDinamica(_quantiles, titol) {

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

  if (titol == null) {
    titol = "Total";
  }

  legend.innerHTML = "";
  // create legend
  legend.innerHTML = '<div id="tit_llegenda"><b>' + titol + '</b></div>';
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
  var titol = "Total";
  switch (value) {

    case "HOMES":
      values = _HOMES_Array;
      titol = "Homes";
      break;
    case "DONES":
      values = _DONES_Array;
      titol = "Dones";
      break;
    case "P_0_14":
      values = _P_0_14_Array;
      titol = "0-14 anys";
      break;
    case "P_15_64":
      values = _P_15_64_Array;
      titol = "15-64 anys";
      break;
    case "P_65_I_MES":
      values = _P_65_I_MES_Array;
      titol = "65 i més anys";
      break;
    case "P_ESPANYOL":
      values = _P_ESPANYOL_Array;
      titol = "Nacionalitat espanyola";
      break;
    case "P_ESTRANGE":
      values = _P_ESTRANGE_Array;
      titol = "Nacionalitat estrangera";
      break;
    case "P_NASC_CAT":
      values = _P_NASC_CAT_Array;
      titol = "Nascuts a Catalunya";
      break;
    case "P_NASC_RES":
      values = _P_NASC_RES_Array;
      titol = "Nascuts a Espanya";
      break;
    case "P_NASC_EST":
      values = _P_NASC_EST_Array;
      titol = "Nascuts a Estranger";
      break;
    default:
      titol = "Total";
      values = _TOTAL_Array;

  }
  style = createStyleFromArray(values, style);
  generaLlegendaDinamica(values, titol);

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
  try {
    map.setPaintProperty(_LAYER_ACTIVE, 'fill-extrusion-color', style.paint["fill-extrusion-color"]);
    map.setPaintProperty(_LAYER_ACTIVE, 'fill-extrusion-height', style.paint["fill-extrusion-height"]);

    if (filter) {
      map.setFilter(_LAYER_ACTIVE, ['>', data, 0]);
    }
  } catch (Err) {

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
