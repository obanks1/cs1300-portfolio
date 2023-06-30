import {Component} from 'react';
import '../writeupstyle.css';
import Fade from 'react-reveal/Fade';

import Intro from './Writeup-Components/Intro';
import Conclusion from './Writeup-Components/Conclusion';

class Wander extends Component {
    componentDidMount () {
        window.scrollTo(0, 0);
    }
    render () {
        return (
            <div className="developmentdiv">
                <Fade>
                <div className="centered">
                    <Intro 
                    title={"Wander"} 
                    subtitle={"a travel planning app"} 
                    objective={"Work with a small team to develop a functional web application to client specifications."} 
                    subject={"Wander, a travel-planning web app for exploring new destinations, creating itineraries, and organizing and sharing trips with friends and family."} 
                    context={"Modern Web and Mobile Applications (CS 1320) - Brown University - Spring 2021"}/>

                    <div className="whiteDiv forty longShadow noto">
                        <img src="wanderphotos/wander white crop.png" alt="wander logo"/>
                        <p className='centeredText'>Have you ever found yourself struggling to keep track of places you’d like to visit, or realizing that you and your travel partners are out of sync on your itinerary plans?</p>
                        <p className='centeredText'>Wander is a place where you can plan, organize, manage, and share your past and future trips with your friends and family.</p>
                        <p className='centeredText'>By using Google Maps API, our app can keep track of your destinations and give the optimal times and best routes to visit them.</p>
                        <p className='centeredText'>With our app, travelers can explore potential destinations, plan out their dream trip, and create an itinerary to make their trip a reality.</p>
                    </div>
                    <br/>
                    <br/>
                    <h3 className="subtitle">Specifications</h3>
                    <br/>
                    <p className="smallPara">We met with the client to determine specifications for the project. Based on the client’s needs, we determined that a minimum viable product would consist of:</p>
                    <div className='centered eighty'>
                        <ul>
                            <li>A map interface where locations could be marked</li>
                            <li>A search function to find places on the map</li>
                            <li>Ability to create a trip itinerary</li>
                            <li>Ability to share a trip with friends and family</li>
                            <li>User accounts to keep track of saved trips</li>
                        </ul>
                    </div>
                    <p className='smallPara'>We also discussed security and privacy concerns. To minimize the possibility of leaked emails and passwords, we decided to use Google logins, and to keep itineraries private unless the user shares them with a link.</p>
                    <br/>
                    <h3 className='subtitle'>Initial Sketches</h3>
                    <br/>
                    <div className='whiteDiv eighty smallShadow centeredRow' style={{gap: '5px'}}>
                        <div><img src='wanderphotos/sketch1 half1.jpg' alt='sketch of wander homepage'/></div>
                        <div><img src='wanderphotos/sketch1 half2.jpg' alt='sketch of wander trip planner'/></div>
                        <div><img src='wanderphotos/sketch2.jpg' alt='sketch of wander signup page'/></div>
                    </div>
                    <br/>
                    <br/>
                    <h3 className="subtitle">Wireframes</h3>
                    <p className='largePara'>After establishing the client’s needs, I used Figma to create a wireframe for every page of the website. The intent was to help establish the scope and features of each page and the relationships between pages before coding began. It also helped me identify what graphical elements needed to be created and to test out different designs.</p>
                    <br/>
                    <div className='whiteDiv seventy smallShadow'>
                        <div className='centeredRow' style={{gap: '5px'}}>
                            <div><img src='wanderphotos/wireframe4.png' alt='wireframe of wander home screen map'/></div>
                            <div><img src='wanderphotos/wireframe2.png' alt='wireframe of wander sign up'/></div>
                        </div>
                        <div className='centeredRow' style={{gap: '5px'}}>
                            <div><img src='wanderphotos/wireframe5.png' alt='wireframe of wander trip planner edit mode'/></div>
                            <div><img src='wanderphotos/wireframe1.png' alt='wireframe of wander trip planner'/></div>
                        </div>
                        <div className='centeredRow' style={{gap: '5px'}}>
                            <div><img src='wanderphotos/wireframe7.png' alt='wireframe of blank wander pin'/></div>
                            <div><img src='wanderphotos/wireframe3.png' alt='wireframe of filled out wander pin'/></div>
                        </div>
                    </div>
                    <p className='largePara'>We ran the wireframes by our client. She liked the design aesthetics and gave us the go-ahead to start building the project.</p>
                    <br/>
                    <h3 className='subtitle'>Frontend Tech</h3>
                    <p className='largePara'>Both the client and I had experience with React, making it an obvious choice for the framework. I used the Google-Map-React package to integrate the <b>Google Maps API</b> with our app, and React-Places-Autocomplete to search through <b>Google Maps Places</b> and get the latitude and longitude for plotting on the map interface. We also used React-Google-Login to enable users to login with <b>Google OAuth</b>.</p>
                    <br/>
                    <h3 className='subtitle'>Backend & Database tech</h3>
                    <p className='largePara'>We used <b>Express</b> and <b>Node.JS</b> for the backend. We used <b>Cookie Parser</b> for login token management, <b>UUIDv4</b> to create the trip ID, <b>PG Client</b> for handling database interaction, <b>JSONWebToken</b> to generate and access shareable trips, <b>Google-Auth-Library</b> for login, and <b>NGeoHash</b> to hash together latitude and longitude coordinates. </p>
                    <p className='largePara'>The client preferred a relational database, so we used <b>PostgreSQL</b>.</p>
                    <br/>
                    <div className='whiteDiv forty longShadow'>
                        <img src='wanderphotos/database.png' alt='diagram of database relations'></img>
                    </div>
                    <br/>
                    <h3 className='subtitle'>Testing</h3>
                    <p className='largePara'>My team tested the backend endpoints using <b>Postman</b> and verified that the security middleware functioned as intended. </p>
                    <p className='largePara'>I ran user testing on the prototype to get feedback on the UI and identify bugs with the software. I also used <b>WebAim WAVE</b> to check for accessibility concerns. I adapted the website to size dynamically and work on mobile devices, and planned for internationalization by using key-value pairs so that pages could be implemented in multiple languages easily. </p>
                    <br/>
                    <h3 className='subtitle'>Final Product</h3>
                    <br/>
                    <div className='whiteDiv eighty longShadow'>
                        <div><img src='wanderphotos/homepage.png' alt='wander homepage'></img></div>
                        <br/>
                        <div><img src='wanderphotos/athens.png' alt='map of greece'></img></div>
                        <br/>
                        <div><img src='wanderphotos/pin edit.png' alt='pin edit screen'></img></div>
                    </div>
                    <br/>
                    <p className='largePara'>Our client was very pleased with the final product and felt that with our documentation she would be able to continue developing the app into a startup. </p>
                    <br/>
                    <h3 className='subtitle'>Future Directions</h3>
                    <p className='largePara'>Some opportunities for further work on this app include:</p>
                    <div className='centered eighty'>
                        <ul>
                            <li>Ability to browse popular locations using geohashing of pins, and see other users’ pictures if they’re posted publicly</li>
                            <li>Concurrent editing of a trip by multiple users</li>
                            <li>Custom pictures for pins</li>
                            <li>Commercial integration with prices for tickets/hotels</li>
                            <li>Ability to plot a route between locations and view travel time</li>
                        </ul>
                    </div>

                    <Conclusion 
                    lessons={"Working with a client and small team to build a website from start to finish gave me a realistic project experience. The process of integrating the frontend and backend was challenging, but working through it improved my organizational and communication skills since it required all team members to be on the same page."} 
                    softSkills={["Working towards client specifications", "Team communication", "Interviewing users for feedback"]} 
                    hardSkills={["Working with cookies", "PostgreSQL (relational databases)", "Google Maps, Places, and OAuth APIs"]}/>
                </div>
                </Fade>
            </div>
        )
    }
}

export default Wander;