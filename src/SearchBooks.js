import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

class SearchBooks extends Component {

    constructor(props){
        super(props)
        this.state = {
            searchString: '',
            updateBooks: [],
            error: false,
        }
    }

 fetchBooks = (event) => {

     const searchString = event.target.value
     this.setState({
         searchString: searchString
     })


     if (searchString) { // Return 20 books
         BooksAPI.search(searchString, 20).then((books) => {
             books.length > 0 ?  this.setState({
                 updateBooks: books,
                 error: false,
             }) :
                 this.setState({
                     updateBooks: [],
                     error: true,
                 })
         })
     } else
         this.setState({
             updateBooks: [],
             error: false,
         })
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
                     {updateBooks.map(book => (
                         <BookShelf
                             book={book}
                             books={books}
                             key={book.id}
                             moveBook={moveBook}/>))}
                 </ol>
             </div>
         </div>
         // TODO: Display if error, not required for rubric.
     )
 }
}
SearchBooks.propTypes = {
    moveBook: PropTypes.func.isRequired,
}
export default SearchBooks
