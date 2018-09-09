import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ListBooks extends Component {
//TODO: Add state and props
    constructor(props){
        super(props)
        this.state = {
            // moveBook: false,
        }
    }

    render() {
        return(

            <ol className="books-grid">
                {this.props.books.map((book)=>(
                    <li>
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style=
                                    {{ width: 128, height: 188, backgroundImage:
                                `url(${book.imageLinks.thumbnail})`
                                    }}>
                                </div>
                                <div className="book-shelf-changer">
                                    <select>
                                        <option value="none" disabled>Move to...</option>
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
                ))}
            </ol>
        )
    }
}

ListBooks.propTypes = {
    books: PropTypes.array.isRequired,
    // moveBook: PropTypes.function.isRequired,
}

export default ListBooks
