import '/src/css/Contact.css';
import GridItem from './GridItem';


function Contact() {
    return(
        <>
            <section className='contact'>
                <p>Get in Touch</p>
                <h1 className="section-second-line">Contact Me</h1>
                <div className='contact-box'>
                    <GridItem logoSrc="/src/assets/mail.png" alt="email logo" name="gavingoh13@gmail.com"/>
                    {/* Cannot use a griditem for the linkedin field because griditem is not clickable */}
                    <div className='grid-item'>
                        <img className="grid-item-logo" src="/src/assets/linkedin.png" alt="linkedin logo"></img>
                        <a href="https://www.linkedin.com/in/gavin-goh-85a51a22a/" target="_blank" style={{ textDecoration: 'none' }}>
                            <h3>LinkedIn</h3>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact