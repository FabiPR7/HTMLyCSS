const texto = document.querySelector(".texto");
const vm = document.querySelector(".vm");
const cuadro = document.querySelector(".cuadro");
let masMenos = true;

cuadro.addEventListener("click", (event) => {
    if (event.srcElement.className == "vm") {
        if (masMenos) {
            console.log("ver mas");
            mostrarTexto();
            vm.innerHTML = "Ver menos..";
            masMenos = !masMenos;
        }else {
        quitarTexto();
        masMenos = !masMenos;
    } 
    }
   
})

function mostrarTexto() {
    cuadro.style.height = "auto";
    texto.style.height = "auto";
    cuadro.style.animation = "mostrar";
    texto.style.animation = "mostrar";
}

function quitarTexto() {
    cuadro.style.height = "350px";
    texto.style.height = "200px";
    cuadro.style.height = "350px";
    texto.style.height = "";
    vm.innerHTML = "Ver mas.."

}
