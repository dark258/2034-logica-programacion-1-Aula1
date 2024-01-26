let numeroSecreto = parseInt(Math.random()*10+1);
console.log(numeroSecreto + ' es el numero secreto');

let intentos = 3;
while (intentos>0){
    let numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");
    console.log(numeroUsuario + ' es el numero del usuario');
    if (numeroUsuario == numeroSecreto) {
        //alert('Acertaste el número secreto ' + numeroUsuario);
        alert(`Acertaste el número secreto ${numeroUsuario}`);
        break;
    } else {
        //alert('El número '+ numeroUsuario + ' no es el número secreto!')
        alert(`El número ${numeroUsuario} no es el número secreto!`);
    }
    intentos--;
}
if (intentos == 0)
alert('Excediste el máximo de intentos');