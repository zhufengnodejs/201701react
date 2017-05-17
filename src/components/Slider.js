import React from 'react';
import './slider.less'
export default class Slider extends React.Component{
    render(){
        return (
            <div className="wrapper">
                <ul className="sliders">
                    <li><img src={this.props.images[0].src} alt={this.props.images[0].alt}/></li>
                </ul>
            </div>
        )
    }
}