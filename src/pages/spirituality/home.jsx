import React from 'react'
import './home.css'
const home = () => {
  return (
    <div className='s-list'>
        <div className="list-cc">
            <div className='list-card'>
                <img src="/images/bk_logo.png" alt="community" className='img' />
                <p className="title">Brahma Kumaris </p>
            </div>
        </div>

        <div className="list-cc">

            <div className='list-card'>
                <img src="/images/vipassna_logo.webp" alt="community" className='img' />
                <p className="title">Vipassna </p>
            </div>
        </div>
        
        <div className="list-cc">

            <div className='list-card'>
                <img src="/images/aol_logo.avif" alt="community" className='img' />
                <p className="title">Art Of Living </p>
            </div>  
        </div>

        <div className="list-cc">
  
            <div className='list-card'>
                <img src="/images/om_swami.jpeg" alt="community" className='img' />
                <p className="title">Om Swami </p>
            </div>
        </div>

        <div className="list-cc">
            <div className='list-card'>
                <img src="/images/iskcon_logo.jpg" alt="community" className='img' />
                <p className="title">ISKCON </p>
            </div>
        </div>

        <div className="list-cc">
            <div className='list-card'>
                <img src="/images/others.png" alt="community" className='img' />
                <p className="title">Others </p>
            </div>
        </div>






    </div>
  )
}

export default home
