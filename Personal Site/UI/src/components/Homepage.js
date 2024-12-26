import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';

function Homepage() {
    const navigate = useNavigate(); // for routing, may be deleted later
    
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const cvRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (sectionId) => {
        let ref;
        switch (sectionId) {
        case 'about':
            ref = aboutRef;
            break;
        case 'projects':
            ref = projectsRef;
            break;
        case 'cv':
            ref = cvRef;
            break;
        case 'contact':
            ref = contactRef;
            break;
        default:
            ref = null;
        }
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="Homepage">
            <header>
                <nav>
                    <button onClick={() => scrollToSection('about')}>About</button>
                    <button onClick={() => scrollToSection('projects')}>Projects</button>
                    <button onClick={() => scrollToSection('cv')}>CV</button>
                    <button onClick={() => scrollToSection('contact')}>Contact</button>
                    {/* insert linkedin and github buttons in about */}
                </nav>
            </header>
            <main>
                <section ref={aboutRef} className="about-section">
                    <h2 className="section-title">About Me</h2>
                    <div className="about-content">
                        <div className="about-text">
                            <h3>Hi, I'm Rob &#128075;</h3>
                            <p>Text about me is comming here soon!</p>
                        </div>
                        <div className="about-image">
                            <img src="/me.png" alt="Picture of me" />
                        </div>
                    </div>
                </section>
                <section ref={projectsRef}>
                    <h2>Projects</h2>
                    {/* Projects content */}
                </section>
                <section ref={cvRef}>
                    <h2>CV</h2>
                    {/* CV content */}
                </section>
                <section ref={contactRef}>
                    <h2>Contact</h2>
                    {<div className="contact-content">
                        <h2>Get in Touch</h2>
                        <p>We'd love to hear from you! Please fill out the form below and we'll get back to you as soon as possible.</p>
                            <div className="contact-info">
                                <h3>Other Ways to Reach Us</h3>
                                <p>Email: contact@example.com</p>
                                <p>Phone: (123) 456-7890</p>
                                <p>Address: 123 Main St, Anytown, USA 12345</p>
                            </div>
                        </div>}
                </section>
            </main>
        </div>
    );
}

export default Homepage;

// button code
{/* <a href="https://www.example.com">
  <button>Click me</button>
</a> */}

// dummy code for submission form instead of email
{/* <form onSubmit={handleSubmit}> */
/* <div className="form-group">
<label htmlFor="name">Name:</label>
<input 
    type="text" 
    id="name" 
    name="name" 
    required 
    value={name} 
    onChange={(e) => setName(e.target.value)}
/>
</div>

<div className="form-group">
<label htmlFor="email">Email:</label>
<input 
    type="email" 
    id="email" 
    name="email" 
    required 
    value={email} 
    onChange={(e) => setEmail(e.target.value)}
/>
</div>

<div className="form-group">
<label htmlFor="message">Message:</label>
<textarea 
    id="message" 
    name="message" 
    required 
    value={message} 
    onChange={(e) => setMessage(e.target.value)}
></textarea>
</div>

<button type="submit">Send Message</button>
</form> */}