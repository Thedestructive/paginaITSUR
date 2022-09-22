import React from 'react'
import img from '../../isc.jpg'
import './News.css'
export const News = () => {
    const contenent_news = [
        {
            image: img,
            new: 0
        },
        {
            image: img,
            new: 1
        },
        {
            image: img,
            new: 2
        }
    ]
    return (
        <section className='noticias'>
            <h1 className='titulo'>Noticias</h1>
            {
                contenent_news.map((new_item, idx) => { return (
                    <article className='articulo'>
                        <img src={new_item.image}/>
                        <button className='btn-noticias'>Ver mas...</button>
                    </article>
                )})
            }
        </section>
    )
}
