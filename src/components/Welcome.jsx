import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

function Welcome() {
  return (
    <Card>
      <Card.Header as="h5">Welcome</Card.Header>
      <Card.Body>
        <Card.Title className="bg-secondary">QUESTO E' UN TITOLO</Card.Title>
        <Card.Text className="bg-primary">Clicca sul bottone e vedi che succede!</Card.Text>
        <Button variant="primary">NIENTE</Button>
      </Card.Body>
    </Card>
  )
}

export default Welcome
