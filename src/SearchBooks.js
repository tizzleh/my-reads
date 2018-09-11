import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'
import Book from './Book'
import { Link } from 'react-router-dom'

class SearchBooks extends Component {

    constructor(props){
        super(props)
        this.state = {
          searchString: '',
          // moveBook: true,
          books: [],
        }
    }

    fetchBooks = (e) => {
      const searchString = e.target.value
      this.setState({ searchString: e.target.value})
      BooksAPI.search(searchString, 20).then((books) => {
        this.setState({books})
      })
    }

    render() {
      const searchString = this.state
      const books = this.state

    const {filteredBooks, fetchBooks, updateOption} = this.props
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search"  to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text"
                           placeholder="Search by title or author"
                           value={searchString}
                           onChange={(e) => fetchBooks(e.target.value)}

                           />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                          {books.map((book) => (
                    <Book book={book} key={ book.id } />
                ))}
                    </ol>
                </div>
            </div>
        )
    }
}
SearchBooks.propTypes = {
    books: PropTypes.array.isRequired,
    // moveBook: PropTypes.func.isRequired,
    searchString: PropTypes.string.isRequired,
}
export default SearchBooks
