import { useState } from "react";

const Buscador = ({palabraBusqueda, setPalabraBusqueda}) => {
    return(
        <nav className="navbar navbar-dark bg-dark p-3 mb-3">
        <a className="navbar-brand">Busqueda de colaboradores/as</a>
        <input className="form-control" type="text"         
         value={palabraBusqueda}
         onChange={(e) => setPalabraBusqueda(e.target.value)}/>
        </nav>
    )
}
export default Buscador