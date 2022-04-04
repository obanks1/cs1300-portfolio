import {Component} from 'react';

class Intro extends Component {
    render () {
        return (
            <div className="centered">
                <div className="centered seventy">
                    <h1 className="title">{this.props.title}</h1>
                    <h3 className="subtitle">{this.props.subtitle}</h3>
                    <br/>
                    <div className="whiteDiv smallShadow">
                        <h6><b>Objective:</b> {this.props.objective} </h6>
                        <h6><b>Subject:</b> {this.props.subject} </h6>
                        <div className="centeredRow"><hr className="inlineHR"/>
                            <p className="context"><b>{this.props.context}</b></p>
                            <hr className="inlineHR"/>
                        </div>
                    </div>
                    <br/>
                </div>
                <br/>
            </div>
        )
    }

}

/* 
Format:

<Intro 
title={""} 
subtitle={""} 
objective={""} 
subject={""} 
context={""}/>

*/

export default Intro;