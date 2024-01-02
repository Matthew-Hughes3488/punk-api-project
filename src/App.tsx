import { useEffect, useState, ChangeEvent } from "react";
import { Main } from "./components/Main/Main";
import { Beer } from "./types/types";
import { NavBar } from "./components/NavBar/NavBar";
import { HashRouter, Route, Routes } from "react-router-dom";
import { BeerInfo } from "./container/BeerInfo/BeerInfo";
import "./App.scss";

function App() {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [numOfResults, setNumOfResults] = useState<string>("80");
  const [searchHighABV, setSearchHighABV] = useState<string>("");
  const [searchClassicRange, setSearchClassicRange] = useState<string>("");
  const [searchAdicity, setSearchAcitdity] = useState<boolean>(false);

  const handleHighABVChange = () => {
    if (searchHighABV) setSearchHighABV("");
    else setSearchHighABV("&abv_gt=6");
  };
  const handleClassicRangeChange = () => {
    if (searchClassicRange) setSearchClassicRange("");
    else setSearchClassicRange("&brewed_before=01/2010");
  };
  const handleAcidityChange = () => {
    setSearchAcitdity(!searchAdicity);
  };

  const handleSearchBoxInput = (event: ChangeEvent<HTMLInputElement>) => {
    const value: string = event.currentTarget.value;
    if (!value) setSearchValue("");
    else {
      value.replace(" ", "_");
      setSearchValue(`&beer_name=${value}`);
    }
  };

  const handleNumOfResultsChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value: string = event.currentTarget.value;
    if (!value || parseInt(value) < 1 || parseInt(value) > 80)
      setNumOfResults("80");
    else {
      setNumOfResults(value);
    }
  };

  const filterPh = (beers: Beer[]): Beer[] => {
    return beers.filter((beer) => {
      return beer.ph < 4;
    });
  };

  const getDefaultBeerData = async () =>{
    const data = await fetch(
      `https://api.punkapi.com/v2/beers?per_page=80`
    );
    const beersData: Beer[] = await data.json();
    sessionStorage.setItem("80", JSON.stringify(beersData));
  }

  const getBeerData = async () => {
    const queryKey = `${numOfResults}${searchValue}${searchHighABV}${searchClassicRange}`;
    const storedData = sessionStorage.getItem(queryKey);
    

    if (storedData) setBeers(JSON.parse(storedData));
    else {
      const data = await fetch(
        `https://api.punkapi.com/v2/beers?per_page=${numOfResults}${searchValue}${searchHighABV}${searchClassicRange}`
      );
      let beersData: Beer[] = await data.json();

      if (searchAdicity) beersData = filterPh(beersData);

      sessionStorage.setItem(queryKey, JSON.stringify(beersData));

      setBeers(beersData);
    }
  };

  useEffect(() => {
    getBeerData();
  }, [
    searchValue,
    searchHighABV,
    searchClassicRange,
    searchAdicity,
    numOfResults,
  ]);

  getDefaultBeerData();

  return (
    <HashRouter basename="/punk-api-project">
      <Routes>
        <Route
          path="/"
          element={
            <section className="website-body">
              <NavBar
                onSearchBoxChange={handleSearchBoxInput}
                onNumOfResultsChange={handleNumOfResultsChange}
                onABVChange={handleHighABVChange}
                onAcidityChange={handleAcidityChange}
                onClassicRangeChange={handleClassicRangeChange}
              />
              <Main beers={beers} />
            </section>
          }
        />
        <Route path="/beers/:id" element={<BeerInfo beers={beers} />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
