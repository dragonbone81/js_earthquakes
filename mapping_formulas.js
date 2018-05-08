function webMerc(longitude, latitude) {
    return {
        x: (256 / PI) * pow(2, zoom) * (radians(longitude) + PI) * resolution.factor,
        y: (256 / PI) * pow(2, zoom) * (PI - log(tan((PI / 4) + (radians(latitude) / 2)))) * resolution.factor,
    }
}