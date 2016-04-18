app.service("gameValues", function(){

  this.resources =  {
    population : {total: 4, idleWorkers: 0, workerEfficiency: 0, 
      workerCost: {food: 20, wood: 20, clay: 20, stone: 20}, 
      workerEfficiencyCost: {food: 120, wood: 60, clay: 80, stone: 20}
    },
    food :  {upkeep : 5, upkeepPerWorker: 5, total: 0, workers: 1, totalFarmland: 1, availableJobs: 1, capacityPerLand: 2,
    	upgradeCapacityCost: {food: 20, wood: 200, clay: 150, stone: 40}},
    wood :  {upkeep : 5, upkeepPerWorker: 5, total: 0, workers: 1, totalWoodFarm: 1, availableJobs: 4, capacityPerLand: 5,
    	upgradeCapacityCost: {food: 135, wood: 20, clay: 150, stone: 75}},
    clay :  {upkeep : 5, upkeepPerWorker: 5, total: 0, workers: 1, totalClayMine: 1, availableJobs: 4, capacityPerLand: 5,
    	upgradeCapacityCost: {food: 130, wood: 100, clay: 20, stone: 200}},
    stone : {upkeep : 5, upkeepPerWorker: 5, total: 0, workers: 1, totalStoneMine: 1, availableJobs: 14, capacityPerLand: 15,
    	upgradeCapacityCost: {food: 50, wood: 75, clay: 175, stone: 100}},

    //resource limits
    warehouse : {wood: 500, clay : 500, stone: 500, upgradeCost : {food : 10, wood: 350, clay : 255, stone : 225}, nextMaxIncrease : 250},
    granary : {food: 500, upgradeCost : {food : 10, wood: 250, clay : 225, stone : 175}, nextMaxIncrease : 250},
    //Calculation constants!
    calculationConstants : {capacityCost : {gradient : 1.5, yIntercept : 75}, efficiencyCost : {gradient: 2.5, yIntercept : 50}},

    //Combat Units
    combatUnits : {
        clubsMen : {hp : 50, attack: 3,  armour : 1, armourPene : 0, priority : 1, order: 0, cost : { food: 80, wood: 60, clay: 60, stone: 60}}, 
        archer : {hp : 25, attack: 5,  armour : 1, armourPene : 0, priority : 4, order: 1, cost : { food: 80, wood: 60, clay: 60, stone: 60} }, 
        horseMen : {hp : 65, attack: 7,  armour : 2, armourPene : 4, priority : 3, order: 2, cost : { food: 80, wood: 60, clay: 60, stone: 60}}, 
        swordsMen : {hp : 180, attack: 8,  armour : 3, armourPene : 2, priority : 2, order: 3, cost : { food: 80, wood: 60, clay: 60, stone: 60}}, 
        catapult : {hp : 10, attack: 12,  armour : 1, armourPene : 5, priority : 5, order: 4,  cost : { food: 80, wood: 60, clay: 60, stone: 60}}, 
        priest : {hp : 35, attack: 9,  armour : 1, armourPene : 10, priority : 6, order: 5, cost : { food: 80, wood: 60, clay: 60, stone: 60}}},

    units : {currentUnits : [150,25,10,10,15,10]},
    //Bosses
    bosses : {
        viking : {hp : 3000, name : "viking", armour : 10, attack: 25, armourPene : 1},
        spearPenguin : {hp : 6000, name : "spearPenguin", armour : 12, attack: 35, armourPene : 4},
        spartan : {hp : 8000, name : "spartan", armour : 20, attack: 50, armourPene : 5},
        ninja : {hp : 4000, name : "ninja", armour : 50, attack: 50, armourPene : 20},
        spartan2 : {hp : 10000, name : "spartan2", armour : 30, attack: 60, armourPene : 7},
        musketeer : {hp : 12000, name : "musketeer", armour : 35, attack: 75, armourPene : 8},
        marine : {hp : 16000, name : "marine", armour : 32, attack: 85, armourPene : 12},
        frenchMen : {hp : 20000, name : "frenchMen", armour : 50, attack: 90, armourPene : 15},
        captain : {hp : 40000, name : "captain", armour : 75, attack: 105, armourPene : 20}
         },
    bossOrder : ["viking", "spearPenguin", "spartan", "ninja", "spartan2", "musketeer", "marine", "frenchMen", "captain"],
    //Combat
    combat : {
        currentLevel : 0, 
        currentHealth : 10000, 
        isActive : false, 
        currentBoss : {hp : 10000, name : "viking", armour : 10, attack: 25, armourPene : 1}, 
        attackingForce : [], 
        organisedAttackingForce : {}, 
        sentArmy : [0,0,0,0,0,0], 
        currentCasualties :  [0,0,0,0,0,0],
        totalUnitHealth : [0,0,0,0,0,0]},
    //DISASTERS!
    disasters : { 
    currentDisasters : [],
    approachingDisasters : [],
	possibleDisasters : [
	{disaster: 'Fire', approachMessage: 'Embers fly around the city', activeMessage: 'THERE IS A FIRE!', chance: 0.2, populationSeverity: 0.01, buildingSeverity: 0.05, approach: 25, length: 15}, 
	{disaster: 'High Winds', approachMessage: 'A LARGE GUST OF WIND APPROACHES FROM THE EAST!', activeMessage: 'A Gust of wind is sweeping through the city', chance: 0.01, populationSeverity: 0.01, buildingSeverity: 0.1, approach: 20, length: 30},
	{disaster: 'Cyclone', approachMessage: 'The storms are brewing in the distance', activeMessage: 'A Cyclone branches over the city', chance: 0.005, populationSeverity: 0.005, buildingSeverity: 0.03, approach: 60, length: 40},
	{disaster: 'Thunder Storm', approachMessage: 'The storms are brewing in the distance', activeMessage: 'The skies are filled with thunder as it rains terror on the city', chance: 0.001, populationSeverity: 0.01, buildingSeverity: 0.0, approach: 35, length: 30},
	{disaster: 'Draught', approachMessage: 'Water reserves are running low', activeMessage: 'The city suffers from a devastating draught', chance: 0.005, populationSeverity: 0.01, buildingSeverity: 0.0, approach: 50, length: 100},
	{disaster: 'Heat Wave', approachMessage: 'The air feels crisp and dry', activeMessage: 'The city suffers from a great heat wave', chance: 0.01, populationSeverity: 0.02, buildingSeverity: 0.0, approach: 45, length: 20}


	]}
  }

});