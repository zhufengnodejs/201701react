
import React from 'react';
import ReactDOM from 'react-dom';
//JSX语法的使用 就一种JS和xml的混合写法
//{}里面可以放JS表达式  是变量和操作符的组合 ,必须返回一个值
// {} 里不能放对象，只能放数字和字符串
//虚拟DOM元素可以作为函数返回值、函数参数，还可以在if 和for循环中使用
function formatUser(user){
     //return user.firstname + user.lastname
    if(user)
return <h1>欢迎{user.firstname + user.lastname}光临</h1>;
else
        return <h1>欢迎陌生人光临</h1>
}
let user = {
    firstname:'张',
    lastname:'三'
}
/*//react元素=虚拟DOM元素
let msg = */

ReactDOM.render(formatUser(),document.querySelector('#root'));


/*
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
*/

