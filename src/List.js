// eslint-disable-next-line
import React, { Component } from 'react'
// eslint-disable-next-line
import { Link } from 'react-router-dom'
// eslint-disable-next-line
import Shelf from './Shelf'


class List extends Component {

    render(){
        const {books, shelfs} = this.props
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        { shelfs.map((shelf)=> (
                            <Shelf
                                title={shelf.heading}
                                key={shelf.heading}
                                books={books.filter((book) =>
                                    book.shelf === shelf.name)}
                                onMoveBook={(id,shelf)=>{
                                    this.props.onMoveBook(id,shelf)
                                }}
                            />
                        )) }
                    </div>
                </div>
                {/*Link to the search page*/}
                <div className="open-search">
                    <Link
                        to="/search"
                    >Add a book</Link>
                </div>
            </div>
        )
    }
}


export default List
