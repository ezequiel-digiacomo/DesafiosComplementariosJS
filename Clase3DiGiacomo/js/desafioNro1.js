let respuesta, entrada = true;

while(entrada != false){

    do{
        
        respuesta = parseInt(prompt("Que desea hacer? \n1. Sacar porcentaje de un numero  \n2. Sacar raiz cuadrada\n3. Salir"));
    
    }while((respuesta <= 0) || (respuesta > 3));

    switch (respuesta) {
        case 1:
            let numero = parseFloat(prompt("Ingrese el numero:"));
            let porcentaje = parseFloat(prompt(`Ingrese el porcentaje que quiere sacar de ${numero}:`));
            alert(`El ${porcentaje}% de ${numero} es de ${(porcentaje/100)*numero}`);
            break;

        case 2:
            let raiz = parseFloat(prompt("Ingrese el numero a sacar su raiz cuadrada"));
            alert(`La raiz cuadrada de ${raiz} es de ${Math.sqrt(raiz)}`)
            break;
    
        case 3:
            entrada = false;
            break;
    }

}



