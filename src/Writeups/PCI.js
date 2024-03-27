import {Component} from 'react';
import '../writeupstyle.css';
import Fade from 'react-reveal/Fade';

import Intro from './Writeup-Components/Intro';
import Conclusion from './Writeup-Components/Conclusion';


class PCI extends Component {
    componentDidMount () {
        window.scrollTo(0, 0);
    }
    render () {
        return (
            <div className="developmentdiv">
                <Fade>
                <div className="centered">
                    {/* Intro */}
                    <Intro title={'Princeton Consultants'} 
                    subtitle={'Optimizing information delivery and processes for industry clients'} 
                    objective={'Analyze business needs of transportation industry clients and provide software to support their operations.'} 
                    subject={'Modernized systems for transportation client and PCI.'} 
                    context={'Job experience in 2022 and 2023'}/>

                    <p className='smallPara'>Some of the projects I worked on at PCI involve trade secrets related to specific partner companies, and thus I cannot go into detail or include pictures in this post! I'll attempt to outline the type of work I accomplished during this time.</p>

                    {/* First Project */}
                    <h3 className='subtitle'>Transportation Client User System</h3>
                    <p className='largePara'>
                        My first project at PCI, a Class 1 railroad was looking to create a modernized and web-based user system. They were running several different overlapping systems that required extensive insider knowledge, some of which were still based on command line interfaces. This bulky system created friction that made it time-consuming to train new trainmasters, time that the existing trainmasters did not have on their already-packed shifts. Furthermore, getting correct information efficiently was key to making time-sensitive decisions that could impact the entire railway network. As it was, trainmasters had limited access to important information like train location, as trains frequently went through cell service dead zones or were not properly labeled in the system.

                        The initial task was to deconstruct the complex web of existing tools that trainmasters used to monitor their terminal. I mapped out these existing process flows, and analyzed them for pain points and opportunities. To this end, I conducted in-person and online interviews, and also analyzed the existing code.

                        After this, I created user stories and functional product requirements. My priority was to optimize the way information was presented to make it efficient and intuitive to find all the information necessary to make decisions. With all of the planning done, the Figma mockups and code came together quickly. 
                    </p>

                    {/* Second Project */}
                    <h3 className='subtitle'>Company Site Modernization</h3>
                    <p className='largePara'>
                        My next project was to modernize PCI's own internal site. This process was similar to the previous project. It was smaller in scope, but as the team was smaller I did all of the prototyping and most of the coding. I collected user feedback and turned it into issues on Jira. I built off of these issues to produce design outlines and testing plans for each new feature. I then prototyped potential features in Figma to create high-fidelity mockups for CEO and Director approval. Once these new features were greenlit, I used my software skills to implement them in a JavaScript/Java/MySQL tech stack. Throughout this task, I documented the existing code and updated the company wiki with comprehensive training materials for new employees to make it easier to work on in the future.
                    </p>
                    
                    {/* Conclusion */}
                    <Conclusion lessons={"A common theme in the projects I worked on was optimization. Robots and code can't do everything, and often a human touch is required. Getting accurate information to people in visually compelling and efficient ways is one of the best methods to improve decision making. This emphasized to me that design is not just a tool to make things look nice, it is also highly functional."} softSkills={['Identifying pain points and opportunities', 'Presenting information efficiently', 'Using project management software', 'Collecting user feedback', 'Creating documentation and training material']} hardSkills={['Figma', 'Mockups', 'JavaScript', 'Java', 'MySQL', 'Testing plans', 'Creating user stories', 'Defining functional product requirements']}/>
                </div>
                </Fade>
            </div>
        )
    }
}

export default PCI;