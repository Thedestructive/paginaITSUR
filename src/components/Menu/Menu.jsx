import React, { createRef } from 'react'
import { Link } from 'react-router-dom';
import './Menu.css'
export const Menu = () => {
    let overlay = createRef();
    const itemMenu = [
        {
            title: 'Inicio',
            link: '/',
            index: 0
        },
        {
            title: 'Plan de estudio',
            link: '/ComboEstudios',
            index: 1
        },
        {
            title: 'Noticias',
            link: '/Noticias',
            index: 2
        }
    ]
    const disableScroll = async () => {
        window.onscroll = function () {
            window.scrollTo(0, 0);
        }
    }
    const enableScroll = async () => {
        window.onscroll = null;
    }
    
    const OpenMenu = async () => {
        //le damos el width y lo hacemos visibles
        //para un efecto de derecha a izquierda 
        overlay.current.style.width = "100%";
        overlay.current.style.visibility = "visible";
        overlay.current.style.transition = "all 0.7s";
        //bloquear scroll
        await disableScroll();
    }
    const CloseMenu = async () => {
        //le damos el width y lo hacemos visibles
        //para un efecto de derecha a izquierda 
        overlay.current.style.width = "0%";
        overlay.current.style.visibility = "hidden";
        overlay.current.style.transition = "all 0.3s";

        //HABILITAR SCROLL
        await enableScroll();
    }
    return (
        <nav className='nav-menu'>
            <div id='openMenu' className="menu-icono" onClick={() => { OpenMenu() }}>
                <div className="rayas" id="raya1"></div>
                <div className="rayas" id="raya2"></div>
                <div className="rayas" id="raya3"></div>
            </div>
            <div className='overlay-menu' ref={overlay} onClick={()=>{CloseMenu()}}>
                <p>MENU</p>
                <ul>
                    {
                        itemMenu.map((item, idx) => {
                            return (
                                <li key={idx} className='li-list'>
                                    <Link to={item.link} className='item-link'>{item.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </nav>
    )
}
