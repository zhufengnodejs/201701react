/**
 * children
 * props
 **/
import React from 'react';
import ReactDOM from 'react-dom';
//React.Children.map 是react提供一个工具方法，用来实现针对可能是对象也可能是数组的映射
function Message(props) {
    console.log(props.children);
    console.log(React.Children.map);
    return (
        <ul>
            {
                React.Children.map(props.children,(item, index) => (
                <li key={index}>{item}</li>
                ))
            }
        </ul>
    )
}
ReactDOM.render(<Message>
    <span>2毛</span>
</Message>, document.querySelector('#root'));
//this.props.children 代表子元素 虚拟DOM元素数组
{/*
 <ul>
 <li><span>大毛</span></li>
 <li><span>2毛</span></li>
 <li><span>3毛</span></li>
 </ul>*/
}
