import React, { Component } from 'react'
import './GlideJS.css'
import Glide from '@glidejs/glide'
import Button from '../Button/Button';
import {  Button as ButtonPrimary} from 'semantic-ui-react'
class GlideJS extends Component {
    constructor(props) {
        super(props);
        this.sliderRef = React.createRef()
        this.state = {
            options: this.props.options,
            imagesSources: this.props.imagesSources
        }
    }

    componentDidMount = () => {
        this.initialGlider = new Glide(
            this.sliderRef.current, this.state.options
        )
        this.initialGlider.mount()
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.options !== this.state.options) {
            this.initialGlider.update(this.state.options)
        }
    }

    changeOptions = () => {
        this.setState({
            options: {
                startAt: 1,
                perView: 2,
                autoplay:false
            }
        })
    }

    // componentWillUnmount = () => {

    // }

    render = () => {
        return (
            <div ref={this.sliderRef} className="glide">
                <div className="glide__track" data-glide-el="track">
                    <div className="glide__slides">
                        {this.state.imagesSources.map((slide, index) => {
                            return <img className="glide__images" src={slide} alt="" key={index} />
                        })}
                    </div>
                </div>
                <ButtonPrimary primary onClick={this.changeOptions}>Change options</ButtonPrimary>
                {/* <Button changeOptions={this.changeOptions} /> */}
            </div>
        )
    }
}




export default GlideJS