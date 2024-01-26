let numeroSecreto = parseInt(Math.random()*10+1);
let intentos = 3;
while (intentos>0){
    intentos--;
    let numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");
    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste el número secreto ${numeroUsuario}`);
        break;
    } else if (numeroUsuario > numeroSecreto) {
        alert(`El número ${numeroUsuario} no es el número secreto! Su valor es menor.`);
    } else{
        alert(`El número ${numeroUsuario} no es el número secreto! Su valor es mayor.`);
    }
}
if (intentos == 0)
    alert('Excediste el máximo de intentos');
else
    alert(`Acertaste al número secreto ${numeroSecreto} en ${3-intentos} intento${(3-intentos)==1?'':'s'}!`)
