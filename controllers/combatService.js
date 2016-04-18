app.factory('combatService', function(gameValues, _){
  var resources = gameValues.resources;

  var combatService = {};
  combatService.attack = function(){
    if(resources.combat.currentHealth != 0 && resources.combat.currentHealth > 0){
      //boss attack
      //boss attacks highest priority ---- Clubsmen first

      //Clubsmen!!
      if(resources.combat.organisedAttackingForce["1"] != undefined && resources.combat.organisedAttackingForce["1"].length != 0){
        var unitOrder = resources.combat.organisedAttackingForce["1"][0].order;
        //Boss attacks first unit
        resources.combat.organisedAttackingForce["1"][0].hp -= resources.combat.currentBoss.attack;

        //Updates unit health display!
        resources.combat.totalUnitHealth[unitOrder] -= combatService.updateTotalHealth(unitOrder, resources.combat.organisedAttackingForce["1"][0].hp);

        if(resources.combat.organisedAttackingForce["1"][0].hp <= 0){
          resources.combat.organisedAttackingForce["1"].splice(0,1);
          resources.combat.currentCasualties[unitOrder]++;
          //Remove from total army
          resources.units.currentUnits[unitOrder]--;
        }




        //Swords Men!!!
      }else if(resources.combat.organisedAttackingForce["2"] != undefined && resources.combat.organisedAttackingForce["2"].length != 0){
        var unitOrder = resources.combat.organisedAttackingForce["2"][0].order;
        resources.combat.organisedAttackingForce["2"][0].hp -= resources.combat.currentBoss.attack;
        //Updates unit health display!
        resources.combat.totalUnitHealth[unitOrder] -= combatService.updateTotalHealth(unitOrder, resources.combat.organisedAttackingForce["2"][0].hp);

        if(resources.combat.organisedAttackingForce["2"][0].hp <= 0){
          resources.combat.organisedAttackingForce["2"].splice(0,1);
          resources.combat.currentCasualties[unitOrder]++;
          //Remove from total army
          resources.units.currentUnits[unitOrder]--;
        }




        //HorseMen
      }else if(resources.combat.organisedAttackingForce["3"] != undefined && resources.combat.organisedAttackingForce["3"].length != 0){
        var unitOrder = resources.combat.organisedAttackingForce["3"][0].order;
        resources.combat.organisedAttackingForce["3"][0].hp -= resources.combat.currentBoss.attack;
        //Updates unit health display!
        resources.combat.totalUnitHealth[unitOrder] -= combatService.updateTotalHealth(unitOrder, resources.combat.organisedAttackingForce["3"][0].hp); 

        if(resources.combat.organisedAttackingForce["3"][0].hp <= 0){
          resources.combat.organisedAttackingForce["3"].splice(0,1);
          resources.combat.currentCasualties[unitOrder]++;
          //Remove from total army
          resources.units.currentUnits[unitOrder]--;
        }


        //Archer
      }else if(resources.combat.organisedAttackingForce["4"] != undefined && resources.combat.organisedAttackingForce["4"].length != 0){
        console.log("Archers being attacked");
        var unitOrder = resources.combat.organisedAttackingForce["4"][0].order;
        resources.combat.organisedAttackingForce["4"][0].hp -= resources.combat.currentBoss.attack;
        //Updates unit health display!
        resources.combat.totalUnitHealth[unitOrder] -= combatService.updateTotalHealth(unitOrder, resources.combat.organisedAttackingForce["4"][0].hp); 
       
        if(resources.combat.organisedAttackingForce["4"][0].hp <= 0){
          resources.combat.organisedAttackingForce["4"].splice(0,1);
          resources.combat.currentCasualties[unitOrder]++;
          //Remove from total army
          resources.units.currentUnits[unitOrder]--;
        }



        //Catapult
      }else if(resources.combat.organisedAttackingForce["5"] != undefined && resources.combat.organisedAttackingForce["5"].length != 0){
        var unitOrder = resources.combat.organisedAttackingForce["5"][0].order;
        resources.combat.organisedAttackingForce["5"][0].hp -= resources.combat.currentBoss.attack;
        //Updates unit health display!
        resources.combat.totalUnitHealth[unitOrder] -= combatService.updateTotalHealth(unitOrder, resources.combat.organisedAttackingForce["5"][0].hp);

        if(resources.combat.organisedAttackingForce["5"][0].hp <= 0){
          resources.combat.organisedAttackingForce["5"].splice(0,1);
          resources.combat.currentCasualties[unitOrder]++;
          //Remove from total army
          resources.units.currentUnits[unitOrder]--;
        }



        //Priest
      }else if(resources.combat.organisedAttackingForce["6"] != undefined && resources.combat.organisedAttackingForce["6"].length != 0){
        var unitOrder = resources.combat.organisedAttackingForce["6"][0].order;
        resources.combat.organisedAttackingForce["6"][0].hp -= resources.combat.currentBoss.attack;
        //Updates unit health display!
        resources.combat.totalUnitHealth[unitOrder] -= combatService.updateTotalHealth(unitOrder, resources.combat.organisedAttackingForce["6"][0].hp);

        if(resources.combat.organisedAttackingForce["6"][0].hp <= 0){
          resources.combat.organisedAttackingForce["6"].splice(0,1);
          resources.combat.currentCasualties[unitOrder]++;
          //Remove from total army
          resources.units.currentUnits[unitOrder]--;
        }

      }else{
        //If reached all units are dead therefore boss wins
        resources.combat.isActive = false;
        resources.combat.organisedAttackingForce = {};
        resources.combat.attackingForce = [];
        resources.combat.currentHealth = resources.combat.currentBoss.hp;
        resources.combat.sentArmy =  [0,0,0,0,0,0];
        resources.combat.currentCasualties =  [0,0,0,0,0,0];

        resources.combat.totalUnitHealth = [0,0,0,0,0,0];
      }
    }else{
      //boss is dead
        resources.combat.currentLevel++;
        resources.combat.isActive = false;
        resources.combat.organisedAttackingForce = {};
        resources.combat.attackingForce = [];
        //Update current boss
        resources.combat.currentBoss = resources.bosses[resources.bossOrder[resources.combat.currentLevel]];
 
        resources.combat.currentHealth = resources.combat.currentBoss.hp;
        resources.combat.sentArmy =  [0,0,0,0,0,0];
        resources.combat.currentCasualties =  [0,0,0,0,0,0];

        resources.combat.totalUnitHealth = [0,0,0,0,0,0];
    }
  }
  


  combatService.getBossDamage = function(armour){

    return "Damage done by boss after armour";
  }

  combatService.getPlayersAttack = function(){

            //Adds armounr pene and boss armour into damage equation
        var armourPene = resources.combat.organisedAttackingForce["1"][0].armourPene;
        var armourReduction = 10 / ((10 - armourPene) + resources.combat.currentBoss.armour)
        var bossDamage = (resources.combat.organisedAttackingForce["1"].length * resources.combat.organisedAttackingForce["1"][0].attack) * armourReduction;
        resources.combat.currentHealth -= bossDamage;
   
    return "Total attack based on current units alive!";
  }

  combatService.updateTotalHealth = function(unitOrder, unitHP){

    if(unitHP > 0){
      return resources.combat.currentBoss.attack;
    }else{
      return (unitHP + resources.combat.currentBoss.attack)
    }


  }


  return combatService;
  
});