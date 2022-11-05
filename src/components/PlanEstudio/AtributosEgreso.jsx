import React from 'react'

export const AtributosEgreso = ({ atributosEgreso }) => {
    return (
        atributosEgreso.map((item, idx) => {
            return (
                <p key={idx} className='item-plan'>{item}</p>
            )
        })
    )
}
