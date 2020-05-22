import React from "react";
const user = {
  name: "William",
  avatarURL: "http://www.fillmurray.com/100/100",
};

function Header(props) {
  return (
    <header className="header">
      <h1>{props.title}</h1>
      <section classname="user__container">
        <h1>{user.name}</h1>
        <img src={user.avatarURL} alt="User Avatar" />
      </section>
      <nav className="sidenav">
        <a href="#">Nav 1</a>
        <a href="#">Nav 2</a>
        <a href="#">Nav 3</a>
        <a href="#">Nav 4</a>
        <a href="#">Nav 5</a>
        <a href="#">Nav 6</a>
        <a href="#">Settings</a>
      </nav>
    </header>
  );
}

export default Header;
