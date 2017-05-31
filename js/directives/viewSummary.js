app.directive('viewsummary', function() { 
  return { 
  // restrict specifies how the directive will be used in the view. The 'E' means it will be used as a new HTML element.
    restrict: 'E', 
    // The scope property specifies the attribute we will pass the directive through and how it will be passed
    // E for Element name, A for Attribute, C for Class, M for Comment
    scope: false, 
    // The template property indicates what HTML to use when the directive is called in the view
    templateUrl: 'js/directives/viewSummary.html',
    // The Link property is used to create interactive directives that respond to user action
    // Accepts three inputs: scope, element, and attr
    link: function(scope, element, attr) { 
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