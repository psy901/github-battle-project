import React from 'react'
var Link = require("react-router-dom").Link;

class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <h1>Github Battle: Battle your friends... and stuff</h1>
        <h2>Instruction</h2>
        <h3>To Battle</h3>
        Click the 'Battle' below -- not working at this version yet
        <Link className="button" to="/battle">
          Battle
        </Link>
        <h3>To See Popular Repos</h3>
        Click 'Popular' to see popular repositories built in different languages
        <Link className="button" to="/Popular">
          Popular
        </Link>
      </div>
    );
  }
}

export default Home;
