'use strict';
var hours = ['6 am', '7 am', '8 am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var allLocations = [];
var totalCookiesByHour = 0;
var netTotal = 0;

function makeHeaderRow() {
  var cookiestands = document.getElementById('cookiestands');
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  trEl.appendChild(thEl);
  for (var i = 0; i < hours.length; i++) {
    var hourEl = document.createElement('th');
    hourEl.textContent = hours[i];
    trEl.appendChild(hourEl);
  }
  var totalEl = document.createElement('th');
  totalEl.textContent = 'Daily Location Total';
  trEl.appendChild(totalEl);
  cookiestands.appendChild(trEl);
}

makeHeaderRow();

function MakeLocation(name, minCustomers,maxCustomers, avgOrder) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgOrder = avgOrder;
  this.customersHourlyArray = [];
  this.cookiesHourlyArray = [];
  this.totalCookies = 0;
  allLocations.push(this);
  this.calcCustomersHourly = function() {
    for (var i = 0; i < hours.length; i++) {
      this.customersHourlyArray.push(
        Math.floor(
          Math.random() * (this.maxCustomers - this.minCustomers + 1)
        ) + this.minCustomers
      );
      console.log(this.customersHourlyArray [i]);
    }
  };
  this. calcCookiesHourly = function() {
    for (var j = 0; j < hours.length; j++) {
      this.cookiesHourlyArray.push(
        Math.round(this.avgOrder * this.customersHourlyArray[j])
      );
      console.log(this.cookiesHourlyArray[j]);
    }
  };
  this. calcCookiesTotal = function() {
    for (var l = 0; l < hours.length;l++) {
      this.totalCookies += this.cookiesHourlyArray[l];
      console.log(this.totalCookies);
    }
  };
  this.calcCustomersHourly();
  this.calcCookiesHourly();
  this.calcCookiesTotal();

  this.render = function() {
    var table = document.getElementById('cookiestands');
    var row = document.createElement('tr');
    var storename = document.createElement('td');
    row.appendChild(storename);
    storename.textContent = this.name;
    for (var i = 0; i < hours.length; i++) {
      var cookiesSold = document.createElement('td');
      cookiesSold.textContent = this.cookiesHourlyArray[i];
      row.appendChild(cookiesSold);
    }
    var total = document.createElement('td');
    total.textContent = this.totalCookies;
    row.appendChild(total);
    table.appendChild(row);
  };
  this.render();
}

function makeStands() {
  var store1 = new MakeLocation('First and Pike', 23, 65, 6.3);
  var store2 = new MakeLocation('SeaTac Airport', 3, 24, 1.2);
  var store3 = new MakeLocation('Seattle Center', 11, 38, 3.7);
  var store4 = new MakeLocation('Capitol Hill', 20, 38, 2.3);
  var store5 = new MakeLocation('Alki', 2, 16, 4.6);

  allLocations.push(store1);
  allLocations.push(store2);
  allLocations.push(store3);
  allLocations.push(store4);
  allLocations.push(store5);
}

var standInfo = makeStands();

function makeFooterRow() {
  var cookiestands = document.getElementById('cookiestands');
  var trEl = document.createElement('tr');
  var tfEl = document.createElement('td');
  tfEl.textContent = 'Totals';
  trEl.appendChild(tfEl);
  cookiestands.appendChild(trEl);
}
makeFooterRow();