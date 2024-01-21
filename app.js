let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

console.log(numeroUsuario);

if (numeroUsuario == numeroSecreto) {
    //alert('Acertaste el número secreto ' + numeroUsuario);
    alert(`Acertaste el número secreto ${numeroUsuario}`);
} else {
    //alert('El número '+ numeroUsuario + ' no es el número secreto!')
    alert(`El número ${numeroUsuario} no es el número secreto!`)
}