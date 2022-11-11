//Sebastian Garcia 281637 y Alfonso Lopez 293449
window.addEventListener("load",inicio);

var contadorTipo1=0;
var contadorTipo2=0;
var contadorTipo3=0;
var contadorTipo4=0;
var contadorTipo5=0;
var contadorTipo6=0;

let sistema= new Sistema();

function inicio(){
    document.getElementById("BotonAgregar").addEventListener("click",proceso);
    document.getElementById("empresaAltadePresentacion").addEventListener("change",seleccionCombo);
    document.getElementById("BotonAgregar2").addEventListener("click",proceso2);
}
function seleccionCombo(){
    let elegido=document.getElementById("empresaAltadePresentacion").value;
    alert("eligio "+ elegido);
}
function proceso(){
    let formulario= document.getElementById("formularioAltadeEmpresa");
    if(formulario.reportValidity()){
            for (let i=0;i<sistema.listaEmpresa.length;i++){
                if(document.getElementById("nombreAltadeEmpresa").value==sistema.listaEmpresa[i]){
                    alert("Esta empresa ya fue registrada");
                }
                //else{
            }
                    let nombre= document.getElementById("nombreAltadeEmpresa").value;
                    let direccion= document.getElementById("direccionAltadeEmpresa").value;
                    let telefono= document.getElementById("telefonoAltadeEmpresa").value;
                    let origenNacional= document.getElementById("nacionalAltas");
                    let origenExtranjera= document.getElementById("extranjeraAltas");
                    cargarCombo(nombre);
                    formulario.reset();   
                //}
            //}
    }
}
function cargarCombo(texto){
    document.getElementById("empresaAltadePresentacion").innerHTML = "";                                        
    let combo=document.getElementById("empresaAltadePresentacion");
    sistema.listaEmpresa.push(document.getElementById("nombreAltadeEmpresa").value);
    for (let i=0; i<sistema.listaEmpresa.length;i++){
        let nodo=document.createElement("option");                          //creo una nueva option
        let nodoTexto=document.createTextNode(sistema.listaEmpresa[i]);          //creo lo que va a tener escrito la opcion (nodo de texto)
        nodo.appendChild(nodoTexto);                                        //vinculo la nueva opcion al nuevo texto
        combo.appendChild(nodo);                                            //vinculo la nueva opcion ya con su texto correspondiente al select 
    }
}

function proceso2(){
    let formulario=document.getElementById("formularioAltadePresentacion");
    if(formulario.reportValidity()){
        let empresa= document.getElementById("empresaAltadePresentacion").value;
        let titulo= document.getElementById("tituloAltadePresentacion").value;
        let descripcion= document.getElementById("descripcionAltadePresentacion").value;
        let tema= document.getElementById("temaAltadePresentacion");
        let dia= document.getElementById("extranjeraAltas");
        let duracion= document.getElementById("duracionAltadePresentacion");
        agregarElementoEnLista(empresa);
            if (tema.value=="inteligenciaArtificial"){
                contadorTipo1++;
            }     
    }
}
function agregarElementoEnLista(texto){
    // creo un elemento de lista
    let node = document.createElement("LI");
    // creo nodo de texto, dentro lleva el texto que quiero
    let  textnode = document.createTextNode(texto);
    // engancho al nodo de lista el nodo de texto
    node.appendChild(textnode);
    // engancho el nodo a la lista 
    document.getElementById("listaEmpresasRegistradas").appendChild(node);
}
function cargarTabla(){

}


function cargarListaMaxPresentaciones(){
    document.getElementById("listaMaxPresentaciones").innerHTML = "";
    let empresasMax= sistema.empresasMaxPresentacion();
    if(empresasMax>0){
        //for(){

        //}
    }
}

empresasMax=[]