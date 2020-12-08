import {Component} from 'react';
import './iterativestyle.css';
import Fade from 'react-reveal/Fade';

class Iterative extends Component {
    render () {
        return (
            <div className="iterativediv">
                <Fade>
                <div className="centered"><div className="introdiv">
                    <h1 className="title">Iterative Design</h1>
                    <h3 className="subtitle">a case study on the design process</h3>
                    <div className="whitebox smallshadow">
                        <h6><b>Objective:</b> Work in a small group to design an interface for an emerging startup.
                        Sketch ideas of the interface, create an interactive high-fidelity prototype, and 
                        conduct user testing on this final prototype.</h6>
                        <h6><b>Subject:</b> DRAPR, an online shopping startup</h6>
                        <div className="centered"><hr className="inlinehr"/>
                        <p className="context"><b>UI/UX (CS 1300) - Brown University - Fall 2020 </b></p>
                        <hr className="inlinehr"/></div>
                    </div>
                    </div></div>

                    <br/>
                    <h3 className="subtitle">The Startup</h3>
                    <div className="centered">
                    <div className="draprIntro">
                        <p>
                        <b>DRAPR</b> builds software to help online shoppers see what their clothing looks like. 
                        The company’s online try-on widget helps shoppers get a better idea of how a shirt or 
                        other clothing item fits on a customizable 3D mannequin that users can adjust to fit 
                        their body type, height and weight.
                        </p>
                        <p><b>Type of Interface: </b>Desktop website</p>
                        <p><b>Users: </b>This website is marketing DRAPR to online shopping retailers who want to
                        make it easy for their customers to virtually try on clothes. This could reduce return
                        rate and prevent dissatisfied customers. It will be especially helpful for customers
                        who have unusual body shapes or sizes. More people are buying clothing online due to 
                        the pandemic, and don’t have the option to try on clothes in stores, making DRAPR a 
                        timely alternative.
                        </p>
                    </div>
                    </div>
                    <br/>

                    <h3 className="subtitle">Sketches</h3>
                    <div className="centered"><p className="draprCentered">We made 4 sketches of what the website might look like.</p></div>
                    <div className="centered"><div className="sketchdiv">
                    <div className="sketch whitebox">
                        <p className="sketchdesc"><b>Sketch 1</b></p>
                        <img src="iterativephotos/sketch1.png" alt="1st sketch"/>
                        <ul>
                        <li>No nav bar</li>
                        <li>Combination of scrolling and distinct pages</li>
                        <li>List-style price modeling</li>
                        </ul>
                    </div>
                    <div className="sketch whitebox">
                        <p className="sketchdesc"><b>Sketch 2</b></p>
                        <img src="iterativephotos/sketch3.png" alt="2nd sketch"/>
                        <ul>
                        <li>Infinite scroll</li>
                        <li>Nav bar to scroll to page location</li>
                        <li>Dropdown menu</li>
                        </ul>
                    </div>
                    <div className="sketch whitebox">
                        <p className="sketchdesc"><b>Sketch 3</b></p>
                        <img src="iterativephotos/sketch2.png" alt="3rd sketch" style={{marginBottom: '10px'}}/>
                        <ul>
                        <li>Separate pages</li>
                        <li>Unique price modeling</li>
                        <li>Clothing rack background</li>
                        <li>Company team section</li>
                        </ul>
                    </div>
                    <div className="sketch whitebox">
                        <p className="sketchdesc"><b>Sketch 4</b></p>
                        <img src="iterativephotos/sketch4.png" alt="4th sketch"/>
                        <ul>
                        <li>Assets darken on hover</li>
                        <li>Distinct pages with floating nav bar</li>
                        <li>Contact us section</li>
                        </ul>
                    </div>
                    </div></div>

                    <br/>
                    <br/>
                    <h3 className="subtitle">Wireframe</h3>
                    <div className="centered"><div className="bulletTextDiv centered">
                    <p className='bulletCaption'>We put together the best ideas from all of our sketches to create a wireframe
                    mockup. These are some of the features we knew we wanted to include in the prototype 
                    <i className="fa fa-arrow-right"></i>
                    </p>
                    <ul className="draprList">
                    <li>Contact Us box</li>
                    <li>Founders' pictures</li>
                    <li>Background picture of clothes or models</li>
                    <li>Demo</li>
                    <li>Infinite scroll</li>
                    <li>Menu bar</li>
                    </ul>
                    </div></div>
                    <div className="centered">
                    <div className="whitebox wireFrameDiv">
                        <img src="iterativephotos/wireframe.gif" alt="wireframe of design" style={{width: '100%'}}/>
                    </div>
                    </div>
                    <div className="centered">
                    <a href="https://www.figma.com/proto/1siQUrJyKQrBud3LpLWL3U/Iterative-Wireframe?node-id=1%3A2&scaling=scale-down" target="_blank" rel="noopener noreferrer"><p>Try it out yourself!  <i className="fa fa-external-link"></i></p></a>
                    </div>

                    <br/>
                    <br/>
                    <h3 className="subtitle">First HiFi Mockup</h3>
                    <div className="centered">
                    <p className="designChoices"><b>Design Choices: </b>We chose one font (Merriweather) and kept it consistent through
                    the website. We also kept our button design visually consistent. We chose to make the 
                    website infinite scroll, but include a navbar so that frequent users could reach their
                    destinations more quickly. We also used a background image, and put transluscent blocks 
                    behind the text to make it more readable.</p>
                    </div>
                    <div className="centered">
                    <div className="whitebox wireFrameDiv">
                        <img src="iterativephotos/hifi1.gif" alt="high fidelity prototype of design" style={{width: '100%'}}/>
                    </div>
                    </div>
                    <div className="centered">
                    <a href="https://www.figma.com/proto/F9EVgdYH6YbWmuBKb4y4jh/Iterative-HiFi?node-id=1%3A2&scaling=scale-down" target="_blank" rel="noopener noreferrer"><p>Try it out yourself!  <i className="fa fa-external-link"></i></p></a>
                    </div>

                    <br/>
                    <br/>
                    <h3 className="subtitle">Critical Feedback</h3>
                    <div className="centered"><div className="centered bulletTextDiv">
                    <p className='bulletCaption'>We had a mockup crit, wherein we received feedback on our design from an industry professional and our classmates. These are some of their suggestions, which we implemented below.
                        <i className="fa fa-arrow-right"></i>
                    </p>
                    <ul className="draprList">
                        <li>No back button on checkout page</li>
                        <li>Can't see package prices on main page</li>
                        <li>Split the checkout page into login and payment</li>
                        <li>Hard to find checkout</li>
                        <li>No affordances to indicate that page scrolls</li>
                        <li>Match nav headers to the content headings</li>
                        <li>"Click to Customize" is positioned so it points to nothing</li>
                        <li>Button alignment should be consistent between pages (center all)</li>
                    </ul>
                    </div></div>
                    <br/>
                    <br/>

                    <h3 className="subtitle">Final HiFi Prototype</h3>
                    <div className="centered">
                    <div className="whitebox wireFrameDiv">
                        <img src="iterativephotos/hifi2.gif" alt="high fidelity prototype of design" style={{width: '100%'}}/>
                    </div>
                    </div>
                    <div className="centered">
                    <a href="https://www.figma.com/proto/JyScHXr3hDDFALh2k3sZya/Iterative-HiFi-Post-Critiques?node-id=1%3A2&scaling=scale-down" target="_blank" rel="noopener noreferrer"><p>Try it out yourself!  <i className="fa fa-external-link"></i></p></a>
                    </div>

                    
                    <br/>
                    <h3 className="subtitle">User Testing</h3>
                    <div className="centered"><div className="userTestingDiv">
                    <p style={{textAlign: 'center'}}>
                        We sent our prototype to usertesting.com and gave 3 users the following instructions:
                    </p>
                    <p>
                        <b>Scenario: </b> You are an employee for a clothing company. You are looking for 
                        additional features to add to your website to improve the shopping experience. 
                        Drapr is a company that offers virtual “try-it-on” software that can be embedded 
                        into websites. You will be evaluating the different plans that Drapr offers, 
                        and purchasing a plan for your clothing company.
                    </p>
                    <p>
                        <b>Overall Task: </b> Navigate the website, and purchase a plan. Once the plan 
                        is purchased, send a message to the PR team to get in touch with the company. 
                    </p>
                    </div></div>

                    <div className="centered"><div className="videosdiv">
                    <div className="videodiv whitebox smallshadow">
                        <iframe width="100%" height="400" src="https://www.youtube.com/embed/SGRmRmEfjoI" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="first user test"></iframe>
                    </div>
                    <div className="videodiv whitebox smallshadow">
                        <iframe width="100%" height="400" src="https://www.youtube.com/embed/p41RUpOxvSI" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="second user test"></iframe>
                    </div>
                    <div className="videodiv whitebox smallshadow">
                        <iframe width="100%" height="400" src="https://www.youtube.com/embed/XQaWgeZMYWM" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="third user test"></iframe>
                    </div>
                    </div></div>
                    <br/>

                    <br/>
                    <h3 className="subtitle">Summary of Results</h3>
                    <div className="centered"><p className="draprCentered">
                    Overall, we were fairly pleased with the results we obtained from the user testing experiments.
                    </p></div>
                    <div className="centered"><div className="summaryListDiv">
                    <ul className="draprList">
                        <li>
                        Navigating through the homepage was generally in line with expectations. We were surprised 
                        to find that one of the users still had a bit of difficulty figuring out that the website 
                        scrolled (even with affordances such as peaking and a small arrow on the bottom of the page)
                        </li>
                        <li>
                        When selecting the plans, users were generally able to navigate without errors. One user
                        suggested creating more contrasting color palettes in the actual choice icons for the 
                        different plans
                        </li>
                        <li>
                        Users were dissatisfied with the vagueness of the landing page after sending a message 
                        to the PR team. They would have preferred to know an exact timeframe for receiving a 
                        response (we had a message that said “A representative of our time will reach out shortly” 
                        with no concrete timeframe)
                        </li>
                        <li>
                        We were happy to see that after the users figured out the scrolling mechanism, they made 
                        no errors on any of the subsequent tasks. We received feedback from those users that the 
                        navigation was simple and easy to use
                        </li>
                    </ul>
                    </div></div>
                    

                    <br/>
                    <h3 className="subtitle">Interface Changes</h3>
                    <div className="centered"><div className="summaryListDiv">
                    <ul className="draprList">
                        <li>Our biggest change would be to make the affordances even more clear for scrolling. 
                        Not understanding the scroll made the website nearly completely unusable, so perhaps a 
                        scrolling bar on the right of the page or something similar would ensure this mistake is 
                        not made.
                        </li>
                        <li>We would add a bit more detail and information on the landing pages for the “checkout” 
                        and “contact us” buttons. This would reassure customers that they performed the correct tasks.
                        </li>
                        <li>
                        We might change the color scheme slightly on the icons for the three different plans. As is, 
                        it may be a bit difficult for customers to intuitively and immediately grasp the idea that 
                        the plans are radically different given the similarity in color schemes.
                        </li>
                        <li>
                        Users generally relied on recall rather than intuition for navigating to specific elements on the scrollable home page. In the future we would add a clickable navigation bar on the top of the page that takes users directly to different sections of the page.
                        </li>
                    </ul>
                    </div></div>
                    <br/>

                    <div className="centered"><div className="conclusion smallshadow">
                    <h3 className="subtitle">Conclusion</h3>
                    <hr className="shorthr" style={{width: '100%', backgroundColor: 'lightgrey'}}/>
                    <div className="conclusiongrid">
                        <div className="lessons">
                        <h6><b>Lessons Learned</b></h6>
                        <h6>This project taught us that there are often hidden usability issues in a design that can only be found with outside feedback. Both the critique and the user testing proved invaluable for exposing usability issues. We learned that it's important to consult a wide variety of opinions, because demographics like age can affect how intuitive users find an interface.</h6>
                        </div>
                        <div className="softskills">
                        <h6><b>Soft Skills:</b></h6>
                        <ul className="skillslist">
                            <li>Critiquing</li>
                            <li>Working in Teams</li>
                        </ul>
                        </div>
                        <div className="hardskills">
                        <h6><b>Hard Skills:</b></h6>
                        <ul className="skillslist">
                            <li>User Testing</li>
                            <li>Wireframing</li>
                            <li>HiFi Prototyping</li>
                            <li>Iterative Design</li>
                        </ul>
                        </div>
                    </div>
                    </div></div>
                    </Fade>
            </div>
            )
    }
}

export default Iterative;