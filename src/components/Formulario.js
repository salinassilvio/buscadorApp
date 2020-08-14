import React, {useState} from 'react'

const Formulario = () => {

    //State de la busqueda
    const [termino,guardarTermino] = useState('');    

    return (
        <form>
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
        </form>
    )
}

export default Formulario
