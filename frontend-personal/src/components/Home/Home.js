import { useState } from "react";
import "./Home.css";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

function Home() {
  const [searchMake, setSearchMake] = useState("");
  const [carData, setCarData] = useState([]);

  async function getData(make) {
    const data = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${make}?format=json`);
    const response = data.json()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchMake) {
      getData(searchMake);
    }
  }

  return (
    <div className="home-page">
      <h1 style={ { textAlign: "center", fontWeight: "bold" } }>Home</h1>
      <br />
      <br />
      <label htmlFor="make" style={ { textAlign: "center" } }>Make:</label>
      <input type="text" id="make" onChange={ (e) => setSearchMake(e.target.value) } placeholder="insert Vehicle Make to Search" />
      <button type="submit" onClick={ handleSubmit }>Search for "{ searchMake }"</button>
    </div>

  )
}

export default Home;
