var button = document.querySelector("button");
var div = document.querySelector("div");

function calc(json) {
    var euroQuantity = document.querySelector("input").value;
    var ilsRate = json.rates.ILS;
    div.innerText = euroQuantity * ilsRate;
}

async function fetchILS() {
    var res = await fetch("https://api.exchangeratesapi.io/latest");
    var json = await res.json();    
    console.log(json);
    calc(json);
    
    // .then(function (res) {
    //         return res.json();
    // })
    // .then(function (json) {
    //     calc(json);
    // });
}

button.onclick = fetchILS;


