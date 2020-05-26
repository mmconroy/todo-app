import React from "react";

const user = {
  name: "William",
  avatarURL: "http://www.fillmurray.com/100/100",
};

function Header(props) {
  return (
    <header className="header">
      <section className="user__container">
        <h1>
          Welcome, {user.name}. You have {props.numTodos} tasks on your schedule
        </h1>
        <img src={user.avatarURL}></img>
        <nav className="sidenav">
          <a href="#">Nav 1</a>
          <a href="#">Nav 2</a>
          <a href="#">Nav 3</a>
          <a href="#">Nav 4</a>
          <a href="#">Nav 5</a>
          <a href="#">Nav 6</a>
          <a href="#">Settings</a>
        </nav>
      </section>
    </header>
  );
}

export default Header;
