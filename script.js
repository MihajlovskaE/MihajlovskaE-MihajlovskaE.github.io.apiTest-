let btn = document.getElementsByClassName("button");
let inputValue = document.querySelector(".inputValue");
let name = document.querySelector(".name");
let desc = document.querySelector(".desc");
let temp = document.querySelector("temp");
//fetch("api.openweathermap.org/data/2.5/weather?q="+inputValue.value+"&appid=f7922a9e51b0c25e96aa875e504b5e25")
fetch("api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={f7922a9e51b0c25e96aa875e504b5e25}")
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.log("error"))
