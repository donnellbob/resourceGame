app.factory('combatService', function(gameValues, _){
  var resources = gameValues.resources;

  var combatService = {};
  combatService.attack = function(){
    if(resources.combat.currentHealth != 0 && resources.combat.currentHealth > 0){
      //boss attack
      //boss attacks highest priority Clubsmen first
      if(resources.combat.organisedAttackingForce["1"] != undefined && resources.combat.organisedAttackingForce["1"].length != 0){
        resources.combat.organisedAttackingForce["1"][0].hp -= resources.combat.currentBoss.attack;
        console.log(resources.combat.organisedAttackingForce["1"][0].hp);
        //Updates unit health display!
        resources.combat.totalUnitHealth[0] -= resources.combat.currentBoss.attack;
        //Adds armounr pene and boss armour into damage equation
        var armourPene = resources.combat.organisedAttackingForce["1"][0].armourPene;
        var armourReduction = 10 / ((10 - armourPene) + resources.combat.currentBoss.armour)
        var bossDamage = (resources.combat.organisedAttackingForce["1"].length * resources.combat.organisedAttackingForce["1"][0].attack) * armourReduction;
        resources.combat.currentHealth -= bossDamage;

        if(resources.combat.organisedAttackingForce["1"][0].hp <= 0){
          resources.combat.organisedAttackingForce["1"].splice(0,1);
          resources.combat.currentCasualties[0]++;
          //Remove from total army
          resources.units.currentUnits[0]--;
        }
        //Swords Men!!!
      }else if(resources.combat.organisedAttackingForce["2"] != undefined && resources.combat.organisedAttackingForce["2"].length != 0){
        resources.combat.organisedAttackingForce["2"][0].hp -= resources.combat.currentBoss.attack;
        //Updates unit health display!
        resources.combat.totalUnitHealth[1] -= resources.combat.currentBoss.attack;
        //Adds armounr pene and boss armour into damage equation
        var armourPene = resources.combat.organisedAttackingForce["2"][0].armourPene;
        var armourReduction = 10 / ((10 - armourPene) + resources.combat.currentBoss.armour)
        var bossDamage = (resources.combat.organisedAttackingForce["2"].length * resources.combat.organisedAttackingForce["2"][0].attack) * armourReduction;
        
        resources.combat.currentHealth -= bossDamage;

        if(resources.combat.organisedAttackingForce["2"][0].hp <= 0){
          resources.combat.organisedAttackingForce["2"].splice(0,1);
          resources.combat.currentCasualties[3]++;
          //Remove from total army
          resources.units.currentUnits[1]--;
        }
        //HorseMen
      }else if(resources.combat.organisedAttackingForce["3"] != undefined && resources.combat.organisedAttackingForce["3"].length != 0){
        resources.combat.organisedAttackingForce["3"][0].hp -= resources.combat.currentBoss.attack;
        //Updates unit health display!
        resources.combat.totalUnitHealth[2] -= resources.combat.currentBoss.attack; 
        //Adds armounr pene and boss armour into damage equation
        var armourPene = resources.combat.organisedAttackingForce["3"][0].armourPene;
        var armourReduction = 10 / ((10 - armourPene) + resources.combat.currentBoss.armour)
        var bossDamage = (resources.combat.organisedAttackingForce["3"].length * resources.combat.organisedAttackingForce["3"][0].attack) * armourReduction;
        resources.combat.currentHealth -= bossDamage;

        if(resources.combat.organisedAttackingForce["3"][0].hp <= 0){
          resources.combat.organisedAttackingForce["3"].splice(0,1);
          resources.combat.currentCasualties[2]++;
          //Remove from total army
          resources.units.currentUnits[2]--;
        }
        //Archer
      }else if(resources.combat.organisedAttackingForce["4"] != undefined && resources.combat.organisedAttackingForce["4"].length != 0){
        resources.combat.organisedAttackingForce["4"][0].hp -= resources.combat.currentBoss.attack;
        //Updates unit health display!
        resources.combat.totalUnitHealth[3] -= resources.combat.currentBoss.attack; 
        //Adds armounr pene and boss armour into damage equation
        var armourPene = resources.combat.organisedAttackingForce["4"][0].armourPene;
        var armourReduction = 10 / ((10 - armourPene) + resources.combat.currentBoss.armour)
        var bossDamage = (resources.combat.organisedAttackingForce["4"].length * resources.combat.organisedAttackingForce["4"][0].attack) * armourReduction;
        resources.combat.currentHealth -= bossDamage;
        
        if(resources.combat.organisedAttackingForce["4"][0].hp <= 0){
          resources.combat.organisedAttackingForce["4"].splice(0,1);
          resources.combat.currentCasualties[1]++;
          //Remove from total army
          resources.units.currentUnits[3]--;
        }
        //Catapult
      }else if(resources.combat.organisedAttackingForce["5"] != undefined && resources.combat.organisedAttackingForce["5"].length != 0){
        resources.combat.organisedAttackingForce["5"][0].hp -= resources.combat.currentBoss.attack;
        //Updates unit health display!
        resources.combat.totalUnitHealth[4] -= resources.combat.currentBoss.attack;
        //Adds armounr pene and boss armour into damage equation
        var armourPene = resources.combat.organisedAttackingForce["5"][0].armourPene;
        var armourReduction = 10 / ((10 - armourPene) + resources.combat.currentBoss.armour)
        var bossDamage = (resources.combat.organisedAttackingForce["5"].length * resources.combat.organisedAttackingForce["5"][0].attack) * armourReduction;

        resources.combat.currentHealth -= bossDamage;
     
        if(resources.combat.organisedAttackingForce["5"][0].hp <= 0){
          resources.combat.organisedAttackingForce["5"].splice(0,1);
          resources.combat.currentCasualties[4]++;
          //Remove from total army
          resources.units.currentUnits[4]--;
        }
        //Priest
      }else if(resources.combat.organisedAttackingForce["6"] != undefined && resources.combat.organisedAttackingForce["6"].length != 0){
        resources.combat.organisedAttackingForce["6"][0].hp -= resources.combat.currentBoss.attack;
        //Updates unit health display!
        resources.combat.totalUnitHealth[4] -= resources.combat.currentBoss.attack;
        //Adds armounr pene and boss armour into damage equation
        var armourPene = resources.combat.organisedAttackingForce["6"][0].armourPene;
        var armourReduction = 10 / ((10 - armourPene) + resources.combat.currentBoss.armour)
        var bossDamage = (resources.combat.organisedAttackingForce["6"].length * resources.combat.organisedAttackingForce["6"][0].attack) * armourReduction;
        resources.combat.currentHealth -= bossDamage;
     
        if(resources.combat.organisedAttackingForce["6"][0].hp <= 0){
          resources.combat.organisedAttackingForce["6"].splice(0,1);
          resources.combat.currentCasualties[6]++;
          //Remove from total army
          resources.units.currentUnits[5]--;
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
  

  return combatService;
  
});