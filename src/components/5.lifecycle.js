import React from 'react';
import ReactDOM from 'react-dom'
/**
 * 1.实例化组件类，并调用它的render方法得到虚拟DOM元素
 * 2.React将要把此虚拟DOM元素挂载到页面中
 */
export default class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state = {number:0};
    }
    componentWillMount(){
        console.log('1. componentWillMount 组件将要被挂载')
    }
    componentDidMount(){
        console.log('3. componentDidMount 组件挂载结束')
    }
    handleClick=() =>{
        this.setState({number:this.state.number+1});
    }
    //组件是否应该更新
    shouldComponentUpdate(newProps,newState){
        console.log('4. shouldComponentUpdate 组件是否要被更新')
       if(newState.number%2==0){
           return true;
       }else{
           return false;//如果返回false render方法将不再执行
       }
    }
    componentWillUpdate(){
        console.log('5. componentWillUpdate 组件将要更新')
    }
    componentDidUpdate(){
        console.log('6. componentWillUpdate 组件更新完成')
    }
    componentWillUnMount(){
        console.log('7. componentWillUnMount 组件将要被卸载')
    }
    render() {
        console.log('2. render 渲染')
        return (
            <div>
                <button onClick={this.handleClick} className="btn btn-primary">
           父计数器 <span className="badge">{this.state.number}</span>
                </button>
            </div>
        )
    }
}