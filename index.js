

// Assign Weather information variables
var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var feels = document.querySelector('.feels');
var humid = document.querySelector('.humid');
var wind = document.querySelector('.wind');
var max = document.querySelector('.max');
var clouds = document.querySelector('.clouds');
var buttonCel = document.querySelector('.celSub');
var buttonFar = document.querySelector('.farSub');
var buttonKel = document.querySelector('.kelSub');

// On "Celsius" click grab client input and populate weather information.
// Catch error if client input is blank
buttonCel.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+ input.value +'&units=metric&appid=84e036245b91790ad96fdb43d4e28993')
.then(response => response.json())
.then(data => {
  var nameValue = data['name'];
  var tempValue = data['main']['temp'];
  var descValue = data['weather'][0]['main'];
  var tempValue = data['main']['feels_like'];
  var humidValue = data['main']['humidity'];
  var windValue = data['wind']['speed'];
  var maxValue = data['main']['temp_max'];

  main.innerHTML = nameValue;

  temp.innerHTML = tempValue;
  desc.innerHTML = descValue;
  feels.innerHTML = "Feels Like: "+ tempValue;
  humid.innerHTML = "Humidity: "+ humidValue;
  wind.innerHTML = "Wind Speed: "+ windValue;
  max.innerHTML = "Max Temprature: "+ maxValue;
  input.value ="";

})

.catch(err => alert("Oops! You forgot to type in a city."));
})

// On "Fahrenheit" click grab client input and populate weather information.
// Catch error if client input is blank
buttonFar.addEventListener('click', function(name){
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+ input.value +'&units=imperial&appid=84e036245b91790ad96fdb43d4e28993')
  .then(response => response.json())
  .then(data => {
    var nameValue = data['name'];
    var tempValue = data['main']['temp'];
    var descValue = data['weather'][0]['main'];
    var tempValue = data['main']['feels_like'];
    var humidValue = data['main']['humidity'];
    var windValue = data['wind']['speed'];
    var maxValue = data['main']['temp_max'];
  
    main.innerHTML = nameValue;
  
    temp.innerHTML = tempValue;
    desc.innerHTML = descValue;
    feels.innerHTML = "Feels Like: "+ tempValue;
    humid.innerHTML = "Humidity: "+ humidValue;
    wind.innerHTML = "Wind Speed: "+ windValue;
    max.innerHTML = "Max Temprature: "+ maxValue;
    input.value ="";
  
  })
  
  .catch(err => alert("Oops! You forgot to type in a city."));
  })

// On "Kelvin" click grab client input and populate weather information.
// Catch error if client input is blank
buttonKel.addEventListener('click', function(name){
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+ input.value +'&appid=84e036245b91790ad96fdb43d4e28993')
  .then(response => response.json())
  .then(data => {
    var nameValue = data['name'];
    var tempValue = data['main']['temp'];
    var descValue = data['weather'][0]['main'];
    var tempValue = data['main']['feels_like'];
    var humidValue = data['main']['humidity'];
    var windValue = data['wind']['speed'];
    var maxValue = data['main']['temp_max'];
  
    main.innerHTML = nameValue;
  
    temp.innerHTML = tempValue;
    desc.innerHTML = descValue;
    feels.innerHTML = "Feels Like: "+ tempValue;
    humid.innerHTML = "Humidity: "+ humidValue;
    wind.innerHTML = "Wind Speed: "+ windValue;
    max.innerHTML = "Max Temprature: "+ maxValue;
    input.value ="";
  
  })
  
  .catch(err => alert("Oops! You forgot to type in a city."));
  })










// Assign variable for weather icon
var icon = document.querySelector('.icon');

buttonKel.addEventListener('click', function(name){
fetch('http://openweathermap.org/img/w/'+ icon + '.png')
.then(response => response.json())
.then(img => {
  var iconValue = img['main'][0]['icon'];

  icon.innerHTML = iconValue;
})
})