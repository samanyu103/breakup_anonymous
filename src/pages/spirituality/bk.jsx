import React from 'react';
import './bk.css';

const Bk = () => {
  return (
    <div className='big'>
        <div className="key_people">
            <h2>Key People</h2>
            <div className="people_photos">
                <div className="personcard">
                    <img src="/images/sister_shivani.webp" alt="community" className='img' />
                    <p>Sister Shivani</p>
                </div>
                <div className="personcard">
                    <img src="/images/dada_lekhraj.jpeg" alt="community" className='img' />
                    <p>Dada Lekhraj</p>
                </div>

            </div>
            <p >Sister Shivani is a key spokesperson whereas Dada Lekhraj is the founder of Brahma Kumaris</p>
        </div>

    <div className="about">
        <h2>About</h2>
        <p>They teach us how to accept people and situations as they are.  Everyone is a soul and our original abode is paramdhama where our father the supreme soul (Shiv Baba) lives. </p>

    </div>
    <div className="personal_experience">
        <h2>Personal Experience</h2>
        <p> I have personally followed sister Shivani since the age of 12 and found her videos really helpful. In fact I used to send them to other friends and family (not recommended. What if they aren’t really into it?)</p>
    </div>
    <div className="video">
        <h2>Video</h2>
        <a href= "https://youtu.be/v7MUA0N00mM?si=fKZkgAC-fYbE2HN"> what makes or breaks relationships </a>
    </div>
    <div className="technique">
        <h2>Meditation Technique</h2>
        <a href= "https://www.youtube.com/watch?v=fgChzlOt3XI"> Guided meditation by BK Shivani </a>

    </div>

    </div>


  )
}

export default Bk
