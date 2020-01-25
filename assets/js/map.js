
var view = new ol.View({
  center: ol.proj.fromLonLat([9.18712,45.48790]),
  zoom: 16.5
});

var stylesPLOS = {
    'yellow': new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'yellow',
            width: 3
        })
    }),
    'green': new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'rgb(50,205,50)',
            width: 3
        })
    })
}


var styleFunctionPLOS = function(feature) {

  plosf = feature.get('PLOS');
  var varcol

  if (plosf < 2.5) {
    varcol = 'green'
  }
  else {
    varcol = 'yellow'
    }

  return stylesPLOS[varcol]
};


var stylesePLOS = {
    'lightgreen': new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'rgb(144,238,144)',
            width: 3
        })
    }),
    'green': new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'rgb(50,205,50)',
            width: 3
        })
    })
}


var styleFunctionePLOS = function(feature) {

  plosf = feature.get('ePLOS');
  var varcol

  if (plosf < 2.28) {
    varcol = 'green'
  }
  else {
    varcol = 'lightgreen'
    }

  return stylesePLOS[varcol]
};

var osm = new ol.layer.Tile({
    title: 'OpenStreetMap',
    type: 'base',
	visible: true,
	source: new ol.source.OSM()
});
var osm2 = new ol.layer.Tile({
    title: 'OpenStreetMap',
    type: 'base',
	visible: true,
	source: new ol.source.OSM()
});

var bingRoads = new ol.layer.Tile({
    title: 'Bing Maps—Roads',
    type: 'base',
    visible: false,
    source: new ol.source.BingMaps({
        key: 'AgFYJ5Z5dAqRH30A5iFtowQkx33XrWnsGf5O7U_EEYYSxcLDaFdaHOyyRoTrKn3-',
        imagerySet: 'Road'
    })
});
var bingAerial = new ol.layer.Tile({
    title: 'Bing Maps—Aerial',
    type: 'base',
    visible: false,
    source: new ol.source.BingMaps({
        key: 'AgFYJ5Z5dAqRH30A5iFtowQkx33XrWnsGf5O7U_EEYYSxcLDaFdaHOyyRoTrKn3-',
        imagerySet: 'Aerial'
    })
});
var stamenWatercolor = new ol.layer.Tile({
    title: 'Stamen Watercolor',
    type: 'base',
    visible: false,
    source: new ol.source.Stamen({
        layer: 'watercolor'
    })
});
var stamenToner = new ol.layer.Tile({
    title: 'Stamen Toner',
    type: 'base',
    visible: false,
    source: new ol.source.Stamen({
        layer: 'toner'
    })
});




var sourceLayerRoadLinks = new ol.source.Vector({
    title: 'Road Links',
    projection : 'EPSG:3857',
    url: './assets/geojsonFiles/roadLinks.json',
    format: new ol.format.GeoJSON()
})

var vectorLayerRoadLinks = new ol.layer.Vector({
    title: 'Road Links',
    source: sourceLayerRoadLinks,
    opacity: 0.65,
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'rgb(240,128,128)',
            width: 3
        }),
        fill: new ol.style.Fill({
            color: 'rgb(240,128,128)'
        })
    })
})


var sourceLayerRoadLinkse = new ol.source.Vector({
    title: 'Road Links',
    projection : 'EPSG:3857',
    url: './assets/geojsonFiles/roadLinks.json',
    format: new ol.format.GeoJSON()
})

var vectorLayerRoadLinkse = new ol.layer.Vector({
    title: 'Road Links',
    source: sourceLayerRoadLinkse,
    opacity: 0.65,
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'rgb(240,128,128)',
            width: 3
        }),
        fill: new ol.style.Fill({
            color: 'rgb(240,128,128)'
        })
    })
})



var sourceLayerPLOS = new ol.source.Vector({
    title: 'PLOS',
    projection : 'EPSG:3857',
    url: './assets/geojsonFiles/PLOS.json',
    format: new ol.format.GeoJSON()
})

var vectorLayerPLOS = new ol.layer.Vector({
    title: 'PLOS',
    source: sourceLayerPLOS,
    style: styleFunctionPLOS
})


var sourceLayerePLOS = new ol.source.Vector({
    title: 'ePLOS',
    projection : 'EPSG:3857',
    url: './assets/geojsonFiles/ePLOS.json',
    format: new ol.format.GeoJSON()
})

var vectorLayerePLOS = new ol.layer.Vector({
    title: 'PLOS',
    source: sourceLayerePLOS,
    style: styleFunctionePLOS
})



var map = new ol.Map({
	target: 'map',	
    layers: [new ol.layer.Group({
            title: 'Base Maps',
            layers: [osm, bingRoads, bingAerial, stamenToner]
            }),
            new ol.layer.Group({
            title: 'PLOS',
            layers: [vectorLayerRoadLinks, vectorLayerPLOS]
            })
            ],
	view: view
	// controls: ol.control.defaults().extend([
 //        new ol.control.ScaleLine(),
 //        new ol.control.FullScreen(),
 //        new ol.control.OverviewMap(),
 //        new ol.control.MousePosition({
 //            coordinateFormat: ol.coordinate.createStringXY(4),
 //            projection: 'EPSG:4326'
 //        })
 //    ])
});
var layerSwitcher = new ol.control.LayerSwitcher({});
map.addControl(layerSwitcher);



var map2 = new ol.Map({
	target: 'map2',
	layers: [new ol.layer.Group({
            title: 'Base Maps',
            layers: [osm2, bingRoads, bingAerial, stamenToner]
            }),
            new ol.layer.Group({
            title: 'EPLOS',
            layers: [vectorLayerRoadLinkse, vectorLayerePLOS]
            })
            ],
	view: view
});
var layerSwitcher2 = new ol.control.LayerSwitcher({});
map2.addControl(layerSwitcher2);
