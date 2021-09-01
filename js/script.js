// Chiedere all'utente di inserire il numero di celle di cui sarà composto il campo da gioco.
// Tramite una funzione javascript disegnare in pagina la griglia con massimo 10 celle per riga.
// Al click su una cella dovrà essere mostrato con un alert il numero della cella e il suo background diventerà rosso.

// Funzioni

// gridCreator per creare una grilia

function gridCreator(num){
    num = num*num;
    for (var i = 1; i <= num; i++){
        document.getElementById("camp").innerHTML += `<div class="square">${i}<div>`;
        } 
}

//Programma principale
// 1. Chiedo l'utente il numero per calcolo delle cellule
var CellNumberUser = parseInt(prompt("Inserisci da quante celle sarà composto il campo da gioco: da 1 a 10 "));
console.log("l'utente ha scelto", CellNumberUser);

var numberTotalOfCell = gridCreator(CellNumberUser);  

// 3.aggiungo evento click per cambiare il colore al click sul quadrato
document.getElementById("camp").addEventListener("click",
    function(chosen){
        chosen.target.classList.toggle("clicked");
    }
)