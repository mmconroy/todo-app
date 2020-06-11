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

        <img className="profile-img" src={user.avatarURL}></img>
      </section>
      <h1 className="nav-title">Todo.ly</h1>
      <input type="checkbox" id="nav-toggle" class="nav-toggle" />
      <label for="nav-toggle" class="nav-toggle-label">
        <span></span>
      </label>
      <nav>
        <ul>
          <li>
            <p className="username">{user.name}</p>
            <img className="profile-img" src={user.avatarURL}></img>
          </li>
          <li>
            <Link to="/components/Dashboard">Dashboard</Link>
          </li>
          <li>
            <a class="Link" href="#">
              <span class="Link-title">Tasks</span>
            </a>
          </li>
          <li>
            <a class="Link" href="#">
              <span class="Link-title">Account</span>
            </a>
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
