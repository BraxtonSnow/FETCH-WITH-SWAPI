import { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";

export default function PersonInfo() {
  const [people, setPeople] = useState([]);
  const [planet, setPlanet] = useState("No where");
  const [person, setPerson] = useState("My Friend");
  const [planetURL, setPlanetURL] = useState("");
  useEffect(() => {
    fetch("https://swapi.tech/api/people")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setPeople(data.results);
      })
      .catch((error) => console.error(error));
  }, []);

  function fetchPlanet(planetinfo) {
    fetch(`${planetinfo}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPlanet(data.result.properties.name);
      })
      .catch((error) => console.error(error));
  }

  function fetchPersonInfo(num, name) {
    console.log(typeof num);
    fetch(`https://swapi.tech/api/people/${num}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPlanetURL(data.result.properties.homeworld);
        setPerson(name);
        fetchPlanet(data.result.properties.homeworld);
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="main-container">
      <div className="button-container">
        {people.map((person) => {
          // console.log(person);
          return (
            <button
              key={person.uid}
              onClick={() => fetchPersonInfo(parseInt(person.uid), person.name)}
            >
              {person.name}
            </button>
          );
        })}
      </div>
      <div>
        <h2>{`${person} is from the Planet `}</h2>
      </div>
      <div className="display-planet-container">{planet}</div>
    </div>
  );
}
