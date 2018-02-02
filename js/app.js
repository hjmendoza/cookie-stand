'use strict';
var hours = ['6 am', '7 am', '8 am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var allLocations = [];
// var totalCookiesByHour = 0;
// var netTotal = 0;
var storeForm = document.getElementById('store-form');

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
}
MakeLocation.prototype.render = function(){
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

function makeFooterRow() {
  var cookiestands = document.getElementById('cookiestands');
  var trEl = document.createElement('tr');
  var tfEl = document.createElement('td');
  trEl.setAttribute('id', 'total-row');
  tfEl.textContent = 'Totals';
  trEl.appendChild(tfEl);
  cookiestands.appendChild(trEl);

}

function makeStands() {
  new MakeLocation('First and Pike', 23, 65, 6.3);
  new MakeLocation('SeaTac Airport', 3, 24, 1.2);
  new MakeLocation('Seattle Center', 11, 38, 3.7);
  new MakeLocation('Capitol Hill', 20, 38, 2.3);
  new MakeLocation('Alki', 2, 16, 4.6);
  makeHeaderRow();
  for(var i = 0; i < allLocations.length; i++){
    allLocations[i].render();
  }
  makeFooterRow();
}

makeStands();


function addNewStore(event) {
  event.preventDefault();

  var newStoreName = event.target.name.value;
  var newStoreMinCustomers = parseInt(event.target.minCustomers.value);
  var newStoreMaxCustomers = parseInt(event.target.maxCustomers.value);
  var newStoreAvgOrder = parseInt(event.target.avgOrder.value);

  if(!event.target.name.value || !event.target.minCustomers.value || !event.target.minCustomers.value || !event.target.avgOrder.value) {
    return alert ('No empty fields.');
  }

  new MakeLocation(newStoreName, newStoreMinCustomers, newStoreMaxCustomers, newStoreAvgOrder);

  var wholeTable = document.getElementById('cookiestands');
  var trFooter = document.getElementById('total-row');
  wholeTable.removeChild(trFooter);

  allLocations[allLocations.length-1].render();
  makeFooterRow();

  event.target.name.value = null;
  event.target.minCustomers.value = null;
  event.target.maxCustomers.value = null;
  event.target.avgOrder.value = null;
}

storeForm.addEventListener('submit', addNewStore);




