/*import '../node_modules/bootstrap/dist/css/bootstrap.css';*/
//没有. ..的话会从node_modules目录下加载
import React from 'react';

class Panel extends React.Component{
    render(){
        let {type,head,body,footer} = this.props;
        return (
            <div className={"panel panel-"+type}>
                <Header content={head}/>
                <div className="panel-body">{body}</div>
                <div className="panel-footer">{footer}</div>
            </div>
        )
    }
}
class Header extends React.Component{
    render(){
        return   (
            <div className="panel-heading">{this.props.content}</div>
        );
    }
}
export default Panel;