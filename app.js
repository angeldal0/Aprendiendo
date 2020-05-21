var form = document.getElementById("formAgregar");
var lista = document.getElementById("items");

form.addEventListener("submit", agregarItem);

function agregarItem(item){
    item.preventDefault();

    var newItem = document.getElementById("item").value;
    
    var li = document.createElement("li");
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(newItem));

    var botonDel = document.createElement("button");
    botonDel.className = "btn-danger btn btn-sm float-right";
    botonDel.innerText = "X";

    li.appendChild(botonDel);

    lista.appendChild(li);

    console.log(botonDel);
    console.log(li);
    console.log(newItem);

}