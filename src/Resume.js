import {Component} from 'react';

class Resume extends Component {

    render() { return (
        <div className="resume">
            <img src="resume/page1.jpg" alt="first page of resume" className="resumePage"></img>
            <br/>
            <br/>
            <img src="resume/page2.jpg" alt="second page of resume" className="resumePage"></img>
            <br/>
            <br/>
            <p>download resume pdf <a href="resume/resume.pdf" download>here</a></p>
            <br/>
            <br/>
            <br/>
        </div>
    )} 
}

export default Resume