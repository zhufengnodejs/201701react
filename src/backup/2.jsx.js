import React from 'react';
import ReactDOM from 'react-dom';

/*let div1 = <div style="width:100px;height:100px;background-color:red" ></div>;*/
let style = {width:100,height:100,backgroundColor:'red'};
//指定类名必须用className, 因为class是js关键字
let div1 = <div className="green" style={style}>hello</div>;
ReactDOM.render(div1,document.querySelector('#root'));