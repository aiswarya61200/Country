import React from "react";

import Searchcountry from "./components/Searchcountry";
import Weather from "./components/Wether";

class App extends React.Component {
  render() {
    return (
      <div>
        <Searchcountry />
        <Weather />
      </div>
    );
  }
}

export default App;
