import {Component} from 'react';
import './developmentstyle.css';
import Fade from 'react-reveal/Fade';


class Development extends Component {
    render () {
        return (
            <div className="developmentdiv">
                <Fade>
                <div className="centered"><div className="introdiv">
                    <h1 className="title">Development</h1>
                    <h3 className="subtitle">a case study on React</h3>
                    <div className="whitebox smallshadow">
                        <h6><b>Objective:</b> Get comfortable with React by creating a list interface. Include at least 12 items, filtering and sorting functionality, and an aggregator section.</h6>
                        <h6><b>Subject:</b> An online store. I chose to make a shopping website where users could buy prints of photos I've taken. In the future, I could potentially adapt this into a functional website to sell my art.</h6>
                        <div className="centered"><hr className="inlinehr"/>
                        <p className="context"><b>UI/UX (CS 1300) - Brown University - Fall 2020 </b></p>
                        <hr className="inlinehr"/></div>
                    </div>
                    </div>
                </div>

                
                <br/>
                <h3 className="subtitle">Choosing a Framework</h3>
                <div className="centered">
                <div className="textPara"><p>
                    I chose to use the Material UI framework in conjunction with my own custom styling. Using the Material UI framework gave me access to premade buttons, icons, and dropdown menus which saved me time scripting those components. 
                </p></div>
                </div>
                <br/>

                
                <h3 className="subtitle">Usability Considerations</h3>
                <div className="centered"><div className="textPara">
                <p>I thought about Nielsen's 10 Usability Heuristics in the design of my shop. Here are a few especially relevant ones.</p>
                <ol className="usabilityList">
                    <li><b>Visibility of system status</b></li>
                    <p>Both the posts in the shopping section and the items in the cart show the current quantity. The cart is placed side by side with the shopping posts so the user can see their items and keep track of their total in real time.</p>
                    <li><b>Match between system and the real world</b></li>
                    <p>
                    The shopping cart icons indicate the purpose of the "add to cart" and "checkout" buttons.
                    </p>
                    <li><b>Consistency and standards</b></li>
                    <p>All cards follow the same format. The cart items have a paired-down description but are still recognizable. The colors (white and light blue) are kept consistent throughout the site. </p>
                    <li><b>Error prevention</b></li>
                    <p>
                    The cart items, quantity, and total are constantly visible, preventing users from checking out with the wrong items. From the cart, the users can easily adjust the quantity of each item.
                    </p>
                    <li><b>Aesthetic and minimalist design</b></li>
                    <p>I used a minimalist color pallette. The filter categories are hidden until clicked on and the item descriptions are hidden until hovered over so that the user is not inundated with unnecessary information.</p>
                </ol>
                </div></div>
                

                <br/>
                <h3 className="subtitle">Final Design</h3>
                <br/>
                <div className="centered">
                <div className="demo smallshadow">
                    <img src="developmentphotos/mac.png" alt="website on macbook" className="demoPic"/>
                </div>
                </div>
                <br/>
                
                <div className="centered">
                <div className="demo smallshadow">
                    <img src="developmentphotos/storedemo.gif" alt="demo of store" className="demoPic"/>
                </div>
                </div>
                <br/>
                
                <div className="centered">
                <a href="https://peaceful-hollows-31910.herokuapp.com/" target="_blank" rel="noopener noreferrer"><p>Try it out yourself!  <i className="fa fa-external-link"></i></p></a>
                </div>
                <div className="centered">
                <a href="https://github.com/obanks1/cs1300-development" target="_blank" rel="noopener noreferrer"><p>View source code  <i className="fa fa-external-link"></i></p></a>
                </div>
                

                <br/>
                <div className="centered"><div className="conclusion smallshadow">
                    <h3 className="subtitle">Conclusion</h3>
                    <hr className="shorthr" style={{width: '100%', backgroundColor: 'lightgrey'}}/>
                    <div className="conclusiongrid">
                        <div className="lessons">
                        <h6><b>Lessons Learned</b></h6>
                        <h6>This project familiarized me with using React, Material Design, and web frameworks in general. I also got experience working with state, which I used to create the automatically updating quantities and price. The skills developed from building an online store could also be easily adapted to making a blog or similar website.</h6>
                        </div>
                        <div className="softskills">
                        <h6><b>Soft Skills:</b></h6>
                        <ul className="skillslist">
                            <li>Working with web frameworks</li>
                            <li>Usability</li>
                        </ul>
                        </div>
                        <div className="hardskills">
                        <h6><b>Hard Skills:</b></h6>
                        <ul className="skillslist">
                            <li>React Framework</li>
                            <li>Material Design UI</li>
                            <li>JSX</li>
                        </ul>
                        </div>
                    </div>
                </div></div>
                </Fade>
            </div>
        )
    }
}

export default Development;