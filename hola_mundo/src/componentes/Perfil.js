import React from 'react';
import '../estilos/Perfil.css';


function Perfil(props) {
    return(
        <div className='contenedor-perfil'>
            <img className='imagen-perfil' 
            src={require(`../img/perfil-${props.imagen}.png`)}
            alt='Foto del desarrollador' 
            ></img>
            <div className='contenedor-texto-perfil'>
                <p className='nombre-perfil'> <strong>{props.nombre}</strong> en {props.pais}
                </p>
                <p className='cargo-perfil'>
                {props.cargo} en <strong>{props.empresa}</strong>
                </p>
                <p className='texto-perfil'>"{props.perfil}"</p>
            </div>
            <button onClick={() => window.open(props.linkedin, '_blank')}>
                Seguir en LinkedIn
            </button>
            <button onClick={() => window.open(props.youtube, '_blank')}>
                Seguir en YouTube
            </button>
            <button onClick={() => window.open(props.twitter, '_blank')}>
                Seguir en Twitter
            </button>
        </div>



        
    );
    
}
export default Perfil;