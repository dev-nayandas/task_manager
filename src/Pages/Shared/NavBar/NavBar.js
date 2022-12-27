import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";


const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <Navbar fluid={true} rounded={true} className="h-[80px] bg-red-300">
        <Navbar.Brand href="/home">
          <img
            src="https://i.ibb.co/zx244fn/Task.png"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Task Manager
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          {user?.email ? (
            <>
              <Navbar.Link href="/AddTask">Add Task</Navbar.Link>
              <Navbar.Link href="/MyTask">My Task</Navbar.Link>
              <Navbar.Link href="/CompletedTask">Completed Task</Navbar.Link>
              <Navbar.Link onClick={handleSignOut} >LogOut</Navbar.Link>
            </>
          ) : (
            <Navbar.Link href="/SignIn">Login</Navbar.Link>
          )}

          {/* <Link onClick={handleSignOut} className="link">
            Log Out
          </Link> */}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
