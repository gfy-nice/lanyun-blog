import React from "react"
import ResStatic from "../edit-page/resources-static/index"

import "./index.css"

export default class Program extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }


    render() {
        return <div id="program-box">
            <div className="output-html-box" dangerouslySetInnerHTML={{__html: ResStatic.git}}/>
        </div>
    }
}