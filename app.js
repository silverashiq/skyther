// My variables 

const searchInput = document.getElementById("searchInput")

const searchBtn = document.getElementById("searchBtn")    

const weatherIcon = document.getElementById("weatherIcon")   

const myTemp = document.getElementById("myTemp")   

const myDetails = document.getElementById("myDetails")   

const myFeel = document.getElementById("myFeel")   
const myCloud = document.getElementById("myCloud")

const myArea = document.getElementById("myArea")

const myCountry = document.getElementById("myCountry")  

const myTime = document.getElementById("myTime")   

const boxQ1 = document.getElementById("boxQ1") 

const boxA1 = document.getElementById("boxA1") 

const mainDisplay = document.getElementById("mainDisplay")


const myBox1=document.getElementById("myBox1")
const myBox2=document.getElementById("myBox2")
const myBox3=document.getElementById("myBox3")
const myBox4=document.getElementById("myBox4")
const myBox5=document.getElementById("myBox5")
const myBox6=document.getElementById("myBox6")
const myBox7=document.getElementById("myBox7")
const myBox8=document.getElementById("myBox8")
const myBox9=document.getElementById("myBox9")







const myKey = "9d207f736d19d98f87e37da86a7d9b40"

const loadParent = document.getElementById("loadParent")
const designLoad = '<h1 class="text-slate-400 text-xl font-normal py-5 tracking-widest">Loading...<br> Please wait</h1>';

const showLoad= ()=>{
    loadParent.innerHTML=designLoad;
}




// User's Weather from API
async function mainWeather(lat, long){
    showLoad();
    const apiResponse = await fetch( `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${myKey}&units=metric` );

    // Direct link https://api.openweathermap.org/data/2.5/weather?lat=23.7278846&lon=90.3654296&appid=9d207f736d19d98f87e37da86a7d9b40&units=metric

    const apiData = await apiResponse.json();

    console.log(apiData)


    

   

    // Icon URL
    const myUrl= " http://openweathermap.org/img/wn/"+apiData.weather[0].icon+"@8x.png"


    const myIcon = '<img class="size-[250px]" src="https://openweathermap.org/img/wn/09n@4x.png" alt="Icon" id="myIcon">'
 
    weatherIcon.innerHTML=myIcon
    myTemp.innerText=Math.round(apiData.main.temp) + "°C";
    myDetails.innerText=apiData.weather[0].description
    myFeel.innerText=("Feels like - " + apiData.main.feels_like + "°C") 
    myCloud.innerText=("Clouds - " + apiData.clouds.all   )
    myArea.innerText=(apiData.name + ",")
    myCountry.innerText=(apiData.sys.country)
    loadParent.classList.add('hidden');
    mainDisplay.classList.remove('hidden');

    myBox1.innerText=(apiData.weather[0].main)
    myBox2.innerText=(apiData.main.temp_min)+"°C"
    myBox3.innerText=(apiData.main.temp_max)+"°C"
    myBox4.innerText=apiData.timezone
    myBox5.innerText=(apiData.wind.speed)+"m/s"
    myBox6.innerText=(apiData.wind.deg)+"°"
    myBox7.innerText=apiData.main.pressure
    myBox8.innerText=apiData.main.humidity
    myBox9.innerText=apiData.main.sea_level
}













// Getting latitude and longitude from User

if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition( (position)=>{
        const lat = position.coords.latitude; 
        const long = position.coords.longitude;
        mainWeather(lat, long)

    } )
}


// function async function searchLocation(){
//     const locationText=searchInput.value.trim();
//     if (locationText == "" ){
//     alert("Please Enter Location")
//     return;
//     }
//     if(location){
//         showLoad();
//         const apiResponse = await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${locationText}&appid=${myKey}` );

//         const apiData=await apiResponse.json();
    
        

//     }