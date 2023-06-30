import {Component} from 'react';
import '../writeupstyle.css';
import Fade from 'react-reveal/Fade';
import Intro from './Writeup-Components/Intro';
import Conclusion from './Writeup-Components/Conclusion';

class ABTest extends Component {
    componentDidMount () {
        window.scrollTo(0, 0);
    }
    render () {
        return (
        <div className="ABtestdiv">
            <Fade>
            <div className="centered">
                <Intro title={'A/B Testing'} 
                subtitle={'a case study on statistical analysis in design'} 
                objective={'perform an A/B test and statistical analysis to gather insight into two different UI designs.'} 
                subject={'CACT-US, a fake website selling plants'} 
                context={'UI/UX (CS 1300) - Brown University - Fall 2020'}/>

                <h3 className="subtitle">Versions A and B</h3>
                <br/>
                <div className="centeredRow eighty" style={{gap: '15px'}}>
                    <div className="centered whiteDiv fifty smallShadow">
                        <h4>Version A: vertical flow</h4>
                        <img src="abtestphotos/Design A.gif" alt="version A of website"></img>
                    </div>
                    <div className="centered whiteDiv fifty smallShadow">
                        <h4>Version B: horizontal flow</h4>
                        <img src="abtestphotos/Design B.png"  alt="version B of website"></img>
                    </div>
                </div>

                <br/>
                <p className='largePara'>I ran statistical tests on two metrics: </p>
                <p className='largePara'><b>Time to Completion</b> (Time it takes to order cacti) & <b>Return Rate</b> (Number of times a user returned to the page)</p>

                <br/>
                <br/>

                <div className="whiteDiv eighty smallShadow">
                    <h3 className="subtitle">Hypotheses</h3>
                    <p className='centeredText'>My hypothesis for Time to Completion is that users will take longer to order on version A, because they have to scroll to see all the items.</p>
                    <p className='centeredText'>My hypothesis for Return Rate is that the return rate for version A will be higher, because users may return if they feel like they missed an item, and this is easy to do when the items are more spread out.</p>
                    <p className='centeredText'><b>null hypothesis:</b> a statistical theory which posits that there is no statistical relationship between two variables.</p>
                </div>
                <br/>
                <br/>
                <h3 className="subtitle">Data Collection</h3>
                <p className="largePara">I created a link that would open to version A of the site 50% of the time and version B 50% of the time.
                    The link was sent to 40 people, who were instructed to fill their cart with at least $150
                    worth of plants. Afterwards I opened Heroku's logs to see what happened. 
                </p>

                <br/>
                <img src="abtestphotos/infographic.png" alt="infographic explaining stats test results" className='eighty whiteDiv longShadow'></img>

                <br/>
                <h3 className="subtitle">Takeaways</h3>
                <div className="eighty">
                    <ul className="takeawayList">
                        <li>The test accuracy was limited by the low number of test users. Only 19 people filled 
                        out the survey, making it hard to reach statistical significance.
                        </li>
                        <li>Although it didn't reach significance, the time users spent on Version A trended longer,
                        which makes sense because of the excessive scrolling the page demands. Generally, good 
                        design should make all necessary information as accessible as possible.
                        </li>
                        <li>It's important to choose the right metrics for evaluating the two versions against
                        each other. Time to completion or return rate might not correllate with increased 
                        revenue on the site. Click-through rate or money spent would be more effective metrics.
                        </li>
                    </ul>
                </div>

                <Conclusion 
                lessons={"This project taught me how to collect concrete data on webpage performance metrics and use statistics to analyze the effectiveness of different designs. Doing A/B testing led me to consider the impact small design changes can have on site performance, potentially in unexpected ways."} 
                softSkills={["Analytical Thinking"]} 
                hardSkills={["A/B Testing", "Statistical Analysis", "Data Processing"]}/>
            </div>
            </Fade>
        </div>
        )
    }
}

export default ABTest;