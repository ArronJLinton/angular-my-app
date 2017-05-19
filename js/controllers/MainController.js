
// A controller manages the app's data. Here we use the property title to store a string, and attach it to $scope.
app.controller('MainController', ['$scope', function($scope){

  $scope.title = 'Must Read Books For Professional & Personal Growth';

   $scope.promo = 'Inspirational';
  
	$scope.products = [ 
  { 
    name: 'The Book of Trees', 
    price: 19, 
    pubdate: new Date('2014', '03', '08'), 
    cover: '',
    likes: 0,
    dislikes: 0
  }, 
  { 
    name: 'Program or be Programmed', 
    price: 8, 
    pubdate: new Date('2013', '08', '01'), 
    cover: '',
    likes: 0,
    dislikes: 0
  },
  {
    name: 'The Obstacle is the Way ',
    price: 17,
    pubdate: new Date('2014', '05', '01'),
    likes: 0,
    dislikes: 0
  },
  {
    name: 'The 48 Laws of Power',
    price: 19.99,
    pubdate: new Date('1998', '08', '01'),
    likes: 0,
    dislikes: 0
  },
];

// The plusOne() function gets the index of the product that was clicked, and then adds one to that product's likes property.
  $scope.plusOne = function(index) {
    $scope.products[index].likes += 1;
  };
  $scope.minusOne = function(index) {
    $scope.products[index].dislikes += 1;
  };

// Select image from file button for cover photo 

// Onclick function for adding a book
  $scope.addBook = function(name, price, date, image) {
 

  	name = $scope.name;
  	price = $scope.price;
  	date = $scope.date;
    image = $scope.image;

  $scope.products.push({
  		name: name,
  		price: price,
  		pubdate: date,
      cover: image,
  		likes: 0,
  		dislikes: 0
  	});


  };


}]);