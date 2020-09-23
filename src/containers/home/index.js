import React from "react"
import {Link} from "react-router-dom"
import Mine from "../../static/image/mine.jpg"
import Banner1 from "../../static/image/banner1.jpg"
import Banner2 from "../../static/image/banner2.jpg"
import Banner3 from "../../static/image/banner3.jpg"
import Banner4 from "../../static/image/banner4.jpg"
import Banner5 from "../../static/image/banner5.jpg"

import "./index.css"

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }


    render() {
        return <div>
            <div className="logo-box">蓝云</div>
            <div className="banner-box">
                <img src={Banner1}/>
                <div className="bg-mask">
                    <label>每个程序员都是编辑，每台计算机都是演员。</label>
                </div>
            </div>
            <div className="link-box">
                <div className="link-item link-mine">
                    <Link to="/"><img src={Mine}/></Link>
                </div>
                <div className="link-item link-mine">
                    <Link to="/program"><label>程序</label></Link>
                </div>
                <div className="link-item link-mine">
                    <Link to="/editpage"><label>Adobe</label></Link>
                </div>
                <div className="link-item link-mine">
                    <Link to="/"> <label>生活</label></Link>
                </div>
                <div className="link-item link-mine">
                    <Link to="/"> <label>书中屋</label></Link>
                </div>
                <div className="link-item link-mine">
                    <Link to="/"> <label>偶像</label></Link>
                </div>
            </div>


        </div>
    }
}