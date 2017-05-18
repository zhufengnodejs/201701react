import React from 'react';
import $ from 'jquery';
/**
 * 1. 为输入框绑定 onchange事件，当有新的值的时候会执行方法
 * 2. 获得输入框的值，然后调用百度的接口获取联想数组
 * 3. 把数组赋给状态对象的words属性
 */
export default class Suggest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {wd:'',words: [],pos:-1};
    }

    handleChange = (event) => {
        let wd = event.target.value;
        this.wd = wd;
        this.setState({wd});
        // 1.success
        $.ajax({
            type: 'GET',//请求的方法为GET
            url: `http://www.baidu.com/su`,
            data: {wd},//此对象会转成查询字符串放在url后面
            jsonp: 'cb',//指定参数名 cb=方法名
            dataType: 'jsonp',//指定返回值的类型
            success: (result) => {
                this.setState({
                    words: result.s
                });
            }
        });

    }
    handleKeyDown = (event)=>{
        let code = event.keyCode;
        if(code == 38 || code == 40){
            let pos = this.state.pos;
            if(code == 38){//向上
                pos--;
                if(pos == -2){
                    pos = this.state.words.length -1;
                }
            }else if(code == 40){//向下
                pos++;
                if(pos == this.state.words.length){
                    pos = -1;
                }
            }
            this.setState({pos,wd:this.state.words[pos]});
        }
    }
    render() {
        return (
            <div style={{marginTop: 30}} className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <input type="text" className="form-control" value={this.state.pos ==-1?this.wd:this.state.wd} onKeyDown={this.handleKeyDown} onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <ul className="list-group">
                            {
                                this.state.words.map((word, index) => (
                                    <li className={"list-group-item "+(this.state.pos==index?'active':'')} key={index}>{word}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}