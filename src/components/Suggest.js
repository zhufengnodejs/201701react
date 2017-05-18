import React from 'react';
import $ from 'jquery';
/**
 * 1. 为输入框绑定 onchange事件，当有新的值的时候会执行方法
 * 2. 获得输入框的值，然后调用百度的接口获取联想数组
 * 3. 把数组赋给状态对象的words属性
 */
export default class Suggest extends React.Component{
    constructor(props){
        super(props);
        this.state = {words:[]};
    }
    render(){
        return (
            <div style={{marginTop:30}} className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <input type="text" className="form-control"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <ul className="list-group">
                            <li className="list-group-item">Airbnb</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}