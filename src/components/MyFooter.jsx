import Card from "react-bootstrap/Card"

function MyFooter(props) {
  return (
    <Card
      style={{
        position: props.bloccato,
        bottom: 0,
        width: props.larghezza,
        backgroundColor: "red",
        border: "solid black 2px ",
      }}
    >
      <Card.Header className="bg-success">Footer</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>L'OMBELLICO DEL MONDOOOOOO</p>
          <footer className="blockquote-footer text-light">
            <strong> CHI LEGGE STA CANTANDO!!</strong>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default MyFooter
