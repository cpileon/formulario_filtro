import { useState } from "react"
const Formulario = ({colaboradores, setColaboradores}) => {
    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [error, setError] = useState(false)

    const handleUsers = (e) =>{
        const user = {
            id: colaboradores.length + 1,
            nombre,
            correo
        }
        e.preventDefault()
        console.log(user)
        //Validación 
        if(nombre == '' || correo == ' '){
            setError(true)
        }else{
            setError(false)
            //Agregar el objeto a la base de datos
            setColaboradores([...colaboradores, user])
        }
        setNombre('')
        setCorreo('')
    }

    return(
        <form onSubmit={handleUsers} className="p-4">
            <h5>Agregar colaborador/a</h5>
            <div className="mb-2">
                <label htmlFor="nombre" className="form-label">Nombre:</label>
                <input type="text" id="nombre" className="form-control" value={nombre} onChange={(e)=> setNombre(e.target.value)}/>
            </div>
            <div className="mb-2"> 
                <label htmlFor="email" className="form-label">Correo electrónico: </label>
                <input type="email" id="email" className="form-control" value={correo} onChange={(e)=> setCorreo(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary">Agregar</button>
            {error == true ? (<div className="alert alert-danger mt-3" role="alert">Faltan datos por ingresar. Inténtelo de nuevo.</div>) : null}
        </form>
        
    )
}
export default Formulario