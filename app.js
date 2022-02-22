
let form = document.querySelector('form');
let input = document.querySelector('#input');
let card = document.querySelector('.card');
let cardDetails = document.querySelector('.card--details');

const updateCity = async (city) => {
  let cityDetails = await getCity(city);
  let weather = await getWeather(cityDetails.Key);
  return {
    cityDetails,
    weather
  };
};

const updateUI = async (data) => {
  const {cityDetails, weather} = data

  cardDetails.innerHTML = `
    <h1>${cityDetails.EnglishName}</h1>
    <h2>${cityDetails.Country.EnglishName}</h2>
    <h2>It has a temperature of: ${weather.Temperature.Metric.Value}°C</h2>
    <h2>${weather.WeatherText}</h2>
    <p>See more detailed info: <a href="${weather.Link}">Here</a></p>
    `
  
  card.style.display = 'flex'
}

form.addEventListener('submit', (e) => {
  e.preventDefault(); //I don't want the page to be reloaded

  let userCity = input.value.trim(); //We get the value of the input, and we are removing any spaces that it has
  form.reset(); //I want the input to be cleared

  updateCity(userCity)
    .then(data => updateUI(data));

})
