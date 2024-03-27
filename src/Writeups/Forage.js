import {Component} from 'react';
import '../writeupstyle.css';
import Fade from 'react-reveal/Fade';

import Intro from './Writeup-Components/Intro';
import Conclusion from './Writeup-Components/Conclusion';


class Forage extends Component {
    componentDidMount () {
        window.scrollTo(0, 0);
    }
    render () {
        return (
            <div className="developmentdiv">
                <Fade>
                <div className="centered">
                    {/* Intro */}
                    <Intro title={'Forage Project'} 
                    subtitle={'encourage self-sufficiency and spread knowledge'} 
                    objective={'Create an accessible, interactive, and fun way to teach practical skills. Enable people to be more connected to their environment and their food supply. Use Duolingo-style gamification to encourage learning.'} 
                    subject={'A free to access website. In the future, an app version could be made.'} 
                    context={'Personal Project - Fall 2023'}/>

                    {/* Prototyping */}
                    <h3 className='subtitle'>Roughing out the Design</h3>
                    <p className='largePara'>While an app would have been a good choice for gamification, I decided to start with a website, since I have more experience with the platform and it would be very easily accessible to users - no download required, no sign up necessary. Nevertheless it was important to me that users are able to have a seamless website experience on desktop or mobile.</p>

                    <p className='largePara'>I roughed out the hero image of the homepage in Figma, creating slightly different designs for tablet and mobile. I also created designs for the modules page and quiz page. </p>
                    <div className='whiteDiv smallShadow eighty centeredRow' style={{gap: '15px'}}>
                        <div><img src='foragePhotos/homepageFigma.png' alt='figma draft of homepage'></img></div>
                        <div><img src='foragePhotos/modulesFigma.png' alt='figma draft of modules section'></img></div>
                        <div><img src='foragePhotos/questionFigma.png' alt='figma draft of quiz question'></img></div>
                    </div>

                    <p className='largePara'>After getting a feel for how I wanted the website to look, I made a style guide with the main colors, fonts, heading styles, and button designs used in the site.
                    I chose Abyss for the title font, as it has a natural rough quality that evokes creativity, and Consolas for the body font, for a more scientific look. </p>
                    <div className='whiteDiv smallShadow centeredRow'>
                        <div><img src='foragePhotos/styleguide.png' alt='style guide'></img></div>
                    </div>

                    <p className='largePara'>After finishing the mock-ups, I went to draft the main pages of the site.</p>
                    <br/>
                    <hr className='longHR'></hr>
                    <br/>

                    {/* Main Pages */}
                    <h3 className='subtitle'>Main Pages</h3>
                    <p className='largePara'>As the user scrolls down the home page, I wanted to create the impression that the user is looking through a forest. They look past the clouds, which float with a subtle animation, to the plants and fungi then settle at the call to action on the forest floor.</p>
                    <div className='whiteDiv smallShadow eighty centeredRow'>
                        <div><img src='foragePhotos/homepage.gif' alt='an overview of the homepage'></img></div>
                    </div>
                    
                    <p className='largePara'>In the modules section I evoke a more scientific and scholarly theme as the user picks what they want to learn about. Hence the parchment and black and white color scheme. The user can select their learning "path" from a dropdown menu. Speech bubbles give them cues. Each lesson is symbolized by a star, which is filled in black as the user completes it. As the user follows the path and completes more lessons, they gather more stars, and the counter at the bottom shows how many more they need until another path is unlocked.</p>
                    <div className='whiteDiv smallShadow eighty centeredRow'>
                        <div><img src='foragePhotos/modules.gif' alt='an overview of the modules page'></img></div>
                    </div>

                    <p className='largePara'>There are two types of lessons (so far). The first is an informational page, with text, diagrams, and pictures. A progress bar tracks the user's progress as they read the page. The second is a quiz, with multiple choice, fill in the blank, and drag and drop style questions. I paid special attention to the graphic details here to prevent the quizzes from feeling too much like a standardized test, using typewriter-like buttons and color feedback to instantly reward the user for answering questions. The quiz finishes with a review page that will give the user feedback and inform them which topics they should spend time reviewing.</p>
                    <div className='whiteDiv smallShadow eighty centeredRow'>
                        <div><img src='foragePhotos/quiz.gif' alt='a walkthrough of the quiz page'></img></div>
                    </div>
                    <p className='largePara'>I decided to go with Auth0 login for now, so that I know that the users' contact information is stored securely. In the future, I might migrate login data to a custom database. All other user data is stored in a SQL database.</p>
                    <br/>
                    <hr className='longHR'></hr>
                    <br/>

                    {/* Future Plans */}
                    <p className='largePara'>In the future, I would like to add a forum in the comments/community section, so that new learners can ask questions and more experienced users can answer questions or contribute to the educational material. I would also like to further gamify the experience by including an account section with visual representations of the user's progress, usage, and other stats.</p>


                    {/* Conclusion */}
                    <Conclusion lessons={"This project let me apply my UX and web design skills towards getting people excited to learn about a topic I'm passionate about!"} softSkills={['Interacting with experts', 'Teaching']} hardSkills={['UX Design', 'Figma']}/>
                </div>
                </Fade>
            </div>
        )
    }
}

export default Forage;