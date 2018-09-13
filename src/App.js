import React, { Component } from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import { Link, Route } from 'react-router-dom'
import Search from './SearchBooks'

class App extends Component {

    constructor(props){
        super(props)
        this.state = {
            books: [],
        }
    }
    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({books})
        })
    }

  moveBook = ( newBook, newShelf ) => {
      BooksAPI.update(newBook, newShelf).then(response =>{
          newBook.shelf = newShelf

          let updatedBooks = this.state.books.filter( book => book.id !== newBook.id )

          updatedBooks.push(newBook)
          this.setState({ books: updatedBooks })
      })
  }

  render() {
      const { books } = this.state

      return (
          <div className="app">
              <Route path="/search" render={( { searched }) => (
                  <Search
                      books={ books }
                      moveBook={ this.moveBook }
                  />
              )} />
              <Route exact  path="/" render={() => (
                  <div className="list-books">
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
