import React, { Component } from 'react'
import './GlideJS.css'
import Glide from '@glidejs/glide'
import '@glidejs/glide/dist/css/glide.core.min.css'
import '@glidejs/glide/dist/css/glide.theme.min.css'
import PropTypes from 'prop-types'

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

    componentDidUpdate = (prevProps) => {
        if (prevProps.options !== this.props.options) {
            this.initialGlider.update(this.props.options)
        }
    }

    componentWillUnmount = () => {
        this.initialGlider.destroy()
    }

    render = () => {
        return (
            <div ref={this.sliderRef} className="glide">
                <div className="glide__track" data-glide-el="track">
                    <div className="glide__slides">
                        {this.props.images.map((slide, index) => {
                            return <img className="glide__slide" src={slide} alt="" key={index} />
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

GlideJS.propTypes = {
    options: PropTypes.object.isRequired,
    images: PropTypes.array.isRequired, 
} 

export default GlideJS