let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    let input = document.querySelector("input");
    let url = `http://api.weatherapi.com/v1/current.json?key=af7df9fb4f1b463283d55634241702&q=${input.value}`;

    let request = fetch(url);

    request.then((data) =>{
        return data.json();
    })
        .then((objData) => {
            console.log(objData);
            updateValues(objData);
        })
        .catch((error) => {
            console.log(error);
    })
})

function updateValues(data) {
    // location.innerText+=data.location.
    let location = document.querySelector("h3");
let temp = document.querySelector("#temp");
    let hum = document.querySelector("#hum");
    let degree = document.querySelector("#degree");
    let dir = document.querySelector("#dir");
    let kph = document.querySelector("#kph");
    let mph = document.querySelector("#mph");
    let country = document.querySelector("#country");
    let localTime = document.querySelector("#localTime");
    let lat = document.querySelector("#lat");
    let lon = document.querySelector("#lon");
    
    location.innerText += data.location.name;
    temp.innerText += data.current.temp_c;
    hum.innerText += data.current.humidity;
    degree.innerText += data.current.wind_degree;
    dir.innerText += data.current.wind_dir;
    kph.innerText += data.current.wind_kph;
    mph.innerText += data.current.wind_mph;
     country.innerText += data.location.country;
    localTime.innerText += data.location.localtime;
    lat.innerText += data.location.lat;
    lon.innerText += data.location.lon;

}