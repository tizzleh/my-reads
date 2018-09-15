import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Error extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
    // Display fallback UI
        this.setState({
            hasError: true
        })
        // Error
    }

    render() {
        if (this.state.hasError) {
            return <h1 > Something went wrong. < /h1>
        }
        return this.props.children
    }
}
