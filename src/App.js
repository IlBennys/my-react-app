import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import Welcome from "./components/Welcome"
import BookList from "./components/BookList"
import scifi from "./data/fantasy.json"
import CommentArea from "./components/CommentArea"
import AddComment from "./components/AddComment"

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <AddComment />
      <BookList books={scifi} />
      <CommentArea />
      <MyFooter bloccato="" larghezza="100%" />
    </>
  )
}

export default App
