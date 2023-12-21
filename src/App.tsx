import { useEffect, useState } from "react";
import { Main } from "./components/Main/Main";
import { Beer } from "./types/types";
import "./App.scss";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  const [beers, setBeers] = useState<Beer[]>([]);

  useEffect(() => {
    const getBeerData = async () => {
      const data = await fetch("https://api.punkapi.com/v2/beers?per_page=6");
      const beersData: Beer[] = await data.json();
      setBeers(beersData);
    };

    getBeerData();
  }, []);

  return (
    <>
      <section className="website-body">
        {" "}
        {/* class name is a placeholder, update it */}
        <NavBar />
        <Main beers={beers} />
      </section>
    </>
  );
}

export default App;
