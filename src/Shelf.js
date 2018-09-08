import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class Shelf extends Component {

    render() {
        const shelfChange = this.props
        const books = this.props
        // TODO: Add proptypes
        return (
            <ol className="books-grid">
                {books.map((book) =>(
                    <Book />
                ))}
            </ol>
        )
    }

}
export default Shelf
