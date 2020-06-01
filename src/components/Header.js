import React from "react";

const user = {
  name: "Username",
  avatarURL: "https://api.adorable.io/avatars/40/abott@adorable.png",
};

function Header(props) {
  return (
    <header className="header">
      <section className="user__container">
        <div className="hamburger-menu">
          <i class="material-icons">menu</i>
        </div>
        <p className="username">{user.name}</p>
        <img classNanme="profile-img" src={user.avatarURL}></img>
        <h1>Your Tasks</h1>
      </section>
      <nav className="sidenav">
        <a href="#">Inbox</a>
        <a href="#">Today</a>
        <a href="#">Upcoming</a>
        <a href="#">Completed</a>
        <a href="#">Overdue</a>
        <a href="#">Deleted</a>
        <a href="#">Settings</a>
      </nav>
    </header>
  );
}

export default Header;
