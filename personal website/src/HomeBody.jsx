import GitHubIcon from '@mui/icons-material/GitHub';

function HomeBody() {    
	return(
        <>
            <div className="home-content">
                <p className="name">Gavin Goh Jie Wei</p>
                <p className="intro"> Year 3 Computer Science student <br/> who is passionate for learning!</p>
                <hr className="separator" />
                <div className="button-container">
                <Button variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
                    <button className="button">EMAIL</button>
                    <button className="button">COURSES</button>
                    <button className="button">GITHUB</button>
                    <button className="button">LINKEDIN</button>
                </div>
            </div>
        </>
    )
}
export default HomeBody
