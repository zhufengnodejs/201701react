import React from 'react';
/**
 * 状态和属性
 * 属性只能由外界传进来，并且不能改变
 * 状态只能在组件内部初始化，只能由组件内部改变
 */
export default class Clock extends React.Component{
    constructor(props){
        super(props);//调用父组件的构造函数
        this.state = {name:'zfpx',date:new Date().toLocaleString()};//初始化状态
    }
    //组件挂载到页面中去之后触发
    //在react中更新状态不能直接修改this.state,只能用setState
    componentDidMount(){
        //这里的this指向当前组件的实例,只能用箭头函数
        this.timer = setInterval(()=>{
    //调用了setState之后，会立刻调用render方法重新渲染
   //setState里面传的是状态对象，如果原来有，则覆盖，如果原来没有，则添加，没有提及的状态属性则不变
            this.setState({date:new Date().toLocaleString()});
            this.setState({name:'ddd'});
        },60000);
    }
    //此组件将要从页面中卸载之后触发
    componentWillUnMount(){
        clearInterval(this.timer);
    }
    render(){
        console.log('render');
        return (
            <div>{this.state.name}:{this.state.date}</div>
        )
    }
}