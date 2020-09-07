import React, {useState} from 'react'
import Error from './Error'

const Formulario = ({guardarBusqueda}) => {

    //State de la busqueda
    const [termino,guardarTermino] = useState('');    
    const [error, guardarError] = useState(false);

    const buscarImagenes = e =>{
        e.preventDefault();

        //validar 
        if(termino.trim() === ''){
            guardarError(true);
            return;
        }
        guardarError(false);

        //enviar el temino de busqueda hacia el componente principal
        guardarBusqueda(termino);
    }

    return (
        <form
            onSubmit = {buscarImagenes}
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Busca una imagen, ejemplo: futbol o café"
                        onChange={e => guardarTermino(e.target.value)}
                   ></input>
                </div>
                <div className="form-group col-md-8">
                   <button 
                        className="btn btn-lg btn-danger btn-block"
                        type="submit"
                   >
                    Buscar
                   </button>
                </div>
            </div>
            { error ? <Error mensaje= "Agrega un término de búsqueda"/> : null}
        </form>
    )
}

export default Formulario
