const APIKey = "aJxkpSPizDDAjgwNWPHopYzhLBJ7uam0"

const form = document.querySelector('form')
const input = document.querySelector('#input')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log('hola')
})


const getLocationId = async (city) => { // it is an asynchronous function, because we don't want it to stop the code to run while the fetch happens.
  let baseUrl = "https://dataservice.accuweather.com/locations/v1/cities/search"
  let query = `?apikey=${APIKey}&q=${city}`

  let response = await fetch(baseUrl + query) //we want it to wait until the fetch is completed to assign the value to the variable.
  let data = await response.json() // we have to wait until response is solved to be able to apply it's method.

  return data[0] //this will return a promise so we will have to use a '.then' later. Also we are returning only the first object in the list, which is usually the one that better matches the query
}

getLocationId('cali').then((data) => {
  console.log(data)
})

// const getCurrentWeather = async () => {

// }