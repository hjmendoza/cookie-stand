'use strict';
var hours = ['6 am', '7 am', '8 am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstPike = {
  name: '1st and Pike',
  minCustomers: 23,
  maxCustomers: 65,
  avgOrder: 6.3,
  customersHourlyArray: [],
  cookiesHourlyArray: [],
  totalCookies: 0,
  calcCustomersHourly: function () {
    for (var i = 0; i < hours.length; i++) {
      this.customersHourlyArray.push(
        Math.floor(
          Math.random() * (this.maxCustomers - this.minCustomers + 1)
        ) + this.minCustomers
      );
      console.log(this.customersHourlyArray [i]);
    }
  },
  calcCookiesHourly: function() {
    for (var j = 0; j < hours.length; j++) {
      this.cookiesHourlyArray.push(
        Math.round(this.avgOrder * this.customersHourlyArray[j])
      );
      console.log(this.cookiesHourlyArray[j]);
    }
  },
  render: function () {
    var firstandpike = document.getElementById('firstandpike');
    var fandp = document.getElementById('fandp');
    this.calcCustomersHourly();
    this.calcCookiesHourly();
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    fandp.appendChild(h3El);
    for (var k = 0; k < hours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent =
        hours[k] + ': ' + this.cookiesHourlyArray[k] + ' cookies';
      console.log(liEl);
      firstandpike.appendChild(liEl);
    }
  }
};
firstPike.render();


// var seaTac = {
//   name: 'First and Pike', 
//   minCustomers: 3,
//   maxCustomers: 24,
//   avgOrder: 1.2,
//   // customersHourly: function() {
    
//   }
// };

// var seattleCenter = {
//   name: 'First and Pike', 
//   minCustomers: 11,
//   maxCustomers: 38,
//   avgOrder: 3.7,
//   // customersHourly: function() {
    
//   }
// };

// var capHill = {
//   name: 'First and Pike', 
//   minCustomers: 20,
//   maxCustomers: 38,
//   avgOrder: 2.3,
//   // customersHourly: function() {
    
//   }
// };

// var alki = {
//   name: 'First and Pike', 
//   minCustomers: 2,
//   maxCustomers: 16,
//   avgOrder: 4.6,
//   // customersHourly: function() {    
//   }
// };