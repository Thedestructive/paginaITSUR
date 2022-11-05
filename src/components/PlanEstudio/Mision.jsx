import React from 'react'

export const Mision = ({ mision }) => {
    return (
        mision.map((item, idx) => {
            return (
                <p key={idx} className='item-plan'>{item}</p>
            )
        })
    )
}
