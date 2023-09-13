esponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${process.env.OPENWEATHER_KEY}`
  )
  data = await response.json()
  //Get weather information
  const { temp } = data.main
  const fTemp = kelvinToFahrenheit(temp)
  response = await fetch(
    'http://www.thecocktaildb.com/api/json/v1/1/random.php'
  )
  data = await response.json()
  //Get the cocktail information
  const { strDrink, strDrinkThumb } = data.drinks[0]
  const fData = {
    fCity: city,
    fState: state,
    fTemp: fTemp,
    fDrink: strDrink,
    fImage: strDrinkThumb
  }

  return fData
