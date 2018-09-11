// eslint-disable-next-line
import React, { Component } from 'react'
import PropTypes from 'prop-types'
// eslint-disable-next-line
import ShelfChanger from './ShelfChanger'

class Book extends Component {

    constructor(props){
        super(props)
        this.state = {
            books: [],
        }

    }
    render() {

        // const { books } = this.state
        const {book} = this.props

        return (

            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{
                            width: 128, height: 188, backgroundImage: `url(${book.imageLinks.thumbnail})`
                        }}></div>
                        <ShelfChanger book={book} />

                        <div className="book-shelf-changer">
                            <select>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                </div>
            </li>
        )
    }
}
Book.propTypes = {
    moveBook: PropTypes.func.isRequired,
    // books: PropTypes.array.isRequired,
    book: PropTypes.object.isRequired,
}
export default Book
