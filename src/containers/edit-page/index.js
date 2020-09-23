import React from "react"

import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'

import './index.css'


import ResStatic from "./resources-static/index"

// var FileSaver = require('file-saver');

export default class EditPage extends React.Component {

    state = {
        editorState: BraftEditor.createEditorState('<p>Hello <b>World!</b></p>'), // 设置编辑器初始内容
        outputHTML: '<p/>'
    };
    setEditorContentAsync = () => {
        this.isLivinig && this.setState({
            // editorState: BraftEditor.createEditorState('<p>你好，<b>世界!</b><p>')
            editorState: BraftEditor.createEditorState(ResStatic.git)
        })
    };

    copyDataFn = () => {
        const textarea = document.createElement("textarea");
        document.body.appendChild(textarea);
        textarea.value = this.state.outputHTML;
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
    };

    handleChange = (editorState) => {
        this.setState({
            editorState: editorState,
            outputHTML: editorState.toHTML()
        })
    };

    componentDidMount() {
        this.isLivinig = true;
        // 3秒后更改编辑器内容
        setTimeout(this.setEditorContentAsync, 3000)

        // let data = {
        //     key:'css',
        //     value:'<p>你好，<strong>世界!</strong></p><p></p>'
        // };
        // let content = JSON.stringify(data);
        // let blob = new Blob([content], {type: "text/plain;charset=utf-8"});
        //
        // FileSaver.saveAs(blob, "hello world.txt");
    }

    componentWillUnmount() {
        this.isLivinig = false
    }

    render() {
        const {editorState, outputHTML} = this.state;

        return (<div>
            <div id="editor-box">
                <div className="braft-editor">
                    <BraftEditor value={editorState}
                                 onChange={this.handleChange}
                    />
                </div>
                <div className="output-content">
                    <div id="output-html" dangerouslySetInnerHTML={{__html: outputHTML}}/>
                </div>
            </div>
            <div>
                <div onClick={this.copyDataFn}>复制数据</div>
            </div>
        </div>)
    }
}