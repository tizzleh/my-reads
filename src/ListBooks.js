import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class ListBooks extends Component {
//TODO: Add state and props
    constructor(props){
        super(props)
        this.state = {
            moveBook: true,
            // books: this.books
        }
    }

    render() {
        const {books, moveBook} = this.props
        const shelfNames = [
            {name: 'currentlyReading', text: 'Currently Reading'},
            {name: 'wantToRead', text: 'Want To Read'},
            {name: 'read', text: 'Read'},
            {name: 'none', text: 'None'},
        ]
        // const { books } = this.props
        return(

            <ol className="books-grid">
                {books.map((book) => (
                    <Book book={book} key={ book.id } />
                ))}
            </ol>
        )
    }
}

ListBooks.propTypes = {
    books: PropTypes.array.isRequired,
    moveBook: PropTypes.func.isRequired,
}

export default ListBooks
