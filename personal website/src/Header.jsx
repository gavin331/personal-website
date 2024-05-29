import '/src/css/Header.css'; // Import CSS file for styling

function Header() {
    const smoothScroll = (targetId) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <nav>
            <h1 className="nav-name">Gavin Goh J. W.</h1>
            <ul>
                <li><a onClick={() => smoothScroll('about-me')}>About</a></li>
                <li><a onClick={() => smoothScroll('experience')}>Experiences</a></li>
                <li><a onClick={() => smoothScroll('projects')}>Projects</a></li>
                <li><a onClick={() => smoothScroll('contact')}>Contact</a></li>
            </ul>
        </nav>
    );
}

export default Header;
