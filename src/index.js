import React from 'react';
import ReactDOM from 'react-dom';
//JSX语法的使用 就一种JS和xml的混合写法
//{}里面可以放JS表达式  是变量和操作符的组合 ,必须返回一个值
// {} 里不能放对象，只能放数字和字符串
function formatUser(user){
     return user.firstname + user.lastname
}
let user = {
    firstname:'张',
    lastname:'三'
}
let msg = <h1>欢迎{formatUser(user)}光临</h1>;

ReactDOM.render(msg,document.querySelector('#root'));