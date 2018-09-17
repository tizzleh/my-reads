// eslint-disable-next-line
import React, { Component } from 'react'
// eslint-disable-next-line
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
// eslint-disable-next-line
import Search from './Search'
// eslint-disable-next-line
import List from './List'

class App extends Component {

    constructor(props){
        super(props)
        this.state = {
            books: [],
            shelfs : [
                {
                    name: 'currentlyReading',
                    heading: 'Currently Reading'
                },
                {
                    name: 'wantToRead',
                    heading: 'Want to Read'
                },
                {
                    name: 'read',
                    heading: 'Read'
                },
            ]
        }
    }

  fetchAllBooks = () => {
      BooksAPI.getAll().then((books) => this.setState({ books }))
  }

  componentDidMount(){
      this.fetchAllBooks()
  }

  moveBook = (id,shelf) => {
      BooksAPI.update({id}, shelf).then(()=> {
          this.fetchAllBooks()
      })
  }

  render() {
      return (
          <div className="app">
              <Route exact path="/" render={() => (
                  <List
                      books={this.state.books}
                      shelfs={this.state.shelfs}
                      onMoveBook={this.moveBook}
                  />
              )} />
              <Route path="/search" render ={({ history }) => (
                  <Search
                      books={this.state.books}
                      shelfs={this.state.shelfs}
                      onMoveBook={(book, shelf)=>{
                          this.moveBook(book, shelf)
                          history.push('/')
                      }} />
              )} />
          </div>
      )
  }
}

export default App
