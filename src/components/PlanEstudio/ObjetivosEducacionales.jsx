import React from 'react'

export const ObjetivosEducacionales = ( { objetivosEducacionales }) => {
    return (
        objetivosEducacionales.map((item, idx) => {
            return (
                <p key={idx} className='item-plan'>{item}</p>
            )
        })
    )
}
