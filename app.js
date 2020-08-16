/*******************************************************************/
/*                     script de las listas                        */
/*******************************************************************/

var ultimaLista = "listaEntrantes";

function mostrarLista(lista){
    ocultarComanda();
    ocultarBarraModificador();
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
            break;
        case "Cafe":
            ocultarAnterior(ultimaLista);
            var listaHamburguesas = document.getElementById("listaCafe").style.display = "block";
            ultimaLista = "listaCafe";
            break;
        case "Postres":
            ocultarAnterior(ultimaLista);
            var listaHamburguesas = document.getElementById("listaPostres").style.display = "block";
            ultimaLista = "listaPostres";
            break;
        case "Licores":
            ocultarAnterior(ultimaLista);
            var listaHamburguesas = document.getElementById("listaLicores").style.display = "block";
            ultimaLista = "listaLicores";
            break;
        case "Vinos":
        ocultarAnterior(ultimaLista);
        var listaHamburguesas = document.getElementById("listaVinos").style.display = "block";
        ultimaLista = "listaVinos";
        break;
    }
}

function ocultarAnterior(){
    var x = document.getElementById(ultimaLista);
    x.style.display = "none";
}

var ultimaComanda = document.getElementById("ultimaComanda");
var comandas = [];
var lista = document.getElementById("comandas");
var listaComandas = document.getElementById("listaComandas");

function mostrarComanda(){
    ocultarAnterior(ultimaLista);
    lista.style.display = "block";
}

function ocultarComanda(){
    lista.style.display = "none";
}

function añadirComanda(cosa){
    comandas.push(cosa.innerHTML);
    var nuevaComanda = document.createElement("li");
    nuevaComanda.id = 'co' + comandas.length;
    ultimaComanda.innerHTML = nuevaComanda.innerHTML = cosa.innerHTML;
    listaComandas.appendChild(nuevaComanda);
    mostrarBarraModificador();
}

function eliminarUltimaComanda(){
    listaComandas.removeChild(document.getElementById('co' + comandas.length));
    comandas.pop();
    if (comandas.length == 0){
        ultimaComanda.innerHTML = "No hay comanda";
        ocultarBarraModificador();
    } else {
        ultimaComanda.innerHTML = comandas[comandas.length - 1];
    }
}

var barraModificador = document.getElementById("modificador");

function ocultarBarraModificador(){
    barraModificador.style.display = "none";
}

function mostrarBarraModificador(){
    barraModificador.style.display = "block";
}

function renovarComanda(nuevaComanda){
    eliminarUltimaComanda();
    añadirComanda(nuevaComanda);
    console.log("w");
}

function modificar(comentario){
    var edit = document.createElement("p");
    edit.innerHTML = ultimaComanda.innerHTML + '\n - ' + comentario.value;
    console.log(edit.innerHTML);
    renovarComanda(edit);
}
