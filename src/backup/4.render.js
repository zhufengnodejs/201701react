/*import React from 'react';
import ReactDOM from 'react-dom';*/
//let hello = (<h1 className="green">hello</h1>);
/// 经过了babel的转义
function createElement(type,attrs,children){
  return {type:type,attrs:attrs,children:children}
}
let hello = createElement('h1',{className:'green'},'hello');
function render(ele,container){
  let dom = document.createElement(ele.type);
  dom.innerHTML = ele.children;
  container.appendChild(dom);
}
render(hello,document.querySelector('#root'));
