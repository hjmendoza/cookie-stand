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
  calcCookiesTotal: function() {
    for (var l = 0; l < hours.length;l++) {
      this.totalCookies += this.cookiesHourlyArray[l];
      console.log(this.totalCookies);
    }
  },
  render: function () {
    var firstandpike = document.getElementById('firstandpike');
    var fandp = document.getElementById('fandp');
    this.calcCustomersHourly();
    this.calcCookiesHourly();
    this.calcCookiesTotal();
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
    var liEl2 = document.createElement('li');
    liEl2.textContent =
        'Total: ' + this.totalCookies + ' cookies';
    console.log(liEl2);
    firstandpike.appendChild(liEl2);
  }
};
firstPike.render();

var seaTac = {
  name: 'SeaTac Airport',
  minCustomers: 3,
  maxCustomers: 24,
  avgOrder: 1.2,
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
  calcCookiesTotal: function() {
    for (var l = 0; l < hours.length;l++) {
      this.totalCookies += this.cookiesHourlyArray[l];
      console.log(this.totalCookies);
    }
  },
  render: function () {
    var airport = document.getElementById('airport');
    var sea = document.getElementById('sea');
    this.calcCustomersHourly();
    this.calcCookiesHourly();
    this.calcCookiesTotal();
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    sea.appendChild(h3El);
    for (var k = 0; k < hours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent =
        hours[k] + ': ' + this.cookiesHourlyArray[k] + ' cookies';
      console.log(liEl);
      airport.appendChild(liEl);
    }
    var liEl2 = document.createElement('li');
    liEl2.textContent =
        'Total: ' + this.totalCookies + ' cookies';
    console.log(liEl2);
    airport.appendChild(liEl2);
  }
};
seaTac.render();

var seattleCenter = {
  name: 'Seattle Center',
  minCustomers: 11,
  maxCustomers: 38,
  avgOrder: 3.7,
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
  calcCookiesTotal: function() {
    for (var l = 0; l < hours.length;l++) {
      this.totalCookies += this.cookiesHourlyArray[l];
      console.log(this.totalCookies);
    }
  },
  render: function () {
    var center = document.getElementById('center');
    var seacen = document.getElementById('seacen');
    this.calcCustomersHourly();
    this.calcCookiesHourly();
    this.calcCookiesTotal();
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    seacen.appendChild(h3El);
    for (var k = 0; k < hours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent =
        hours[k] + ': ' + this.cookiesHourlyArray[k] + ' cookies';
      console.log(liEl);
      center.appendChild(liEl);
    }
    var liEl2 = document.createElement('li');
    liEl2.textContent =
        'Total: ' + this.totalCookies + ' cookies';
    console.log(liEl2);
    center.appendChild(liEl2);
  }
};
seattleCenter.render();

var capHill = {
  name: 'Capitol Hill',
  minCustomers: 20,
  maxCustomers: 38,
  avgOrder: 2.3,
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
  calcCookiesTotal: function() {
    for (var l = 0; l < hours.length;l++) {
      this.totalCookies += this.cookiesHourlyArray[l];
      console.log(this.totalCookies);
    }
  },

  render: function () {
    var caphill = document.getElementById('caphill');
    var cph = document.getElementById('cph');
    // var cphtotal = document.getElementById('cphtotal');
    this.calcCustomersHourly();
    this.calcCookiesHourly();
    this.calcCookiesTotal();
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    cph.appendChild(h3El);
    for (var k = 0; k < hours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent =
        hours[k] + ': ' + this.cookiesHourlyArray[k] + ' cookies';
      console.log(liEl);
      caphill.appendChild(liEl);
    }
    var liEl2 = document.createElement('li');
    liEl2.textContent =
        'Total: ' + this.totalCookies + ' cookies';
    console.log(liEl2);
    caphill.appendChild(liEl2);
  }
};
capHill.render();

var alkiBeach = {
  name: 'Alki Beach',
  minCustomers: 2,
  maxCustomers: 16,
  avgOrder: 4.6,
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
  calcCookiesTotal: function() {
    for (var l = 0; l < hours.length;l++) {
      this.totalCookies += this.cookiesHourlyArray[l];
      console.log(this.totalCookies);
    }
  },
  render: function () {
    var alkibeach = document.getElementById('alkibeach');
    var alki = document.getElementById('alki');
    this.calcCustomersHourly();
    this.calcCookiesHourly();
    this.calcCookiesTotal();
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    alki.appendChild(h3El);
    for (var k = 0; k < hours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent =
        hours[k] + ': ' + this.cookiesHourlyArray[k] + ' cookies';
      console.log(liEl);
      alkibeach.appendChild(liEl);
    }
    var liEl2 = document.createElement('li');
    liEl2.textContent =
        'Total: ' + this.totalCookies + ' cookies';
    console.log(liEl2);
    alkibeach.appendChild(liEl2);
  }
};
alkiBeach.render();