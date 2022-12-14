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
export const Inicio = () => {
    let refIcono = createRef();
    const [cont, setCont] = useState(0);
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
    const MoveRigthPhotos = async () => {
        for (const element of plataformas) {
            if (element.indice == plataformas.length) {
                element.indice = 0;
            } else {
                element.indice = element.indice + 1;
            }

        }
        await SortPhotos();
    }
    const MoveLeftPhotos = async () => {
        for (const element of plataformas) {
            if (element.indice == 0) {
                element.indice = plataformas.length;
            } else {
                element.indice = element.indice - 1;
            }
        }
        await SortPhotos();
    }
    const SortPhotos = async () => {
        let aux = plataformas.sort((a, b) => { return a.indice - b.indice });
        setPlataformas([]);
        setPlataformas(aux);
        //variable para reenderizar el componente y que avance el carrusel
        setCont(cont + 1);
    }
    useEffect(() => {
        setInterval(() => {
            //return clearInterval();
        }, 500)
    }, [cont])
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
            <Slider/>
            <p className='titulo-plataforma'>ENCUENTRA LA PLATAFORMA QUE BUSCAS</p>
            <ul className='contenedor-plataformas'>
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
