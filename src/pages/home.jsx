import "./home.css";

const Home = () => {
    return (
        <div className="home">
            <div className="box1">
                <p className="content" id= "heading">Breakup-Anonymous</p>
                <p className="content" id = "subheading">So that you don't break after a breakup</p>
            </div>
            <div className="box2">
                <div className="container1">
                        <div className="item">
                            <span className="feature">Community</span>
                            <img src="/images/community.jpeg" alt="community" className="image" />
                        </div>
                        <div className="item">
                            <span className="feature">Resources</span>
                            <img src="/images/resources.png" alt="resources" className="image" />
                        </div>
                        <div className="item">
                            <span className="feature">Therapy</span>
                            <img src="/images/therapy.png" alt="therapy" className="image" />
                        </div>

                        <div className="item">
                            <span className="feature">Activities</span>
                            <img src="/images/gym.jpeg" alt="activities" className="image" />
                        </div>
                        <div className="item">
                            <span className="feature">Journaling</span>
                            <img src="/images/journaling.png" alt="journaling" className="image" />
                        </div>
                        <div className="item">
                            <span className="feature">Meditation</span>
                            <img src="/images/meditation.jpeg" alt="meditation" className="image" />
                        </div>
                </div>
                <div className="container2">
                    <div className="quote-container">
                        <div className="quote">
                            <span>"If you're going through a difficult breakup, don't keep the pain to yourself. <br /> Talk about it with your loved ones and a professional. <br />You are not alone"</span>
                        </div>
                        {/* <div className="quoter">
                            <p>Geogia</p>
                        </div> */}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home