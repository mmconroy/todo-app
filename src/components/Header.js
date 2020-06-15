import React from "react";
import { Link } from "react-router-dom";

const user = {
  name: "Username",
  avatarURL: "https://www.placecage.com/100/100",
};

function Header(props) {
  return (
    <header>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
      <section className="user__container">
        <div className="hamburger-menu">
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          ></link>
        </div>

        <img
          className="profile-img"
          alt="profile pic"
          src={user.avatarURL}
        ></img>
      </section>
      <h1 className="nav-title">Todo.ly</h1>
      <input type="checkbox" id="nav-toggle" class="nav-toggle" />
      <label for="nav-toggle" class="nav-toggle-label">
        <span></span>
      </label>
      <nav>
        <ul
          className="menu-list"
          style={{
            marginBottom: "4px",
            fontWeight: "300",
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            marginLeft: "1.5rem",
          }}
        >
          <li>
            <p
              className="username"
              style={{
                display: "block",
                color: "black",
                fontSize: "0.5rem",
                fontFamily: "SF Pro Display",
                lineHeight: "1.3",
                paddingBottom: "1rem",
              }}
            >
              {user.name}
            </p>
            <img
              className="profile-img-lg"
              alt="profile pic"
              src={user.avatarURL}
            ></img>
          </li>
          <li>
            <Link to="/Dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/Todolist">Tasks</Link>
          </li>
          <li>
            <Link to="/Login">Sign Out</Link>
          </li>
          <li>
            <a class="Link" href="#">
              <span class="Link-title">Settings</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
