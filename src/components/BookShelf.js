import React from 'react'
import Book from './Book'

class BookShelf extends React.Component{ 
 render(){
 return(
           <div className="bookshelf">
             <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
                <div className="bookshelf-books"> 
                     <ol className="books-grid">

                        {this.props.Books.map((book)=>(
                          
                         <li key={book.id}>
                            <Book book={book} Books={this.props.Books} changeShelf={this.props.changeShelf} />    
                         </li>
                          ))}
                     </ol>
                </div>
           </div>
 )
 }
  
}
export default BookShelf