import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const Post = (props) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.heading.slice(0, 27)}...</Card.Title>
        <Card.Text>{props.body.slice(0, 120)}...</Card.Text>
        <Card.Link>
          <Link to={"/blog/" + props.id}>Read More...</Link>
        </Card.Link>
      </Card.Body>
    </Card>
  );
};
export default Post;
