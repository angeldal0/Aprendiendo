//

var form = document.getElementById("formAgregar");
var lista = document.getElementById("items");

//evento agregar item

form.addEventListener("submit", agregarItem);

//evento eliminar item

lista.addEventListener("click", eliminarItem);

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
