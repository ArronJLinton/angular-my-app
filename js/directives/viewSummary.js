app.directive('viewSummary', function() { 
  return { 
  // restrict specifies how the directive will be used in the view. The 'E' means it will be used as a new HTML element.
    restrict: 'E', 
    scope: {}, 
    // scope above becomes available to use in the template given by templateURL.
    templateUrl: './viewSummary.html',
    link: function(scope, element, attrs) { 
    scope.buttonText = "Open Summary", 
    scope.installed = false, 

  scope.download = function() { 
    element.toggleClass('btn-active'); 
    if(scope.installed) { 
      scope.buttonText = "Open Summary"; 
      scope.installed = false; 
    } else { 
      scope.buttonText = "Close Summary"; 
      scope.installed = true; 
   		 } 
 		 };
		}
  };
});