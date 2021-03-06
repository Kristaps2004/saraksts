const POP_UP = document.getElementById("popUp");
let preces = [];

window.addEventListener("load", () => {
  preces = JSON.parse(localStorage.getItem("preces") || "[]");
  console.log(preces);
  render();
});

const list = document.querySelector("#biblioteka");

list.addEventListener("click", (e) => {
  if (e.target.className == "izdzest") {
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
    preces.splice(li, 1);
    localStorage.setItem("preces", JSON.stringify(preces));
  }
});

document.getElementById("jaunaPrece").addEventListener("click", () => {
  POP_UP.style.display = "block";
});

document.getElementById("pievienotPreci").addEventListener("click", () => {
  POP_UP.style.display = "none";

  let prece = { nosaukums: nosaukums.value, daudzums: daudzums.value };

  nosaukums.value = "";
  daudzums.value = "";

  preces.push(prece);

  render();
});

function render() {
  let biblioteka = document.getElementById("biblioteka");
  biblioteka.innerHTML = "";

  for (let i = 0; i < preces.length; i++) {
    let prece = `
        <li class="prece">
            <h4 class="sadala">Preces nosaukums: ${preces[i].nosaukums}</h4>
            <h4 class="sadalaViens">Daudzums: ${preces[i].daudzums}</h4>
            <button class="izdzest">X</button>
        </li>`;

    biblioteka.innerHTML += prece;
  }

  localStorage.setItem("preces", JSON.stringify(preces));
}

var toggled = false,
  div1 = document.getElementById("izdzest"),
  div2 = document.getElementById("izdzest"),
  toggle = function () {
    if (toggled) {
      div1.style.display = "block";
      div2.style.display = "none";
    } else {
      div1.style.display = "none";
      div2.style.display = "block";
    }
    toggled = !toggled;
  };

document.getElementById("nosaukums").maxLength = "60";
document.getElementById("daudzums").maxLength = "6";
