import {Component} from 'react';
import Fade from 'react-reveal/Fade';

import Intro from './Intro';
import Conclusion from './Conclusion';


class Development extends Component {
    render () {
        return (
            <div className="developmentdiv">
                <Fade>
                <div className="centered">
                    <Intro 
                    title={"Storefront"} 
                    subtitle={"a case study on React"} 
                    objective={"Get comfortable with React by creating a list interface. Include at least 12 items, filtering and sorting functionality, and an aggregator section."} 
                    subject={"An online store. I chose to make a shopping website where users could buy prints of photos I've taken. In the future, I could potentially adapt this into a functional website to sell my art."} 
                    context={"UI/UX (CS 1300) - Brown University - Fall 2020"}/>

                    <h3 className="subtitle">The Design</h3>
                    <br/>
                    <div className="whiteDiv eighty longShadow">
                        <img src="developmentphotos/mac.png" alt="website on macbook" className="demoPic"/>
                    </div>
                    <br/>
                    <br/>
                    
                    <h3 className="subtitle">How it Works</h3>
                    <br/>
                    <div className="whiteDiv eighty longShadow">
                        <img src="developmentphotos/storedemo.gif" alt="demo of store" className="demoPic"/>
                    </div>
                    <br/>
                    
                    <a href="https://peaceful-hollows-31910.herokuapp.com/" target="_blank" rel="noopener noreferrer"><p>Try it out yourself!  <i className="fa fa-external-link"></i></p></a>
                    <a href="https://github.com/obanks1/cs1300-development" target="_blank" rel="noopener noreferrer"><p>View source code  <i className="fa fa-external-link"></i></p></a>                    

                    <Conclusion 
                    lessons={"This project familiarized me with using React, Material Design, and web frameworks in general. I also got experience working with state, which I used to create the automatically updating quantities and price. The skills developed from building an online store could also be easily adapted to making a blog or similar website."} 
                    softSkills={["Working with web frameworks", "Usability"]} 
                    hardSkills={["React Framework", "Material Design UI", "JSX"]}/>
                </div>
                </Fade>
            </div>
        )
    }
}

export default Development;