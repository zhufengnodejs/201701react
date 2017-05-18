/**
 * children
 * props
 **/
import React from 'react';
import ReactDOM from 'react-dom';
function Message(props){
  return (
      <ul>
          {
              props.children
          }
      </ul>
  )
}
ReactDOM.render(<Message>
    <span>大毛</span>
    <span>2毛</span>
    <span>3毛</span>
</Message>,document.querySelector('#root'));
//this.props.children 代表子元素 虚拟DOM元素数组
{/*
<ul>
    <li><span>大毛</span></li>
    <li><span>2毛</span></li>
    <li><span>3毛</span></li>
</ul>*/}
