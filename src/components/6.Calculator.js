import React from 'react';
import ReactDOM from 'react-dom';
export default class Calculator extends React.Component{
    constructor(props){
        super(props);
    }
    handleChange=()=>{
        console.log(this.refs);//{numA:numA真实DOM}
        let numA = this.numA.value;//可以得到真实的DOM元素
        let op = this.refs.op.value;
        let numB = this.refs.numB.value;
        this.refs.result.innerText = eval(numA+op+numB)
    }
    render(){
        //ref如果指向的是一个箭头函数，那么当这个虚拟DOM元素被挂载到页面中之后就会立刻执行,形参里的ref指的是真实的DOM元素
        return (
            <div>
                <input ref={ref=>this.numA = ref} onChange={this.handleChange} style={{width:40}} type="text" defaultValue={0}/>
                <input ref="op" onChange={this.handleChange}  style={{width:30}} type="text" defaultValue="+"/>
                <input ref="numB"  onChange={this.handleChange}  style={{width:40}} type="text" defaultValue={0}/>=
                <span ref="result"></span>
            </div>
        )
    }
}