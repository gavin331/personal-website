import '/src/css/Header.css'; 

function Header() {
	return(
        <>
            <nav>
                <h1 className="nav-name">Gavin Goh J. W.</h1>
                <ul>
                    <li><a href="#about-me">About</a></li>
                    <li><a href="#experience">Experiences</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </>
    )
}
export default Header
