app.factory('combatService', function(gameValues, _){
  var resources = gameValues.resources;

  var combatService = {};
  combatService.attack = function(){
    if(resources.combat.currentHealth != 0 && resources.combat.currentHealth > 0){

      //PLAYER ATTACKS BOSS!! :)
      resources.combat.currentHealth -= combatService.getUnitsAttack();

      //boss attack
      //boss attacks highest priority ---- Clubsmen first

      //Clubsmen!!
      if(resources.combat.organisedAttackingForce["1"] != undefined && resources.combat.organisedAttackingForce["1"].length != 0){
        var unitOrder = resources.combat.organisedAttackingForce["1"][0].order;
        //Boss attacks first unit
        resources.combat.organisedAttackingForce["1"][0].hp -= combatService.getBossDamage(resources.combat.organisedAttackingForce["1"][0].armour);

        

        //Updates unit health display!
        resources.combat.totalUnitHealth[unitOrder] -= combatService.updateTotalHealth(unitOrder,
         resources.combat.organisedAttackingForce["1"][0].hp,
         resources.combat.organisedAttackingForce["1"][0].armour);

        if(resources.combat.organisedAttackingForce["1"][0].hp <= 0){
          resources.combat.organisedAttackingForce["1"].splice(0,1);
          resources.combat.currentCasualties[unitOrder]++;
          //Remove from total army
          resources.units.currentUnits[unitOrder]--;
        }




        //Swords Men!!!
      }else if(resources.combat.organisedAttackingForce["2"] != undefined && resources.combat.organisedAttackingForce["2"].length != 0){
        var unitOrder = resources.combat.organisedAttackingForce["2"][0].order;
        resources.combat.organisedAttackingForce["2"][0].hp -= combatService.getBossDamage(resources.combat.organisedAttackingForce["2"][0].armour);
        //Updates unit health display!
        resources.combat.totalUnitHealth[unitOrder] -= combatService.updateTotalHealth(unitOrder, 
          resources.combat.organisedAttackingForce["2"][0].hp, 
          resources.combat.organisedAttackingForce["2"][0].armour);

        if(resources.combat.organisedAttackingForce["2"][0].hp <= 0){
          resources.combat.organisedAttackingForce["2"].splice(0,1);
          resources.combat.currentCasualties[unitOrder]++;
          //Remove from total army
          resources.units.currentUnits[unitOrder]--;
        }




        //HorseMen
      }else if(resources.combat.organisedAttackingForce["3"] != undefined && resources.combat.organisedAttackingForce["3"].length != 0){
        var unitOrder = resources.combat.organisedAttackingForce["3"][0].order;
        resources.combat.organisedAttackingForce["3"][0].hp -= combatService.getBossDamage(resources.combat.organisedAttackingForce["3"][0].armour);
        //Updates unit health display!
        resources.combat.totalUnitHealth[unitOrder] -= combatService.updateTotalHealth(unitOrder, 
          resources.combat.organisedAttackingForce["3"][0].hp,
          resources.combat.organisedAttackingForce["3"][0].armour); 

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
        resources.combat.organisedAttackingForce["4"][0].hp -= combatService.getBossDamage(resources.combat.organisedAttackingForce["4"][0].armour);
        //Updates unit health display!
        resources.combat.totalUnitHealth[unitOrder] -= combatService.updateTotalHealth(unitOrder, 
          resources.combat.organisedAttackingForce["4"][0].hp,
          resources.combat.organisedAttackingForce["4"][0].armour); 
       
        if(resources.combat.organisedAttackingForce["4"][0].hp <= 0){
          resources.combat.organisedAttackingForce["4"].splice(0,1);
          resources.combat.currentCasualties[unitOrder]++;
          //Remove from total army
          resources.units.currentUnits[unitOrder]--;
        }



        //Catapult
      }else if(resources.combat.organisedAttackingForce["5"] != undefined && resources.combat.organisedAttackingForce["5"].length != 0){
        var unitOrder = resources.combat.organisedAttackingForce["5"][0].order;
        resources.combat.organisedAttackingForce["5"][0].hp -= combatService.getBossDamage(resources.combat.organisedAttackingForce["5"][0].armour);
        //Updates unit health display!
        resources.combat.totalUnitHealth[unitOrder] -= combatService.updateTotalHealth(unitOrder, 
          resources.combat.organisedAttackingForce["5"][0].hp,
          resources.combat.organisedAttackingForce["5"][0].armour);

        if(resources.combat.organisedAttackingForce["5"][0].hp <= 0){
          resources.combat.organisedAttackingForce["5"].splice(0,1);
          resources.combat.currentCasualties[unitOrder]++;
          //Remove from total army
          resources.units.currentUnits[unitOrder]--;
        }



        //Priest
      }else if(resources.combat.organisedAttackingForce["6"] != undefined && resources.combat.organisedAttackingForce["6"].length != 0){
        var unitOrder = resources.combat.organisedAttackingForce["6"][0].order;
        resources.combat.organisedAttackingForce["6"][0].hp -= combatService.getBossDamage(resources.combat.organisedAttackingForce["6"][0].armour);
        //Updates unit health display!
        resources.combat.totalUnitHealth[unitOrder] -= combatService.updateTotalHealth(unitOrder, 
          resources.combat.organisedAttackingForce["6"][0].hp,
          resources.combat.organisedAttackingForce["6"][0].armour);

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
    var armourReduction = 10 / ((10 - resources.combat.currentBoss.armourPene) + armour)
    console.log(resources.combat.currentBoss.attack * armourReduction + " : " + armourReduction);
    return resources.combat.currentBoss.attack * armourReduction;
  }



  combatService.getUnitsAttack = function(){
    var totalDamage = 0;
    var currentAttackingForce = [];

    for(var i = 0; i < resources.combat.sentArmy.length; i++){
      var unitCount = resources.combat.sentArmy[i] - resources.combat.currentCasualties[i];
      var unitArmourPene = 0;
      var unitAttack = 0;
      for(var j = 0; j < resources.combat.sentArmy.length; j++){
        //try catch as the expected error is null pointer (ITS FINE ITS HANDLED :)))))
        try{
          if(resources.combat.organisedAttackingForce[(j + 1).toString()][0].order === i){
            unitArmourPene = resources.combat.organisedAttackingForce[(j + 1).toString()][0].armourPene;
            unitAttack = resources.combat.organisedAttackingForce[(j + 1).toString()][0].attack;

          }
        }catch(err){}
      }
      
      currentAttackingForce.push({unitCount : unitCount, armourPene : unitArmourPene, attack: unitAttack});
    }

    
    for(var i = 0; i < currentAttackingForce.length; i++){
      if(currentAttackingForce[i].unitCount != 0){
        var armourReduction = 10 / ((10 - currentAttackingForce[i].armourPene) + resources.combat.currentBoss.armour)
        var damage = (currentAttackingForce[i].unitCount * currentAttackingForce[i].attack) * armourReduction;
        totalDamage += damage;
      }
    }

    return totalDamage;
  }

  combatService.updateTotalHealth = function(unitOrder, unitHP, armour){

    if(unitHP > 0){
      return combatService.getBossDamage(armour);
    }else{
      return (unitHP + combatService.getBossDamage(armour))
    }


  }


  return combatService;
  
});