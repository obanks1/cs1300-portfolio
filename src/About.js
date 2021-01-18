import {Component} from 'react';

class About extends Component {
    render () {
        return (
            <div className="centered"><div className="aboutDiv">
                <img className="portrait" src="tree.JPG" alt="placeholder for self"></img>
                <div className="about">
                    <h3>Nice to meet you!</h3>
                    <p className="aboutP">I'm Olivia, a 4th year student</p>
                    <p className="aboutP">🗲 from <b>Baltimore, Maryland</b></p>
                    <p className="aboutP">🗲 studied Engineering Science at <b>Oxford University</b> 2019-2020</p>
                    <p className="aboutP">🗲 currently studying Computer Engineering at <b>Brown University</b> edc. May 2021</p>
                    <br></br>
                    <p className="aboutP">Worked at Johns Hopkins Applied Physics Lab (2019 & 2020)</p>
                    <p className="aboutP">Johns Hopkins University CSMS Lab (2018)</p>
                    <p></p>
                    <br></br>
                    <p className="aboutP">In my free time I enjoy doing parkour, writing stories, and making music.</p>
                </div>
            </div></div>
        )
    }
}

export default About;