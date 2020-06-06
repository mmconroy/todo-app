import React from "react";

const user = {
  name: "Username",
  avatarURL: "https://placeimg.com/40/40/any",
};

function Header(props) {
  return (
    <header>
      <section className="user__container">
        <div className="hamburger-menu">
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          ></link>
          <i class="material-icons" id="hamburger-menu">
            menu
          </i>
        </div>
        <p className="username">{user.name}</p>
        <img className="profile-img" src={user.avatarrURL}></img>
      </section>
      <h1>Your Tasks</h1>

      <nav>
        <ul>
          <li>
            <a class="Link" href="#">
              <span class="Link-title">Inbox</span>
            </a>
          </li>
          <li>
            <a class="Link" href="#">
              <span class="Link-title">Today</span>
            </a>
          </li>
          <li>
            <a class="Link" href="#">
              <span class="Link-title">Upcoming</span>
            </a>
          </li>
          <li>
            <a class="Link" href="#">
              <span class="Link-title">Completed</span>
            </a>
          </li>
          <li>
            <a class="Link" href="#">
              <span class="Link-title">Deleted</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
