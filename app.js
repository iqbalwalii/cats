const el = document.querySelector(".child");
let body = document.querySelector("body");
let image = '';
let fact = '';
fetch('https://catfact.ninja/fact')
  .then((response) => response.json())
    .then((data) => {
        fact = data.fact;
        console.log(fact);
        el.innerHTML = fact;
    });

fetch('https://api.thecatapi.com/v1/images/search')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        image = data[0].url;
        document.body.style.backgroundImage = `url(${image})`;
    }).catch((error) => {console.log(error) });