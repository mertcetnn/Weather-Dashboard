
var aside = document.getElementsByClassName("sideBar");
var input = document.getElementById("domTextElement");
var searchHistory = [];
var divCity = document.getElementById("storageNames")
var ul = document.getElementById("storageNamesUl");
var li = document.getElementsByClassName("cityNames");
var cityBtn = document.getElementsByClassName("cityNameBtn");
var citySpan = document.getElementsByClassName("storageNamesLi");


//adding event listener for "searchBtn"
const btnStore = document
  .getElementById("searchBtn")
  .addEventListener("click", addItem);

// each click takes value and store in local storage
function addItem() {
  pickCity(input.value);

  searchHistory.push(input.value);

  console.log(searchHistory);

  localStorage.setItem("pastCity", searchHistory);

  return input; //takes setted local storage value put in history
}
if (input == null) {
  window.localStorage.removeItem("pastCity");
}


// //creating element for past
//                                 //>>>>>>>>>>>>>>>>>Doesnt work
// if (searchHistory.length  > 0 || searchHistory.length == 0) {
//     function createElement() {
//       for (i = 0; i < searchHistory.length; i++) {
//   var storedCities = JSON.parse(localStorage.getItem("pastCity")) ;
//   var pastSearchesEl = document.getElementById('cityNamebtn');


// console.log(storedCities)
// console.log(pastSearchesEl)


// pastSearchesEl.innerHTML ='';
// var pastCityBtn = document.createElement("button");
//       pastCityBtn.classList.add("cityNameBtn");
//       pastCityBtn.textContent = `${storedCities[i].city}`;
//       pastSearchesEl.appendChild(pastCityBtn);
//   }
  

//     }}
















var currentCity;



function pickCity(singleCity) {
  //fetching API
  fetch(
    "http://api.weatherapi.com/v1/forecast.json?key=b622ade93acc444b88c30856220608&q=" +
      `${singleCity}` +
      "&days=1&aqi=no&alerts=no"
  )
    .then((response) => response.json())
    .then(function(data) {


// current weather
var currentConditionsEl = $('#dataMainDivSpan');


// create city name element and display
var cityNameEl = $('<h2>');
cityNameEl.text(currentCity);
currentConditionsEl.append(cityNameEl);








      
      console.log(data);

      if (data.error) {
        alert("No matching location found.");
      }
    });

  return;
}
