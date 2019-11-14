import { extendObservable } from 'mobx';

class Datos {
    constructor(){
        extendObservable(this,
            {tareas: ['aprender React', 'Hacer una aplicacion con react']}
        );
    }
    agregarTarea(tarea){
        // console.log(tarea);
        this.tareas.push(tarea);
    }
} 

var listaDatos = new Datos;
export default listaDatos;
