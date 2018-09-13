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
            error: false,
        }
    }

    fetchBooks = (e) => {
        const searchString = e.target.value.trim()
        this.setState({searchString: searchString})

        if(searchString){
            BooksAPI.search(searchString, 20).then((updateBooks) => {
                this.setState({updateBooks})
            })
        }else {
            this.setState({updateBooks: [],})
        }
    }

    render() {
        const {updateBooks, books, searchString} = this.state

        const {moveBook} = this.props
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
                        {updateBooks.map(book => (<BookShelf book={book} books={books} key={book.id} moveBook={moveBook}/>))}
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
