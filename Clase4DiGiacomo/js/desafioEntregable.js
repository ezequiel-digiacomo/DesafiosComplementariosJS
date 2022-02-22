let entrada = true;

function verificarNumeros(respuesta, min, max){
    while((respuesta <= min) || (respuesta > max)){
        respuesta = parseInt(prompt("Error!!!\nPor favor, vuelva a ingresar el valor:"));
    }

    return respuesta;
}

function ingresarPregunta(pregunta){
    return respuesta = parseInt(prompt(pregunta));

}

function sumadorNotas(cantidad) {
    let acumulador = 0;

    for (let i = 0; i < cantidad; i++) {
        respuesta = parseFloat(prompt(`Ingrese la nota numero ${i+1}:`));
        acumulador = acumulador + respuesta;
    }

    return acumulador;
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

while(entrada != false){

    let menu = verificarNumeros(ingresarPregunta("------------Menu------------\n1. Sacar promedio del alumno \n2. Elegir alumno para pasar al frente \n3. Salir"), 0, 3);

    switch (menu) {
        case 1:
            let cantidadNotas = verificarNumeros(ingresarPregunta("Cuantas notas tiene en total el alumno? (Maximo 5 notas)"), 0, 5);
            let totalNotas = sumadorNotas(cantidadNotas);
            alert(`El promedio del alumno es ${totalNotas/cantidadNotas}`);
            break;

        case 2:
            let cantidadAlumnos = ingresarPregunta("Vamos a elegir un alumno al azar para pasar al frente en base al orden de la lista de alumnos. Suerte a todos! \nIngrese la cantidad de alumnos:");
            let randomAlumno = (min, max) => Math.random() * (max - min) + min;
            alert(`Pasa al frente el alumno que se encuentra en la fila numero ${parseInt(randomAlumno(1, cantidadAlumnos))}`);
            break;
    
        case 3:
            entrada=false;
            break;

    }

}


