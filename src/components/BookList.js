import React from 'react'
import BookShelf from './BookShelf'
import {Link} from 'react-router-dom' 

class BookList extends React.Component{
 render(){
    return(
      <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
           <div className="list-books-content">
             <BookShelf 
               Books={this.props.books.filter(book=>book.shelf==="currentlyReading")} 
               shelfTitle="Currently Reading" 
               changeShelf={this.props.changeShelf}/>
            
             <BookShelf
               Books={this.props.books.filter(book=>book.shelf==="wantToRead")} 
               shelfTitle="Want to Read" 
               changeShelf={this.props.changeShelf} />
           
             <BookShelf 
               Books={this.props.books.filter(book=>book.shelf==="read")} 
               shelfTitle="Read" 
               changeShelf={this.props.changeShelf}/>
           </div>
           
              
              <div className="open-search" >
                  <Link to="/search" ></Link>
              </div>           
        </div>
      )
}}
export default BookList