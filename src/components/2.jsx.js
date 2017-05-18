let names = ['大毛','2毛'];
{/*
<ul>
    <li>大毛</li>
    <li>二毛</li>
    <li>三毛</li>
</ul>*/}
import React from 'react';
import ReactDOM from 'react-dom';
//Each child in an array or iterator should have a unique "key" prop.
//Encountered two children with the same key, `大毛`. Child keys must be unique; when two children share a key, only the first child will be used.
ReactDOM.render(
    <ul>
        {
          names.map((name,index)=>(
              <li key={index}>{name}</li>
          ))
        }
    </ul>,document.querySelector('#root')
);
