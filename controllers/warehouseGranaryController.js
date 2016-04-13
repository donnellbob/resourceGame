app.controller('warehouseGranaryController', function($scope, gameValues){
  var resources = gameValues.resources;

  $scope.upgradeCapacity = function(storageType){
    resources.food.total -= resources[storageType].upgradeCost.food;
    resources.wood.total -= resources[storageType].upgradeCost.wood;
    resources.clay.total -= resources[storageType].upgradeCost.clay;
    resources.stone.total -= resources[storageType].upgradeCost.stone;

    //Upgrade total capacity
    if(storageType === "granary"){
      resources.granary.food += resources.granary.nextMaxIncrease;
    }
    if(storageType === "warehouse"){
      resources.warehouse.wood += resources.warehouse.nextMaxIncrease;
      resources.warehouse.clay += resources.warehouse.nextMaxIncrease;
      resources.warehouse.stone += resources.warehouse.nextMaxIncrease;
    }    
  }
  
});