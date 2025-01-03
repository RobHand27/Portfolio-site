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
                            <p>I'm a second-year computer science student at UIUC interested in full-stack development and machine learning.
                                <br />In my full-stack development roles, most of my work has been with the MERN stack, building UI components in React.js, backend APIs in Node.js and Express.js, and managing databases in MongoDB or PostgreSQL. While most of my recent projects, like the social networking site QuickThoughts, along with this site, are built with these technologies, I also have experience in Python with Flask and a few other HTML frameworks.
                                <br />Much of my experience in machine learning comes from my work at UIUC Disruption Lab and with PowerBox Technologies, a research park startup. In both roles, most of my code contributions were in Python, using libraries such as Numpy, Sklearn, Pandas, and Prophet while utilizing tools like Google Cloud Platform and VertexAI. You can find many of my code samples from these roles on my GitHub profile.
                                <br />I'm an adaptive learner, and picking up new tools quickly is one of my biggest strengths in the industry. Please reach out if you'd like to chat about professional opportunities or anything tech!
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