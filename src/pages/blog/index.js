import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import Layout from "../layout";
import Post from "./post";
const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoding] = useState(true);

  useEffect(function () {
    getPosts();
  }, []);

  const getPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setIsLoding(false);
        console.log(data);
      });
  };

  const Loader = () => {
    return (
      <div className="text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  };
  const BlogPosts = () => {
    return (
      <Row className="gy-4">
        {posts.map((post) => {
          return (
            <Col md={4}>
              <Post heading={post.title} body={post.body} id={post.id} />
            </Col>
          );
        })}
      </Row>
    );
  };
  const postData = isLoading ? <Loader /> : <BlogPosts />;
  return (
    <Layout>
      <Container className="my-5">{postData}</Container>
    </Layout>
  );
};
export default Blog;
