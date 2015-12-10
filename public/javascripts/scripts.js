var app = angular.module('etaApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/channels', {
    templateUrl: '/pages/channels.html',
    controller: 'channelsCtrl'
  }).when('/wishlist', {
    templateUrl: '/pages/wishlist.html',
    controller: 'wishlistCtrl'
  });
}]);

app.controller('channelsCtrl', ['$scope', '$http', function ($scope, $http) {

  $http({
    url: '/channels',
    method: 'get'
  }).then(function (response) {
    $scope.channels = response.data;
  });

}]);

app.controller('wishlistCtrl', ['$scope', '$http', function ($scope, $http) {

  $scope.data = {
    name: '',
    purpose: ''
  };

  $scope.postChannel = function () {
    $http({
      url: '/channels',
      method: 'post',
      data: $scope.data
    }).then(function (data) {
      $scope.data = {
        name: '',
        purpose: ''
      };
    });
  }

}])