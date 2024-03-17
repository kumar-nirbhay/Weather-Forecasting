function getData()
{
    const city = Search.value;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'eeea683e31msh445f1ca3832929ep1e81d8jsnfe48d7543a23',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
        .then(response => response.json())
        .then(res=>{
            console.log(res);
            temp.innerHTML = res.temp;
            ws.innerHTML = res.wind_speed;
            hmdty.innerHTML = res.humidity;
        })
        .catch(err => console.error(err));	
}