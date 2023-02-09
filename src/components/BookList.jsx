import { Component } from "react"
import { Row, Col, Form } from "react-bootstrap"
import SingleBook from "./SingleBook"

class BookList extends Component {
  state = {
    searchQuery: "",
  }
  filterBookList = (e) => this.setState({ searchQuery: e.target.value })
  render() {
    return (
      <>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>cerca un libro</Form.Label>
              <Form.Control
                type="text"
                placeholder="signore degli anelli, ecc..."
                value={this.state.searchQuery}
                onChange={this.filterBookList}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          {this.props.books
            .filter((b) => b.title.toLowerCase().includes(this.state.searchQuery.toLocaleLowerCase()))
            .map((b) => (
              <Col xs={12} md={4} key={b.asin}>
                <SingleBook book={b} />
              </Col>
            ))}
        </Row>
      </>
    )
  }
}

export default BookList
