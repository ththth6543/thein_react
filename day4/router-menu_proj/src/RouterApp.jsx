import {
  BrowserRouter,
  Route,
  Routes,
  NavLink,
  Outlet,
} from "react-router-dom";
import AppUseParam from "./AppUseParam.jsx";

const navLinkStyles = ({ isActive }) => ({
  color: isActive ? "#007bff" : "#333",
  textDecoration: isActive ? "none" : "underline",
  fontWeight: isActive ? "bold" : "normal",
  padding: "5px 10px",
});

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function Products() {
  return (
    <div>
      <h1>Products Page</h1>
      <nav style={{ marginBottom: "20px" }}>
        <NavLink style={navLinkStyles} to="/products/car">
          Cars
        </NavLink>{" "}
        |
        <NavLink style={navLinkStyles} to="/products/bike">
          Bikes
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

function CarProducts() {
  return (
    <div>
      <h2>Car Page</h2>
      <ul>
        <li>Car 1</li>
        <li>Car 2</li>
        <li>Car 3</li>
      </ul>
    </div>
  );
}

function BikeProducts() {
  return (
    <div>
      <h2>Bike Page</h2>
      <ul>
        <li>Bike 1</li>
        <li>Bike 2</li>
        <li>Bike 3</li>
      </ul>
    </div>
  );
}
export default function RouterApp() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/" style={navLinkStyles}>
          Home
        </NavLink>{" "}
        |{" "}
        <NavLink to="/about" style={navLinkStyles}>
          About
        </NavLink>{" "}
        |{" "}
        <NavLink to="/contact" style={navLinkStyles}>
          Contact
        </NavLink>{" "}
        |{" "}
        <NavLink to="/products" style={navLinkStyles}>
          Products
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}>
          <Route path="car" element={<CarProducts />} />
          <Route path="bike" element={<BikeProducts />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
