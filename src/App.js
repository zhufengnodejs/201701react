/**
 *  组件有两种声明方式，函数 类
 *  函数创建组件的话，最终渲染的是函数的返回值
 *  1. 函数需要返回并且只能返回一个顶级React元素
 */
import React from 'react';
//props是一个对象
//props是属性对象，它的值来自于使用组件的时候传递进来的
//组件的名称一定是大写字母开头
function App(props){
    return <h1>hello <span>{props.name} </span></h1>
}
export default App;