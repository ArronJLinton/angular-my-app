
// A controller manages the app's data. Here we use the property title to store a string, and attach it to $scope.
app.controller('MainController', ['$scope', function($scope){

  $scope.title = 'Top Sellers in Books';

   $scope.promo = 'Inspirational';
  
	$scope.products = [ 
  { 
    name: 'The Book of Trees', 
    price: 19, 
    pubdate: new Date('2014', '03', '08'), 
    cover: 'img/the-book-of-trees.jpg' 
  }, 
  { 
    name: 'Program or be Programmed', 
    price: 8, 
    pubdate: new Date('2013', '08', '01'), 
    cover: 'img/program-or-be-programmed.jpg' 
  },
  {
    name: 'The Obstacle is the Way ',
    price: 17,
    pubdate: new Date('2014', '05', '01')
  },
  {
    name: 'The 48 Laws of Power',
    price: 19.99,
    pubdate: new Date('1998', '08', '01')
  }
];
}]);