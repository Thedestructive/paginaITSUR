import React, { createRef } from 'react'
import imgLogo from './header_logo_letras.jpg'
import imgFooter from './footer.png'
import './Inicio.css'

export const Inicio = () => {

    return (
        <div className='inicio'>
            <div className='imgLogoDiv'>
                <img className="imgLogo" />
            </div>
            <h1 className='tituloInicio'> BIENVENIDO A LA PAGINA DEL ITSUR </h1>
            <div>
            </div>
            <footer>
                <img className="imgFooter"/>
            </footer>
        </div>
    )
}
