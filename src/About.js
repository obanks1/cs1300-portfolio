import {Component} from 'react';

class About extends Component {
    render () {
        return (
            <div className="centered"><div className="aboutDiv">
                <img className="portrait" src="me.JPEG" alt="yours truly on a rock with sunglasses"></img>
                <div className="about">
                    <h3>Nice to meet you!</h3>
                    <p className="aboutP">I'm Olivia, an engineer and designer</p>
                    <p className="aboutP">🗲 from <b>Baltimore, Maryland</b></p>
                    <p className="aboutP">🗲 studied Computer Engineering at <b>Brown University</b> 2017-2021</p>
                    <p className="aboutP">🗲 studied Engineering Science at <b>Oxford University</b> 2019-2020</p>
                    <br/>
                    <p className="aboutP">Worked at Princeton Consultants (2022 - 2023)</p>
                    <p className="aboutP">Worked at Johns Hopkins Applied Physics Lab (2019 - 2021)</p>
                    <p className="aboutP">Johns Hopkins University CSMS Lab (2018)</p>
                    <p></p>
                    <br/>
                    <p className="aboutP">In my free time I enjoy rock climbing, writing stories, and making music.</p>
                </div>
            </div></div>
        )
    }
}

export default About;