import { Component } from "react";

class Conclusion extends Component {
    createList = item => {
        return (
            <li>{item}</li>
        )
    }

    render () {
        let softSkillsList = this.props.softSkills.map(this.createList);
        let hardSkillsList = this.props.hardSkills.map(this.createList);
        return (
            <div className="centered">
                <br/>
                <br/>
                <div className="whiteDiv eighty smallShadow">
                    <h3 className="subtitle">Conclusion</h3>
                    <hr className="shorthr" style={{width: '100%', backgroundColor: 'lightgrey'}}/>
                    <div className="conclusionGrid">
                        <div className="lessons">
                            <h6><b>Lessons Learned</b></h6>
                            <h6>{this.props.lessons}</h6>
                        </div>
                        <div className="softSkills">
                            <h6><b>Soft Skills:</b></h6>
                            <ul className="skillsList">
                                {softSkillsList}
                            </ul>
                        </div>
                        <div className="hardSkills">
                            <h6><b>Hard Skills:</b></h6>
                            <ul className="skillsList">
                                {hardSkillsList}
                            </ul>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        )
    }
}

/*
Format:

<Conclusion 
lessons={""} 
softSkills={[""]} 
hardSkills={[""]}/>

*/

export default Conclusion;