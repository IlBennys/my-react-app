import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
// import fantasy from "../data/fantasy.json"
// import history from "../data/history.json"
// import horror from "../data/horror.json"
// import romance from "../data/romance.json"
import scifi from "../data/scifi.json"

function AllTheBooks() {
  return scifi.map((libro) => (
    <div key={libro.asin}>
      <Card style={{ width: "18rem" }}>
        <Card.Img style={{ height: "400px" }} variant="top" src={libro.img} />
        <Card.Body className="d-flex flex-column justify-content-between">
          <Card.Title>{libro.title}</Card.Title>
          <Card.Text className="text-center">{libro.category.toLocaleUpperCase()}</Card.Text>
          <Button variant="primary">{libro.price + "€"}</Button>
        </Card.Body>
      </Card>
    </div>
  ))
}

export default AllTheBooks
