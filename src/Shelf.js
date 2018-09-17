// eslint-disable-next-line
import React, { Component } from 'react'
// eslint-disable-next-line
import Book from './Book'
import PropTypes from 'prop-types'

class Shelf extends Component {
    render(){
        let books = this.props.books
        let shelfTitle = this.props.title

        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{`${shelfTitle}`}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book)=>(
                            <Book
                                author={book.authors}
                                date={book.publishedDate}
                                id={book.id}
                                image={book.imageLinks ? book.imageLinks.thumbnail : ''}
                                key={book.id}
                                shelf={book.shelf}
                                title={book.title}
                                onMoveBook={(shelf)=>{this.props.onMoveBook(book.id,shelf)
                                }}
                            />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

Shelf.propTypes = {
    books: PropTypes.array.isRequired,
}


export default Shelf
