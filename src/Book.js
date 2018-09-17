// eslint-disable-next-line
import React, { Component } from 'react'
import PropTypes from 'prop-types'
// eslint-disable-next-line
class Book extends Component {

  moveBook = (event) => {
      this.props.onMoveBook(event.target.value)
  }

  render(){
      let image = this.props.image
      let author = this.props.author
      let title = this.props.title

      return (
          <li>
              <div className="book">
                  <div className="book-top">
                      <div className="book-cover"
                          style={{
                              width: 128,
                              height: 166,
                              backgroundImage: `url(${image})`
                          }}>
                      </div>
                      <div className="book-shelf-changer">
                          <select
                              onChange={this.moveBook}
                              value={this.props.shelf}>
                              <option value="moveTo" disabled>Move to...</option>
                              <option value="currentlyReading">Currently Reading</option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                          </select>
                      </div>
                  </div>
                  <div className="book-title">{title}</div>
                  <div className="book-authors">{`${ author }`}</div>
              </div>
          </li>
      )
  }
}

Book.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.array.isRequired,
    image: PropTypes.string.isRequired,
}

export default Book
