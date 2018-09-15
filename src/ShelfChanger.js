// eslint-disable-next-line
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ShelfChanger extends Component {

    constructor(props){
        super(props)
        this.state = {
        }
    }
    moveShelf = (e) => {
        this.setState({value: e.target.value })
    }
    render() {

        return (
            <div className="book-shelf-changer">
                <select value={this.state.value} onChange={this.moveShelf}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

ShelfChanger.propTypes = {
    book: PropTypes.object.isRequired,
}
export default ShelfChanger
