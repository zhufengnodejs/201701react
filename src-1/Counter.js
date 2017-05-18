/**
 * 计数器 属性和状态
 **/
import React from 'react';
export default class Counter extends React.Component{
   constructor(props){
       super(props);
       this.state = {number:0};
   }
   //construtor render 和生命周期函数里的this指向组件的实例,但是其它的所有函数this指向undefined
   handleClick(){
      this.setState({
          number:this.state.number + 1
      });
   }
   render(){
       return (
           <div>
               <p>{this.state.number}</p>
               <button onClick={this.handleClick.bind(this)}>+</button>
           </div>
       )
   }
}