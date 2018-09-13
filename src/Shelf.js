// eslint-disable-next-line
import React, { Component } from 'react'
// eslint-disable-next-line
import Book from './Book'
import PropTypes from 'prop-types'

class Shelf extends Component {


    render() {
        const {books, moveBook} = this.props
        return (
            <ol className="books-grid">
                {books.map((book) =>(
                    <Book book={ book }
                        books= {books}
                        moveBook= {moveBook}
                        key={book.id}
                    />
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
