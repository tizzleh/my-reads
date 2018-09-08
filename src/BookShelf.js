import React, { Component } from 'react'
import PropTypes from 'prop-types'


class BookShelf extends Component {

}
BookShelf.propTypes = {
    moveBook: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired,
    book: PropTypes.object.isRequired,
}

export default BookShelf
