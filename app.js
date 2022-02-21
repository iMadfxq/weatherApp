
let form = document.querySelector('form')
let input = document.querySelector('#input')

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let userCity = input.value;

  getCity(userCity).then(data => {
    return getWeather(data.Key);
  }).then(data => {
    console.log(data);
  }).catch(err => console.log(err));

})
