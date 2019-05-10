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

var maxCookies;
var minCookies;
var cookieSchedule;

var firstAndPike = {
  minCookies: 23,
  maxCookies: 65,
  avgCookiesSold: 6.3,
  hourlyCookies: [],
  randomCust: calcRandCust,
  amtCookieHour: function() {
    return Math.ceil(this.randomCust(), this.avgCookieSold);
  },
  hourlyCookiesPurchase: function() {
    for (var index = 0; index < hoursOfOperation.length; index++) {
      this.hourlyCookies[index] = this.amtCookieHour();
    } // console.log(this.hourlyCookies);
  },
  renderlist: function(id) {
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
    
},
};


var seaTacAirport = {
  minCookies: 3,
  maxCookies: 24,
  avgCookiesSold: 1.2,
  hourlyCookies: [],
  randomCust: calcRandCust,
  amtCookieHour: function() {
    return Math.ceil(this.randomCust(), this.avgCookieSold);
  },
  hourlyCookiesPurchase: function() {
    for (var index = 0; index < hoursOfOperation.length; index++) {
      this.hourlyCookies[index] = this.amtCookieHour();
    } // console.log(this.hourlyCookies);
  },
  renderlist: function(id) {
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
    
},
};

var seattleCenter = {
  minCookies: 11,
  maxCookies: 38,
  avgCookiesSold: 3.7,
  hourlyCookies: [],
  randomCust: calcRandCust,
  amtCookieHour: function() {
    return Math.ceil(this.randomCust(), this.avgCookieSold);
  },
  hourlyCookiesPurchase: function() {
    for (var index = 0; index < hoursOfOperation.length; index++) {
      this.hourlyCookies[index] = this.amtCookieHour();
    } // console.log(this.hourlyCookies);
  },
  renderlist: function(id) {
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
    
},
};

var capitolHill = {
  minCookies: 20,
  maxCookies: 38,
  avgCookiesSold: 2.3,
  hourlyCookies: [],
  randomCust: calcRandCust,
  amtCookieHour: function() {
    return Math.ceil(this.randomCust(), this.avgCookieSold);
  },
  hourlyCookiesPurchase: function() {
    for (var index = 0; index < hoursOfOperation.length; index++) {
      this.hourlyCookies[index] = this.amtCookieHour();
    } // console.log(this.hourlyCookies);
  },
  renderlist: function(id) {
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
    
},
};

var alki = {
  minCookies: 2,
  maxCookies: 16,
  avgCookiesSold: 4.6,
  hourlyCookies: [],
  randomCust: calcRandCust,
  amtCookieHour: function() {
    return Math.ceil(this.randomCust(), this.avgCookieSold);
  },
  hourlyCookiesPurchase: function() {
    for (var index = 0; index < hoursOfOperation.length; index++) {
      this.hourlyCookies[index] = this.amtCookieHour();
    } // console.log(this.hourlyCookies);
  },
  renderlist: function(id) {
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
    
},
};

function calcRandCust() {
  var randCust =
    Math.floor(Math.random() * (this.maxCookies - this.minCookies + 1)) +
    this.minCookies;
  //console.log(randCust);
    return randCust;
};




// firstAndPike.hourlyCookiesPurchase();
// firstAndPike.renderlist("cookieSchedule1");
// seaTacAirport.hourlyCookiesPurchase();
// seaTacAirport.renderlist("cookieSchedule2");
// seattleCenter.hourlyCookiesPurchase();
// seattleCenter.renderlist("cookieSchedule3");
// capitolHill.hourlyCookiesPurchase();
// capitolHill.renderlist("cookieSchedule4");
// alki.hourlyCookiesPurchase();
// alki.renderlist("cookieSchedule5");


function Location(minCookies,maxCookies,avgCookiesSold){
    this.minCookies = minCookies;
    this.maxCookies = maxCookies;
    this.avgCookiesSold = avgCookiesSold;
    this.hourlyCookies = [];
}
//  for each method repeat the below function definition;
Location.prototype.amtCookieHour = function() {
  return Math.ceil(this.randomCust(), this.avgCookieSold);
} 

// Location        | Min / Cust | Max / Cust | Avg Cookie / Sale
// ----------------|------------|------------|-------------------
// 1st and Pike      |      23    |     65     |        6.3
// SeaTac Airport  |      3     |     24     |        1.2
// Seattle Center     |      11    |     38     |        3.7
// Capitol Hill |      20    |     38     |        2.3
// Alki            |      2     |     16     |        4.6

 
var locationData = [[23,65,6.3],[3,24,1.2],[11,38,3.7],[20,38,2.3],[2,16,4.6]];
var locations = [];
for (var i= 0; i < locationData.length; i++) {
  locations.push(new Location(locationData[i][0],locationData[i][1],locationData[i][2]));
console.log(locations);
}
// var submitButtonEl.addEventlistener('submit',function(event){
// Element.addEventlistener('click',);

// var newLocationName = event.target.location-field.value;
// var maximumOutput = event.target.maxoutput-field.value;
// var minimunOutput = event.target.minCust.value;
// var avgCookieOutput = event.target.avgPerCust.value;

// console.log(event.target);
// console.log(`9 jj k  Updated Output Forecast Per Location`)