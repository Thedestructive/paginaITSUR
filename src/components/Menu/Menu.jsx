import React, { createRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaArrowAltCircleDown } from 'react-icons/fa';
import './Menu.css'
export const Menu = () => {
    let overlay = createRef();
    let menu = createRef();
    let masContenido = createRef();
    let tablaMasContenido = createRef();
    const itemMenu = [
        {
            title: 'Oferta Educativa',
            link: '/ComboEstudios',
            index: 0,
            subMenu: []
        },
        {
            title: 'Inicio',
            link: '/',
            index: 1,
            subMenu: []
        },
        {
            title: 'Acerca de ITSUR',
            link: '',
            index: 2,
            subMenu: [{
                title: 'Conócenos',
                link: ''
            },
            {
                title: 'Directorio',
                link: ''
            },
            {
                title: 'Contacto',
                link: ''
            }
            ]
        },
        {
            title: 'Admisiones',
            link: '',
            index: 3,
            subMenu: []
        },
        {
            title: 'Estudiantes',
            index: 4,
            link: '',
            subMenu: [
                {
                    title: 'Tutorías',
                    link: '/tutorias'
                },
                {
                    title: 'Titulación',
                    link: '/titulacion'
                },
                {
                    title: 'Biblioteca',
                    link: ''
                },
                {
                    title: 'Centro de Cómputo',
                    link: '/centroComputo'
                },
                {
                    title: 'Seguro Social',
                    link: '/seguroEscolar'
                }
            ]
        },
        {
            title: 'Investigación',
            link: '',
            index: 5,
            subMenu: [
                {
                    title: 'Presentación',
                    link: ''
                }
            ]
        },
        {
            title: 'Información Financiera',
            link: '',
            index: 6,
            subMenu: []
        },
        {
            title: 'Transparencia',
            link: '',
            index: 7,
            subMenu: [
                {
                    title: 'Criterios INAI',
                    link: ''
                }
            ]
        }
    ]
    const [subMenu, setSubMenu] = useState([{
        title: '',
        link: '',
        index: 0,
        subMenu: []
    }]);
    const disableScroll = async () => {
        window.onscroll = function () {
            window.scrollTo(0, 0);
        }
    }
    const enableScroll = async () => {
        window.onscroll = null;
    }

    const OpenMenu = async () => {
        //mostramos el menu
        if (window.screen.width > 500) {
            menu.current.style.width = '20%';
            menu.current.style.visibility = 'visible';
            //mostramos SUBMENU
            tablaMasContenido.current.style.visibility = 'visible';
            masContenido.current.style.transition = 'all 0.2s';
            //le damos el width y lo hacemos visibles
            //para un efecto de derecha a izquierda 
            overlay.current.style.width = "100%";
            overlay.current.style.height = "100vh";
            overlay.current.style.visibility = "visible";
            overlay.current.style.transition = "all 0.7s";
            await disableScroll();
        } else {
            menu.current.style.width = '100%';
            menu.current.style.visibility = 'visible';
            menu.current.style.height = '100%';
            menu.current.style.transition = 'all 0.7s';
            //overlay
            overlay.current.style.width = "100%";
            overlay.current.style.height = "400%";
            overlay.current.style.visibility = "visible";
            overlay.current.style.transition = "all 0.7s";
        }
        //bloquear scroll
        //await disableScroll();
    }
    const CloseMenu = async () => {
        //le damos el width y lo hacemos visibles
        //para un efecto de derecha a izquierda 
        overlay.current.style.width = "0%";
        overlay.current.style.height = "0%";
        overlay.current.style.visibility = "hidden";
        overlay.current.style.transition = "all 0.3s";
        //ocultamos el menu
        menu.current.style.visibility = 'hidden';
        menu.current.style.width = '0%';
        menu.current.style.transition = 'all 0.2s';
        //OCULTAR SUBMENU
        masContenido.current.style.transition = 'all 0s';
        masContenido.current.style.width = '0%';
        masContenido.current.style.visibility = 'hidden';
        tablaMasContenido.current.style.visibility = 'hidden';
        tablaMasContenido.current.style.transition = 'all 0s';
        setSubMenu([]);
        //HABILITAR SCROLL
        await enableScroll();
    }
    const DisplaySubMenu = async (idx) => {
        //mostramos la parte del subMenu alado
        masContenido.current.style.visibility = "visible";
        masContenido.current.style.width = "20%";
        masContenido.current.style.transition = 'all 0.2s';
        let sub = itemMenu.filter(item => item.index == idx);
        setSubMenu(sub);
    }
    const DisplaySubMenuMovil = async (idx) => {
        setTimeout(() => {
            //obtenemos el subMenu que vamos a desplegar
            let status = document.getElementById(`subMenuMovil${idx}`).style.display;
            //dependiendo el status le damos un display
            if (status == '' || status == 'none') {
                document.getElementById(`subMenuMovil${idx}`).style.display = 'block';
                return;
            }
            document.getElementById(`subMenuMovil${idx}`).style.display = 'none';
        }, 100);

    }
    return (
        <nav className='nav-menu'>
            <div id='openMenu' className="contenedor-icono-menu" onClick={() => { OpenMenu() }}>
                <div className='menu-icono'>
                    <div className="rayas" id="raya1"></div>
                    <div className="rayas" id="raya2"></div>
                    <div className="rayas" id="raya3"></div>
                </div>
                <div className='menu-word' onClick={() => { OpenMenu() }}>MENU</div>
            </div>
            <div className='contenedor-menu'>
                <div className='menu' ref={menu} id='menu'>
                    <p>MENU {window.screen.width < 500 && <p className='close-menu-item' onClick={() => { CloseMenu() }}>X</p>}</p>
                    <ul>
                        {
                            window.screen.width > 500 ?
                                itemMenu.map((item, idx) => {
                                    return (
                                        <li key={idx} className='li-list'>
                                            {
                                                (item.subMenu.length > 0) ?
                                                    <p className='item-link' onClick={() => { DisplaySubMenu(idx) }}>{item.title} <FaArrowAltCircleDown className='flecha-subMenu' /></p>
                                                    :
                                                    <Link to={item.link} className='item-link' onClick={() => { CloseMenu() }}>{item.title}</Link>
                                            }

                                        </li>
                                    )
                                })
                                :
                                itemMenu.map((item, idx) => {
                                    return (
                                        <li key={idx} className='li-list'>
                                            {
                                                (item.subMenu.length > 0) ?
                                                    <li className='item-link' onClick={() => { DisplaySubMenuMovil(idx) }}>{item.title} <FaArrowAltCircleDown className='flecha-subMenu' />
                                                        <ul className='subMenu' id={`subMenuMovil${idx}`}>
                                                            {
                                                                item.subMenu.map((sub, index) => {
                                                                    return (
                                                                        <li key={index}>
                                                                            <Link className='item-link-sub' to={sub.link} onClick={() => { CloseMenu() }}>{sub.title}</Link>
                                                                        </li>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    </li>
                                                    :
                                                    <Link to={item.link} className='item-link' onClick={() => { CloseMenu() }}>{item.title}</Link>
                                            }

                                        </li>
                                    )
                                })
                        }
                    </ul>
                </div>
                <div className='mas-contenido' ref={masContenido}>
                    <ul className='subMenu' ref={tablaMasContenido}>
                        {
                            subMenu.length > 0 &&
                            subMenu[0].subMenu.map((item, idx) => {
                                return (
                                    <li key={idx}>
                                        <Link className='item-link' to={item.link} onClick={() => { CloseMenu() }}>{item.title}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='overlay-menu' ref={overlay} onClick={() => { CloseMenu() }}>
                </div>
            </div>

        </nav>
    )
}
