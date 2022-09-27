import React, { createRef } from 'react'
import img from '../../isc.jpg'
import './News.css'
export const News = () => {
    const refNew = createRef();
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
    const WatchNew = async(index) => {
        refNew.current.style.visibility = 'visible';
    } 
    const HiddenPopUp = async() => {
        refNew.current.style.visibility = 'hidden';
    }
    return (
        <section className='noticias'>
            <h1 className='titulo'>Noticias</h1>
            <div className='popUpNews' ref={refNew}>
                <div onClick={()=>{HiddenPopUp()}} className='close-popup'><p>X</p></div>
            </div>
            {
                contenent_news.map((new_item, idx) => { return (
                    <article className='articulo' key={idx}>
                        <img src={new_item.image}/>
                        <button className='btn-noticias' onClick={()=>{WatchNew(idx)}}>Ver mas...</button>
                    </article>
                )})
            }
        </section>
    )
}
