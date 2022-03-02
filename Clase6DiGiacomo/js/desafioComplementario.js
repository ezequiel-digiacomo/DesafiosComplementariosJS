let arrayAlumnos = [];

let entrada = true;

function listarAlumnos(){
    
    let alumno = null;

    while (entrada) {

      alumno = prompt("Ingresar nombre y apellido del alumno:");

      if (alumno != null) {
        arrayAlumnos.push(alumno);
      }else {
        alert("Error!");
      }

      let seguir = confirm("Desea agregar otro alumno?"); 

      if (!seguir) {
        entrada = false;
        alert("La lista de alumnos es la siguiente:\n- " + arrayAlumnos.join("\n- ")); 
      }
    }     

}

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

while(entrada != false){

    let menu = verificarNumeros(ingresarPregunta("------------Menu------------\n1. Sacar promedio del alumno \n2. Elegir alumno para pasar al frente \n3. Cargar lista de alumnos \n4. Salir"), 0, 4);

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
            listarAlumnos();
            break;

        case 4:
            entrada=false;
            break;

    }

}