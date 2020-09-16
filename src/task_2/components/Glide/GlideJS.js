import React, { Component } from 'react'
import './GlideJS.css'
import Glide from '@glidejs/glide'

class GlideJS extends Component {
    constructor(props) {
        super(props);
        this.sliderRef = React.createRef()
    }

    componentDidMount = () => {
        this.initialGlider = new Glide(
            this.sliderRef.current, this.props.options
            )
            this.initialGlider.mount()
    }

    componentDidUpdate = prevProps => {
        if (prevProps.images !== this.props.images) {
            this.initialGlider.update()
        }
      }

    // componentWillUnmount = () => {

    // }

    render = () => {
        return (
            <div ref={this.sliderRef} className= "glide">
                <div className="glide__track" data-glide-el="track">
                    <div className="glide__slides">
                        {this.props.imagesSources.map((slide, index) => {
                            return <img className="glide__images" src={slide} alt="" key={index} />
                        })}
                    </div>
                </div>
            </div>
        )
    }
}




export default GlideJS