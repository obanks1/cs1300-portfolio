import {Component} from 'react';
import './personasstyle.css';
import './generalstyle.css';
import Fade from 'react-reveal/Fade';

class Personas extends Component {
    render () {
        return (
            <div className='personasdiv'>
                <Fade>
                <div className="centered"><div className="introdiv">
                    <h1 className="title">Personas & Storyboarding</h1>
                    <h3 className="subtitle">a case study on user-centered design</h3>
                    <div className="introcap smallshadow">
                        <h6><b>Objective:</b> observe real users interacting with an interface
                        and interview these individuals about their experiences.
                        Create personas based on these users, 
                        and illustrate a storyboard for one of them.</h6>
                        <h6><b>Subject:</b> an electronic keyboard</h6>
                        <div className="centered"><hr className="inlinehr"/>
                        <p className="context"><b>UI/UX (CS 1300) - Brown University - Fall 2020 </b></p>
                        <hr className="inlinehr"/></div>
                    </div>
                    </div></div>
                    <div className="centered"><img src="personasphotos/keyboardsketch.png" className="keysketch" alt="diagram of keyboard"/></div>
                    <div className="centered"><h6 className="caption">This interface allows a user to play a variety of sounds through an electronic keyboard. 
                    It is designed to be familiar to piano players, while also providing a variety of samples 
                    and beats that can be customized through the controls.</h6></div>
                    <div className="centered"><div className="interviewdiv coolshadow">
                    <h3 className="subtitle">Interview Questions</h3>
                    <br/>
                    <div className="centered"><ol className="questionsList">
                        <li>On a scale from 1 to 10, how easy was it to set up the keyboard?</li>
                        <li>What do you think the song, style, and voice buttons control?</li>
                        <li>On a scale from 1 to 10, how easy was it to change the keyboard’s sound? Why?</li>
                        <li>Was it clear from the onset what features this keyboard has?</li>
                        <li>Were there any features you didn’t like / wouldn’t use?</li>
                        <li>Were there any features you wish were included?</li>
                        <li>Do you think the interface’s button arrangement prioritizes useful features? Why?</li>
                        <li>Do you understand all the information on the LED screen? Is it useful?</li>
                        <li>Do you have any other comments to add?</li>
                    </ol></div></div>
                    </div>
                    <hr className="longhr"/>
                    <div className="interviews"><div className="grid">
                        <div className="interview smallshadow">
                        <h3 className="subtitle">Interviewee 1</h3>
                        <h4>Summary</h4>
                        <p className="intpara">Interviewee 1 found the keyboard easy to set up. He was confused 
                            by the similarity between the "style" and "voice" buttons, and noted that it was 
                            easier to change voice with the dial control rather than the keypad. He found the interface 
                            layout straightforward, and thought it prioritized useful features. Specifically, he noted that
                            voice, style, and song are prominent while the performance assistant button
                            is "cowering in the corner". He also found the LED screen useful, but said he probably
                            wouldn't use most of the features.</p>
                        <h4>Observations</h4>
                        <ul className="intpara">
                            <li>Found basic features immediately</li>
                            <li>Played with keys and voices but didn’t explore any of the more advanced features</li>
                            <li>Gravitated towards sound effect voicings</li>
                            <li>Smashed keys to test features</li>
                        </ul>
                        </div>
                        <div className="interview smallshadow">
                        <h3 className="subtitle">Interviewee 2</h3>
                        <h4>Summary</h4>
                        <p className="intpara">Interviewee 2 expressed confusion at the keyboard's terminology, 
                            noting that the word "voice" isn't typically used in music and that "style" should be 
                            called rhythm. She felt that the "autoplay song" feature was outdated given modern phone 
                            technology and that the song arrangement feature could be more easily done on a computer. 
                            She expressed disappointment that keyboard didn't have a midi feature. Overall, she found
                            the interface layout crowded but liked the variety of features, expressing that the 
                            different voices could be useful when composing music. </p>
                        <h4>Observations</h4>
                        <ul className="intpara">
                            <li>Played more complicated music and chords</li>
                            <li>More focused on exploring advanced features</li>
                            <li>Stuck to traditional piano and synth voicings</li>
                        </ul>
                        </div>
                        <div className="interview smallshadow">
                        <h3 className="subtitle">Interviewee 3</h3>
                        <h4>Summary</h4>
                        <p className="intpara">Interviewee 3 found the interface layout straightforward, 
                            though he was unsure what many of the terms referred to. He didn't like the 
                            speakers built into the keyboard and wished it had better ones. He also wished
                            that the LED screen had better illumination and that the pictures on the keys
                            were bigger. He liked the drum kit feature the most, and disliked the metronome
                            feature. He expressed that the keyboard would be a good investment for a 
                            young musician.</p>
                        <h4>Observations</h4>
                        <ul className="intpara">
                            <li>Played individual keys, one at a time</li>
                            <li>Very interested in discovering new features</li>
                            <li>Often had visual difficulty deciphering small text and pictures</li>
                        </ul>
                        </div></div>
                    </div>
                    <h3 className="subtitle">Personas</h3>
                    <div className="centered"><h6 className="personascap">I compiled the interviews and observations and used
                    them to create personas representing the product's user base. These personas are not based on a specific
                    interview, but rather are archetypes that can be used to model how real users with interact 
                    with the product.
                    </h6></div>
                    <hr className="longhr"/>
                    <div className="centered">
                    <img src="personasphotos/personas.png" className="personas smallshadow" alt="personas depicting users"/>
                    </div>
                    <h3 className="subtitle">Storyboard</h3>
                    <div className="centered"><h6 className="personascap">Keeping in mind the "Home-Producer Hannah" persona,
                    I created a storyboard illustrating how she might interact with the product from beginning
                    to end.
                    </h6></div>
                    <hr className="longhr"/>
                    <div className="centered">
                    <img src="personasphotos/storyboard.png" className="storyboard" alt="storyboard of user's journey with product from start to end"/>
                    </div>
                    <div className="centered"><div className="conclusion smallshadow">
                    <h3 className="subtitle">Conclusion</h3>
                    <hr className="shorthr" style={{width: '100%', backgroundColor: 'lightgrey'}}/>
                    <div className="conclusiongrid">
                        <div className="lessons">
                        <h6><b>Lessons Learned</b></h6>
                        <h6>This project taught me that there can be many variations between consumers of the
                            same product. Every consumer will have different goals and expect different 
                            things from the same product, so an effective interface must cater to their seperate needs.
                            When designing, it's important to identify the types of people who will use a product and 
                            consider each of their points of view.</h6>
                        </div>
                        <div className="softskills">
                        <h6><b>Soft Skills:</b></h6>
                        <ul className="skillslist">
                            <li>User-centered design</li>
                            <li>Interviewing ability</li>
                            <li>Consumer analysis</li>
                            <li>Storyboarding</li>
                        </ul>
                        </div>
                        <div className="hardskills">
                        <h6><b>Hard Skills:</b></h6>
                        <ul className="skillslist">
                            <li>Responsive design</li>
                            <li>Adobe Illustrator</li>
                            <li>Google Fonts</li>
                            <li>Grid and flex displays</li>
                        </ul>
                        </div>
                    </div>
                    </div></div>
                </Fade>
            </div>
        )
    }
}

export default Personas;