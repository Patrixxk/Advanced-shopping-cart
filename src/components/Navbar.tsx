import { Navbar as NavbarBs, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
export const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <NavbarBs sticky="top" className="bg-white shadown-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={Link}>
            Home
          </Nav.Link>

          <Nav.Link to="/store" as={Link}>
            Store
          </Nav.Link>

          <Nav.Link to="/about" as={Link}>
            About
          </Nav.Link>
        </Nav>
        {cartQuantity ? (
          <Button
            style={{
              width: "3rem",
              height: "3rem",
              background: "white",
              borderColor: "#33CC99",
              position: "relative",
            }}
            className="rounded-circle"
            onClick={() => openCart()}
          >
            <svg
              viewBox="0 0 1024 1024"
              className="icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M845.4 383H758c-16.6 0-30-13.4-30-30s13.4-30 30-30h87.4c16.6 0 30 13.4 30 30s-13.5 30-30 30zM662.3 383H263.1c-16.6 0-30-13.4-30-30s13.4-30 30-30h399.2c16.6 0 30 13.4 30 30s-13.5 30-30 30z"
                  fill="#33CC99"
                ></path>
                <path
                  d="M433.2 873.2m-55 0a55 55 0 1 0 110 0 55 55 0 1 0-110 0Z"
                  fill="#FFB89A"
                ></path>
                <path
                  d="M854.5 873.2m-55 0a55 55 0 1 0 110 0 55 55 0 1 0-110 0Z"
                  fill="#FFB89A"
                ></path>
                <path
                  d="M889.8 722.1h-511c-37.7 0-68.4-30.7-68.4-68.4v-1.4L274.5 270v-0.2-0.2l-6-55.4c-8.6-86.8-57.6-117.5-97.3-128.1L101.5 69c-16.1-4-32.3 5.9-36.3 22s5.9 32.3 22 36.3l68.9 16.9c16.2 4.3 28.1 12.4 36.6 24.7 8.6 12.4 14 29.7 16.1 51.4l6 55.6 35.6 379.3c0.8 70.1 58.1 126.9 128.4 126.9h511c16.6 0 30-13.4 30-30s-13.4-30-30-30z"
                  fill="#45484C"
                ></path>
                <path
                  d="M840.3 197.8H381c-16.6 0-30 13.4-30 30s13.4 30 30 30h459.3c30.2 0 54.9 24.3 55.5 54.3l-19.9 226.5-0.1 1.3v1.3c0 30.6-24.9 55.5-55.5 55.5H436c-16.6 0-30 13.4-30 30s13.4 30 30 30h384.3c63.2 0 114.7-51.1 115.5-114.1L955.7 316l0.1-1.3v-1.3c0-63.8-51.8-115.6-115.5-115.6z"
                  fill="#45484C"
                ></path>
                <path
                  d="M408.5 842.1c7.2 0 13.1 5.9 13.1 13.1s-5.9 13.1-13.1 13.1-13.1-5.9-13.1-13.1 5.9-13.1 13.1-13.1m0-60c-40.4 0-73.1 32.7-73.1 73.1s32.7 73.1 73.1 73.1 73.1-32.7 73.1-73.1-32.7-73.1-73.1-73.1zM823.1 842.1c7.2 0 13.1 5.9 13.1 13.1s-5.9 13.1-13.1 13.1-13.1-5.9-13.1-13.1 5.9-13.1 13.1-13.1m0-60c-40.4 0-73.1 32.7-73.1 73.1s32.7 73.1 73.1 73.1 73.1-32.7 73.1-73.1-32.7-73.1-73.1-73.1z"
                  fill="#45484C"
                ></path>
              </g>
            </svg>
            <div
              className="rounded-circle bg-success bg-gradient justify-content-center align-items-center"
              style={{
                color: "white",
                fontSize: "0.9rem",
                width: "1.2rem",
                height: "1.2rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(35%,35%)",
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        ) : (
          ""
        )}
      </Container>
    </NavbarBs>
  );
};