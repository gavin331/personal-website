import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import SchoolIcon from '@mui/icons-material/School';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function HomeBody() {    
	return(
        <>
            <div className="home-content">
                <p className="name">Gavin Goh Jie Wei</p>
                <p className="intro"> Year 3 Computer Science student <br/> who is passionate for learning!</p>
                <hr className="separator" />
                <div className="button-container">
                    <Button variant="contained" sx={{mr: 2}} startIcon={<EmailIcon />}>EMAIL</Button>
                    <Button variant="contained" sx={{mr: 2}} startIcon={<SchoolIcon />}>COURSES</Button>
                    <Button variant="contained" sx={{mr: 2}} startIcon={<GitHubIcon />}>GITHUB</Button>
                    <Button variant="contained" sx={{mr: 2}} startIcon={<LinkedInIcon />}>LINKEDIN</Button>
                </div>
            </div>
        </>
    )
}
export default HomeBody
