// API definition

const apiKey = "a9c3a14e0c8731a4490c0fb072aa6b0d"

// organization of what and how will appear on the screen
function screenData(dataResult){
    const cityName = document.querySelector(".temperatura").innerHTML = "Clima em " + dataResult.name
    const temp = document.querySelector(".celsius").innerHTML = Math.floor(dataResult.main.temp) + "°C"
    const desc = document.querySelector(".status").innerHTML = dataResult.weather[0].description
    const humidity = document.querySelector(".umidade").innerHTML = "| umidade: " + dataResult.main.humidity + "%"
    const icon = document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dataResult.weather[0].icon + ".png"
// to show the screen results
    console.log(dataResult)
}

// for asynchronous functions, may use the "await" sintax to wait the server response
async function siteApi(citySearch){
    const dataResult = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${apiKey}&lang=pt_br&units=metric`)
    // convert the results to json
    .then(response => response.json()
)

screenData(dataResult)
    // everytime the Screen shows some result, the icon of the weather will apears as well
    const iconDisplay = document.querySelector(".icone").style.display = 'block';
}

// this function is definied to only work the code IF the buttonClick's used
function buttonClick() {
    // it was definied that the value of the input will be the citySearch  
    const citySearch = document.querySelector(".nome-cidade").value
   
    siteApi(citySearch)
}
