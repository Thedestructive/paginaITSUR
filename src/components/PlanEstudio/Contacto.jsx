import React from 'react'

export const Contacto = ({ contacto }) => {
    return (
        contacto.map((item, idx) => {
            return (
                <p key={idx} className='item-plan'>{item}</p>
            )
        })
    )
}
