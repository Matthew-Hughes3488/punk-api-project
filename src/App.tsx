import { useEffect, useState, ChangeEvent } from "react";
import { Main } from "./components/Main/Main";
import { Beer } from "./types/types";
import "./App.scss";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [searchValue, setSearchValue] = useState<string>("")
  const [searchHighABV, setSearchHighABV] = useState<boolean>(false);
  const [searchClassicRange, setSearchClassicRange] = useState<boolean>(false);
  const [searchAdicity, setSearchAcitdity] = useState<boolean>(false);

  const handleHighABVChange = () =>{
    setSearchHighABV(!searchHighABV);       
  }
  const handleClassicRangeChange = () =>{
    setSearchClassicRange(!searchClassicRange)
  }
  const handleAcidityChange = () =>{
    setSearchAcitdity(!searchAdicity)
  }
  
  const handleSearchBoxInput = (event: ChangeEvent<HTMLInputElement>) =>{
    const value : string = event.currentTarget.value;
    if(!value) setSearchValue("");
    else {
      value.replace(" ", "_");
      setSearchValue(`&beer_name=${value}`)
    }
  }

  const getBeerData = async () => {
    const data = await fetch(`https://api.punkapi.com/v2/beers?per_page=6${searchValue}`);
    const beersData: Beer[] = await data.json();
    setBeers(beersData);
  };

  useEffect(() => {
    getBeerData();
  }, [searchValue]);

  return (
    <>
      <section className="website-body">
        {/* class name is a placeholder, update it */}
        <NavBar onSearchBoxChange={handleSearchBoxInput} onABVChange={handleHighABVChange} onAcidityChange={handleAcidityChange} onClassicRangeChange={handleClassicRangeChange}/>
        <Main beers={beers} />
      </section>
    </>
  );
}

export default App;
