import React, { Component } from 'react'
import { connect } from 'react-redux'
import { initialGlider } from '../../helper/helper'
import PropTypes from 'prop-types'

class GlideJS extends Component {

    componentDidMount = () => {
        initialGlider(
            this.props.id,
            this.props.options)
    }

    render() {
        return (
            <div id={this.props.id} style={{ overflowX: 'hidden', userSelect: 'none', maxWidth: '1000vw' }}>
                <div className="glide__track" data-glide-el="track">
                    <div className="glide__slides" style={{ display: 'flex' }}>
                        {this.props.images.map((slide, index) => {
                            return <img src={slide} alt="" key={index} />
                        })}
                    </div>
                </div>
            </div>
        )
    }
}


GlideJS.propTypes = {
    id: PropTypes.string.isRequired,
    options: PropTypes.object.isRequired,
    images: PropTypes.array.isRequired
}

const mapStateToProps = state => {
    return {
        id: state.slider.id,
        options: state.slider.options,
        images: state.slider.images
    }
}

export default connect(mapStateToProps)(GlideJS)