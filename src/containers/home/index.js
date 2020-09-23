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
                    <div>每个程序员都是编剧，每台计算机都是演员。</div>
                    <div>没有不好的编剧，只有演坏了的演员。</div>
                </div>
            </div>
            <div className="link-box">
                <div className="link-item link-mine">
                    <Link to="/"><img src={Mine}/></Link>
                </div>
                <div className="link-item link-program">
                    <Link to="/program"><label>程序</label></Link>
                </div>
                <div className="link-item link-adobe">
                    <Link to="/"><label>Adobe</label></Link>
                </div>
                <div className="link-item link-life">
                    <Link to="/"> <label>生活</label></Link>
                </div>
                <div className="link-item link-book">
                    <Link to="/"> <label>书</label></Link>
                </div>
                <div className="link-item link-idol">
                    <Link to="/"> <label>偶像</label></Link>
                </div>
                <div className="link-item link-edit">
                    <Link to="/editpage"> <label>Edit</label></Link>
                </div>
            </div>


        </div>
    }
}