import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import Welcome from "./components/Welcome"
import AllTheBooks from "./components/AllTheBooks"

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <div id="ciao">
        <AllTheBooks />
      </div>
      <footer>
        <MyFooter bloccato="fixed" larghezza="100%" />
      </footer>
    </>
  )
}

export default App
