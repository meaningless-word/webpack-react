import React from "react";
import "../styles/App.css";
import Header from "./Header";

// переход от классового представления к фукнциональному
function App() {
  let buttonName = "Any key";
  let [count, incrementCount] = React.useState(0);

  const handleClick = (e) => {
    incrementCount(count + 1);
    console.log(e.target);
  };

  return (
    <React.Fragment>
      <Header />
      <main>
        <div>
          <h1 className="in-main">Press any key</h1>
          <button clasName={"some-button"} onClick={handleClick}>
            {buttonName} претерпела {count} нажатий
          </button>
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
