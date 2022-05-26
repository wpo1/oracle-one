//encriptar texto
var soloa=[];
var soloe=[];
var soloi=[];
var soloo=[];
var solou=[];

var textoNuevo="";
var contador=0;
var textoArreglo=[];

var abc1=/[A-Z]/g;
var textoCambiar={
    a:"ai",
    e:"enter",
    i:"imes",
    o:"ober",
    u:"ufat"
};

var texto1=document.getElementById('texto1');

texto1.addEventListener("keyup",(event)=>{
var nuevaPalabra=event.path[0].value;
var resultado=nuevaPalabra.match(abc1);
if (resultado){
alert("Esta letra no corresponde");
return
}else{
    textoArreglo=Array.from(nuevaPalabra);
}

/*if (nuevaPalabra==([A-Z]) || nuevaPalabra==([0-9])){
   alert("solo letras minusculas");
}else{
    
}*/
//var textoArreglo=Array.from(texto);

})

var botonE=document.getElementById('encrip');
botonE.addEventListener("click",(event)=>{

while (contador<=textoArreglo.length) {
    
/*if (textoArreglo[contador] != " ") {
 soloEspacio.push(contador);
}*/

//function busqueda(i){

    if (textoArreglo[contador]=="a") {
          soloa.push(contador);
      }
    if (textoArreglo[contador]=="e") {
        soloe.push(contador);
    }
    if (textoArreglo[contador]=="i") {
        soloi.push(contador);
    }
    if (textoArreglo[contador]=="o") {
        soloo.push(contador);
    }
    if (textoArreglo[contador]=="u") {
        solou.push(contador);
    }
//}
//busqueda(contador);
contador++;
}
//function encontrar() {
 var letra="";   
 var contador1 = 1;
while (contador1<=5) {

    if (contador1==1) {
       for(let i=0 ; i<=(soloa.length)-1;i++){
       letra="a";
       remplazar(soloa[i],letra);
       } 
    }
    if (contador1==2) {
        for(let i=0 ; i<=(soloe.length)-1;i++){
        letra="e";
        remplazar(soloe[i],letra);
        } 
     }
    if (contador1==3) {
        for(let i=0 ; i<=(soloi.length)-1;i++){
        letra="i";
        remplazar(soloi[i],letra);
        } 
     }
    if (contador1==4) {
        for(let i=0 ; i<=(soloo.length)-1;i++){
        letra="o";
        remplazar(soloo[i],letra);
        } 
     }
    if (contador1==5) {
        for(let i=0 ; i<=(solou.length)-1;i++){
        letra="u";
        remplazar(solou[i],letra);
        } 
     }
     contador1++;
 }
//}

//function ordenar(){
for(let j=0; j<= (textoArreglo.length)-1;j++){
textoNuevo=textoNuevo+textoArreglo[j];
}

//}

//document.querySelector("t").innerHTML=textoNuevo;
document.getElementById('texto2').innerHTML=textoNuevo;

/*var segundos=12500;
setTimeout("redireccionar()",segundos); */
//window.location=nueva;

document.getElementById("imgmuñeco").style.display="none";
document.getElementById("h3").style.display="none";
document.getElementById("p").style.display="none";
document.getElementById("copia").style.display="block";
document.getElementById("p3").style.display="block";
document.getElementById("texto1").value="";

})

//var texto="muestra de texto ingresado"
//var soloEspacio=[];

/*for (const i of texto) {
    textoArreglo.push(i);
 }*/

/*function redireccionar(){
//document.location.href=nueva;
location.href=nueva;

}*/

function remplazar(j,letra){
textoArreglo.splice(j,1,textoCambiar[letra]);
}

/*document.write(texto);
document.write("<br>");
document.write("<br>");
document.write(textoArreglo);
document.write("<br>");
document.write("<br>");
document.write("letra a:"+ soloa);
document.write("<br>");
document.write("<br>");
document.write("letra e:"+ soloe);
document.write("<br>");
document.write("<br>");
document.write("letra i:"+ soloi);
document.write("<br>");
document.write("<br>");
document.write("letra o:"+ soloo);
document.write("<br>");
document.write("<br>");
document.write("letra u:"+ solou);
document.write("<br>");
document.write("<br>");
/*document.write(soloEspacio);
document.write("<br>");
document.write("<br>");
//document.write(textoArreglo[1]);
document.write("<br>");
document.write("<br>");
//document.write(textoArreglo.splice(1,1,textoCambiar["a"]));
document.write("<br>");
document.write("<br>");*/

/*encontrar();
document.write(textoArreglo);
document.write("<br>");
document.write("<br>");

ordenar();
document.write("<br>");
document.write("<br>");
document.write(textoNuevo);*/

//descencriptar texto

var textoRetornar={
ai:"a",
enter:"e",
imes:"i",
ober:"o",
ufat:"u"

};



const btcopia=document.getElementById('copia');

btcopia.addEventListener("click",async Event=>{

var textdes=document.getElementById('texto2').value;
textdes.select;
navigator.clipboard.writeText(textdes);
document.execCommand('copy');
debugger
if (navigator.clipboard){
    alert("tu navegador soporta API")
}
/*try {
navigator.clipboard.writeText(textdes).then(()=>alert("copiado"));
 //alert('copiado al portapapeles') ;
} catch (error) {
    alert("fallo la copia",error);
}*/

})



const boton=document.getElementById('descen');

/*texto.addEventListener("keyup",(event)=>{
})*/
boton.addEventListener("click",(event)=>{
    //document.getElementById("texto1").innerHTML=" ";
    var texto123=document.getElementById('texto1').value;
    
    alert(texto123);

    //console.log(texto);
    //debugger
    var contenido1=texto123.replace(/enter/gi,"e").replace(/ai/gi,"a").replace(/imes/gi,"i").replace(/ober/gi,"o").replace(/ufat/gi,"u");
   alert(contenido1);

    //console.log(contenido1)
    /*nuevotexto= texto.split(' ');
    console.log(nuevotexto);

    //var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    
    while (contador <= nuevotexto.length-1) {
    
     nuevotexto[contador]=nuevotexto[contador].replace("ai",textoRetornar["ai"]);
     nuevotexto[contador]=nuevotexto[contador].replace("enter",textoRetornar["enter"]);
     nuevotexto[contador]=nuevotexto[contador].replace("imes",textoRetornar["imes"]);
     nuevotexto[contador]=nuevotexto[contador].replace("ober",textoRetornar["ober"]);
     nuevotexto[contador]=nuevotexto[contador].replace("ufat",textoRetornar["ufat"]);

     contador++;
 }
 texto1=nuevotexto.join(' ');*/
 //document.getElementById("texto1").innerHTML=contenido1;
 //document.getElementById('texto2').innerHTML=contenido1;
 //document.getElementById('texto2').value="";
 document.getElementById('texto2').innerHTML=contenido1;
 //document.getElementById('respuesta').innerHTML=texto2;

})