let opciones = ["piedra", "papel", "tijeras"]
function getRandomInt(max){
    return Math.floor(Math.random() * max)
}
let random = opciones[getRandomInt(3)]
let gano = true;

while(gano) {
    let eleccion = prompt(("Elije entre: 'piedra', 'papel', 'tijeras'"));
    console.log("Usuario eligio: ", eleccion)
    console.log("La computadora eligio: ", random)
    if(eleccion === random) {
        console.log("¡ESTAMOS EMPATADOS!");
    }else if (
             (eleccion === "piedra" && random === "papel") ||
             (eleccion === "papel" && random === "tijeras") ||
             (eleccion === "tijeras" && random === "piedra") 
    ) {
        console.log("LO SIENTO...PERDISTE 🥺")
    }else if (
             (eleccion === "piedra" && random === "tijeras") ||
             (eleccion === "papel" && random === "piedra") ||
             (eleccion === "tijeras" && random === "papel")
    ){
        console.log("¡FELICIDADES...GANASTE! 😄")
    } let respuesta = prompt("Quieres jugar denuevo? (S/N)").toUpperCase();
    if(respuesta === "N") {
        gano = false;
        console.log("Gracias por jugar");
    }
}