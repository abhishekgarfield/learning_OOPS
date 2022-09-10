/* --------------- Assignment-3 -------------*/
/* --------------- Question 1 --------------*/

class restaurantManager {
  restaurantList = [
    {
      id: 1,
      restaurantName: "KFC",
      address: "Anand Vihar",
      city: "Delhi",
    },
    {
      id: 2,
      restaurantName: "Domino",
      address: "Savita Vihar",
      city: "Delhi",
    },
    {
      id: 3,
      restaurantName: "Burger King",
      address: "Civil Lines",
      city: "Pune",
    },
    {
      id: 4,
      restaurantName: "Subway",
      address: "Cantonment",
      city: "Mumbai",
    },
  ];
  printAllRestaurantNames() {
    this.restaurantList.map(({ restaurantName }) => {
      console.log(restaurantName);
    });
  }
  filterRestaurantByCity(cit) {
    this.restaurantList.filter((item) => {
      if (item.city == cit) {
        console.log(item);
      }
    });
  }
}

const obj = new restaurantManager();
obj.printAllRestaurantNames();
obj.filterRestaurantByCity("Pune");

/* ---------------- Question 2 -----------------*/

orderData = {
  "Below 500": 20,
  "500-1000": 29,
  "1000-1500": 30,
  "1500-2000": 44,
  "Above 2000": 76,
};

// a) Total number of orders

var sum = 0;
Object.values(orderData).forEach((item) => {
  sum += item;
});

/* ------------- Another way ------------ */

for (keys in orderData) {
  sum += orderData[keys];
}
console.log(sum);

// b) Calculate the number of order proportion options

var orderPerportions = Object.keys(orderData).length;
console.log(orderPerportions);

// c) Calculate the percentage of each proportion

var arr = [];

for (i = 0; i < Object.keys(orderData).length; i++) {
  var objec = {};
  objec.id = i;
  objec.order = Object.keys(orderData)[i];
  objec.restaurant = "Punjabi tadka";
  objec.order_percentage = ((Object.values(orderData)[i] / sum) * 100).toFixed(
    2
  );
  arr.push(objec);
}
