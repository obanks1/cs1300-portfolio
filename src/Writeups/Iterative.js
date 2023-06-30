import {Component} from 'react';
import '../writeupstyle.css';
import Fade from 'react-reveal/Fade';

import Intro from './Writeup-Components/Intro';
import Conclusion from './Writeup-Components/Conclusion';

class Iterative extends Component {
    componentDidMount () {
        window.scrollTo(0, 0);
    }
    render () {
        return (
            <div className="iterativediv">
                <Fade>
                <div className="centered">
                    <Intro 
                    title={"Iterative Design"} 
                    subtitle={"a case study on the design process"} 
                    objective={"Work in a small group to design an interface for an emerging startup. Sketch ideas of the interface, create an interactive high-fidelity prototype, and conduct user testing on this final prototype."} 
                    subject={"DRAPR, an online shopping startup"} 
                    context={"UI/UX (CS 1300) - Brown University - Fall 2020"}/>

                    <h3 className="subtitle">The Startup</h3>
                    <div className="largePara">
                        <p><b>DRAPR</b> builds software to help online shoppers see what their clothing looks like. 
                        The company’s online try-on widget helps shoppers get a better idea of how a shirt or 
                        other clothing item fits on a customizable 3D mannequin that users can adjust to fit 
                        their body type, height and weight.</p>
                    </div>
                    <br/>

                    <h3 className="subtitle">Sketches</h3>
                    <p className="largePara">We made 4 sketches of what the website might look like.</p>
                    <br/>
                    <div className="centeredRow eighty" style={{gap: '20px'}}>
                        <div className="forty whiteDiv">
                            <p className="kalam centeredText"><b>Sketch 1</b></p>
                            <img src="iterativephotos/sketch1.png" alt="1st sketch"/>
                        </div>
                        <div className="forty whiteDiv">
                            <p className="kalam centeredText"><b>Sketch 2</b></p>
                            <img src="iterativephotos/sketch3.png" alt="2nd sketch"/>
                        </div>
                    </div>
                    <br/>
                    <div className="centeredRow eighty" style={{gap: '20px'}}>
                        <div className="forty whiteDiv">
                            <p className="kalam centeredText"><b>Sketch 3</b></p>
                            <img src="iterativephotos/sketch2.png" alt="3rd sketch" style={{marginBottom: '10px'}}/>
                        </div>
                        <div className="forty whiteDiv">
                            <p className="kalam centeredText"><b>Sketch 4</b></p>
                            <img src="iterativephotos/sketch4.png" alt="4th sketch"/>
                        </div>
                    </div>
                    <br/>
                    <h3 className="subtitle">Wireframe</h3>
                    <p className='smallPara'>We put together the best ideas from all of our sketches to create a wireframe
                    mockup. These are some of the features we knew we wanted to include in the prototype:
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
                    <br/>
                    <div className="whiteDiv sixty smallShadow">
                        <img src="iterativephotos/wireframe.gif" alt="wireframe of design" style={{width: '100%'}}/>
                    </div>
                    <a href="https://www.figma.com/proto/1siQUrJyKQrBud3LpLWL3U/Iterative-Wireframe?node-id=1%3A2&scaling=scale-down" target="_blank" rel="noopener noreferrer"><p>Try it out yourself!  <i className="fa fa-external-link"></i></p></a>

                    <br/>
                    <br/>
                    <h3 className="subtitle">First HiFi Mockup</h3>
                    <div className="whiteDiv sixty smallShadow">
                        <img src="iterativephotos/hifi1.gif" alt="high fidelity prototype of design" style={{width: '100%'}}/>
                    </div>
                    <a href="https://www.figma.com/proto/F9EVgdYH6YbWmuBKb4y4jh/Iterative-HiFi?node-id=1%3A2&scaling=scale-down" target="_blank" rel="noopener noreferrer"><p>Try it out yourself!  <i className="fa fa-external-link"></i></p></a>

                    <br/>
                    <br/>
                    <h3 className="subtitle">Critical Feedback</h3>
                    <div className="sixty">
                        <p>We had a mockup crit, wherein we received feedback on our design from an industry professional and our classmates. These are some of their suggestions, which we implemented below.
                            <i className="fa fa-arrow-right"></i>
                        </p>
                        <ul>
                            <li>No back button on checkout page</li>
                            <li>Can't see package prices on main page</li>
                            <li>Split the checkout page into login and payment</li>
                            <li>Hard to find checkout</li>
                            <li>No affordances to indicate that page scrolls</li>
                            <li>Match nav headers to the content headings</li>
                            <li>"Click to Customize" is positioned so it points to nothing</li>
                            <li>Button alignment should be consistent between pages (center all)</li>
                        </ul>
                    </div>
                    <br/>
                    <br/>

                    <h3 className="subtitle">Final HiFi Prototype</h3>
                    <div className="whiteDiv sixty longShadow">
                        <img src="iterativephotos/hifi2.gif" alt="high fidelity prototype of design" style={{width: '100%'}}/>
                    </div>
                    <a href="https://www.figma.com/proto/JyScHXr3hDDFALh2k3sZya/Iterative-HiFi-Post-Critiques?node-id=1%3A2&scaling=scale-down" target="_blank" rel="noopener noreferrer"><p>Try it out yourself!  <i className="fa fa-external-link"></i></p></a>

                    
                    <br/>
                    <h3 className="subtitle">User Testing</h3>
                    <div className="sixty">
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
                    </div>

                    <div className="sixty whiteDiv smallShadow">
                        <iframe width="100%" height="400" src="https://www.youtube.com/embed/SGRmRmEfjoI" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="first user test"></iframe>
                    </div>
                    <p className="largePara">
                    Overall, we were pleased with the results we obtained from the user testing experiments.  One of the users still had difficulty figuring out that the website scrolled (even with affordances such as peaking and a small arrow on the bottom of the page). We were happy to see that after the users figured out the scrolling mechanism, they made no errors on any of the subsequent tasks. We received feedback from those users that the navigation was simple and easy to use.
                    </p>

                    <Conclusion 
                    lessons={"This project taught us that there are often hidden usability issues in a design that can only be found with outside feedback. Both the critique and the user testing proved invaluable for exposing usability issues. We learned that it's important to consult a wide variety of opinions, because demographics like age can affect how intuitive users find an interface."} 
                    softSkills={["Critiquing", "Working in Teams"]} 
                    hardSkills={["User Testing", "Wireframing", "HiFi Prototyping", "Iterative Design"]}/>
                </div>
                </Fade>
            </div>
            )
    }
}

export default Iterative;