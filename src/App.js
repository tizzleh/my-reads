import React, { Component } from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import { Link, Route } from 'react-router-dom'
import Search from './SearchBooks'
BooksAPI.getAll()

class App extends Component {

    constructor(props){
        super(props)
        this.state = {
            books: [],
        }
    }
    componentDidMount() {

        // get books on load
        BooksAPI.getAll().then((books) => {
            this.setState({books})
        })
    }

  moveBook = ( newBook, newShelf ) => {
      BooksAPI.update(newBook, newShelf).then(response =>{

          // set shelf for new or updated book
          newBook.shelf = newShelf

          // get list of books without updated or new book
          let updatedBooks = this.state.books.filter( book => book.id !== newBook.id )

          // add book to array and set new state
          updatedBooks.push(newBook)
          this.setState({ books: updatedBooks })
      })
  }

  render() {
      const { books } = this.state

      return (
          <div className="app">
              <Route path="/search" render={( { history }) => (
                  <Search
                      books={ books }
                      moveBook={ this.moveBook }
                  />
              )} />
              <Route exact  path="/" render={() => (
                  <div className="list-books">
                      <div className="list-books-title">
                          <h1>MyReads</h1>
                      </div>
                      <ListBooks

                          books={ books }
                          moveBook={ this.moveBook }
                      />
                      <div className="open-search">
                          <Link to="/search">Search</Link>
                      </div>
                  </div>
              )} />
          </div>
      )
  }
}
export default App
