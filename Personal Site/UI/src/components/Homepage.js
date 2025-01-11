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
                                        <i class="devicon-linkedin-plain"></i>
                                        <span>Robert Hand</span>
                                    </div>
                                </a>
                                <a href="https://github.com/RobHand27" target="_blank" rel="noopener noreferrer">
                                    <div className="social-button github">
                                        <i class="devicon-github-original"></i>
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
                                <h3>QuickThoughts</h3>
                                <img src="/QuickThoughts.png" alt="QuickThoughts" />
                                <div className="project-hover">
                                    <p>QuickThoughts is a social site where users can add friends, send messages, and make a short post once a day. I worked on the API, which is built with Node.js and Express.js, with MongoDb for the database.</p>
                                    <div className="project-icons">
                                        <i class="devicon-mongodb-plain-wordmark"></i>
                                        <i class="devicon-mongoose-original-wordmark"></i>
                                        <i class="devicon-express-original"></i>
                                        <i class="devicon-nodejs-plain-wordmark"></i>
                                        <i class="devicon-react-original-wordmark"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="project-card">
                            <div className="project-content">
                                <h3>Voltage Meter Machine Learning Model</h3>
                                <img src="/Powerbox.png" alt="Project 2" />
                                <div className="project-hover">
                                    <p>This repo contains a machine learning model I built using Meta's Prophet. It is a MVP for a startup that tracks power usage in Latin America. It stores and buckets data in Google Cloud Platform and generates models using various graphing libraries.</p>
                                    <div className='project-icons'>
                                        <i class="devicon-googlecloud-plain-wordmark"></i>
                                        <i class="devicon-python-plain"></i>
                                        <i class="devicon-scikitlearn-plain"></i>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="project-card">
                            <div className="project-content">
                                <h3>Chess Rating Predictions</h3>
                                <img src="/Chess.png" alt="Chess ML Project" />
                                <div className="project-hover">
                                    <p>A data science and machine learning project involving the top 200 rated chess players database. Uses Pandas and Numpy for data analysis, Sklearn for predictions, and MatPlotLib for visualizations.</p>
                                    <div className='project-icons'>
                                        <i class="devicon-scikitlearn-plain"></i>
                                        <i class="devicon-pandas-plain"></i>
                                        <i class="devicon-numpy-plain"></i>
                                        <i class="devicon-matplotlib-plain-wordmark"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="project-card">
                            <div className="project-content">
                                <h3>Trendify Stocks</h3>
                                <img src="/TrendifyProject.png" alt="TrendifyProject" />
                                <div className="project-hover">
                                    <p>A full stack, finance education app with interactive lessons and quizes. Built in Flask with Javascript functionalities.</p>
                                    <div className="project-icons"> 
                                        <i class="devicon-html5-plain"></i>
                                        <i class="devicon-css3-plain"></i>
                                        <i class="devicon-flask-original"></i>
                                        <i class="devicon-javascript-plain"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section ref={cvRef} className="cv-section">
                    <h2 className="cv-title">CV</h2>
                    <div className="cv-content">
                        <a href="/resume.pdf" download>
                            <div className="social-button cv-button">
                                <span className="download-emoji">&#128229;</span>
                                <span>Download Resume</span>
                            </div>
                        </a>
                    </div>
                </section>
                <section ref={contactRef} className="contact-section">
                    <h2 className="contact-title">Contact</h2>
                    <div className="contact-content">
                        <a href="mailto:RobertTHand7@gmail.com">
                            <div className="social-button contact-button">
                                <span className="mail-emoji">&#128233;</span>
                                <span>RobertTHand7@gmail.com</span>
                            </div>
                        </a>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Homepage;

//  WiP dummy code for submission form instead of email
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