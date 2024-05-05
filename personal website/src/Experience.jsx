import '/src/css/Experience.css';


function Experience() {
    return(
        <>
            <section className="experience">
                <p>Explore my</p>
                <h1 className='experience-text'>Experience</h1>
                <div className='about-me-content'>
                    <div>
                        <div className='boxes'>
                            <div className="box">
                                <p className='box-title'>Frontend Dev</p>
                                <div className='grid-container'>
                                    <div className='grid-item'>
                                        <img className="grid-item-logo" src="/src/assets/java.png" alt="java logo"></img>
                                        <p>React</p>
                                    </div>
                                    <div className='grid-item'>HTML</div>
                                    <div className='grid-item'>CSS</div>
                                    <div className='grid-item'>Javascript</div>
                                    <div className='grid-item'>Flutter</div>
                                    <div className='grid-item'>Dart</div>
                                    <div className='grid-item'>JavaFX</div>
                                </div>
                                
                            </div>

                            <div className="box">
                                <p className='box-title'>Backend Dev</p>
                                <div className='grid-container'>
                                    <div className='grid-item'>Firestore</div>
                                    <div className='grid-item'>Git</div>
                                </div>
                            </div>

                            <div className="box">
                                <p className='box-title'>Other Languages</p>
                                <div className='grid-container'>
                                    <div className='grid-item'>Python</div>
                                    <div className='grid-item'>Java</div>
                                    <div className='grid-item'>C</div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Experience