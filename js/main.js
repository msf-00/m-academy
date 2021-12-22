'use strict';

class Curso{
    constructor (nombreCurso, categoria){
        this.nombreCurso = nombreCurso;
        this.categoria = categoria;
    }
}

let listadoCursos = [];

function crearCurso(){

    let categoria = prompt(`Ingrese la categoria del curso en la que desea inscribirse:
    - TIC.
    - BIT.
    - FIN.`);

    if (categoria == "TIC"){
        let nombreCurso = prompt(`Ingrese un curso al que quiera inscribirse:
        ~ IoT.
        ~ Impresion 3D.
        ~ Big Data.
        ~ Deep Learning.`);
        let curso = new Curso(nombreCurso, categoria);
    }else if (categoria == "BIT"){
        let nombreCurso = prompt(`Ingrese un curso al que quiera inscribirse:
        ~ Design Thinking.
        ~ Product Owner.
        ~ Busines Agility.
        ~ Future Thinking.`);
        let curso = new Curso(nombreCurso, categoria);
    }else{
        let nombreCurso = prompt(`Ingrese un curso al que quiera inscribirse:
        ~ Economia Crypto.
        ~ Finanzas para la administracion.
        ~ Fintech.
        ~ Python para entidades financieras.`);
        let curso = new Curso(nombreCurso, categoria);
    }

    listadoCursos.push(curso);
}

function menuInicial(){
    let opcion = parseInt(prompt(`Bienvenid@ a M-Academy!
    Por favor elija la accion que desea realizar:
    1-Incribirse en un curso:
    2-Ver listado de cursos:
    3-Salir`));
    return opcion;
}

function menu(){
    let opcion = parseInt(prompt(`Por favor elija la accion que desea realizar:
    1-Incribirse en un curso:
    2-Ver listado de cursos:
    3-Salir`));
    return opcion;
}

switch (opcion){
    case 1:
        crearCurso();
        menu();
        break;
    case 2:
        alert(listadoCursos());

    case 3:
        break;
}