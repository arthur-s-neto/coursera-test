(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.dishes = "";
  $scope.message = "";
  $scope.check_dishes = function () {
    if ($scope.dishes==""){
      $scope.message = "Please enter data first";
    }
    else{
      var dishCounter = 0;
      var arrayOfDishes = $scope.dishes.split(",");
      for (var i = 0; i < arrayOfDishes.length; i++) {
        if (arrayOfDishes[i].trim() != ""){
          dishCounter += 1;
        }
      }

      if (dishCounter <= 3){
          $scope.message = "Enjoy!";
      }
      else{
          $scope.message = "Too much!";
      }
    }

  };

}

})();
