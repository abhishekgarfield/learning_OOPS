const cityUrl = "https://zomatoajulypi.herokuapp.com/location";
const restUrl = "https://zomatoajulypi.herokuapp.com/restaurant?stateId=";

function loadCity() {
  console.log("here");
  fetch(cityUrl, { method: "GET" })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      var city = data;
      printcity(city);
    })
    .catch((err) => {
      console.log(err);
    });
}
const printcity = (city) => {
  console.log("inside");
  console.log(city);
  var parent = document.getElementById("city");
  var child = parent.lastChild;
  city.map(({ location_name }) => {
    console.log(location_name);
    var textNode = document.createTextNode(`${location_name}`);
    elementNode = document.createElement("option");
    elementNode.appendChild(textNode);
    parent.appendChild(elementNode);
  });
  parent.addEventListener("change", (e) => {
    console.log(e.currentTarget.value);
    var stateId = 0;

    var el2 = document.getElementById("rest");
    while(el2.children.length>1)
    {
        el2.removeChild(el2.children[1]);
        
    }
    city.forEach((element) => {
      if (element.location_name == e.currentTarget.value) {
        stateId = element.state_id;
      }
    });
    const restUrl = `https://zomatoajulypi.herokuapp.com/restaurant?stateId=${stateId}`;
    fetch(restUrl, { method: "GET" })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("rest");
        console.log(data);
        data.map(({ restaurant_name }) => {
          var textNode = document.createTextNode(`${restaurant_name}`);
          var el3 = document.createElement("option");
          el3.appendChild(textNode);
          el2.appendChild(el3);
        });
      });
  });
};
