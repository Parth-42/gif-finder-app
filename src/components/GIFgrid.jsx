import React from 'react'
import GIF from './GIF'


const GIFgrid = ({ isLoading, items }) => {
    return isLoading ? (<h1>Loading...</h1>) : (
        <section className="cards">
            {items.map(item => (<a target="#" href={item.url}><img key={item.id} src={item.images.fixed_height.url}></img></a>))}
        </section>
    )
}

export default GIFgrid
