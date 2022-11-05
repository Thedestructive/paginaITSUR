import React from 'react'

export const CamposLaborales = ({ camposLaborales }) => {
    return (
        camposLaborales.map((item, idx) => {
            return (
                <p key={idx} className='item-plan'>{item}</p>
            )
        })
    )
}
