import { Component } from "react"
import CommentsList from "./CommentsList"
import SingleComment from "./SingleComment"

class CommentArea extends Component {
  state = {
    selected: false,
    comment: [],
  }
  componentDidMount = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.id}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U1MGZkNGEyNDc4ZDAwMTNhMDU4NDgiLCJpYXQiOjE2NzU5NTYxODEsImV4cCI6MTY3NzE2NTc4MX0.0uVmsX02jidd6E8r1UD_nvwEnhQC60xB38fdHo2JY6U",
        },
      })

      if (response.ok) {
        const fileFechato = await response.json()
        this.setState({
          comment: fileFechato,
        })
      } else {
        console.log("error while fetching")
      }
    } catch (e) {
      console.log(e)
    }
  }
  render() {
    return (
      <>
        Commenti: {this.state.comment.map((elem) => elem.comment)}
        {this.state.comment.map((elem) => (
          <CommentsList comment={elem} />
        ))}
        {this.state.comment.map((elem) => (
          <SingleComment single={elem} />
        ))}
      </>
    )
  }
}

export default CommentArea
