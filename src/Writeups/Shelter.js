import {Component} from 'react';
import '../writeupstyle.css';
import Fade from 'react-reveal/Fade';

import Intro from './Writeup-Components/Intro';
import Conclusion from './Writeup-Components/Conclusion';


class Shelter extends Component {
    componentDidMount () {
        window.scrollTo(0, 0);
    }
    render () {
        return (
            <div className="developmentdiv">
                <Fade>
                <div className="centered">
                    {/* Intro */}
                    <Intro title={'Shelter Suitcase'} 
                    subtitle={'a temporary solution to homelessness'} 
                    objective={'Work with a small team to design and prototype a temporary solution to homelessness based on feedback from housing advocates and individuals who have experienced homelessness.'} 
                    subject={'A portable shelter that provides safe and private housing by night, and can be carried or locked up by day, providing secure storage and increased mobility.'} 
                    context={'Projects in Engineering Design (ENGN 1001) - Brown University - Spring 2021'}/>
                    
                    {/* User Research */}
                    <h3 className='subtitle'>User Research</h3>
                    <p className='largePara'>We created a survey that asked people what challenges they faced, which aspects of a potential solution mattered most to them, what they thought about several existing categories of solution, and more. We also reached out to housing advocates, homeless shelters, and people who had experienced homelessness in the past to get feedback.</p>
                    <p className='largePara'>The people we heard from often expressed to us how physically unsafe shelters could be, and that the threat of having any personal belongings stolen was omnipresent. While tents and sleeping bags provide obvious advantages, they are often cumbersome and must be carried everywhere due to the risk of theft. </p>
                    <p className='largePara'>Based on that feedback, we decided on four properties that would be key to a successful shelter design: <b>security</b>, <b>privacy</b>, <b>warmth</b>, and <b>portability</b>. Our final design incorporates these four needs in a lockable, folding, weatherproof, and lightweight rolling shelter that can be used in tandem with a sleeping bag or warm garment to keep users safe and warm at night.</p>
                    <br/>
                    <hr className='longHR'></hr>
                    <br/>
                    
                    {/* Design Inspirations */}
                    <h3 className='subtitle'>Design Inspirations</h3>
                    <br/>
                    <div className='whiteDiv smallShadow centeredRow fifty'>
                        <img src='shelterphotos\designinspo1.png' alt='shelter in a cart Yunquin Lee'></img>
                        <img src='shelterphotos/designinspo2.png' alt='Urban Caterpillar Abby Brazier'></img>
                    </div>
                    <p className='smallPara smallText'>An existing design for a “shelter in a cart” by designer Yunqin Lee provided inspiration for our lockbox shelter. Lee’s design incorporates an expandable canvas tent that can serve as shelter or storage space, and collapses into a compact rolling cart. Lee’s Cocoon shelter was never actually built or tested, so we adapted and expanded upon some of its characteristics.</p>
                    <p className='smallPara smallText'>We also drew design inspiration from the Urban Caterpillar instant shelter by designer Abby Brazier, which raises users off the ground to provide warmth and comfort and uses a collapsible tent-like setup to protect users from bad weather. The two key design aspects of this shelter that we incorporated into our final design were warmth and ease of use.</p>

                    {/* Initial Design */}
                    <br/>
                    <hr className='longHR'></hr>
                    <br/>
                    <h3 className='subtitle'>Initial Design</h3>
                    <br/>
                    <div className='whiteDiv smallShadow eighty centeredRow'>
                        <div><img src='shelterphotos/shelter mesh.png' alt='sketches of initial shelter design'></img></div>
                        <div><img src='shelterphotos/suitcase shelter locked.png' alt='diagram of shelter locked to bike rack'></img></div>
                    </div>

                    {/* Plywood Prototype */}
                    <br/>
                    <hr className='longHR'></hr>
                    <br/>
                    <h3 className='subtitle'>Plywood Prototype</h3>
                    <br/>
                    <div className='whiteDiv smallShadow fifty centeredRow' style={{gap: '15px'}}>
                        <div><img src='shelterphotos/plywood1.jpg' alt='plywood shelter prototype standing'></img></div>
                        <div><img src='shelterphotos/plywood2.jpg' alt='plywood shelter prototype expanded'></img></div>
                    </div>
                    <p className='smallPara'>Since we harbored some doubts over whether a secure, sturdy, and portable ‘lockbox shelter’ would even be possible to build, we prioritized rapidly prototyping an initial version out of plywood. This proved very useful, as it highlighted problem areas we weren’t initially aware of.</p>
                    <br/>
                    <h3 className='subtitle'>Modifications</h3>
                    <br/>
                    <div className='centeredRow eighty' style={{gap: '15px'}}>
                        <div className='whiteDiv smallShadow thirty centered'>
                            <h4>Plywood {'\u2192'} Foam/Fiberglass Composite</h4>
                            <p className='smallText' style={{textAlign: 'center'}}>It was surprisingly expensive to purchase plywood. The plywood that was within our budget turned out to be warped to a degree that caused significant problems. It exacerbated our issues with hinge gaps, made panel alignment difficult, and significantly marred the appearance. The plywood was also far too heavy and not particularly insulating. For our final design, we switched to a composite made of insulation foam and fiberglass. For a composite, it was surprisingly inexpensive. It provided significantly improved insulation, comfort, and stiffness, and the additional thickness provides an increased sense of security.</p>
                            <br/>
                            <img src='shelterphotos/foam.jpg' alt='test swatches of fiberglass on foam'></img>
                        </div>
                        <div className='whiteDiv smallShadow thirty'>
                            <h4>Improved Hinges</h4>
                            <p className='smallText' style={{textAlign: 'center'}}>The store-bought hinges we initially used to connect the back and bottom panels to the rest of the lockbox left a substantial gap in the seams. A half-inch gap would be unacceptable, since somebody would easily be able to pry it open or reach through and remove smaller objects. To this end, we designed our own hinge system using a central threaded rod that eliminated gaps in both the ‘lockbox’ and ‘shelter’ configurations.</p>
                            <img src='shelterphotos/hinge.jpg' alt='prototype of hinge'></img>
                        </div>
                        <div className='whiteDiv smallShadow thirty'>
                            <h4>Feet {'\u2192'} Rails</h4>
                            <p className='smallText' style={{textAlign: 'center'}}>During our tests, the panels held the weight we applied, but the wheels would splay out to the sides and shear through the plywood laminate at the edges. Additionally, the feet were weak and easily collapsed, and the small surface area they supported created regions of sagging. To solve this, we redesigned our support system. First, we lowered the height substantially, using smaller wheels and supports. This resulted in smaller moments when the wheels or supports splayed out to the side. We also replaced two of the wheels with pegs (akin to a rolling suitcase) and made sure the two remaining wheels had brake locks. We also moved them further away from the edges of the structure. This substantially reduced the possibility of the wheels rolling outwards. Lastly, we replaced the ‘feet’ with PVC rails, drawing inspiration from cot designs. This fixed some of the issues with the feet with minimal additional cost and weight.</p>
                            <img src='shelterphotos/rails.jpg' alt='pvc rails on a foam panel'></img>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    
                    {/* Prototype vs. Final Comparison */}
                    <h3 className='subtitle'>Prototype vs. Final</h3>
                    <br/>
                    <div className='whiteDiv centeredRow seventy' style={{gap: '20px'}}>
                    <div className='smallVideoDiv'><video controls="controls" src='shelterphotos/prototype setup.mp4' style={{width: '100%'}}></video></div>
                    <div className='largeVideoDiv'><video controls="controls" src='shelterphotos/shelter setup.mp4' style={{width: '100%'}}></video></div>
                    </div>
                    <p className='largePara'>Three important metrics we identified for assessing the success of our design were  weight, maximum deflection, and thermal resistance. A low weight ensures the shelter is portable, a small maximum deflection shows the material is stiff and won’t bend under the user’s weight, and a larger thermal resistance means that the occupant will be kept warm, allowing the shelter to be used in colder months.</p>
                    <div className='whiteDiv fifty'><img src='shelterphotos/table.png' alt='table of values for weight, deflection, and thermal resistance'></img></div>
                    <br/>
                    <br/>

                    {/* Final Prototype */}
                    <h3 className='subtitle'>Final Prototype</h3>
                    <br/>
                    <div className='whiteDiv fifty'>
                        <video controls="controls" src='shelterphotos/shelter tent comparison.mp4' style={{width: '100%'}}></video>
                    </div>
                    <br/>
                    <br/>
                    
                    {/* User Testing */}
                    <h3 className='subtitle'>User Testing and Feedback</h3>
                    <p className='smallPara'>We locked our lockbox shelter to a bike rack for two weeks in suitcase form. It was exposed to rain, snow, and wind, and did not deteriorate. The inside of the suitcase remained dry and secure, and the suitcase was not removed or tampered with. </p>
                    <p className='smallPara'>To fully understand and validate our final design choices, we used the lockbox shelter as it is intended to be used, locking it outside and sleeping in it for a night while documenting our observations and experiences. </p>
                    <br/>
                    <div className='whiteDiv centeredRow sixty' style={{gap: '15px'}}>
                        <div><img src='shelterphotos/notes1.jpg' alt='testing notes for the shelter'></img></div>
                        <div><img src='shelterphotos/notes2.jpg' alt='testing notes for the shelter'></img></div>
                    </div>
                    <p className='smallPara'>As described in the notes, the shelter was comfortable, spacious, and warm to sleep in. The polystyrene provided sufficient insulation to keep warm for most of the night, and sleeping in warmer layers would have been sufficient to remain warm the whole night. This experience proves that our material choices achieved our goal of keeping users dry and comfortable, and that the rigid walls of the shelter are better than tent fabric alone for sleeping in an urban environment. The shelter walls and legs supported the weight of a person sitting, standing, and lying down without issue.</p>

                    <p className='largePara'>We sought feedback on our design from Evie Hidysmith, the West Side Organizer for the Housing Rights Committee of San Francisco. She found the locking handle particularly important, writing, <b>“I spent a bunch of time this summer guarding my neighbor's tent while he was job searching. One of the things that makes finding housing or employment so hard for unhoused folks is that whenever they leave their belongings, there is a huge chance they won't be there when they return. This seems like a smart remedy to that, particularly if the suitcase looked like an actual suitcase (so they could go to an interview or whatever without anyone knowing they were houseless).”</b> As our prototype is hand-built and experimental, it does not look identical to a suitcase a person would use to travel: it has rails on the sides and is hand-painted. A future iteration of the design could have more discrete rails in order to blend in even more with other baggage.</p>
                    
                    {/* Conclusion */}
                    <Conclusion lessons={"This project gave me an opportunity to apply user research to a real-life engineering scenario. Time management was critical to ensuring that all parts were ordered in time and all research was completed before prototyping. It was also an opportunity to apply the physics, CAD, and thermodynamics I'd learned in class to a real project."} softSkills={['User research- interviewing and surveying potential users', 'Rapid prototyping', 'Team coordination, time management and Gantt charts']} hardSkills={['Experience using woodworking tools', 'Selecting composite materials', 'Analyzing materials for deflection and insulation']}/>
                </div>
                </Fade>
            </div>
        )
    }
}

export default Shelter;