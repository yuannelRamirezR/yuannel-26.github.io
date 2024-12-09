let mostrador = document.getElementById("mostrador");
let seleccion = document.getElementById("seleccion");
let imgSelecionada = document.getElementById("img");
let modeloSelecionado = document.getElementById("modelo");
let descrcionSelecionada = document.getElementById("descricion");
let precioSelecionado = document.getElementById("precio");


/*funcion que carga la info del iten selesionado*/

function cargar(item){
    mostrador.style.width = "60%";
    seleccion.style.width = "40%";
    seleccion.style.opacity = "1";
    item.style.border = "2px solid red";

    imgSelecionada.scr = item.getElementsByTagName("img")[0].src;

    modeloelecionado.innerHTML = item.getElementsByTagName("p")[0].innerHTML;

    descrcionSelecionada.innerHTML = "descricion del modelo";

    precioSelecionado.innerHTML = item.getElementsByTagName("span")[0].innerHTML;
}

function quitarBordes(){
    var items = document.getElementsByClassName("item");
    for(i=0;i < items.length; i++){
        items[i].style.border = "none";
    }
}

function cerrar(){
    mostrador.style.width = "100%";
    seleccion.style.width = "0";
    seleccion.style,opacity = "0";
    quitarBordes();
}