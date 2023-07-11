let jokebtn = document.getElementById("jokebtn");
let joke = document.getElementById("joke");

const apiKey = "gFPNXdbE5G03M3IenoSrFQ==isWRxQJBMZzipVMb";
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
let option = {
  method: "GET",
  headers: { "X-Api-Key": apiKey },
};

let getJoke = async () => {
try{
    joke.innerHTML = "updating...";
    jokebtn.style.backgroundColor = 'red';
    jokebtn.innerText = 'Loading...'
    let response = await fetch(apiURL, option);
    let data = await response.json();
    joke.innerText = data[0].joke;
    jokebtn.style.backgroundColor = 'green';
    jokebtn.innerText = 'Tell Me A Joke'
}
catch(error){
joke.innerText = 'failed from server'
}
};

jokebtn.addEventListener("click", getJoke);
