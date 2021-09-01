// Chiedere all'utente di inserire il numero di celle di cui sarà composto il campo da gioco.
// Tramite una funzione javascript disegnare in pagina la griglia con massimo 10 celle per riga.
// Al click su una cella dovrà essere mostrato con un alert il numero della cella e il suo background diventerà rosso.

// Funzioni

// cellCreator per calcolare il numero totale delle cellule del campo
function cellCreator(num){
    num = num*num;
    return num;
}

//Programma principale
// 1. Chiedo l'utente il numero per calcolo delle cellule
var CellNumberUser = parseInt(prompt("Inserisci da quante celle sarà composto il campo da gioco: da 1 a 10 "));
console.log("l'utente ha scelto", CellNumberUser);


// 2. creo ciclo for per "disegnare" il campo, ogni "i" è un quadrato di grilia
for (var i = 1; i <= cellCreator(CellNumberUser); i++){
document.getElementById("camp").innerHTML += `<div class="square">${i}<div>`;
}

// 3.aggiungo evento click per cambiare il colore al click sul quadrato
document.getElementById("camp").addEventListener("click",
    function(chosen){
        chosen.target.classList.toggle("clicked");
    }
)