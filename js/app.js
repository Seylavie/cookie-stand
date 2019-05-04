"use strict";

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

var hoursOfOperation = ["6am" , "7am" , "8am" , "9am" , "10am" , "11am" , "12am" , "1pm" , "2pm" , "3pm" ,"4pm" ," 5pm" , "6pm" , "7pm" , "8pm"];
var additionalOpHours = []; // to note additional hours at each location
var scheduleWorkHours = []; // to note scheduled hours at each location
var actualWorkHours = []; // to note actual hours worked at each location
var maxCookies;
var minCookies;
var av
//calculate a simulated number of sales


var firstAndPike = {
    minCookies: 23,
    maxCookies: 65,
    AvgCookiesSold: 6.3,
    hoursOfOperation:[],
    actualWorkHours:[],
    scheduleWorkHours:[],
    additionalOpHours:[],
    randomCust: calcRandCust,
//     averageCookiesHours: function() {
//         return (randomCust() * this.AvgCookieSold);
//     var hourlyCookiesSold = averageCookies();
//     },
//     hourlyCookiesPurchase: function() {
//        for ( var hoursofoperation = i; i < hoursofoperation.length; i++){
//            return hourlyCookiesPurchase (averageCookies * randomCust);
//     } console.log(hourlyCookiesPurchase);
// }, 
};

 
 
 var seaTacAirport = {
    minCookies: 3,
    maxCookies: 24,
    AvgCookiesSold: 1.2,
    hoursOfOperation:[],
    actualWorkHours:[],
    scheduleWorkHours:[],
    additionalOpHours:[],
    randomCust: calcRandCust,
    // averageCookiesHours: function() {
    //     return (randomCust() * this.AvgCookieSold);
    // //hourlyCookiesPurchase: function() {
    //   //  return this.;      
    // },
};

var seattleCenter = {
    minCookies: 11,
    maxCookies: 38,
    AvgCookiesSold: 3.7,
    hoursOfOperation:[],
    actualWorkHours:[],
    scheduleWorkHours:[],
    additionalOpHours:[],
    randomCust: calcRandCust,
    // averageCookiesHours: function() {
    //     return (randomCust() * this.AvgCookieSold);
    // //hourlyCookiesPurchase: function() {
    //     //  return this.;  
    //}
};

var capitolHill = { 
    minCookies: 20,
    maxCookies: 38,
    AvgCookiesSold: 2.3,
    hoursOfOperation:[],
    actualWorkHours:[],
    scheduleWorkHours:[],
    additionalOpHours:[],
    randomCust: calcRandCust,
    // averageCookiesHours: function() {
    //     return (randomCust() * this.AvgCookieSold);
    // //hourlyCookiesPurchase: function() {
    //      //  return this.;   
    // }
};

var alki = {
    minCookies: 2,
    maxCookies: 16,
    AvgCookiesSold: 4.6,
    hoursOfOperation:[],
    actualWorkHours:[],
    scheduleWorkHours:[],
    additionalOpHours:[],
    randomCust: calcRandCust,
    // averageCookiesHours: function() {
    //     return (randomCust() * this.AvgCookieSold);
    // //hourlyCookiesPurchase: function() {
    //   //  return this.;
    }
};

function calcRandCust () {
var randCust= Math.floor( Math.random() * (this.maxCookies - this.minCookies + 1) ) + this.minCookies;
console.log (randCust);
return randCust;
};
