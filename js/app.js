// function getRandomCustomer(max) {
//   return Math.floor(Math.random()) * Math.floor(max));
// }

var firstPike = {
  name: '1st and Pike', 
  minCustomers: 23,
  maxCustomers: 65,
  avgOrder: 6.3,
  customersHourly: function getRandomCustomer() {
    var randomCustomer = Math.floor(Math.random() * Math.floor(this.maxCustomers - this.minCustomers) + Math.floor(this.minCustomers));
    return randomCustomer;
  },
  cookiesHourly: function getRandomHourlySale() {
    var randomSale = this.customersHourly() * this.avgOrder;
    return randomSale;
  },
  hourBreakdown: function getHoursBreakdown() {
    var breakdownArray = [];
    for (var i = 0; i < 14; i++) {
      var intCookies = this.cookiesHourly();
      breakdownArray.push(intCookies.toString());
    }
    return breakdownArray;
  },

  printHours: function printData() {
    var hours = ["6 am", "7 am", "8 am"];
    var cookies = this.hourBreakdown();
    for (var i = 0; i < 3; i++) {
      console.log(hours[i] + ': ' + cookies[i]);
    }
  }
};


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