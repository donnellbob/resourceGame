app.factory('disasterService', function(gameValues, _){
  var resources = gameValues.resources;

  var disasterService = {};

  disasterService.updateDisasters = function(){
    var randomNumber;
    for(var i = 0; i < resources.disasters.possibleDisasters.length; i++){
      randomNumber = Math.random();
      var newDisaster = Object.create(resources.disasters.possibleDisasters[i]);

      //Check if Disaster is already active/approaching
      var isApproaching = _.find(resources.disasters.approachingDisasters, function(disasterObject){return disasterObject.disaster === newDisaster.disaster});
      var isCurrent = _.find(resources.disasters.currentDisasters, function(disasterObject){return disasterObject.disaster === newDisaster.disaster});
      if(randomNumber < resources.disasters.possibleDisasters[i].chance && isApproaching === undefined && isCurrent === undefined){
        resources.disasters.approachingDisasters.push(newDisaster);
      }
    }

    //Update approach or push to currentDisasters
    for(var i = 0; i < resources.disasters.approachingDisasters.length; i++){
      //Reduce approach time
      resources.disasters.approachingDisasters[i].approach -= 1;

      //Check if disaster has arrived
      if(resources.disasters.approachingDisasters[i].approach <= 0){
        resources.disasters.currentDisasters.push(resources.disasters.approachingDisasters[i]);
        resources.disasters.approachingDisasters.splice(i, 1);
      }
    }

    //handle currentDisasters
    for(var i = 0; i < resources.disasters.currentDisasters.length; i++){
      //Reduce disaster length
      resources.disasters.currentDisasters[i].length -= 1;
      //Check if disaster has finished
      if(resources.disasters.currentDisasters[i].length === 0){
        resources.disasters.currentDisasters.splice(i, 1);
      }
    }

  }
  

  return disasterService;
  
});