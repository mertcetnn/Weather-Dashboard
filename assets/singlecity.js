function search() {
    // Get the user's input from the page
    var searchQuery = document.getElementById('searchInput').value;}
    // Get the item from LocalStorage
  var localStorageItem = localStorage.getItem(searchQuery);

var savedItems = JSON.parse(localStorage.getItem("storageNamesLi"))

if (savedItems == null) {
    var num = 0
}
else {
    var num = savedItems.length
}







//fetching API
fetch('http://api.weatherapi.com/v1/forecast.json?key=b622ade93acc444b88c30856220608&q=Albany&days=1&aqi=no&alerts=no')
  .then((response) => response.json())
  .then((data) => console.log(data));












    