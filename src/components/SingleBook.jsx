import { Component } from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import CommentArea from "./CommentArea"

class SingleBook extends Component {
  state = {
    selected: false,
  }

  render() {
    return (
      <>
        <Card className="libri" style={{ width: "18rem", border: this.state.selected ? "solid 2px red" : "" }}>
          <Card.Img
            style={{ height: "400px" }}
            variant="top"
            src={this.props.book.img}
            onClick={() => this.setState({ selected: !this.state.selected })}
          />
          <Card.Body className="d-flex flex-column justify-content-between">
            <Card.Title>{this.props.book.title}</Card.Title>
            <Button variant="primary">${this.props.book.price}</Button>
          </Card.Body>
          {this.state.selected && <CommentArea id={this.props.book.asin} />}
        </Card>
      </>
    )
  }
}

export default SingleBook
