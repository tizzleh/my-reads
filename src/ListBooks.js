import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'
import BookShelf from './BookShelf'
import { Link, Route } from 'react-router-dom'

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

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>

                <div className="list-books-content">

                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {books.filter((book) =>
                                    book.shelf === 'currentlyReading')
                                    .map(book =>
                                        (<BookShelf book={book} key={book.id} moveBook={moveBook}/>))}
                            </ol>
                        </div>
                    </div>

                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Want To Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {books.filter((book) => book
                                    .shelf === 'wantToRead')
                                    .map(book =>
                                        (<BookShelf
                                            book={book}
                                            key={book.id}
                                            moveBook={moveBook}/>))}
                            </ol>
                        </div>
                    </div>

                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {books.filter((book) => book.shelf === 'read').map(book => (<BookShelf book={book} key={book.id} moveBook={moveBook}/>))}
                            </ol>
                        </div>
                    </div>

                    <div className="open-search">
                        <Link to="/search">Add a book</Link>
                    </div>

                </div>
            </div>
        )
    }




}

ListBooks.propTypes = {
    books: PropTypes.array.isRequired,
    moveBook: PropTypes.func.isRequired,
}

export default ListBooks
