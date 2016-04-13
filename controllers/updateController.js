var app = angular.module('resources', ['underscore']);

app.controller('updateController', function($scope, $interval, gameValues, disasterService, combatService){
  $scope.resources = gameValues.resources;
  resources = gameValues.resources;
  //Controls curerent selected menu
  $scope.menuSelected = "population";

  $interval(function(){
    if(resources.food.total < resources.granary.food){
      $scope.resources.food.total += $scope.resources.food.upkeep;
      if(resources.food.total >= resources.granary.food){
        //Make the granary the hard cap
        resources.food.total = resources.granary.food
      }
    }
    if(resources.wood.total < resources.warehouse.wood){
      $scope.resources.wood.total += $scope.resources.wood.upkeep;
      if(resources.wood.total >= resources.warehouse.wood){
        //Make the warehouse the hard cap
        resources.wood.total = resources.warehouse.wood
      }
    }
    if(resources.clay.total < resources.warehouse.clay){
      $scope.resources.clay.total += $scope.resources.clay.upkeep;
      if(resources.clay.total >= resources.warehouse.clay){
        //Make the warehouse the hard cap
        resources.clay.total = resources.warehouse.clay
      }
    }
    if(resources.stone.total < resources.warehouse.stone){
      $scope.resources.stone.total += $scope.resources.stone.upkeep;
      if(resources.stone.total >= resources.warehouse.stone){
        //Make the warehouse the hard cap
        resources.stone.total = resources.warehouse.stone
      }
    }    


    //Boss fight!!!!
    if(resources.combat.isActive === true){
      combatService.attack();
    }


    disasterService.updateDisasters();
  },5000);

});

