import React, { createRef } from 'react'
import imgLogo from './header_logo_letras.jpg'
import imgFooter from './footer.png'
import calendario from './Calendario.svg'
import bolsa from './BolsaTrabajo.svg'
import './Inicio.css'

export const Inicio = () => {
    const plataformas = [
        {
            img: calendario,
            link: '',
            texto: 'Calendario' 
        },
        {
            img: bolsa,
            link: '',
            texto: 'Bolsa de trabajo' 
        }
    ]
    return (
        <div className='inicio'>
            <div className='imgLogoDiv'>
                <img className="imgLogo"/>
                <h1 className='tituloInicio'> BIENVENIDO A LA PAGINA DEL ITSUR </h1>
            </div>
            <ul className='contenedor-plataformas'>
                <p>ENCUENTRA LA PLATAFORMA QUE BUSCAS <strong>NO ESTA LA VISTA DE PC SOLO MOVIL</strong></p>
                {
                    plataformas.map((item, idx) => {return (
                        <li key={idx}>
                            <img src={item.img} className="icono-plataforma"/>
                            <p>{item.texto}</p>
                            <div className='flecha'></div>
                        </li>
                    )})
                }
            </ul>

            <footer>
                <img className="imgFooter"/>
            </footer>
        </div>
    )
}
