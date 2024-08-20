import React from 'react'
import './home.css'
import { Link } from 'react-router-dom';



const home = () => {
  return (
    <div className='s-list'>
        <Link to = "/spirituality/bk">
        <div className="list-cc">
            <div className='list-card'>
                <img src="/images/bk_logo.png" alt="community" className='img' />
                <p className="title">Brahma Kumaris </p>
            </div>
        </div>
        </Link>

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
                <img src="/images/nick.png" alt="community" className='img' />
                <p className="title">Meditation 101 </p>
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
