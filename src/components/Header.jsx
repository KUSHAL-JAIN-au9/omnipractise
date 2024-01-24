import { Navbar } from "flowbite-react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar fluid rounded>
        <NavLink to={"/"}>
          {" "}
          <h1 className=" ml-8 text-pink-500 font-bold text-2xl ">TweetX</h1>
        </NavLink>
        {/* <Navbar.Brand  href="https://flowbite-react.com"></Navbar.Brand> */}
        <div className="flex md:order-2">
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="text-black">
          {/* <Navbar.Link href="#" active>
          Home
        </Navbar.Link> */}

          <NavLink to={"/"}>Feed</NavLink>
          <NavLink to={"users"}>Users</NavLink>
          <NavLink to={"profile"}>Profile</NavLink>
          {/* <Navbar.Link   href="/">Feed </Navbar.Link>
        <Navbar.Link href="users">Users</Navbar.Link>
        <Navbar.Link href="profile">Profile</Navbar.Link> */}
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Header;
