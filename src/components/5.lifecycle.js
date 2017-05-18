import React from 'react';
import ReactDOM from 'react-dom';
export default class Counter extends React.Component {
    render() {
        return (
            <div>
                <button className="btn btn-primary">
           父计数器 <span className="badge">0</span>
                </button>
            </div>
        )
    }
}