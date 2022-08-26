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
    //converting lat and log data to vareible
    .then(function (data) {
      console.log(data);
      var icoN = document.getElementById("mainIcon");
      icoN.setAttribute("src", data.current.condition.icon);

      console.log(icoN);

      var lat = data.location.lat;
      var lon = data.location.lon;
      var uvFirstData = data.current.uv;
      searchHistory.push(data.location.name);

      console.log(searchHistory);

      //setting json.stringfy data to local storage

      localStorage.setItem("pastCity", JSON.stringify(searchHistory));

      for (let i = 0; i < searchHistory.length; i++) {
        console.log(searchHistory[i]);
        if (searchHistory[i] == data.location.name) {
          cityBtn = document.createElement("button");
          cityBtn.setAttribute("id", data.location.name);
          cityBtn.textContent = data.location.name;
          divCity.appendChild(cityBtn);
        }
      }

      //using second api  fetching and taking data from inside
      var API2 = "3604a2a806490268bfd78ce7aba0d8e9";
      var latNumber = lat;
      var lonNumber = lon;
      fetch(
        "https://api.openweathermap.org/data/2.5/forecast?lat=" +
          latNumber +
          "&lon=" +
          lonNumber +
          "&appid=" +
          API2 +
          "&units=standart"
      )
        .then((response) => response.json())
        .then(function (data) {
          console.log(data);
          //this date code for matching date and data date
          const date = new Date();

          let day = date.getDate() + 1;

          let month = date.getMonth() + 1;
          let year = date.getFullYear();
          let today = data.list[0];
          console.log(year, -month, -day);

          var mainDivH1 = document.getElementById("dataMainDivSpan");
          mainDivH1.textContent = data.city.name;

          var choosenLiTemp = document.getElementById("choosenTemp");
          choosenLiTemp.textContent = data.list[1].main.temp;

          var choosenWind = document.getElementById("choosenWind");
          choosenWind.textContent = data.list[1].wind.speed;

          var choosenHumidty = document.getElementById("choosenHumidty");
          choosenHumidty.textContent = data.list[1].main.humidity;

          var choosenUV = document.getElementById("uvIndex");
          choosenUV.textContent = uvFirstData;

          //appenChild variebles section

          ///

          for (let i = 0; i < 5; i++) {

            var iconName = data.list[0].weather[i].icon;
            var iconImg ="https://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + "@2x.png";
            console.log(iconName);
            console.log(iconImg);

            const mainDiv = document.createElement("div");
            mainDiv.setAttribute("id", "week-forecast-data");

            const mainP = document.createElement("div");
            mainP.setAttribute("class", "week-forecast-p");

            const h5 = document.createElement("h5");
            h5.setAttribute("id", "week-forecast-date");
            h5.textContent = data.list[i].dt_txt;

            const secondP = document.createElement("div");
            secondP.setAttribute("class", "week-forecast-p");
            const mainImg = document.createElement("img");
            mainImg.setAttribute("id", "week-forecast-img");
            mainImg.setAttribute("src", iconImg);

            const thirdP = document.createElement("div");
            thirdP.setAttribute("class", "week-forecast-p");
            const tempDiv = document.createElement("h5");
            tempDiv.setAttribute("id", "week-forecast-temp");
            tempDiv.textContent = "TEMP:" + data.list[i].main.temp;

            const forthP = document.createElement("div");
            forthP.setAttribute("class", "week-forecast-p");
            const windDiv = document.createElement("h5");
            windDiv.setAttribute("id", "week-forecast-wind");
            windDiv.textContent = "WIND SPEED:" + data.list[i].wind.speed;

            const fifthP = document.createElement("div");
            fifthP.setAttribute("class", "week-forecast-p");
            const humDiv = document.createElement("h5");
            humDiv.setAttribute("id", "week-forecast-humidty");
            humDiv.textContent = "HUMIDITY:" + data.list[i].main.humidity; ///// check this

            // append child sectoin
            const weekDayForecast = document.getElementById("week-forecast");
            weekDayForecast.appendChild(mainDiv);
            mainDiv.appendChild(mainP);

            mainP.appendChild(h5);

            mainDiv.appendChild(secondP);
            secondP.appendChild(mainImg);

            mainDiv.appendChild(thirdP);
            thirdP.appendChild(tempDiv);

            mainDiv.appendChild(forthP);
            forthP.appendChild(windDiv);

            mainDiv.appendChild(fifthP);
            fifthP.appendChild(humDiv);
          }
        });
      
        cityBtn.addEventListener("click", (event) => {
          event.preventDefault(); // search
          pickCity(event.target.innerHTML);
        });
                
      if (data.error) {
        alert("No matching location found.");
      }
    });

  return;
}
