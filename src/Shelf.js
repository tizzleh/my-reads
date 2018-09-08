import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class Shelf extends Component {


    render() {
        const books = this.props.books
        const moveBook = this.props.moveBook
        return (
            <ol className="books-grid">
                {books.map((book) =>(
                    <Book book={ book }
                        moveBook={moveBook}/>
                ))}
            </ol>
        )
    }

}

Shelf.propTypes = {
    moveBook: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired,
}
export default Shelf
