import React from 'react';
require('./slider.css');
export default class Slider extends React.Component{
    constructor(props){
        super(props);
        this.state = {index:0};
    }
    componentDidMount(){
        this.timer = setInterval(()=>{
            this.setState({index:this.state.index+1});
        },2000);
    }
    render(){
        let images = this.props.images;
        let style = {
            width:300*images.length,
            left:this.state.index*-300
        }
        return (
            <div className="wrapper">
                <ul style={style} className="sliders">
                    {
                        images.map((item,index)=>(
                            <li className="slider" key={index}>
                                <img src={item.src} alt={item.alt}/>
                            </li>
                        ))
                    }

                </ul>
            </div>
        )
    }
}