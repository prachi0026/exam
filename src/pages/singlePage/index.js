import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "../layout";
import { Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";


const BlogPage = () => {
  const [singlePost, setSinglePost] = useState({});
  const [isLoading, setIsLoding] = useState(true);

  const params = useParams();

  const Loader = () => {
    return (
      <div className="text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  };

  useEffect(() => {
    getSinglePost();
  }, []);

  console.log("params", params.id);

  const getSinglePost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + params.id)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSinglePost(data);
        setIsLoding(false);
        console.log(data);
      });
  };
  return (
    <Layout>
      <Container className="my-5">
        {isLoading ? <Loader /> : <singlePost />}
        <h2>{singlePost.title}</h2>
        <p>{singlePost.body}</p>
      </Container>
    </Layout>
  );
};
export default BlogPage;
