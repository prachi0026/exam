import Header from "./header";
import Footer from "./footer";
import { Container } from "react-bootstrap";

const Layout = (props) => {
  return (
    <>
      <Header />
      <Container style={{minHeight:'100vh'}}>{props.children}</Container>
      <Footer />
    </> 
  );
};

export default Layout;
