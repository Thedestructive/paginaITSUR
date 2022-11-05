import React from 'react'

export const PerfilProfesional = ( { perfilProfesional }) => {
    return (
        perfilProfesional.map((item, idx) => {
            return (
                <p key={idx} className='item-plan'>{item}</p>
            )
        })
    )
}
