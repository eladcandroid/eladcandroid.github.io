var ul = document.querySelector("ul");
var counterDiv = document.querySelector(".counter");
var product = prompt("HACHNES MUTZAR");

while (product) {
  var li = document.createElement("li");
  li.innerText = product;
  li.onclick = function (e) {
    console.log(e);
    e.target.remove();
    counterDiv.innerText = ul.children.length;
  };
  ul.appendChild(li);
  counterDiv.innerText = ul.children.length;
  product = prompt("HACHNES MUTZAR");
}
