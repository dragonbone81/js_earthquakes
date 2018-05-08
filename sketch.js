let map_img;
let resolution = {x: 1024, y: 576, scaled_x: 1280, scaled_y: 720, factor: 1.25};
let center_pixel = {x: 0, y: 0};
let center;
let earthquakes = [1, 1, 1, 1];
let zoom = 1;

function preload() {
    map_img = loadImage('https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/' + center_pixel.x + ',' + center_pixel.y + ',1/' + resolution.x + 'x' + resolution.y + '@2x?access_token=pk.eyJ1IjoiZHJhZ29ibm9uZTgxIiwiYSI6ImNqZ3dtMG56NjE4b3cyenBnd3VmdzUzM24ifQ.h0hGysvzpIetrv0_s78mjQ')
}

function setup() {
    createCanvas(resolution.scaled_x, resolution.scaled_y, WEBGL);
    scale(zoom);
    texture(map_img, 0, 0);
    plane(resolution.scaled_x, resolution.scaled_y);
    center = webMerc(center_pixel.x, center_pixel.y);
    get_earthquakes();

}

function draw() {
    let center = webMerc(0, 0);
    for (let earthquake of earthquakes) {
        let location = webMerc(earthquake.longitude, earthquake.latitude);
        let x = location.x - center.x;
        let y = location.y - center.y;
        fill(255, 0, 255, 255);
        noStroke();
        ellipse(x, y, earthquake.magnitude, earthquake.magnitude);
    }
}