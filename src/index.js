import React from 'react';
import ReactDOM from 'react-dom';
//import Panel from  './Panel2';
import Comment from  './Comment';
import 'bootstrap/dist/css/bootstrap.css';
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
let message = {
    author:{
        avatarUrl:'http://img.qq745.com/uploads/allimg/150104/1-150104153423-50.jpg',
        name:'张三'
    },
    text:'这是我的评论',
    date:new Date()
}
// ...表示展开运算符
ReactDOM.render(<Comment {...message} ></Comment>,document.getElementById('root'));



