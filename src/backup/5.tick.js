import React from 'react';
import ReactDOM from 'react-dom';
//react元素是不可变的
//但是界面上的内容是要每秒变化一次
//界面上的内容是根据元素渲染render出来的
let render = ()=>{
    let ele = <h1>hello{new Date().toLocaleString()}</h1>;
    ReactDOM.render(ele,document.querySelector('#root'));
}
//render();
setInterval(render,1000)