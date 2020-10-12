import React from 'react'

class Book extends React.Component {
  updateBook(shelf) {
    this.props.changeShelf(this.props.book, shelf)
  }
render(){ 

const book =this.props.book
const coverImg=book.imageLinks?book.imageLinks.smallThumbnail:''


return(
  
  <div className="book">
             <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${coverImg}")` }}> </div>
              <div className="book-shelf-changer">
                <select  value={book.shelf===undefined?"none":book.shelf} onChange={(e)=> this.updateBook(e.target.value)} >
                   <option value="" disabled> Move to...</option>
                   <option value="currentlyReading">Currently Reading</option>
                   <option value="wantToRead">Want to Read</option>
                   <option value="read">Read</option>
                   <option value="none">None</option>
                </select>
            </div>
         </div>
         <div className="book-title">{book.title}</div>
         <div className="book-authors">{book.authors}</div>
      </div>
)
}}
export default Book