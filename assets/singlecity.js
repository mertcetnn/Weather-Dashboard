var aside = document.getElementsByClassName("sideBar");
var input = document.getElementById("domTextElement");
var searchHistory = [];
var divCity = document.getElementById("storageNames");
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

  return input; //takes setted local storage value put in history
}
if (input == null) {
  window.localStorage.removeItem("pastCity");
}



var currentCity;

function pickCity(singleCity) {
  //fetching API
  fetch(
    "http://api.weatherapi.com/v1/forecast.json?key=b622ade93acc444b88c30856220608&q=" +
      `${singleCity}` +
      "&days=1&aqi=no&alerts=no"
  )
    .then((response) => response.json())
     
    .then(function (data) {
      console.log(data);
      var lat=data.location.lat
      var lon=data.location.lon
      var uvFirstData=data.current.uv
      searchHistory.push(data.location.name);

      console.log(searchHistory);


      localStorage.setItem("pastCity", JSON.stringify(searchHistory)); //search that

      for (let i=0 ; i <searchHistory.length ; i++){
        console.log(searchHistory[i]) 
        if (searchHistory[i] == data.location.name){

          cityBtn = document.createElement("button");
          cityBtn.classList.add("cityNameBtn");
          cityBtn.textContent = data.location.name;
          divCity.appendChild(cityBtn);
        }
        
      }
      
      var API2="3604a2a806490268bfd78ce7aba0d8e9"
      var latNumber=lat
      var lonNumber=lon
     fetch("https://api.openweathermap.org/data/2.5/weather?lat="+latNumber+"&lon="+lonNumber+"&appid="+API2+"&units=imperial")
     .then ((response)=>response.json())
     .then (function(data){
      console.log(data)
         
      var mainDivH1=document.getElementById('dataMainDivSpan')
      mainDivH1.textContent=data.name
      var iconImg="http://openweathermap.org/img/wn/04n"+iconName+"@2x.png"
      var iconName=data.weather.icon
      var icon=document.getElementById('icon')
      icon.setAttribute('src',iconImg)
      

      var choosenLiTemp=document.getElementById('choosenTemp')
      choosenLiTemp.textContent=data.main.temp
      var choosenWind=document.getElementById('choosenWind')
      choosenWind.textContent=data.wind.deg
      var choosenHumidty=document.getElementById('choosenHumidty')
      choosenHumidty.textContent=data.main.humidity
      var choosenUV=document.getElementById('uvIndex')
      choosenUV.textContent=uvFirstData







     })



      if (data.error) {
        alert("No matching location found.");
      }
    });

  return;
}
