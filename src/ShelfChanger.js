import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ShelfChanger extends Component {

    constructor(props){
        super(props)
        this.state = {
            moveBook: true,
        }
    }
    render() {

        const books = this.props.books
        const book = this.props.book
        const moveBook = this.props.moveBook
        let currentShelf = 'none'
        if (books.filter( listBook => listBook.id === book.id ).length > 0 ) {
            console.log(book.title)
            currentShelf = book.shelf
        }
        return (
            <div className="book-shelf-changer">
                <select  onChange={this.moveBook} value={book.shelf}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

ShelfChanger.propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    moveBook: PropTypes.function.isRequired,
}
export default ShelfChanger
