import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class Shelf extends Component {


    render() {
        const moveBook = this.props
        const books = this.props

        return (
            <ol className="books-grid">
                {books.map((book) =>(
                    <Book />
                ))}
            </ol>
        )
    }

}

Shelf.propTypes = {
    moveBook: PropTypes.func.isRequired,
    books: PropTypes.object.isRequired,
}
export default Shelf
