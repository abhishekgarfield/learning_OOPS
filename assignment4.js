/* --------------- Assignment-4 -------------*/
/* --------------- Question 1 --------------*/
ratingData = [
  { restaurant: "KFC", rating: 5 },
  { restaurant: "Burger King", rating: 4 },
  { restaurant: "KFC", rating: 3 },
  { restaurant: "Domino", rating: 2 },
  { restaurant: "Subway", rating: 3 },
  { restaurant: "Domino", rating: 1 },
  { restaurant: "Subway", rating: 4 },
  { restaurant: "Pizza Hut", rating: 5 },
];

// a) Average rating for all the restaurants
var averageRating = [];
var check = true; // for checking if element already added in existing array
var index = 0; // creating array only for new elements
ratingData.forEach((element) => {

  //Create new array with incremented index

  if (!averageRating[index]) {
    averageRating[index] = [];
  }

  // Check if restaurant array already exist and then add restaurant info

  averageRating?.forEach((item) => {
    if (item[0]?.restaurant == element.restaurant) {
      item.push(element);
      check = false;
      return;
    }
  });

  // if restaurant array dont exist push element in new array

  if (check == true) {
    averageRating[index].push(element);
    index++;
  } else {
    check = true;
  }
});
var averageRestaurantRating = averageRating.map((item) => {
  var totalrating = 0;
  item.forEach(({ rating, restaurant }) => {
    totalrating += rating;
  });
  var averagerating = (totalrating / (5 * item.length)) * 5; // Calculate average rating for each restaurant
  return (average = {
    restaurant: item[0].restaurant,
    averageRating: averagerating,
  });
});

console.log(averageRestaurantRating); // Contains restaurant name with average rating

/* ---------------- Question 2 -----------------*/

var filteredAverageRating=averageRestaurantRating.filter(({averageRating})=>{return averageRating>=4});

console.log(filteredAverageRating); // filtered restautrant names with rating filter

