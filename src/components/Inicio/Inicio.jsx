import React, { createRef, useEffect, useState } from 'react'
import calendario from './Calendario.svg'
import bolsa from './BolsaTrabajo.svg'
import normaTeca from './Normateca.svg'
import centro from './CentroInfo.svg'
import histoNoti from './HistoNoti.svg'
import buzon from './Queja.svg'
import tarifa from './Tarifas.svg'
import './Inicio.css'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Slider } from './slider/Slider'
import { News } from '../news/News.jsx';
export const Inicio = () => {
    const images = ['./RecursosInicio/AMBIENTAL.jpg', './RecursosInicio/ConsultaPublica.jpg', './RecursosInicio/Director_General.jpg', './RecursosInicio/ELECTRONICA.jpg'];
    let refIcono = createRef();
    
    const [plataformas, setPlataformas] = useState([
        {
            img: calendario,
            link: '',
            texto: 'Calendario',
            indice: 0
        },
        {
            img: bolsa,
            link: '',
            texto: 'Bolsa de trabajo',
            indice: 1
        },
        {
            img: normaTeca,
            link: '',
            texto: 'e-Normateca ITSUR',
            indice: 2
        },
        {
            img: centro,
            link: '',
            texto: 'e-Normateca ITSUR',
            indice: 3
        },
        {
            img: histoNoti,
            link: '',
            texto: 'Historial de noticias',
            indice: 4
        },
        {
            img: buzon,
            link: '',
            texto: 'Buzon de quejas y/o felicitaciones',
            indice: 5
        },
        {
            img: tarifa,
            link: '',
            texto: 'Conceptos y tarifas 2022',
            indice: 6
        }
    ])
    
    
    return (
        <div className='inicio'>
            <div className='imgLogoDiv'>
                <img className="imgLogo" alt='itsur'/>
                <div className='contenedor-redes'>
                    <a href='http://www.fb.com'>
                        <FaFacebook className='icono-redes facebook' />
                    </a>
                    <a href='#'>
                        <FaTwitter className='icono-redes twitter' />
                    </a>
                    <a href='#'>
                        <FaInstagram className='icono-redes instagram' />
                    </a>
                </div>
                <h1 className='tituloInicio'> BIENVENIDO A LA PAGINA DEL ITSUR </h1>
            </div>
            <Slider images={images}/>
            <News/>
            <p className='titulo-plataforma scroll-content fadeRight'>ENCUENTRA LA PLATAFORMA QUE BUSCAS</p>
            <ul className='contenedor-plataformas scroll-content fadeRight'>
                {
                    window.screen.width < 500 ?
                        plataformas.map((item, idx) => {
                            return (
                                <li key={idx}>
                                    <img src={item.img} className="icono-plataforma" alt='img'/>
                                    <p>{item.texto}</p>
                                </li>
                            )
                        })
                        :
                        <div className='contendor-cards-plataformas'>
                                {
                                    plataformas.map((item, idx) => {
                                        return (
                                            <div className='card-plataforma' key={idx} ref={refIcono}>
                                                <img alt='na' src={item.img} />
                                                <a href={item.link}>{item.texto}</a>
                                            </div>
                                        )
                                    })
                                }
                        </div>
                }

            </ul>
            <footer>
                <img className="imgFooter" />
            </footer>
        </div>
    )
}
