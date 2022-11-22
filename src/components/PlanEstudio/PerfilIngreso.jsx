import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
export const PerfilIngreso = ({perfilIngreso}) => {
    return (
        perfilIngreso[0].lista.map((item, idx) => {
            return (
                <p key={idx} className='item-plan'><FaArrowRight className='flecha-plan-estudio'/> {item}</p>
            )
        })
    )
}
