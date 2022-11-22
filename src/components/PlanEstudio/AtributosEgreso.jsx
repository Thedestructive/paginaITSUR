import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
export const AtributosEgreso = ({ atributosEgreso }) => {
    return (
        atributosEgreso.map((item, idx) => {
            return (
                <p key={idx} className='item-plan'><FaArrowRight className='flecha-plan-estudio'/>{item}</p>
            )
        })
    )
}
