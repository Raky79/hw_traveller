const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const startLocations = this.journeys.map((journey) => journey.startLocation )
  return startLocations;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const endLocations = this.journeys.map((journey) => journey.endLocation)
  return endLocations;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const findTransport = this.journeys.filter((journey) => {
    return transport === journey.transport;
  }) 
  return findTransport;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    return journey.distance >= minDistance;
  })
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const totalDistanceTravelled = this.journeys.reduce((totalDistance, journey) => {
  return totalDistance + journey.distance;
}, 0)
  return totalDistanceTravelled; 
}

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
