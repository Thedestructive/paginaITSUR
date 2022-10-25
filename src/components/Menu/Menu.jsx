import React from 'react'
import { Link }  from 'react-router-dom';
import './Menu.css'
export const Menu = () => {
    const itemMenu = [
        {
            title: 'Plan de estudio',
            link: '/ComboEstudios',
            index: 0
        },
        {
            title: 'Noticias',
            link: '/Noticias',
            index: 1
        }
    ]
    return (
        <nav className='nav-menu'>
            <ul>
                {
                    itemMenu.map((item, idx) => {
                        return (
                            <li key={idx} className='li-list'>
                                <Link to={item.link}>{item.title}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}
