const body = document.querySelector("body");
let texto;


function agregar() {
    setInterval(() => {
        texto = document.createElement("h2");
        texto.innerHTML = "AHI VIENE KIKO";
        body.appendChild(texto);
    },100);
}