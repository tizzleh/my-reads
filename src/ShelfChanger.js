// eslint-disable-next-line
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ShelfChanger extends Component {

    constructor(props){
        super(props)
        this.state = {
            value: 'Move to...'
            // moveShelf: true,
        }
    }
    moveShelf = (e) => {
        this.setState({value: e.target.value })
        console.log(`Move to:${this.state.value}`)
    }
    render() {

        const {book, updateOptions} = this.props
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
    // books: PropTypes.array.isRequired,
    // moveBook: PropTypes.function.isRequired,
}
export default ShelfChanger
