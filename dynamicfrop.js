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
     var  city = data;
      printcity();
    })
    .catch((err) => {
      console.log(err);
    });
}
const printcity=()=>{
    var parent= document.getElementById("city");
        var child=parent.lastChild;
        city.map((item))}
