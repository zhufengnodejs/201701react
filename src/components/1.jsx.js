/**
 * React是一个用户构建用户界面的库
 */
import React from 'react';
import ReactDOM from 'react-dom';
// React元素 虚拟DOM(它是用来描述真实DOM结构，最终会由ReactDOM把虚拟DOM转成真实DOM)
//let msg = <h1>hello</h1>;
// react jsx javascript+xml混合写法
ReactDOM.render(<h1 style={{backgroundColor:'red'}} className="green">hello</h1>,document.querySelector('#root'));

/**
 * 标签如果是小写字母开头的话，那么它就是一个React元素
 * 就会把它转成真实的DOM元素并插入到root内部
 *
 */
