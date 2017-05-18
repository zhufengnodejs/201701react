/**
 * 定义组件
 * Function
 * Class
 **/
import React from 'react';
import ReactDOM from 'react-dom';
/**
 * 一个组件需要有属性和状态
 * 属性用来存放那些由父组传入的，自己不能改变的数据
 * 状态是组件内部初始化，而且只能由内部修改
 */
/*function Person(props){
  return (
      <div>
          <p>姓名:{props.name}</p>
      </div>
  )
}*/
//在组件的方法里，只有constructor render还有其它的生命周期函数里面的this指向当前组件的实例
//除此以外其它方法里的this都指向undefined,所以需要手工绑定this
// 1.在绑定的时候bind this 2.在绑定的时候用箭头函数 3. 在定义的时候使用箭头函数
class Person extends React.Component{
    constructor(props){
        super(props);// this.props = props;
        //这种给状态赋值的方式只能在构造函数中初始的时候用
        this.state = {happy:true};
    }
    //返回默认属性对象
  /*  static get defaultProps(){
        return {name:'无名'};
    }*/
    //检验属性的类型和必填
   /* static propTypes = {

    }*/
    changeHappy = ()=>{
        this.setState({
            happy: !this.state.happy
        })
    }
    render(){
        return (
            <div>
                <p>姓名:{this.props.name} {this.state.happy?'开心':'伤心'}</p>
                <button onClick={this.changeHappy}>改变</button>

            </div>
        )
    }
}
//默认属性对象
Person.defaultProps = {
    name:'无名氏'
}
//规定了使用此组件时候必须 传入的属性和类型
//warning.js:36Warning: Failed prop type: The prop `name` is marked as required in `Person`, but its value is `undefined`.
Person.propTypes = {
  name:React.PropTypes.string.isRequired
}
//warning.js:36Warning: Failed prop type: Invalid prop `name` of type `number` supplied to `Person`, expected `string`.
/**
 * 1. 把属性封装成一个属性对象 {name:"zfpx"}
 * 2. 把此属性对象传给Person函数，得到返回值虚拟DOM元素
 * 3. 把虚拟DOM元素转成真实DOM元素插入到root内部
 */
let p = {age:8,name:9};
ReactDOM.render(<Person {...p}/>,document.getElementById('root'));