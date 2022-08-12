var cityNameBtn = document.getElementsByClassName("cityNameBtn");

var valueOfInpt =0;

//adding event listener for "searchBtn"
const btnStore = document.getElementById("searchBtn")
.addEventListener("click", addItem);


// each click takes value and store in local storage
function addItem() {
  var input = document.getElementById("domTextElement");
 valueOfInpt++;
localStorage.setItem(input.value,"addItem");
                    //(value,key)
  return ;
}
if (localStorage ==null)
  {value.input=0}
  else{length=valueOfInpt}


  //takes setted local storage value put in history
var getData = (document.getElementById("domTextElement").value =
  localStorage.getItem("addItem"));


 
 
//   function clearLocalStorage(){
//     localStorage.removeItem("additem")
//     return localStorage= null;
// }
// clearLocalStorage();











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
