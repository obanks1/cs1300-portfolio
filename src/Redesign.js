import {Component} from 'react';
import Fade from 'react-reveal/Fade';

import Intro from './Intro';
import Conclusion from './Conclusion';

class Redesign extends Component {
    render () {
        return (
            <div className="redesigndiv">
                <Fade>
                <div className="centered">
                    <Intro 
                    title={"Responsive Redesign"} 
                    subtitle={"a case study on responsive design"} 
                    objective={"analyze and identify flaws in an existing webpage, create low-fidelity and high-fidelity prototypes for various screen sizes, and build a responsive website based on those prototypes."} 
                    subject={"Reuling Associates, a local engineering company"} 
                    context={"UI/UX (CS 1300) - Brown University - Fall 2020"}/>

                    <h3 className="subtitle">Original Site: Design Problems</h3>
                    <img src="redesignphotos/reulingannotated.png" alt="original website"/>
                    <a href="http://reulingassociates.com" target="_blank" rel="noopener noreferrer">
                        <h4>Http://ReulingAssociates.com <i className="fa fa-external-link"></i></h4>
                    </a>
                    <br/>
                    <h3 className="subtitle">Accessibility Issues</h3>
                    <div className="fifty">
                        <p>I used WebAIM WAVE to test the accessibility of the webpage. I aimed to create a website that would address these issues and prevent more from appearing.</p>
                        <ul>
                            <li>Error: No Page Regions “No page regions or ARIA landmarks were found.”</li>
                            <li>Error: Suspicious alternative text</li>
                            <li>Screen reader did not pick up on the main block of text</li>
                        </ul> 
                    </div>
                    <br/>
                    
                    <h3 className="subtitle">Lofi Prototypes</h3>                    
                    <p className="largePara">I used Balsamiq's low fidelity prototyping 
                        software to plan out what my redesign will look like.</p>
                    <br/>
                    <div className="centeredRow eighty" style={{gap: '20px'}}>
                        <div className="seventy whiteDiv smallShadow">
                            <img src="redesignphotos/lofi desktop.png" className="desktoplofi" alt="lofi desktop prototype"/>
                        </div>
                        <div className="seventy whiteDiv smallShadow centeredRowPermanent">
                            <div style={{width: '70%'}}>
                                <img src="redesignphotos/lofi tablet 2.gif" alt="lofi tablet prototype"/>
                            </div>
                            <div style={{width: '30%'}}>
                                <img src="redesignphotos/lofi annotation.png" alt="annotation explaining prototypes"/>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <br/>

                    <h3 className="subtitle">Hifi Prototypes</h3>
                    <div className="centered">
                        <p className="largePara">I used Figma to flesh out my prototypes and 
                            added images and color to the design.</p>
                    </div>
                    <br/>
                    <div className="centeredRow eighty" style={{gap: '20px'}}>
                        <div className="seventy whiteDiv smallShadow">
                            <img src="redesignphotos/hifi desktop 3.png" className="desktophifi" alt="hifi desktop prototype"/>
                        </div>
                        <div className="seventy whiteDiv smallShadow centeredRowPermanent">
                            <div style={{width: '70%'}}>
                                <img src="redesignphotos/hifi tablet 2.gif" alt="hifi tablet prototype"/></div>
                            <div style={{width: '30%'}}>
                                <img src="redesignphotos/hifi annotation.png" alt="annotation explaining prototypes"/></div>
                        </div>
                    </div>
                    <div className="centered">
                        <img src="redesignphotos/style guide.png" className="eighty" alt="style guide showing design choices"/>
                    </div>
                    
                    <br/>
                    <h3 className="subtitle">Final Design</h3>
                    <br/>

                    <div className="eighty smallShadow">
                        <img src="redesignphotos/finaldesigndesktop.png" className="hifiimg desktophifi" alt="final desktop design"/>
                    </div>
                    
                    <a href="https://mighty-chamber-51699.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <h4>New Reuling Associates Site <i className="fa fa-external-link"></i></h4>
                    </a>

                    <Conclusion 
                    lessons={"This project taught me how to approach websites analytically- to examine what design and usability problems a page has and identify potential solutions. Iterating through low and high fidelity protoypes forced me to slow down my design process and approach it more critically. I also learned about some common accessibility issues and practiced optimizing for mobile use."} 
                    softSkills={["Accessible Design", "Product Analysis", "Critical Thinking"]} 
                    hardSkills={["Low and High Fidelity Prototyping", "Mobile Optimization"]}/>
                </div>
                </Fade>
            </div>
        )
    }
}

export default Redesign;