import React from "react";
import "../styles/App.css";
import Header from "./Header";

let buttonName = "Any key";

const handleClick = () => {
  console.log("Clicked");
};

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          <div>
            <h1 className="in-main">Press any key</h1>
            <button clasName={"some-button"} onClick={handleClick}>
              {buttonName}
            </button>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
