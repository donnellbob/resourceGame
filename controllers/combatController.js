app.controller('combatController', function($scope, gameValues, _){
  var resources = gameValues.resources;
  var bossHealth = resources.combat.currentHealth;
  $scope.getBossHealth = function(){
    return ((resources.combat.currentHealth / resources.combat.currentBoss.hp) * 100).toFixed(2) ;
  }

  $scope.engageBoss = function(){
    resources.combat.isActive = true;

    //Sets up army
    for(var i = 0; i < resources.combat.sentArmy.length; i++){
      for(var j = 0; j < resources.combat.sentArmy[i]; j++){
        //Add clubsmen
        if(i === 0){
          resources.combat.attackingForce.push(resources.combatUnits.clubsMen);
          resources.combat.totalUnitHealth[0] += resources.combatUnits.clubsMen.hp
          //console.log(resources.combatUnits.clubsMen);
        }

        //Add archers
        if(i === 1){
          resources.combat.attackingForce.push(resources.combatUnits.archer);
          resources.combat.totalUnitHealth[1] += resources.combatUnits.archer.hp
        }

        //Add horseMen
        if(i === 2){
          resources.combat.attackingForce.push(resources.combatUnits.horseMen);
          resources.combat.totalUnitHealth[2] += resources.combatUnits.horseMen.hp
        }

        //Add swordsMen
        if(i === 3){
          resources.combat.attackingForce.push(resources.combatUnits.swordsMen);
          resources.combat.totalUnitHealth[3] += resources.combatUnits.swordsMen.hp
        }

        //Add catapult
        if(i === 4){
          resources.combat.attackingForce.push(resources.combatUnits.catapult);
          resources.combat.totalUnitHealth[4] += resources.combatUnits.catapult.hp
        }

        //Add priest
        if(i === 5){
          resources.combat.attackingForce.push(resources.combatUnits.priest);
          resources.combat.totalUnitHealth[5] += resources.combatUnits.priest.hp
        }   

      }
    }
    resources.combat.organisedAttackingForce = _.groupBy(resources.combat.attackingForce, function(unit){ return unit.priority; });
  }

  $scope.upBoss = function(){
    var currentBoss = resources.combat.currentBoss.name;
    var bossNumber = resources.bossOrder.indexOf(currentBoss);
    //Change boss
    resources.combat.currentBoss = resources.bosses[resources.bossOrder[bossNumber + 1]];

    //Update current Health
    resources.combat.currentHealth = resources.combat.currentBoss.hp;
  }

  $scope.downBoss = function(){
    var currentBoss = resources.combat.currentBoss.name;
    var bossNumber = resources.bossOrder.indexOf(currentBoss);
    //Change boss
    resources.combat.currentBoss = resources.bosses[resources.bossOrder[bossNumber - 1]];

    //Update current Health
    resources.combat.currentHealth = resources.combat.currentBoss.hp;
  }

  $scope.getUnitHealth= function(unit){
    if(unit === "clubsMen"){
       // console.log (resources.combat.totalUnitHealth[0]);
       //console.log(resources.combat.sentArmy[0])
      // console.log(resources.combatUnits.clubsMen.hp)
      return ((resources.combat.totalUnitHealth[0] / (resources.combat.sentArmy[0] * resources.combatUnits.clubsMen.hp)) * 100).toFixed(2);
    }else if (unit === "archer"){
      return (resources.combat.totalUnitHealth[1] * 100).toFixed(2);
    }else if (unit === "swordsMen"){
      return (resources.combat.totalUnitHealth[2] * 100).toFixed(2);
    }else if (unit === "horseMen"){
      return (resources.combat.totalUnitHealth[3] * 100).toFixed(2);
    }else if (unit === "catapult"){
      return (resources.combat.totalUnitHealth[4] * 100).toFixed(2);
    }else if (unit === "priest"){
      return (resources.combat.totalUnitHealth[5] * 100).toFixed(2);
    }else{
      console.log("Error unit HP not defined!")
    }
  }

  
});