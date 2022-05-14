// JavaScript Document
var elObjeto=new Object();
elObjeto.id="10";
elObjeto.nombre="Objeto de prueba";
elObjeto.muestraId=function(){
	alert("El id del objeto es: "+this.id);
}
elObjeto.muestraNombre=function(){
	alert(this.nombre);
}
