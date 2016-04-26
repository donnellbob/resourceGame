app.controller('barracksController', function($scope, $interval, gameValues){
  var resources = gameValues.resources;

  $scope.purchaseUnit = function(unit){

  	switch(unit){
  		case 'clubsMen':
  			resources.food.total -= resources.combatUnits.clubsMen.cost.food;
  			resources.wood.total -= resources.combatUnits.clubsMen.cost.wood;
  			resources.clay.total -= resources.combatUnits.clubsMen.cost.clay;
  			resources.stone.total -= resources.combatUnits.clubsMen.cost.stone;

  			resources.units.currentUnits[0] += 1;
  			resources.population.total += 1;
  			break;

   		case 'archer':
  			resources.food.total -= resources.combatUnits.archer.cost.food;
  			resources.wood.total -= resources.combatUnits.archer.cost.wood;
  			resources.clay.total -= resources.combatUnits.archer.cost.clay;
  			resources.stone.total -= resources.combatUnits.archer.cost.stone;

  			resources.units.currentUnits[1] += 1;
  			resources.population.total += 1;
  			break;

  		case 'horseMen':
  			resources.food.total -= resources.combatUnits.horseMen.cost.food;
  			resources.wood.total -= resources.combatUnits.horseMen.cost.wood;
  			resources.clay.total -= resources.combatUnits.horseMen.cost.clay;
  			resources.stone.total -= resources.combatUnits.horseMen.cost.stone;

  			resources.units.currentUnits[2] += 1;
  			resources.population.total += 1;
  			break;

  		case 'swordsMen':
  			resources.food.total -= resources.combatUnits.swordsMen.cost.food;
  			resources.wood.total -= resources.combatUnits.swordsMen.cost.wood;
  			resources.clay.total -= resources.combatUnits.swordsMen.cost.clay;
  			resources.stone.total -= resources.combatUnits.swordsMen.cost.stone;

  			resources.units.currentUnits[3] += 1;
  			resources.population.total += 1;
  			break;

  		case 'catapult':
  			resources.food.total -= resources.combatUnits.catapult.cost.food;
  			resources.wood.total -= resources.combatUnits.catapult.cost.wood;
  			resources.clay.total -= resources.combatUnits.catapult.cost.clay;
  			resources.stone.total -= resources.combatUnits.catapult.cost.stone;

  			resources.units.currentUnits[4] += 1;
  			resources.population.total += 1;
  			break;

  		case 'priest':
  			resources.food.total -= resources.combatUnits.priest.cost.food;
  			resources.wood.total -= resources.combatUnits.priest.cost.wood;
  			resources.clay.total -= resources.combatUnits.priest.cost.clay;
  			resources.stone.total -= resources.combatUnits.priest.cost.stone;

  			resources.units.currentUnits[5] += 1;
  			resources.population.total += 1;
  			break;
  	}
  }

 
});