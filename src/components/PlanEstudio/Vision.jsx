import React from 'react'

export const Vision = ({ vision }) => {
    return (
        vision.map((item, idx) => {
            return (
                <p key={idx} className='item-plan'>{item}</p>
            )
        })
    )
}
