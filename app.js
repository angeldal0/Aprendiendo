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
            document.getElementById("listaBebidas").style.display = "block";
            ultimaLista = "listaBebidas";
            break;
        case "Entrantes":
            ocultarAnterior(ultimaLista);
            document.getElementById("listaEntrantes").style.display = "block";
            ultimaLista = "listaEntrantes";
            break;
        case "Hamburguesas":
            ocultarAnterior(ultimaLista);
            document.getElementById("listaHamburguesas").style.display = "block";
            ultimaLista = "listaHamburguesas";
            break;
        case "EditorHamburguesas":
            ocultarAnterior(ultimaLista);
            document.getElementById("editorHamburguesas").style.display = "block";
            ultimaLista = "editorHamburguesas";
            break;
        case "Cafe":
            ocultarAnterior(ultimaLista);
            document.getElementById("listaCafe").style.display = "block";
            ultimaLista = "listaCafe";
            break;
        case "Postres":
            ocultarAnterior(ultimaLista);
            document.getElementById("listaPostres").style.display = "block";
            ultimaLista = "listaPostres";
            break;
        case "Licores":
            ocultarAnterior(ultimaLista);
            document.getElementById("listaLicores").style.display = "block";
            ultimaLista = "listaLicores";
            break;
        case "Vinos":
            ocultarAnterior(ultimaLista);
            document.getElementById("listaVinos").style.display = "block";
            ultimaLista = "listaVinos";
            break;
    }
}

function mostrarListaV2() {
    ocultarComanda();
    ocultarBarraModificador();
    ocultarAnterior(ultimaLista);
    document.getElementById("editorHamburguesas").style.display = "block";
    ultimaLista = "editorHamburguesas"
}

function mostrarListaV3() {
    ocultarComanda();
    ocultarBarraModificador();
    ocultarAnterior(ultimaLista);
    document.getElementById("editorHamburguesasV2").style.display = "block";
    ultimaLista = "editorHamburguesasV2"
}

function mostrarListaV4(){
    ocultarComanda();
    ocultarBarraModificador();
    ocultarAnterior(ultimaLista);
    document.getElementById("editorLicores").style.display = "block";
    ultimaLista = "editorLicores"
}

function mostrarListaV5(){
    ocultarComanda();
    ocultarBarraModificador();
    ocultarAnterior(ultimaLista);
    document.getElementById("editorVinos").style.display = "block";
    ultimaLista = "editorVinos"
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
}

function modificar(comentario){
    var edit = document.createElement("p");
    edit.innerHTML = ultimaComanda.innerHTML + '\n - ' + comentario.value;
    renovarComanda(edit);
}

function modificarHamburguesa(opcion){
    var edit = document.createElement("p");
    edit.innerHTML = ultimaComanda.innerHTML + '\n - ' + opcion.innerHTML;
    renovarComanda(edit);
}
