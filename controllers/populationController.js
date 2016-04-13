app.controller('populationController', function($scope, $interval, gameValues){
  var resources = gameValues.resources;

  $scope.purchaseWorker = function(){
    resources.food.total -= resources.population.workerCost.food;
    resources.wood.total -= resources.population.workerCost.wood;
    resources.clay.total -= resources.population.workerCost.clay;
    resources.stone.total -= resources.population.workerCost.stone;

    //ADD ONE TO POPULATION!
    resources.population.total += 1;
    resources.population.idleWorkers += 1;
  }

  $scope.upgradeEfficiency = function(){
    resources.food.total -= resources.population.workerEfficiencyCost.food;
    resources.wood.total -= resources.population.workerEfficiencyCost.wood;
    resources.clay.total -= resources.population.workerEfficiencyCost.clay;
    resources.stone.total -= resources.population.workerEfficiencyCost.stone;

    //Add 20% efficiency
    resources.population.workerEfficiency += 20;

    //Change resource Upkeep
    resources.food.upkeep = resources.food.upkeep + Math.floor((resources.food.upkeep * (resources.population.workerEfficiency / 100)));
    resources.wood.upkeep = resources.wood.upkeep + Math.floor((resources.wood.upkeep * (resources.population.workerEfficiency / 100)));
    resources.clay.upkeep = resources.clay.upkeep + Math.floor((resources.clay.upkeep * (resources.population.workerEfficiency / 100)));
    resources.stone.upkeep = resources.stone.upkeep + Math.floor((resources.stone.upkeep * (resources.population.workerEfficiency / 100)));

    //Update the cost of efficency
    var gradient = resources.calculationConstants.efficiencyCost.gradient;
    var yIntercept = resources.calculationConstants.efficiencyCost.yIntercept;
    resources.population.workerEfficiencyCost.food = Math.floor(resources.population.workerEfficiencyCost.food * gradient + yIntercept);
    resources.population.workerEfficiencyCost.wood = Math.floor(resources.population.workerEfficiencyCost.wood * gradient + yIntercept);
    resources.population.workerEfficiencyCost.clay = Math.floor(resources.population.workerEfficiencyCost.clay * gradient + yIntercept);
    resources.population.workerEfficiencyCost.stone = Math.floor(resources.population.workerEfficiencyCost.stone * gradient + yIntercept);
  }
  
});