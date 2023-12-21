import { useState } from "react";
import { Main } from "./components/Main/Main";
import beers from "./data/beers";
import "./App.scss";
import { NavBar } from "./components/NavBar/NavBar";

function App() {

  return (
    <>
      <section className="website-body"> {/* class name is a placeholder, update it */}
        <NavBar />
        <Main beers={beers} />
      </section>
    </>
  );
}

export default App;
