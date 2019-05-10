"use strict";

var hoursOfOperation = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12am",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  " 5pm",
  "6pm",
  "7pm",
  "8pm"
];

function Location(minCookies,maxCookies,avgCookiesSold){
    this.minCookies = minCookies;
    this.maxCookies = maxCookies;
    this.avgCookiesSold = avgCookiesSold;
    this.hourlyCookies = [];
}
//  for each method repeat the below function definition;
Location.prototype.amtCookieHour = function() {
  return Math.ceil(this.calcRandCust(), this.avgCookieSold);
} 

// complete method definition for  hourlyCookiesPurchase function
Location.prototype.hourlyCookiesPurchase = function() {
  for (var index = 0; index < hoursOfOperation.length; index++) {
    this.hourlyCookies[index] = this.amtCookieHour();
  } // console.log(this.hourlyCookies);
}
// complete method definition for renderlist function
Location.prototype.renderlist = function(id) {
  var totalCookies = 0;
  var ul = document.getElementById(id);
  for ( var i = 0; i < this.hourlyCookies.length; i++) {
    var bakingSchedule = hoursOfOperation[i] + ":" + this.hourlyCookies[i] +" cookies";
   
    console.log(ul);
    var listEl = document.createElement("li");
    listEl.textContent = bakingSchedule;
    ul.appendChild(listEl);
    totalCookies += this.hourlyCookies[i];
};
ul.innerHTML += `<li>Total: ${totalCookies} cookies</li>`;
}

// complete method definition for calcRandCust function
Location.prototype.calcRandCust = function () {
  var randCust =
    Math.floor(Math.random() * (this.maxCookies - this.minCookies + 1)) +
    this.minCookies;
  //console.log(randCust);
    return randCust;
}

var locationData = [[23,65,6.3],[3,24,1.2],[11,38,3.7],[20,38,2.3],[2,16,4.6]];
var locations = [];

 for (var i= 0; i < locationData.length; i++) {
  locations.push(new Location(locationData[i][0],locationData[i][1],locationData[i][2]));
  console.log(locations);
 }

for (var i = 0; i < locations.length;i++){
  locations[i].hourlyCookiesPurchase();
  locations[i].renderlist("location"+(i+1));
  }

  
