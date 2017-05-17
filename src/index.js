import React from 'react';
import ReactDOM from 'react-dom';
import Person from  './Person.js';
//  {name:"zfpx",age:"9"}
//自己实现一个面板组件
/**
 * 渲染一个组件的时候
 * 1. 先去实例化这个组件类
 * 2. 调用组件实例的render方法返回一个react元素
 */
/*let p = new Person();
p.props = {name:"zfpx",age:"9"};
let ele = p.render();*/

ReactDOM.render(<Person name="zfpx" age="8" ></Person>,document.getElementById('root'));



