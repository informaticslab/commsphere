commSphereApp.controller('rootCtrl', ['$scope', '$modal','$routeParams','ngEvents','ngAuth','$location','ngIdentity','$route','$log', function($scope, $modal,$routeParams,ngEvents,ngAuth, $location, ngIdentity,$route,$log) {

$("body").show();
$scope.activeMenu='';
$scope.searchText='';
$scope.identity = ngIdentity;

if($scope.identity.currentUser === undefined){
  $("body").css("background-color", "#2a2d33;");
}
// $log.debug($scope.identity.currentUser);
$scope.createEvent = function (size,draftInstance) {

      var modalInstance = $modal.open({
        templateUrl: '/partials/createEventModal',
        controller: CreateEventModalInstanceCtrl,
        size: size,
        keyboard: false,
        backdrop: 'static',
        resolve: {
         draftInstance: function () {
           return draftInstance;
         }
       }
      });
    
    };

$scope.logout = function(){
		ngAuth.logoutUser().then(function() {
			$scope.email = "";
			$scope.password = "";
			//This is for PIV
//			if($location.protocol()=='https'){
//				$window.location = $location.absUrl().replace('https','http').replace('4400','8089');
//			}
//			else{
//				$location.path('/');    /
//			}
      $location.path('/login')
      $("body").css("background-color", "#2a2d33;");
		});
	};

}]);


var CreateEventModalInstanceCtrl = function ($scope, $modalInstance,$location,$route,$timeout) {

  $scope.ok = function () {
    $modalInstance.close();
    $route.reload();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss();
    $timeout($route.reload,300);
  };
};