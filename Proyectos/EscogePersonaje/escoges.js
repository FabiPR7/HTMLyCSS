let personajes = ["Alvaro", "Rapunzel", "Mclovin","Fabitler", "El niño sol", "Cañones y su morty(AV)"];
let numeroPerosnaje = 0;
let card = document.querySelector(".card");


card.addEventListener("click",(event) => {
   if(event.srcElement.className == "label1"){
    console.log("Hola");
    restrarFoto();
   }
   if(event.srcElement.className == "label2"){
    console.log("Chau");
    avanzarFoto();
   }
});

function avanzarFoto(){
    numeroPerosnaje++;
    if(numeroPerosnaje==personajes.length){
        numeroPerosnaje=0;
    }
    card.innerHTML = ` <label class="label1"><</label>
        <img src="imagenes/${personajes[numeroPerosnaje]}.png" alt="">
        <label class="label2">></label>
        <h3>${personajes[numeroPerosnaje]}</h3>`;
}
function restrarFoto(){
    numeroPerosnaje--;
    if(numeroPerosnaje < 0){
        numeroPerosnaje= personajes.length-1;
    }
    card.innerHTML = ` <label class="label1"><</label>
        <img src="imagenes/${personajes[numeroPerosnaje]}.png" alt="">
        <label class="label2">></label>
        <h3>${personajes[numeroPerosnaje]}</h3>`;
}
