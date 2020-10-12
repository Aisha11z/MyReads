import React from 'react'
import * as BooksAPI from './BooksAPI'
import BookList from './components/BookList'
import {Route} from 'react-router-dom' 
import Search from './components/Search'
import './App.css'

class BooksApp extends React.Component {
  state = {
   Books:[]
  }
componentDidMount(){
  BooksAPI.getAll().then((booksData)=>{
    this.setState({Books:booksData});
  });
}

moveBook = (book, shelf) => {
    if (this.state.Books) {
      BooksAPI.update(book,shelf).then(() => {
        book.shelf = shelf;
        this.setState(state => ({
          Books: state.Books.filter(b => b.id !== book.id).concat([ book ])
        }))
      })
    }
  }

render() {
return (


  <div className="app">
  <Route exact path="/" render={()=>(<BookList  books={this.state.Books} changeShelf={this.moveBook}  /> )}/>  
  <Route path="/search" render={()=>(<Search books={this.state.Books} changeShelf={this.moveBook}/>)} />
                                     </div>



)}}
export default BooksApp
