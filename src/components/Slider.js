import React from 'react';
import './slider.less'
export default class Slider extends React.Component{
    render(){
        return (
            <div className="wrapper">
                <ul className="sliders">
                    {
                        this.props.images.map((image,index)=>(
                            <li key={index}>
                                <img src={image.src} alt={image.alt}/>
                            </li>
                        ))
                    }

                </ul>
            </div>
        )
    }
}