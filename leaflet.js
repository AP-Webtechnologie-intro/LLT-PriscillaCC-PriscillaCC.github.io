window.onload = function() {
    window.onload = function() {
        var map = L.map('map').setView([51.05, 5.13], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);
    
        var marker = L.marker([51.045096, 5.231160]).addTo(map);
        marker.bindPopup("Website").openPopup();
    
        function onMapClick(e) {
            var popup = L.popup()
            .setLatLng(e.latlng)
            .setContent("U bevindt u zich hier: " + e.latlng.toString())
            .openOn(map);
        } 
        map.on('click', onMapClick);
};
}