
// A controller manages the app's data. Here we use the property title to store a string, and attach it to $scope.
app.controller('MainController', ['$scope', 'Upload', function($scope, Upload){

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

    $scope.submit = function() {
      if ($scope.form.file.$valid && $scope.file) {
        console.log($scope.file)
        $scope.upload($scope.file);
      }
    };

    // upload on file select or drop
    $scope.upload = function (file) {
      console.log(file)
      return file;
        // Upload.upload({
        //     url: 'upload/url',
        //     data: {file: file, 'username': $scope.username}
        // }).then(function (response) {
        //   console.log(response)
        //     console.log('Success ' + response.config.data.file.name + 'uploaded. Response: ' + response.data);
        // }, function (response) {
        //     console.log('Error status: ' + response.status);
        // }, function (evt) {
        //     var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
        //     console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        // });
    };
    // for multiple files:
    // $scope.uploadFiles = function (files) {
    //   if (files && files.length) {
    //     for (var i = 0; i < files.length; i++) {
    //       Upload.upload({ data: {file: files[i]}});
    //     }
    //     // or send them all together for HTML5 browsers:
    //     Upload.upload({data: {file: files}});
    //   }
    // }

// Onclick function for adding a book
  $scope.addBook = function(name, price, date, image) {
 
    console.log($scope.image.$ngfName)

  	name = $scope.name;
  	price = $scope.price;
  	date = $scope.date;
    image = $scope.image.$ngfName;

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