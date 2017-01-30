var artID2com;
function me(x){
	artID2com = x;
	}
	
angular.module('starter.controllers', [])

.controller('ArticleCtrl', function($scope,$http) {
			
			$http.get("http://nsportal.freevar.com/APIs/orangeApi.php?request=articles")
			.then(function(response){
					i=-1;
				while(i<response.data.length-1){
					
					i=i+1;
					console.log('article while loop working...')
					
				$scope.articles = [response.data];
				}
				console.log('articles responding...');
			});
			
 //setInterval(function(){},1000);
})
.controller('CommentCtrl', function($scope,$http) {
			
			$http.get("http://nsportal.freevar.com/APIs/orangeApi.php?request=comments")
			.then(function(response){
					i=-1;
				while(i<response.data.length-1){
					
					i=i+1;
					console.log('comments while loop working...')
					
		console.log(artID2com);
				$scope.comments = [response.data];
				}
				console.log('comments responding...');
			});
	
	
 //setInterval(function(){},3000);		
})

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $http){
	
//===========================Login Model==============================

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal1 = modal;
  });


  
  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal1.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal1.show();
  };


  
  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };


//===========================Register model=====================================

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
    // Form data for the login modal
  $scope.registerData = {};
  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/register.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal3 = modal;
  });

  // Triggered in the Likes modal to close it
  $scope.closeRegister = function() {
    $scope.modal3.hide();
  };

  // Open the Likes modal
  $scope.register = function() {
    $scope.modal3.show();
  };
  // Perform the Likes view actions
  $scope.doRegister = function() {
    console.log('Viewing people who liked this article', $scope.registerData);

    // Simulate a likes view delay. Remove this and replace with your likes page
    // code if using a login system
    $timeout(function() {
      $scope.closeRegister();
    }, 1000);
  };
  

//===========================likes model=====================================

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
    // Form data for the login modal
  $scope.likesData = {};
  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/likes.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the Likes modal to close it
  $scope.closeLikes = function() {
    $scope.modal.hide();
  };

  // Open the Likes modal
  $scope.likes = function() {
    $scope.modal.show();
  };
  // Perform the Likes view actions
  $scope.doLikesView = function() {
    console.log('Viewing people who liked this article', $scope.likesData);

    // Simulate a likes view delay. Remove this and replace with your likes page
    // code if using a login system
    $timeout(function() {
      $scope.closeLikes();
    }, 1000);
  };

//===========================comments model=====================================

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
    // Form data for the login modal
  $scope.commentsData = {};
  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/comments.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal2 = modal;
  });

  // Triggered in the Likes modal to close it
  $scope.closeComments = function() {
    $scope.modal2.hide();
  };

  // Open the Likes modal
  $scope.comments = function(com) {
	 $scope.modal2.show();
		console.log(com);
  };
  // Perform the Likes view actions
  $scope.doComments = function() {
    console.log('Viewing people who liked this article', $scope.commentsData);

    // Simulate a likes view delay. Remove this and replace with your likes page
    // code if using a login system
    $timeout(function() {
      $scope.closeComments();
    }, 1000);
  };



  
//===================================end of controllers====================================
})
.controller('LikeCtrl', function($scope,$http) {
			
			$http.get("http://nsportal.freevar.com/APIs/orangeApi.php?request=like")
			.then(function(response){
					i=-1;
				while(i<response.data.length-1){
					
					i=i+1;
					console.log('comments while loop working...')
					
				$scope.likes = [response.data];
				}
				console.log('comments responding...');
			});
	
 //setInterval(function(){},3000);		
})
.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Boxing', id: 1 },
    { title: 'Cricket', id: 2 },
    { title: 'Rugby', id: 3 },
    { title: 'Racing', id: 4 },
    { title: 'Soccer', id: 5 },
    { title: 'Track Sports', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
