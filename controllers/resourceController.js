app.controller('resourceController', function($scope, gameValues){
  var resources = gameValues.resources;

  $scope.minusWorker = function(resourceName){
    resources[resourceName].workers -=1;
    resources.population.idleWorkers +=1;

    //Update upkeep!
    if(resources[resourceName].workers != 0){
      resources[resourceName].upkeep = resources[resourceName].upkeepPerWorker * resources[resourceName].workers;

      //Add efficiency!
      resources[resourceName].upkeep += Math.floor(resources[resourceName].upkeep * (resources.population.workerEfficiency / 100));
    }else{
      resources[resourceName].upkeep = 0;
    }

    //Update avaiable capacity!
    resources[resourceName].availableJobs += 1;
    
  }

  $scope.plusWorker = function(resourceName){
    resources[resourceName].workers +=1;
    resources.population.idleWorkers -=1;

    //Update upkeep!
    resources[resourceName].upkeep = resources[resourceName].upkeepPerWorker * resources[resourceName].workers;

    //Add efficiency
    resources[resourceName].upkeep += Math.floor(resources[resourceName].upkeep * (resources.population.workerEfficiency / 100));

    //Update avaiable capacity!
    resources[resourceName].availableJobs -= 1;
  }

  $scope.upgradeCapacity = function(resourceName){
    resources.food.total -= resources[resourceName].upgradeCapacityCost.food;
    resources.wood.total -= resources[resourceName].upgradeCapacityCost.wood;
    resources.clay.total -= resources[resourceName].upgradeCapacityCost.clay;
    resources.stone.total -= resources[resourceName].upgradeCapacityCost.stone;

    resources[resourceName].availableJobs += resources[resourceName].capacityPerLand;

    //Update upgradecosts!!
    var gradient = resources.calculationConstants.capacityCost.gradient;
    var yIntercept = resources.calculationConstants.capacityCost.yIntercept;
    resources[resourceName].upgradeCapacityCost.food = Math.floor(resources[resourceName].upgradeCapacityCost.food * gradient + yIntercept);
    resources[resourceName].upgradeCapacityCost.wood = Math.floor(resources[resourceName].upgradeCapacityCost.wood * gradient + yIntercept);
    resources[resourceName].upgradeCapacityCost.clay = Math.floor(resources[resourceName].upgradeCapacityCost.clay * gradient + yIntercept);
    resources[resourceName].upgradeCapacityCost.stone = Math.floor(resources[resourceName].upgradeCapacityCost.stone * gradient + yIntercept);
  }
  
});