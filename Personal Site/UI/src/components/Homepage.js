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
                    {/* maybe add emojis*/}
                </nav>
            </header>
            <main>
                <section ref={aboutRef} className="about-section">
                    <h2 className="about-title">About Me</h2>
                    <div className="about-content">
                        <div className="about-text">
                            <h3>Hi, I'm Rob &#128075;</h3>
                            <p>Text about me is comming here soon! This is dummy text, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                            Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Pellentesque vitae eros at libero efficitur bibendum.
                            </p>
                        </div>
                        <div className="about-image">
                            <img src="/me.png" alt="Picture of me" />
                            <div className="social-buttons-container">
                                <a href="https://www.linkedin.com/in/rhand7/" target="_blank" rel="noopener noreferrer">
                                    <div className="social-button linkedin">
                                        <img src="/linkedinlogo.png" alt="LinkedIn" />
                                        <span>Robert Hand</span>
                                    </div>
                                </a>
                                <a href="https://github.com/RobHand27" target="_blank" rel="noopener noreferrer">
                                    <div className="social-button github">
                                        <img src="/githublogo.png" alt="GitHub" />
                                        <span>RobHand27</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section ref={projectsRef} className="projects-section">
                    <h2 className="projects-title">Projects</h2>
                    <div className="projects-grid">
                        <div className="project-card">
                            <div className="project-content">
                                <h3>Project Title 1</h3>
                                <img src="/githublogo.png" alt="Project 1" />
                                <div className="project-hover">
                                    <p>Brief description of project 1 that appears on hover</p>
                                </div>
                            </div>
                        </div>
                        <div className="project-card">
                            <div className="project-content">
                                <h3>Project Title 2</h3>
                                <img src="/linkedinlogo.png" alt="Project 2" />
                                <div className="project-hover">
                                    <p>Brief description of project 2 that appears on hover</p>
                                </div>
                            </div>
                        </div>
                        <div className="project-card">
                            <div className="project-content">
                                <h3>Project Title 3</h3>
                                <img src="/me.png" alt="Project 3" />
                                <div className="project-hover">
                                    <p>Brief description of project 3 that appears on hover</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section ref={cvRef} className="cv-section">
                    <h2>CV</h2>
                    <div className="cv-content">
                        <a href="/resume.pdf" download>
                            <div className="social-button cv-button">
                                <img src="/download-icon.png" alt="Download" /> {/* add download icon later */}
                                <span>Download Resume</span>
                            </div>
                        </a>
                    </div>
                </section>
                <section ref={contactRef} className="contact-section">
                    <h2 className="contact-title">Contact</h2>
                    <div className="contact-content">
                        <h2>Get in Touch</h2>
                        <p>We'd love to hear from you! Please fill out the form below and we'll get back to you as soon as possible.</p>
                            <div className="contact-info">
                                <h3>Other Ways to Reach Us</h3>
                                <p>Email: contact@example.com</p>
                                <p>Phone: (123) 456-7890</p>
                                <p>Address: 123 Main St, Anytown, USA 12345</p>
                            </div>
                    </div>
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