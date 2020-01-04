var osm = new ol.layer.Tile({
	visible: true,
	source: new ol.source.OSM()
});
var ecuadorBoundary = new ol.layer.Image({
	source: new ol.source.ImageWMS({
	url: 'http://localhost:8082/geoserver/wms',
	params: {'LAYERS': 'Ex_GeoServer:ECU_adm0'}
	})
});
var map = new ol.Map({
	target: document.getElementById('map'),
	layers: [osm, ecuadorBoundary],
	view: new ol.View({
		center: ol.proj.fromLonLat([-84, -2]),
		zoom: 6
	})
});