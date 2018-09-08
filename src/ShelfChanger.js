import React, { Component } from 'react'

class ShelfChanger extends Component {

    render() {

        const books = this.props.books
        const book = this.props.book
        const moveBook = this.props.moveBook
        let currentShelf = '';
        if (books.filter( listBook => listBook.id === book.id ).length > 0 ) {
            console.log(book.title)
            currentShelf = book.shelf
        }
        return (
            <div className="book-shelf-changer">
                <select>
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
export default ShelfChanger
