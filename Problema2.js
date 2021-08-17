//PARTE 1
/*num1=prompt("Ingresar el primero numero");
num2=prompt("Ingresar el segundo numero");
num1=parseInt(num1);
num2=parseInt(num2);
if(num1>num2){
    alert(`El numero ${num1} es mayor que ${num2}`);
}else if(num1<num2){
    alert(`El numero ${num2} es mayor que ${num1}`);
}else{
    alert("Son iguales");
}*/

//PARTE 2
/*num1=prompt("Ingrese el primer numero");
num1=parseInt(num1);
while(num1<=0||isNaN(num1)){
    num1=prompt("Ingrese el primer numero");
    num1=parseInt(num1);
}
num2=prompt("Ingrese el segundo numero");
num2=parseInt(num2);
while(num2<=0||isNaN(num2)){
    num2=prompt("Ingrese el segundo numero");
    num2=parseInt(num2);
}*/

//PARTE 3
/*num=prompt("Ingrese un numero");
num=parseInt(num);
c=1;
suma=num;
while(num>=0){
    num=prompt("Ingrese un numero");
    num=parseInt(num);
    if(num<0){
        break;
    }
    suma=suma+num;
    c++;
}
promedio=suma/c;
alert(`La suma es ${suma} y el promedio es ${promedio}`);
*/
num1=prompt("Cuantas medias desea insertar");
num2=prompt("Cuantas medias desea insertar");
num3=prompt("Cuantas medias desea insertar");
array=[num1,num2,num3];
//let x=medias.push("");
array.forEach(element =>  {
    document.write(element+"<br>");
});



document.write("AQUI ESTOY ! soy christianaaaaaaa");
alert("AQUI ESTOY! shshshshshshshsss");