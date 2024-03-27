import {Component} from 'react';
import '../writeupstyle.css';
import Fade from 'react-reveal/Fade';

import Intro from './Writeup-Components/Intro';
import Conclusion from './Writeup-Components/Conclusion';


class APL extends Component {
    componentDidMount () {
        window.scrollTo(0, 0);
    }
    render () {
        return (
            <div className="developmentdiv">
                <Fade>
                <div className="centered">
                    {/* Intro */}
                    <Intro title={'Johns Hopkins Applied Physics Lab'} 
                    subtitle={'Two years, four projects'} 
                    objective={'I was assigned several projects in topics like data visualization, simulations, user interfaces, cloud services, and more.'} 
                    subject={'Added functionalities and visualizations to several projects.'} 
                    context={'Summer 2019 Internship through 2021'}/>

                    <p className='smallPara'>Many of the projects I worked on at APL used a Secret Clearance, and thus I cannot go into detail or include pictures in this post! I'll attempt to outline the type of work I accomplished during these two years.</p>

                    {/* First Year */}
                    <h3 className='subtitle'>First Year</h3>
                    <p className='largePara'>My first year at the Johns Hopkins Applied Physics Lab, I was assigned to the Air and Missile Defense sector. I worked on three projects over the course of the summer. In the first project, I used Python to add various functionalities to an Electronic Warfare simulation based on customer input. 
                    In a second project, I created scatterplots and histograms to aid data visualization and analysis for an ongoing experiment. For this project, I had to work in a closed lab with limited resources, which improved my depth of understanding and recall of the code. I aimed to produce legible charts that could be easily used for decision making.
                    In my third and largest project, I constructed a probability simulation in MATLAB. My job was to untangle and clean up the existing code, then add additional features. I interviewed the original writers and produced a comprehensive documentation for others who might work on this project in the future. I then added a series of features to improve the scope of the simulation. My biggest contribution was adding a graphical user interface (GUI) that greatly increased the speed of entering inputs to the simulation and made the outputs far more intuitive to interpret.
                    I received an award at the end of this year for my contributions to these projects.</p>

                    {/* Second Year */}
                    <h3 className='subtitle'>Second Year</h3>
                    <p className='largePara'>
                        My second year at APL, I was assigned a single larger project, and was upgraded from an intern to a part-time employee. This project aimed to build a suite of cloud services for a section of the military. I collaborated with a larger team in an agile environment to build these cloud services and integrate them into a pipeline. Through this process, I became familiar with AWS, Kubernetes, Greymatter, and Docker. After finishing my work on my assigned services, I build an animated GUI displaying the interactions between the different cloud services. This made it easy to monitor the interactions of the whole system at a glance, and ensure that every service was sending and receiving data as intended. This made it extremely easy to diagnose when a link in the chain was broken and aid debugging.
                    </p>
                    
                    {/* Conclusion */}
                    <Conclusion lessons={"Through the various projects, I improved my coding skills in several languages and brushed up on my project management skills. I discovered that I enjoy building user interfaces, and that a good visualization can be key to effective data input or data monitoring."} softSkills={['Interpreting customer input', 'Producing legible documentation', 'Coding collaboratively']} hardSkills={['Matlab', 'Python', 'Creating GUIs', 'Cloud Services']}/>
                </div>
                </Fade>
            </div>
        )
    }
}

export default APL;