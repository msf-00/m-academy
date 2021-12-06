let userName = prompt(`Hola! Bienvenid@ a M-Academy!
Por Favor ingrese su nombre:`);

let capacitarse = prompt(`Realmente desea capacitarse? Escriba "Si" o "No":`);

if (capacitarse == "No") {
  alert(`Realmente tienes que dar el 100% de ti, intentalo!`);
} else {
  alert(`Mucha suerte en tus capacitaciones!`);
}

alert(`Bienvenid@ a M-Academy, ${userName}!
Que disfrutes de tu experiencia en nuestro sitio!`);

number = Number(
  prompt(`Antes que nada, deberá adivinar el numero secreto.
Pista: El numero está entre el 1 y el 10.
Ingrese un numero:`)
);

do {
  number = Number(
    prompt(`El numero ingresado, no es el correcto.
    Intente nuevamente:`)
  );
} while (number != 6);

alert("Felicitaciones! Ha adivinado el numero! Continue!")

/*if (number < 10){
    alert(`El numero es menor que 10.`);
}else if (number > 10){
    alert(`El numero es mayor que 10.`);
}else{
    alert(`El numero es igual a 10.`)
}*/
