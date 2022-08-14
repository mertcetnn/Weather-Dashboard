var cityNameBtn = document.getElementsByClassName("cityNameBtn");
var aside =document.getElementsByClassName("sideBar")
var list =document.getElementsByClassName("sideBarUl")
var input = document.getElementById("domTextElement");
var searchHistory=[]


//adding event listener for "searchBtn"
const btnStore = document.getElementById("searchBtn").addEventListener("click", addItem);


// each click takes value and store in local storage
function addItem() {
  pickCity(input.value);
  
searchHistory.push(input.value)

console.log(searchHistory)

localStorage.setItem("pastCity",searchHistory);

return input;   //takes setted local storage value put in history
}
if(input== null){indow.localStorage.removeItem("addItem")}



if (searchHistory.length){
  function createElement(){
    for(i=0 ; i<searchHistory.length;i++){
        
      var li = document.createElement("li")
        li.className = "CityNames"
        var liBtn = document.createElement("button")
        liBtn.className = "cityNameBtn"
        liBtn.type = "button"
        var liSpan = document.createElement("span")
        liSpan.className = "storageNamesLi"
      
        liBtn.appendChild(liSpan);
        li.appendChild(liBtn);
       aside.list.appendChild(li);
       

      

  }}
}



function pickCity(singleCity){
//fetching API
fetch(
  "http://api.weatherapi.com/v1/forecast.json?key=b622ade93acc444b88c30856220608&q="+`${singleCity}`+"&days=1&aqi=no&alerts=no"

)
  .then((response) => response.json())
  .then((data) => {
    console.log(data)

  if ( data.error){
    alert("No matching location found.")
  }
  });

return  
  


}

// if (response !== input.value){
//   alert("No matching location found.")
// }