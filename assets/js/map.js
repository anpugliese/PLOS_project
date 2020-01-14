var view = new ol.View({
  center: ol.proj.fromLonLat([-84, -2]),
  zoom: 6
});

var osm = new ol.layer.Tile({
	visible: true,
	source: new ol.source.OSM()
});
var osm2 = new ol.layer.Tile({
	visible: true,
	source: new ol.source.OSM()
});
var ecuadorBoundary = new ol.layer.Image({
	source: new ol.source.ImageWMS({
	url: 'http://localhost:8082/geoserver/wms',
	params: {'LAYERS': 'Ex_GeoServer:ECU_adm0'}
	})
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
var map = new ol.Map({
	target: 'map',
	layers: [osm, bingRoads, bingAerial],
	view: view,
	controls: ol.control.defaults().extend([
        new ol.control.ScaleLine(),
        new ol.control.FullScreen(),
        new ol.control.OverviewMap(),
        new ol.control.MousePosition({
            coordinateFormat: ol.coordinate.createStringXY(4),
            projection: 'EPSG:4326'
        })
    ])
});
var layerSwitcher = new ol.control.LayerSwitcher({});
map.addControl(layerSwitcher);



var map2 = new ol.Map({
	target: 'map2',
	layers: [osm2, stamenWatercolor],
	view: view
});
var layerSwitcher = new ol.control.LayerSwitcher({});
map2.addControl(layerSwitcher);
