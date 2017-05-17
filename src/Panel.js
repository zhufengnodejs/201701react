/*import '../node_modules/bootstrap/dist/css/bootstrap.css';*/
//没有. ..的话会从node_modules目录下加载
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//'React' must be in scope when using JSX
//React.createElement
let a =10;
let Panel = ({type,head,body,footer})=>{
    return (
        <div className={"panel panel-"+type}>
            <div className="panel-heading">{head}</div>
            <div className="panel-body">{body}</div>
            <div className="panel-footer">{footer}</div>
        </div>
    )
}
export default Panel;