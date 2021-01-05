var ul = document.querySelector("ul");
var counterDiv = document.querySelector(".counter");
var input = document.querySelector("input");
var button = document.querySelector("button");

function addProduct() {
  var product = input.value;
  if(product) {
    var li = document.createElement("li");
    li.innerText = product;
    li.onclick = function (e) {
      e.target.remove();
      counterDiv.innerText = ul.children.length;
    };
    ul.appendChild(li);
    input.value = '';
    counterDiv.innerText = ul.children.length;
  }
}

input.addEventListener('keydown', function (e) {
  if (e.code === 'Enter') {
    button.click();
  }
});

// input.onkeydown = function (e) {
//     if (e.code === 'Enter') {
//       button.click();
//     }
// }

button.addEventListener('click', addProduct);

// button.onclick = addProduct;

