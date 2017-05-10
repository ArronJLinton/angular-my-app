
// A controller manages the app's data. Here we use the property title to store a string, and attach it to $scope.
app.controller('MainController', ['$scope', function($scope){
	
  $scope.title = 'Top Sellers in Books';
}]);