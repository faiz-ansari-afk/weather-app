// 
window.addEventListener("load",() =>{
    // const key = "eb9fd878c19c459c6ad578493a51d0d9";
    let long;
    let lat;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const proxy = "https://cors.anywhere.herekoapp.com/"
            const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=eb9fd878c19c459c6ad578493a51d0d9`
            fetch(api)
            .then((response) =>{
                return response.json();
            })
            .then((data) =>{
                console.log(data)
            })
        });
    }
})