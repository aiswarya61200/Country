import Axios from "axios";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Searchcountry() {
  const [inputData, setInputData] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const Nation = async () => {
    await Axios.get(`https://restcountries.com/v3.1/name/${searchInput}`).then(
      (res) => {
        console.log(res);
        setInputData(res.data);
        console.log(inputData);
      }
    );
  };

  const onChange = (e) => {
    setSearchInput(e.target.value);
    console.log(searchInput);
  };
  const getAPI = (e) => {
    e.preventDefault();
    Nation();
  };

  return (
    <div className="container">
      <h2 className="heading">Search country</h2>
      <form>
        <input
          type="text"
          id="search-input"
          placeholder="Search..."
          onChange={onChange}
        />

        <button onClick={getAPI}>Search</button>
      </form>

      {inputData && inputData.length > 0 ? (
        inputData.map((data) => {
          return (
            <div key={uuidv4()}>
              <h2>Name:{data.name.common}</h2>
              <h2>Capital: {data.capital}</h2>
              <h2>Population: {data.population}</h2>
              <h2>Continents: {data["continents"][0]}</h2>
              <h2>
                Lating:{data["latlng"][0]},{data["latlng"][1]}
              </h2>
              <img src={data.flags.png} alt={data.name.common} />
            </div>
          );
        })
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Searchcountry;
