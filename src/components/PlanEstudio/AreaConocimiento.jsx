import React from 'react'

export const AreaConocimiento = ({ areaConocimiento }) => {
    return (
        <div>
            {
                areaConocimiento[0].lista.map((item, idx) => {
                    return (
                        idx === 0
                            ? <ol key={idx} className='area-title'>{areaConocimiento[0].title}</ol>
                            : <ol key={idx} className='area-item'>{item}</ol>
                    )
                })
            }
            {
                areaConocimiento[1].lista.map((item, idx) => {
                    return (
                        idx === 0
                            ? <ol key={idx} className='area-title'>{areaConocimiento[1].title}</ol>
                            : <ol key={idx} className='area-item'>{item}</ol>
                    )
                })
            }
            {
                areaConocimiento[2].lista.map((item, idx) => {
                    return (
                        idx == 0
                            ? <ol key={idx} className='area-title'>{areaConocimiento[2].title}</ol>
                            : <ol key={idx} className='area-item'>{item}</ol>
                    )
                })
            }
        </div>

    )
}
