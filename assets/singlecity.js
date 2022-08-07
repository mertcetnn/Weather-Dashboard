var cityNameBtn=document.getElementsByClassName('cityNameBtn')
var input =document.getElementById('domTextElement');
const btn =document.getElementById('searchBtn').addEventListener("click",btnF)

 // each click takes value and store in local storage
function btnF(){
localStorage.setItem('City',input.value )}
// can not make it more than 1 history of search




//takes setted local storage value put in history

var SavedCity=localStorage.getItem("City")
if(SavedCity==null){
  var num=0
}else {var num =SavedCity.length}




//creating <li>
var  NewListItem =function(newLi){
var li =document.createElement("li")
li.className="CityNames"
var liBtn=document.createElement("button")
liBtn.className="cityNameBtn"
liBtn.type="button"
var liSpan =document.createElement("span")
liSpan.className="storageNamesLi"

liBtn.appendChild(liSpan)
li.appendChild(liBtn)
aside.div.ul.appendChild(li)


}



NewListItem=SavedCity
















  




//fetching API
fetch('http://api.weatherapi.com/v1/forecast.json?key=b622ade93acc444b88c30856220608&q=Albany&days=1&aqi=no&alerts=no')
  .then((response) => response.json())
  .then((data) => console.log(data));












    