const POP_UP = document.getElementById('popUp');
let preces = [];

window.addEventListener('load', () => {
    preces = JSON.parse(localStorage.getItem("preces") || "[]");
    console.log(preces)
    render();
});

document.getElementById('jaunaPrece').addEventListener('click', () => {
    POP_UP.style.display = 'block';

})

document.getElementById('pievienotPreci').addEventListener('click', () => {
    POP_UP.style.display = 'none';

    let prece = {nosaukums: nosaukums.value, daudzums: daudzums.value};

    nosaukums.value = "";
    daudzums.value = "";

    preces.push(prece);

    render();
})

function render() {
    let biblioteka = document.getElementById('biblioteka');
    biblioteka.innerHTML = "";

    for(let i = 0; i < preces.length; i++) {
        let prece = `
        <div class="prece">
            <h3>nosaukums: ${preces[i].virsraksts}</h3>
            <h4>daudzums: ${preces[i].daudzums}</h4>
        </div>`;

        biblioteka.innerHTML += prece;
    }

    localStorage.setItem("preces", JSON.stringify(preces))
}