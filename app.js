
//mapboxgl.accessToken = 'pk.eyJ1IjoiZGF2aWRndWFuIiwiYSI6ImNpcG50N2s4NDAwNGRmbG5jeXZtMHkxMW4ifQ.ubiXybBxhpidF83H-Zvz7Q';

// var map = new mapboxgl.Map({
//     container: 'map',
//     center: [0, 0],
//     zoom: 13,
//     style: 'mapbox://styles/mapbox/streets-v9',
//     // hash: true,
//     // transformRequest: (url, resourceType)=> {
//     //   if(resourceType === 'Source' && url.startsWith('http://myHost')) {
//     //     return {
//     //      url: url.replace('http', 'https'),
//     //      headers: { 'my-custom-header': true},
//     //      credentials: 'include'  // Include cookies for cross-origin requests
//     //    }
//     //   }
//   //  }
//   });
  
//      map.addControl(new mapboxgl.GeolocateControl({
//     positionOptions: {
//         enableHighAccuracy: true
//     },
//     trackUserLocation: true
// }));

    mapboxgl.accessToken = 'pk.eyJ1IjoiZGF2aWRndWFuIiwiYSI6ImNpcG50N2s4NDAwNGRmbG5jeXZtMHkxMW4ifQ.ubiXybBxhpidF83H-Zvz7Q';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [0, 0],
        zoom: 4
    });

    map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserLocation: false
}));

    // var geoloc = new  mapboxgl.GeolocateControl({
    //     trackUserLocation: true,
    // });
