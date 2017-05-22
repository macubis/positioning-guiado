//trayendo los elementos que utilizaremos
var contenedor = document.getElementsByClassName("contenedor")[0];
var rosa= document.getElementById("rosa");
var azul= document.getElementById("azul");
var verde= document.getElementById("verde");
var amarillo =document.getElementById("amarillo");

//le definiremos propiedades a la caja contenedora desde Js

contenedor.style.position="relative";
contenedor.style.background ="DarkGray";
contenedor.style.width="600px";
contenedor.style.padding="50px";

//damos las propiedades css a la caja azul, que es la que queremos posicionar

azul.style.position="absolute";
azul.style.top="250px";
azul.style.right="0";