import GridItem from './GridItem';
import '/src/css/Experience.css';
import DownwardArrow from './DownwardArrow';

function Experience() {
    return(
        <>
            <section id="experience" className="experience">
                <p>Explore my</p>
                <h1 className='section-second-line'>Experience</h1>
                <div className='about-me-content'>
                    <div>
                        <div className='boxes'>
                            <div className="box">
                                <p className='box-title'>Frontend Dev</p>
                                <div className='grid-container'>
                                    <GridItem logoSrc="/src/assets/react.png" alt="React logo" name="React"/>
                                    <GridItem logoSrc="/src/assets/html.png" alt="html logo" name="HTML"/>
                                    <GridItem logoSrc="/src/assets/css.png" alt="css logo" name="CSS"/>
                                    <GridItem logoSrc="/src/assets/js.png" alt="js logo" name="Javascript"/>
                                    <GridItem logoSrc="/src/assets/flutter.png" alt="flutter logo" name="Flutter"/>
                                    <GridItem logoSrc="/src/assets/javafx.png" alt="javafx logo" name="JavaFx"/>
                                </div>
                                
                            </div>

                            <div className="box">
                                <p className='box-title'>Backend Dev</p>
                                <div className='grid-container'>
                                    <GridItem logoSrc="/src/assets/firestore.png" alt="firestore logo" name="Firestore"/>
                                    <GridItem logoSrc="/src/assets/git.png" alt="git logo" name="Git"/>
                                </div>
                            </div>

                            <div className="box">
                                <p className='box-title'>Other Languages</p>
                                <div className='grid-container'>
                                    <GridItem logoSrc="/src/assets/python.png" alt="python logo" name="Python"/>
                                    <GridItem logoSrc="/src/assets/java.png" alt="java logo" name="Java"/>
                                    <GridItem logoSrc="/src/assets/c.png" alt="c logo" name="C"/>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            {/* <div className="nav-icon">
                <IconButton href="#projects" className="nav-icon" aria-label="downward-arrow" sx={{ height: 'fit-content' }}>
                    <KeyboardDoubleArrowDownIcon sx={{ fontSize: 50 }} />
                </IconButton>
            </div> */}
            <DownwardArrow navTarget="#projects" />
        </>
    )
}

export default Experience