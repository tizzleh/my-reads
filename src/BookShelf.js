import React, { Component } from 'react'
import PropTypes from 'prop-types'


class BookShelf extends Component {

    constructor(props){
        super(props)
        this.state = {
            moveBook: this.props.moveBook,
            book: this.props.book,
        }
    }

    render() {
        const {book, moveBook} = this.props
        let shelfValue = (book.shelf) ? book.shelf : 'move'
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        {book.imageLinks && (
                            <div
                                className="book-cover"
                                style={{
                                    width: 128,
                                    height: 193,
                                    backgroundImage: `url(${book.imageLinks.thumbnail})`
                                }}></div>
                        )}
                        <div className="book-shelf-changer">
                            <select
                                value={shelfValue}
                                onChange={(event) => moveBook(book, event.target.value)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    {book.authors && book.authors.map((author, index) => (
                        <div key={index} className="book-authors">{author}</div>
                    ))}
                </div>
            </li>
        )
    }

}


BookShelf.propTypes = {
    moveBook: PropTypes.func.isRequired,
    // books: PropTypes.array.isRequired,
    book: PropTypes.object.isRequired,
}

export default BookShelf
