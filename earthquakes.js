function get_earthquakes() {
    return axios.get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson').then(function (response) {
        for (let earthquake of response.data.features) {
            earthquakes.push({
                longitude: earthquake.geometry.coordinates[0],
                latitude: earthquake.geometry.coordinates[1],
                magnitude: earthquake.properties.mag,
            });
        }

        return earthquakes;
    });
}