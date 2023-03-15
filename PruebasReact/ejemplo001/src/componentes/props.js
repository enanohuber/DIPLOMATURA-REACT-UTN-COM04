const EjemploProps01 = props => {
    return(
        <h3>hola {props.nombre}</h3>
    )
}


const EjemploProps02 = props => {
    const { elementos } = props;
    return(
        <ul>
            {elementos.map(elemento => <li key={elemento}>{elemento}</li>)}
        </ul>
    )
}

const EjemploProps03 = props => {
    return(
        <>
            <h2>Titulo: { props.titulo }</h2>
            <h3>Aca va el subtitulo: { props.subtitulo }</h3>
            <p>{ props.texto }</p>
        </>
    )
}



export default {EjemploProps01, EjemploProps02, EjemploProps03};