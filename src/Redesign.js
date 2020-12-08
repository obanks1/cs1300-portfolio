import {Component} from 'react';
import './redesignstyle.css';
import Fade from 'react-reveal/Fade';

class Redesign extends Component {
    render () {
        return (
            <div className="redesigndiv">
                <Fade>
                <div className="centered"><div className="introdiv">
                    <h1 className="title">Responsive Redesign</h1>
                    <h3 className="subtitle">a case study on responsive design</h3>
                    <div className="introcap smallshadow">
                        <h6><b>Objective:</b> analyze and identify flaws in an existing webpage, 
                        create low-fidelity and high-fidelity prototypes for various screen sizes, 
                        and build a responsive website based on those prototypes.</h6>
                        <h6><b>Subject:</b> Reuling Associates, a local engineering company</h6>
                        <div className="centered"><hr className="inlinehr"/>
                        <p className="context"><b>UI/UX (CS 1300) - Brown University - Fall 2020 </b></p>
                        <hr className="inlinehr"/></div>
                    </div>
                    </div></div>

                    <br/>
                    <h3 className="subtitle">Original Site: Design Problems</h3>
                    <div className="centered"><div className="originalsite">
                    <img src="redesignphotos/reulingannotated.png" className="originalphoto" alt="original website"/>
                    <a href="http://reulingassociates.com" target="_blank" rel="noopener noreferrer">
                        <h4>Http://ReulingAssociates.com <i className="fa fa-external-link"></i></h4>
                    </a>
                    </div></div>
                    <br/>
                    <h3 className="subtitle">Accessibility Issues</h3>
                    <div className="centered"><div className="accessibility">
                    <p>I used WebAIM WAVE to test the accessibility of the webpage.</p>
                    <ul className="accessList">
                        <li>Error: No Page Regions “No page regions or ARIA landmarks were found.”</li>
                        <ul><li>Content is not separated into header, nav, main, footer, etc. regions</li></ul>
                        <li>Error: Suspicious alternative text</li>
                        <ul><li>The logo image is simply captioned "logo"</li></ul>
                        <li>Screen reader did not pick up on the main block of text</li>
                    </ul> 
                    <p>
                        Results: In general the accessibility was not too bad, 
                        probably because the website is so simple. I will aim to fix the errors it does have 
                        and prevent more from popping up. 
                    </p>
                    </div></div>
                    <br/>
                    
                    <h3 className="subtitle">Lofi Prototypes</h3>
                    <div className="centered">
                    <p className="lofiCap">I used Balsamiq's low fidelity prototyping 
                        software to plan out what my redesign will look like.</p>
                    </div>
                    <br/>
                    <div className="centered"><div className="lofidiv">
                    <div className="lofi smallshadow"><img src="redesignphotos/lofi desktop.png" className="lofiimg desktoplofi" alt="lofi desktop prototype"/></div>
                    <div className="lofi smallshadow"><img src="redesignphotos/lofi tablet 2.gif" className="lofiimg tabletlofi" alt="lofi tablet prototype"/>
                        <img src="redesignphotos/lofi annotation.png" className="lofiannotation" alt="annotation explaining prototypes"/></div>
                    <div className="lofi smallshadow"><img src="redesignphotos/lofi phone 2.gif" className="lofiimg phonelofi" alt="lofi phone prototype"/>
                        <img src="redesignphotos/lofi annotation.png" className="lofiannotation" alt="annotation explaining prototypes"/></div>
                    </div></div>

                    <h3 className="subtitle">Hifi Prototypes</h3>
                    <div className="centered">
                    <p className="hifiCap">I used Figma to flesh out my prototypes and 
                        added images and color to the design.</p>
                    </div>
                    <br/>
                    <div className="centered"><div className="hifidiv">
                    <div className="hifi smallshadow"><img src="redesignphotos/hifi desktop 3.png" className="hifiimg desktophifi" alt="hifi desktop prototype"/></div>
                    <div className="hifi smallshadow"><img src="redesignphotos/hifi tablet 2.gif" className="hifiimg tablethifi" alt="hifi tablet prototype"/>
                        <img src="redesignphotos/hifi annotation.png" className="lofiannotation" alt="annotation explaining prototypes"/>
                    </div>
                    <div className="hifi smallshadow"><img src="redesignphotos/hifi phone 2.gif" className="hifiimg phonehifi" alt="hifi phone prototype"/>
                        <img src="redesignphotos/hifi annotation.png" className="lofiannotation" alt="annotation explaining prototypes"/>
                    </div>
                    </div></div>

                    <h3 className="subtitle">Style Guide</h3>
                    <div className="centered"><p className="styleGuideCap">Based on the hifi prototypes, I created a visual design style guide that outlines the main colors, 
                    typography, and states of the reusable components.
                    I chose the complementary colors orange and blue to provide contrast in the design, and used
                    light colors so that the text would be more readable. 
                    I made sure that the fonts and colors were practical and professional, befitting an engineering company.
                    </p></div>
                    <div className="centered"><img src="redesignphotos/style guide.png" className="styleguide" alt="style guide showing design choices"/></div>
                    
                    <br/>
                    <h3 className="subtitle">Final Design</h3>
                    <div className="centered"><p className="styleGuideCap">
                    The final design is useable on a variety of devices and has no accessibility errors. It 
                    responds well to changes in browser size and font size, and looks good when tested on
                    an iPad and iPhone. 
                    The website is very similar to the hifi prototypes, with only minor changes.
                    I used flexbox instead of grid layout, as it proved more easily responsive, and I changed the
                    mobile menu icon slightly for better visibility. 
                    </p></div>
                    <div className="centered"><a href="https://mighty-chamber-51699.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    <h4>New Reuling Associates Site <i className="fa fa-external-link"></i></h4>
                    </a></div>
                    <br/>

                    <div className="centered"><div className="hifi smallshadow" style={{width: '80%'}}><img src="redesignphotos/finaldesigndesktop.png" className="hifiimg desktophifi" alt="final desktop design"/></div></div>
                    <br/>

                    <div className="centered"><div className="conclusion smallshadow">
                    <h3 className="subtitle">Conclusion</h3>
                    <hr className="shorthr" style={{width: '100%', backgroundColor: 'lightgrey'}}/>
                    <div className="conclusiongrid">
                        <div className="lessons">
                        <h6><b>Lessons Learned</b></h6>
                        <h6>This project taught me how to approach websites analytically- to examine what design and 
                            usability problems a page has and identify potential solutions. Iterating through low 
                            and high fidelity protoypes forced me to slow down my design process and approach it more critically.
                            I also learned about some common accessibility issues and practiced 
                            optimizing for mobile use.
                        </h6>
                        </div>
                        <div className="softskills">
                        <h6><b>Soft Skills:</b></h6>
                        <ul className="skillslist">
                            <li>Accessible Design</li>
                            <li>Product Analysis</li>
                            <li>Critical Thinking</li>
                        </ul>
                        </div>
                        <div className="hardskills">
                        <h6><b>Hard Skills:</b></h6>
                        <ul className="skillslist">
                            <li>Low and High Fidelity Prototyping</li>
                            <li>Mobile Optimization</li>
                        </ul>
                        </div>
                    </div>
                    </div></div>
                </Fade>
            </div>
        )
    }
}

export default Redesign;