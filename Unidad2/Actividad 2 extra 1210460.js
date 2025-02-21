
function jugar() {
    let numeroComputadora = Math.floor(Math.random() * 9) + 1;
    let numeroUsuario;
    
    do {
        numeroUsuario = parseInt(prompt("Ingrese un número entre 3 y 6:"));
    } while (numeroUsuario < 3 || numeroUsuario > 6);

    let eleccion = prompt("Adivine: ¿su número es mayor, menor o igual al número generado? (Escriba 'mayor', 'menor' o 'igual')");
    let resultado;
    
    if (numeroUsuario > numeroComputadora) {
        resultado = "mayor";
    } else if (numeroUsuario < numeroComputadora) {
        resultado = "menor";
    } else {
        resultado = "igual";
    }
    
    if (resultado === eleccion) {
        alert(`La computadora eligió ${numeroComputadora}, usted eligió ${numeroUsuario}. Su elección es ${resultado}. ¡Ha adivinado!`);
    } else {
        alert(`La computadora eligió ${numeroComputadora}, usted eligió ${numeroUsuario}. Su elección es ${eleccion}, pero la respuesta correcta era ${resultado}.`);
    }
    
    let jugarOtraVez = prompt("¿Quiere jugar otra vez? (SI/NO)").toUpperCase();
    if (jugarOtraVez === "SI") {
        jugar();
    } else {
        alert(`Gracias por jugar, ${nombre}. Su número de carnet es ${carnet}.`);
    }
}

jugar();
