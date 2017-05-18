import React from 'react';
//每个表单元素的值是受组件状态的控制
export default class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            numA:0,
            op:'+',
            numB:0
        }
    }
    changeA(event){
        this.setState({
            numA:event.target.value
        });
    }
    changeOp(event){
        this.setState({
            op:event.target.value
        });
    }
    changeB(event){
        this.setState({
            numB:event.target.value
        });
        console.log(this.state.numA+this.state.op+this.state.numB);
    }
//warning.js:36Warning: Failed form propType: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field.
    render(){
        return (
            <div>
                <input onChange={this.changeA.bind(this)} type="text" value={this.state.numA}/>
                <input onChange={this.changeOp.bind(this)}  type="text" value={this.state.op}/>
                <input onChange={this.changeB.bind(this)}  type="text" value={this.state.numB}/>
                <span>{eval(this.state.numA+this.state.op+this.state.numB)}</span>
            </div>
        )
    }
}