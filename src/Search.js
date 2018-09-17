// eslint-disable-next-line
import React, {Component} from 'react'
// eslint-disable-next-line
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'
// eslint-disable-next-line
import Shelf from './Shelf'

class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            query: '',
            searchedBooks: [],
            error: false,
        }
    }


    updateQuery = (query) => {
        this.setState({
            query: query
        })
        this.searchedBooks(query)
    }


  searchedBooks = (query) => {
      if (query) {
          BooksAPI.search(query).then((searchedBooks) => {
              if(!searchedBooks.error){
                  searchedBooks = searchedBooks.map((searchedBook)=>{
                      searchedBook.shelf = 'none'
                      this.props.books.forEach((mainBook)=>{
                          if(searchedBook.id === mainBook.id){
                              searchedBook.shelf = mainBook.shelf
                          }
                      })
                      return searchedBook
                  })
                  this.setState({searchedBooks})
              } else {
                  this.setState({searchedBooks: []})
              }})
      } else {
          this.setState({searchedBooks: []})
      }
  }

  render() {
      return (
          <div>
              <div className="search-books">
                  <div className="search-books-bar">
                      <Link className="close-search" to="/">Close</Link>
                      <div className="search-books-input-wrapper">
                          <input type="text"
                              autoFocus={true}
                              placeholder="Search by title or author"
                              value={this.state.query}
                              onChange={(event) => this.updateQuery(event.target.value)}
                          />
                      </div>
                  </div>
                  <div className="search-books-results">
                      <ol className="books-grid">
                          {this.state.query !== '' &&
              this.state.searchedBooks.length > 0 && (
                              <Shelf
                                  title = "Result(s)"
                                  books={this.state.searchedBooks}
                                  onMoveBook={(id, shelf) => {
                                      this.props.onMoveBook(id, shelf)
                                  }}
                              />
                          )}
                          {this.state.query !== '' &&
              this.state.searchedBooks.length === 0 && (
                              <Shelf
                                  title = "Not found..."
                                  books={[]}
                              />
                          )}
                      </ol>
                  </div>
              </div>
          </div>
      )
  }
}
Search.propTypes = {
    onMoveBook: PropTypes.func.isRequired,
}
export default Search
