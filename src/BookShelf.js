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
        const {book} = this.props
        return (
            <div className="book-shelf-changer">
                <select  onChange={this.moveBook} value={book.shelf}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }

}
// }


BookShelf.propTypes = {
    moveBook: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired,
    book: PropTypes.object.isRequired,
}

export default BookShelf
