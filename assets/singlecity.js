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
    "http://api.weatherapi.com/v1/current.json?key=41916e3fc44145ab9cc24434222408&q=" +
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
     fetch("https://api.openweathermap.org/data/2.5/forecast?lat="+latNumber+"&lon="+lonNumber+"&appid="+API2+"&units=standart")
     .then ((response)=>response.json())
     .then (function(data){
      console.log(data)
         //this date code for matching date and dxata date
      const date = new Date();
      

      let day = date.getDate()+ 1;
      
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      let today=data.list[0]
     console.log(year,- month,- day)
      

     for (i=1 ;i<6 ;i++){

  
      var mainDivH1=document.getElementById('dataMainDivSpan')
      mainDivH1.textContent=data.city.name






      
      var iconImg="http://http://openweathermap.org/img/wn/"+ iconName +"@2x.png"
    
       var weather=data.list[1].weather[0]
      var iconName=data.list[1].weather[0].icon


      var icon=document.getElementById('icon')
      icon.setAttribute('src',iconName)

      

      var choosenLiTemp=document.getElementById('choosenTemp')
      choosenLiTemp.textContent=data.list[1].main.temp
  
      var choosenWind=document.getElementById('choosenWind')
      choosenWind.textContent=data.list[1].wind.speed
      
      var choosenHumidty=document.getElementById('choosenHumidty')
      choosenHumidty.textContent=data.list[1].main.humidity
      
      var choosenUV=document.getElementById('uvIndex')
      choosenUV.textContent=uvFirstData



//appenChild variebles section

      var weekDayForecast=document.getElementById('forcast-box')
 


      const mainDiv=document.createElement('div')
      mainDiv.setAttribute("id","week-forecast1")
      const mainUl=document.createElement('ul')
      mainUl.setAttribute('class',"day")
      const mainLi =document.createElement('li')
      mainLi.setAttribute('class','week-forecast-li')
      const h5=document.createElement('h5')
      h5.setAttribute("id","week-forecast-date")

      const secondLi=document.createElement('li')
      secondLi.setAttribute('class','week-forecast-li')
      const mainImg=document.createElement('img')
      mainImg.setAttribute('id','week-forecast-img')
      mainImg.setAttribute('src',iconImg)

      const thirdLi=document.createElement('li')
      thirdLi.setAttribute('class','week-forecast-li')
      const tempDiv=document.createElement("div")
      tempDiv.setAttribute('id','week-forecast-temp')

      const forthLi=document.createElement('li')
      forthLi.setAttribute('class','week-forecast-li')
      const windDiv=document.createElement('div')
      windDiv.setAttribute('id','week-forecast-wind')

      const fifthLi=document.createElement('li')
      fifthLi.setAttribute('class','week-forecast-li')
      const humDiv=document.createElement('div')
      humDiv.setAttribute('id','week-forecast-humidty')



// append child sectoin

      weekDayForecast.appendChild(mainDiv)
      mainDiv.appendChild(mainUl)

      mainUl.appendChild(mainLi)
      mainLi.appendChild(h5)

      mainUl.appendChild(secondLi)
      secondLi.appendChild(mainImg)

       mainUl.appendChild(thirdLi)
       thirdLi.appendChild(tempDiv)

       mainUl.appendChild(forthLi)
       forthLi.appendChild(windDiv)

        mainUl.appendChild(fifthLi)
      fifthLi.appendChild(humDiv)


      }
     

    

     })

    

      if (data.error) {
        alert("No matching location found.");
      }
    });
  
  return;
}
