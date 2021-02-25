function initMap() {
	L.mapquest.key = "dyaeKMhWsilWpDnwps6MijBzJy7VSfQV";

    // 'map' refers to a <div> element with the ID map
    var map = L.mapquest.map('map', {
        center: [32.878637429420166, -117.23584844944718],
        layers: L.mapquest.tileLayer('map'),
        zoom: 12,
        zoomControl: false
    });

    // Add a marker to the map
    L.marker([32.878637429420166, -117.235848449447186]).addTo(map);
}