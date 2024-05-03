import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';
import SchoolIcon from '@mui/icons-material/School';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '/src/css/IntroContent.css';

function IntroContent() {    
	return(
        <>
            <section className="intro-content">
                <div className='profile-pic-container'>
                    <img className="profile-pic" src="/src/assets/luffy.jpeg" alt="Profile Picture"></img>
                </div>
                <div className='section-text'>
                    <p className="greeting">Hello! I'm</p>
                    <h1 className='name'>Gavin Goh</h1>
                    <p className="intro"> Year 3 CS student</p>
                    <hr className="separator" />
                    <div className="button-container">
                        <Button variant="contained" sx={{mr: 2}} startIcon={<SchoolIcon />}>COURSES</Button>
                        <Button variant="contained" href="https://github.com/gavin331" sx={{mr: 2}} startIcon={<GitHubIcon />}>GITHUB</Button>
                        <Button variant="contained" href="https://www.linkedin.com/in/gavin-goh-85a51a22a/" sx={{mr: 2}} startIcon={<LinkedInIcon />}>LINKEDIN</Button>
                    </div>
                </div>
            </section>
        </>
    )
}
export default IntroContent