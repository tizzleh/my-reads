import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {

    constructor(props){
        super(props)
        this.state = {
        }

    }
    render() {
        const books = this.props.books
        const book = this.props.book
        const moveBook = this.props.moveBook

        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover"></div>
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
                    <div className="book-title">To Kill a Mockingbird</div>
                    <div className="book-authors">Harper Lee</div>
                </div>
            </li>
        )
    }
}
Book.propTypes = {
    moveBook: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired,
    book: PropTypes.object.isRequired,
}
export default Book
