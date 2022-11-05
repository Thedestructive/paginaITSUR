import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
export const SubMenu = (subMenu) => {
    let sub = {subMenu}
    useEffect(() => {
        console.log(sub.subMenu.subMenu.subMenu[0])
    }, [subMenu])
    if (subMenu.length > 0) {
        return (
            <ul className='subMenu'>
                {
                    sub.subMenu.subMenu[0].map((item, idx) => {
                        return (
                            <li key={idx}>
                                <Link className='item-link' to={item.link}>{item.title}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

}
