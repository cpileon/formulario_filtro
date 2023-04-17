const ListaColaboradores = ({colaboradores, palabraBusqueda}) => {
    let resultadoBusqueda = []
    if(!palabraBusqueda){
        resultadoBusqueda = colaboradores
    } else {
        resultadoBusqueda = colaboradores.filter(
            (usuario) =>
            usuario.nombre.toLowerCase().includes(palabraBusqueda.toLowerCase()) ||
            usuario.correo.toLowerCase().includes(palabraBusqueda.toLowerCase)
        )
    }

    return (
        <div className="p-4">
            <h5>Lista de colaboradores/as</h5>
            <table className="table table-striped shadow">
                <thead className="bg-dark text-white"> 
                    <tr>
                        <th scope='col'>Nombre</th>
                        <th scope='col'>Correo</th>
                    </tr>
                </thead>
                <tbody>
                    {resultadoBusqueda.map (colaborador => (
                        <tr key={colaborador.id}>
                            <td>{colaborador.nombre}</td>
                            <td>{colaborador.correo}</td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListaColaboradores