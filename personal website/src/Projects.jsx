import '/src/css/Projects.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import DownwardArrow from './DownwardArrow';

function Projects() {
    return(
        <>
            <section id="projects" className="projects">
                <p>Browse my recent</p>
                <h1 className="section-second-line">Projects</h1>
                <div className='project-content'>
                    <div className="project-row">
                        <div className='boxes'>
                            <div className="box project-box-layout">
                                <p className='box-title'>Project 1</p>
                                <img className="project-image" src="/src/assets/luffy.jpeg" alt="Profile Picture"></img>
                                <Button variant="outlined" href="https://github.com/gavin331" sx={{mr: 10, ml: 10}} startIcon={<GitHubIcon />}>GITHUB</Button>
                            </div>
                            <div className="box project-box-layout">
                                <p className='box-title'>Project 2</p>
                                <img className="project-image" src="/src/assets/luffy.jpeg" alt="Profile Picture"></img>
                                <Button variant="outlined" href="https://github.com/gavin331" sx={{mr: 10, ml: 10}} startIcon={<GitHubIcon />}>GITHUB</Button>
                             
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <div className="nav-icon">
                <IconButton href="#contact" className="nav-icon" aria-label="downward-arrow" sx={{ height: 'fit-content' }}>
                    <KeyboardDoubleArrowDownIcon sx={{ fontSize: 50 }} />
                </IconButton>
            </div> */}
            <DownwardArrow navTarget="#contact" />
        </>
    )
}

export default Projects