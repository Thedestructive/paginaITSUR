import React, { createRef } from 'react'
import imgHalcon from './alcohon.jpg'
import imgLogo from './Logo.png'
import imgFooter from './footer.png'
import './Inicio.css'

export const Inicio = () => {
    
    return (
        <section className = 'inicio'>
            <img className = "imgLogo" src = {imgLogo} />
            <img className = "imgHalcon" src = {imgHalcon}/>
            <h1 className = 'tituloInicio'> BIENVENIDO A LA PAGINA DEL ITSUR </h1>
            <div>
                
            </div>
            <footer>
                <img className = "imgFooter" src = {imgFooter}/>
            </footer>
        </section>
    )
}
