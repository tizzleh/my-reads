import React, { Component } from 'react'
import Book from './Book'

class Shelf extends Component {

    render() {
        const shelfChange = this.props
        const books = this.props

        return (
            <ol className="books-grid">
                {books.map((book) =>(
                    <Book />
                ))}
            </ol>
        )
    }

}
export default Shelf
