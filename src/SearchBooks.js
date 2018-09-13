import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'
// import Book from './Book'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

class SearchBooks extends Component {

    constructor(props){
        super(props)
        this.state = {
            searchString: '',
            updateBooks: [],
            moveBook: true,
        }
    }

    fetchBooks = (e) => {
      // TODO: Fix problem when no books are found
        const searchString = e.target.value.trim()
        this.setState({searchString})

        if(searchString){
            BooksAPI.search(searchString, 20).then((updateBooks) => {
                this.setState({updateBooks})
            })
        }
    }

    render() {
        const {updateBooks} = this.state

        const {moveBook, searchString} = this.props
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search"  to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text"
                            name="inputFocus"
                            placeholder="Search by title or author"
                            value={searchString}
                            onChange={this.fetchBooks}
                            autoFocus="true"
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {updateBooks.map(book => (<BookShelf book={book} key={book.id} moveBook={moveBook}/>))}
                    </ol>
                </div>
            </div>
        )
    }
}
SearchBooks.propTypes = {
    searchString: PropTypes.string.isRequired,
    moveBook: PropTypes.func.isRequired,
}
export default SearchBooks
