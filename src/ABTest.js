import {Component} from 'react';
import './abteststyle.css';
import './generalstyle.css';
import Fade from 'react-reveal/Fade';

class ABTest extends Component {
    render () {
        return (
        <div className="ABtestdiv">
            <Fade>
            <div className="centered"><div className="introdiv">
                <h1 className="title">A/B Testing</h1>
                <h3 className="subtitle">a case study on statistical analysis in design</h3>
                <div className="introcap smallshadow">
                    <h6><b>Objective:</b> perform an A/B test and statistical analysis to 
                    gather insight into two different UI designs.</h6>
                    <h6><b>Subject:</b> CACT-US, a fake website selling plants</h6>
                    <div className="centered"><hr className="inlinehr"/>
                    <p className="context"><b>UI/UX (CS 1300) - Brown University - Fall 2020 </b></p>
                    <hr className="inlinehr"/></div>
                </div>
            </div></div>

            <br></br>
            <h3 className="subtitle">Versions A and B</h3>
            <br></br>
            <div className="centered"><div className="ABdiv">
            <div className="pagediv smallshadow">
                <h4>Version A: vertical flow</h4><img src="abtestphotos/Design A.gif" className="pagephoto" alt="version A of website"></img>
            </div>
            <div className="pagediv smallshadow">
                <h4>Version B: horizontal flow</h4><img src="abtestphotos/Design B.png" className="pagephoto" alt="version B of website"></img>
            </div>
            </div></div>

            <br></br>
            <div className="centered metricsDiv">
            <p>I ran statistical tests on two metrics:</p>
            <p style={{width: '80%'}}><b>Time to Completion</b> (Time it takes to order cacti)</p>
            <p style={{width: '80%'}}><b>Return Rate</b> (Number of times a user returned to the page)</p>
            </div>

            <br></br>
            <br></br>

            <div className="centered"><div className="hypothesisdiv">
            <h3 className="subtitle">Hypotheses</h3>
            <br></br>
            <p>The null hypothesis for Time to Completion is that there is no difference
                in the time it takes to order cacti. My alternative hypothesis is that 
                users will take longer to order on version A because they have to scroll
                back and forth to see all the items.
            </p>
            <p>The null hypothesis for Return Rate is that there will be no difference between
                the return rates for the two sites. My alternative hypothesis is that the return 
                rate for version A will be higher, because users may return if they feel like they
                missed an item, and this is easy to do when the items are more spread out.
            </p>
            </div></div>
            <br></br>
            <br></br>
            <h3 className="subtitle">Data Collection</h3>
            <div className="centered"><div style={{width: '80%'}}>
            <p style={{textAlign: 'center'}}>I created a link that would open to version A of the site 50% of the time and version B 50% of the time.
                The link was sent to 40 people, who were instructed to fill their cart with at least $150
                worth of plants. Afterwards I opened Heroku's logs to see what happened. 
            </p>
            </div></div>

            <br></br>
            <div className="centered"><div className="hypothesisdiv">
            <img src="abtestphotos/infographic.png" alt="infographic explaining stats test results" style={{width: '100%'}}></img>
            </div></div>

            <br></br>
            <h3 className="subtitle">Takeaways</h3>
            <div className="centered"><div style={{width: '80%'}}>
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
            </div></div>
            <br></br>

            <div className="centered"><div className="conclusion smallshadow">
            <h3 className="subtitle">Conclusion</h3>
            <hr className="shorthr" style={{width: '100%', backgroundColor: 'lightgrey'}}></hr>
            <div className="conclusiongrid">
                <div className="lessons">
                <h6><b>Lessons Learned</b></h6>
                <h6>This project taught me how to collect concrete data on webpage performance metrics
                    and use statistics to analyze the effectiveness of different designs. Doing A/B testing
                    led me to consider the impact small design changes can have on site performance, potentially
                    in unexpected ways. 
                </h6>
                </div>
                <div className="softskills">
                <h6><b>Soft Skills:</b></h6>
                <ul className="skillslist">
                    <li>Analytical Thinking</li>
                </ul>
                </div>
                <div className="hardskills">
                <h6><b>Hard Skills:</b></h6>
                <ul className="skillslist">
                    <li>A/B Testing</li>
                    <li>Statistical Analysis</li>
                    <li>Data Processing</li>
                </ul>
                </div>
            </div>
            </div></div>

            <br></br>
            </Fade>
        </div>
        )
    }
}

export default ABTest;