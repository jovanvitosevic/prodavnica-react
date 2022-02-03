import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Prodavnica from "./Prodavnica";
import Korpa from "./Korpa";

function App() {
  const [korpa, setKorpa] = useState([]);
  const dodajUKorpu = (proizvod, kolicina) => {
    setKorpa([...korpa, { ...proizvod, kolicina }]);
  };

  return (
    <Router>
      <Switch>
        <Route path="/korpa">
          <Korpa korpa={korpa} />
        </Route>
        <Route path="/">
          <Prodavnica dodajUKorpu={dodajUKorpu} korpa={korpa} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
