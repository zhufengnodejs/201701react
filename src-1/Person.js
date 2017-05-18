import React from 'react';
//Person.say();
//new Person().render();
//   this.props = props;
export default class Person extends React.Component{
    static say(){}
    render(){
        return (
            <div>
                <p>姓名:{this.props.name}</p>
                <p>年龄:{this.props.age}</p>
            </div>
        )
    }
}
