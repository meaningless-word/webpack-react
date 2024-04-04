import React from "react";
import "../styles/App.css";
import Header from "./Header";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          <div>
            <h1 className="in-main">Hello, World!</h1>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
