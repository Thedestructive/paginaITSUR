import React from 'react'

export const PerfilEgreso = ({ perfilEgreso }) => {
    return (
        perfilEgreso.map((item, idx) => {
            return (
                <p key={idx} className='item-plan'>{item}</p>
            )
        })
    )
}
