// angular.module('sitterApp', ['uiGmapgoogle-maps'])
//     .controller('mainCtrl', function($scope) {
//         $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
//     });


// angular.module("sitterApp", ['uiGmapgoogle-maps'])
//         .controller("mapCtrl", function($scope, $interval) {
//                 $scope.map = {
//                         center: {
//                                 latitude: 56.162939,
//                                 longitude: 10.203921
//                         },
//                         zoom: 8
//                 };
//         });

// angular
//   .module('sitterApp', ['ngMap'])
//   .controller('MapCtrl', function(NgMap) {
//     NgMap.getMap().then(function(map) {
//       console.log(map.getCenter());
//       console.log('markers', map.markers);
//       console.log('shapes', map.shapes);
//       $scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyDkn0d06-Wg9axUBDTMWtk4z0TuNDA-B9Q";
//     });
// });


// angular
//   .module("sitterApp", [])
//   .controller('MapCtrl', function($scope) {
//
//         var mapOptions = {
//           zoom: 4,
//           center: new google.maps.LatLng(51.5097798, -0.1000756),
//           mapTypeId: google.maps.MapTypeId.TERRAIN
//         };
//
//         $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
//
//         $scope.markers = [];
//
//         var infoWindow = new google.maps.InfoWindow();
//
//         var createMarker = function(info) {
//
//           var marker = new google.maps.Marker({
//             map: $scope.map,
//             position: new google.maps.LatLng(info.lat, info.long),
//             title: info.city
//           });
//           marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
//
//           google.maps.event.addListener(marker, 'click', function() {
//             infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
//             infoWindow.open($scope.map, marker);
//           });
//
//           $scope.markers.push(marker);
//
//         };
//
//         for (i = 0; i < posts.length; i++) {
//           createMarker(posts[i]);
//         }
//
//         $scope.openInfoWindow = function(e, selectedMarker) {
//           e.preventDefault();
//           google.maps.event.trigger(selectedMarker, 'click');
//         };
//
//       });
