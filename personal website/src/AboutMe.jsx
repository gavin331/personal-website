import '/src/css/AboutMe.css';


function AboutMe() {
    return(
        <>
            <section id="about-me" className="about-me">
                <p>Get to know more</p>
                <h1 className='section-second-line'>About me</h1>
                <div className='about-me-content'>
                    <img className="profile-pic" src="/src/assets/luffy.jpeg" alt="Profile Picture"></img>
                    <div className="right-half-content">
                        <div className='boxes'>
                            <div className="box">
                                <p className='box-title'>Experience</p>
                                <p>2 years</p>
                                <p>Full stack development</p>
                            </div>

                            <div className="box">
                                <p className='box-title'>Education</p>
                                <p>Bachelor in Computer Science</p>
                                <p>Software Engin and Cyber</p>
                            </div>
                        </div>
                        
                        <div className='text-box'>
                            <p >
                                Throughout my CS degree, I have acquired a broad knowledge about many concepts!  <br/>
                                I am passionate about both software engineering and cyber security, and have embarked <br/>
                                on multiple meaningful projects and hackathons. <br/>
                                In the future, I hope to further expand my skillset in both of these areas and create <br/>
                                many more exciting and rewarding projects!
                            </p>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutMe