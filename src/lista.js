import React, { Component } from 'react';
import listaDatos from './listaData';
import { observer } from 'mobx-react';

class Lista extends Component {

    //envio el dato del input 
    tomarValor(evento){
        if(evento.which === 13){
            listaDatos.agregarTarea(evento.target.value);
            evento.target.value = "";
        }
        // let texto = document.getElementById('texto').value;
        // listaDatos.agregarTarea(texto);
    }

    render(){
        let listaDiv = [];

        const agregarDiv = listaDatos.tareas.forEach(
            (tarea, index)=>(
                listaDiv.push(<li key={index}>{tarea}</li>)
            )
        )

        
        return(
            <div>
                <h2>Lista</h2>
                <input id="texto" type="text" onKeyPress={this.tomarValor.bind(this)}/>
                <button onClick={this.tomarValor.bind(this)}>agregar</button>
                <div>
                    <div>
                        <ul>
                            {listaDiv}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default observer(Lista);