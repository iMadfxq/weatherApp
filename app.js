
let form = document.querySelector('form');
let input = document.querySelector('#input');
let card = document.querySelector('.card');
let cardImage = document.querySelector('.card--image img')
let cardImageDescription = document.querySelector('.card--image p')
let cardDetails = document.querySelector('.card--details');


const updateCity = async (city) => {
  let cityDetails = await getCity(city);
  let weather = await getWeather(cityDetails.Key);
  console.log(cityDetails, weather)
  return {
    cityDetails,
    weather
  };
};

const updateUI = async (data) => {
  const {cityDetails, weather} = data;
  
  let image = weather.IsDayTime ? './sun.png' : './night.png';
  cardImage.setAttribute('src', image);
  
  let imageDescription = weather.IsDayTime ? `It is daytime in ${cityDetails.EnglishName}` : `It is nightime in ${cityDetails.EnglishName}`
  cardImageDescription.textContent = imageDescription
  
  cardDetails.innerHTML = `
  <h2>${cityDetails.EnglishName}, ${cityDetails.Country.EnglishName}</h2>
  <h2>${weather.Temperature.Metric.Value}°C</h2>
  <h2>${weather.WeatherText}</h2>
  <p>See more detailed info: <a href="${weather.Link}" target="_blank">Here</a></p>
  `
  
  card.style.display = 'flex'
}

if(localStorage.getItem('userCity')) {
  updateCity(localStorage.getItem('userCity'))
    .then(data => updateUI(data));
}

form.addEventListener('submit', (e) => {
  e.preventDefault(); //I don't want the page to be reloaded

  let userCity = input.value.trim(); //We get the value of the input, and we are removing any spaces that it has
  localStorage.setItem('userCity', userCity)
  form.reset(); //I want the input to be cleared

  updateCity(userCity)
    .then(data => updateUI(data));

})
