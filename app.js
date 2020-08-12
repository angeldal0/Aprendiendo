/*******************************************************************/
/*                     script de las listas                        */
/*******************************************************************/

var ultimaLista = "listaEntrantes";

function mostrarLista(lista){
    switch (lista.innerHTML){
        case "Bebidas":
            ocultarAnterior(ultimaLista);
            var listaBebidas = document.getElementById("listaBebidas").style.display = "block";
            ultimaLista = "listaBebidas";
            break;
        case "Entrantes":
            ocultarAnterior(ultimaLista);
            var listaEntrantes = document.getElementById("listaEntrantes").style.display = "block";
            ultimaLista = "listaEntrantes";
            break;
        case "Hamburguesas":
            ocultarAnterior(ultimaLista);
            var listaHamburguesas = document.getElementById("listaHamburguesas").style.display = "block";
            ultimaLista = "listaHamburguesas";
    }
}

function ocultarAnterior(){
    var x = document.getElementById(ultimaLista);
    x.style.display = "none";
}
