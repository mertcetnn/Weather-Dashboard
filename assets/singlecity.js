var cityNameBtn = document.getElementsByClassName("cityNameBtn");

const btn = document
  .getElementById("searchBtn")
  .addEventListener("click", addItem);

// each click takes value and store in local storage
function addItem() {
  var input = document.getElementById("domTextElement");
  var newCity=localStorage.setItem("addItem", input.value);
  return;
}

//takes setted local storage value put in history
var getData = (document.getElementById("domTextElement").value =
  localStorage.getItem("addItem"));
if (getData == null) {
  var num = 0;
} else {
  var num = getData.length;
 
}
let x = localStorage.length;
for (i = 0; i < localStorage.length; i++) {
  x = localStorage.key(i);}

addItem();

//creating <li>
var NewListItem = function (newLi) {
  var li = document.createElement("li");
  li.className = "CityNames";
  var liBtn = document.createElement("button");
  liBtn.className = "cityNameBtn";
  liBtn.type = "button";
  var liSpan = document.createElement("span");
  liSpan.className = "storageNamesLi";

  liBtn.appendChild(liSpan);
  li.appendChild(liBtn);
  aside.div.ul.appendChild(li);
};
if (addItem == true) {
  let NewListItem;
}

//fetching API
fetch(
  "http://api.weatherapi.com/v1/forecast.json?key=b622ade93acc444b88c30856220608&q=Albany&days=1&aqi=no&alerts=no"
)
  .then((response) => response.json())
  .then((data) => console.log(data));
