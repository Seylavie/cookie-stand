"use strict";
console.log("hello");
// Declare a variable named locations
//create a prompt to input the locations
//console.log any input received from the prompt
//Create an array with the names of the locations of each franchise and assign it to location
//Create objects and object literals for each location based on the below attributes
//Create a variable called numOfCookies to note amount of cookies required daily per location
//Create a variable called operationHours to specify opening hours
//Create a varibale called uniqFactHours to specify variance in operation hours
//create a function called cookieCalc to calculate no of cookies per day
//Create a variable to store min number of customers per hour
//Create a variable to store max number of customer per hour
//Create a variable to store number of cookies purchased per customer.
//Pat need to be able to add and remove locations---daily projection report (tally)
//Allow modification of input numbers for each location based on --day of week, special event, other unique factor
//create a public URL- create logo for Pat's Salmon Cookies + select colour scheme and find additional images

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
//calculate a simulated number of sales

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




firstAndPike.hourlyCookiesPurchase();
firstAndPike.renderlist("cookieSchedule1");
seaTacAirport.hourlyCookiesPurchase();
seaTacAirport.renderlist("cookieSchedule2");
seattleCenter.hourlyCookiesPurchase();
seattleCenter.renderlist("cookieSchedule3");
capitolHill.hourlyCookiesPurchase();
capitolHill.renderlist("cookieSchedule4");
alki.hourlyCookiesPurchase();
alki.renderlist("cookieSchedule5");
