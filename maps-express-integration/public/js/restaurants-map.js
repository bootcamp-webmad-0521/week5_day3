function initMap() {

    const myMap = new google.maps.Map(
        document.querySelector('#restaurantsList'),
        { zoom: 12, center: { lat: 40.392499, lng: -3.698214 } }
    )

    getRestaurantsData(myMap)
}



function getRestaurantsData(myMap) {

    axios
        .get('/api/restaurants')
        .then(response => response.data.forEach(elm => printMarker(elm.location, myMap)))
        .catch(err => console.log(err))
}



function printMarker(location, myMap) {

    const { coordinates } = location

    new google.maps.Marker({
        map: myMap,
        position: { lat: coordinates[0], lng: coordinates[1] }
    })
}