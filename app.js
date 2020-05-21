//

var form = document.getElementById("formAgregar");
var lista = document.getElementById("items");
var filtro = document.getElementById("filtro")

//evento agregar item

form.addEventListener("submit", agregarItem);

//evento eliminar item

lista.addEventListener("click", eliminarItem);

//evento para filrar items
filtro.addEventListener("keyup", filtrarItems);

//función agregar item

function agregarItem(item){
    item.preventDefault();

    var newItem = document.getElementById("item").value;
    
    var li = document.createElement("li");
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(newItem));

    var botonDel = document.createElement("button");
    botonDel.className = "btn-danger btn btn-sm float-right eliminar";
    botonDel.innerText = "X";

    li.appendChild(botonDel);

    lista.appendChild(li);
}

//funcion eliminar item

function eliminarItem(item){
    if(item.target.classList.contains("eliminar")){
        if(confirm("¿Seguro que quieres eliminar el elemento?")){
            var li = item.target.parentElement;
            lista.removeChild(li);
        }
    }
}

//funcion para filtrar un item

function filtrarItems(palabra){
    var texto = palabra.target.value.toLowerCase();
    var items = lista.getElementsByTagName("li");
    Array.from(items).forEach(function(item){
        var itemNombre = item.firstChild.textContent;
        if(itemNombre.toLowerCase().indexOf(texto) != -1){
            item.style.display = "block";
        }else{
            item.style.display = "none";
        }
    });
}

