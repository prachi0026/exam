import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  Link,
  NavLink,
  Navigate,
  redirect,
  useNavigate,
} from "react-router-dom";

const Header = () => {
  const isLoggedIn = localStorage.getItem("token");
  //truthy value and falsey value

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-info">
      <Container>
        <Navbar.Brand href="#home">Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Home
            </NavLink>
            {isLoggedIn ? (
               <a href="#" className="nav-link" onClick={logout}>
                Logout
              </a>
            ) : (
              <>
                <NavLink
                  to={"/login"}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Login
                </NavLink>
                <NavLink
                  to={"/register"}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Register
                </NavLink>
              </>
            )}
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              contact
            </NavLink>
            <NavLink
              to={"/todo"}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Todo
            </NavLink>
            <NavLink
              to={"/blog"}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Blog
            </NavLink>
            <NavLink
              to={"/feedback"}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Feedback
            </NavLink>

            {isLoggedIn ? (
              <>
                <NavLink
                  to={"/exam"}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Exam
                </NavLink>{" "}
                <NavLink
                  to={"/users"}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  User
                </NavLink>
              </>
            ) : (
              ""
            )}

            {/* <Link to={"/hobbies"} className="nav-link">
              Hobbies
            </Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
