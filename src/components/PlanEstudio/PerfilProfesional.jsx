import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
export const PerfilProfesional = ( { perfilProfesional }) => {
    return (
        perfilProfesional.map((item, idx) => {
            return (
                <p key={idx} className='item-plan'><FaArrowRight className='flecha-plan-estudio'/> {item}</p>
            )
        })
    )
}
