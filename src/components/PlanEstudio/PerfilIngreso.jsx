import React from 'react'

export const PerfilIngreso = ({perfilIngreso}) => {
    return (
        perfilIngreso[0].lista.map((item, idx) => {
            return (
                <p key={idx} className='item-plan'>{item}</p>
            )
        })
    )
}
