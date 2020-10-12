import React from 'react'
import { Link } from 'react-router-dom'
import DebounceInput from 'react-debounce-input'
import * as BooksAPI from '../BooksAPI';
import BookShelf from './BookShelf'

class Search extends React.Component{
  state = {
    query: '',
   resultBooks: [],
  }
  getBooks = event => {
    const query = event.target.value;
    this.setState({query});

    if (query) {
      BooksAPI.search(query.trim()).then((books) => {
        if(books.length > 0){
        books.map((b)=>{
          b.shelf="none"
          this.props.books.map((b1)=>{
                               if(b.id===b1.id)
          							b.shelf=b1.shelf 
          })}) 
          console.log(books)
           this.setState({ resultBooks: books })
        }else{ this.setState({ resultBooks: [] })}
      });
    } else this.setState({ resultBooks: []});
  };

  render() {
    const { query, resultBooks} = this.state;

    return (    
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
                 <DebounceInput
                        element='input'
                        debounceTimeout={325}
                        type="text"
                        value={query}
                        onChange={this.getBooks}
                        placeholder="Search by title or author" />
      
        </div>
         </div>
         <div className="search-books-results">
         <BookShelf Books={resultBooks} shelfTitle="Result" changeShelf={this.props.changeShelf}/>
         
        </div>
      </div>
    )
  }
}
export default Search