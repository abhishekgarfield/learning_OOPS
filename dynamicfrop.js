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
      printcity(city);
    })
    .catch((err) => {
      console.log(err);
    });
}
const printcity=(city)=>{
    console.log("inside");
    console.log(city);
    var parent= document.getElementById("city");
        var child=parent.lastChild;
        city.map(({location_name})=>{
            console.log(location_name);
            textNode=document.createTextNode(`${location_name}`);
            elementNode=document.createElement("option");
            elementNode.appendChild(textNode);
            parent.appendChild(elementNode);
        }
        )}

        var el1=document.getElementById()