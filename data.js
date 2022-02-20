const APIKey = '185As0QewBGzzkAT1hcvAiYeNcSexlnO'

const getLocationId = async () => { // it is an asynchronous function, because we don't want it to stop the code to run while the fetch happens.
  let response = await fetch('') //we want it to wait until the fetch is completed to assign the value to the variable.
  let data = await response.json() // we have to wait until response is solved to be able to apply it's method.
  return data //this will return a promise so we will have to use a '.then' later.
}

const getCurrentWeather = async () => {

}