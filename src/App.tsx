import "./styles.css";
import { useState, useEffect } from "react";
import { typesRef } from "./pokemon";
import { colorRef } from "./colors";
import GoTop from "./ScrollBtn";
import InfoTabDisplay from "./InfoTabBtn";

export default function App() {
  const typeNames = typesRef.map((name) => name.type);
  const [search, searchVal] = useState(typeNames);

  const handleChange = (event: any) => {
    let count = event.target.value.length;
    if (event.target.value.length > 0) {
      searchVal(
        typeNames.filter(
          (x) =>
            x.substring(0, count).toLowerCase() ===
            event.target.value.substring(0, count).toLowerCase()
        )
      );
    } else {
      searchVal(typeNames);
    }
  };

  const displayTypes = typesRef
    .filter((e) => search.includes(e.type))
    .map((type, idx) => (
      <div
        key={type.type}
        id={type.type}
        className="type"
        style={{
          borderRadius: "15px",
          boxShadow: `${type.color} 0px 4px 10px`,
        }}
      >
        <h2>{type.type} type</h2>
        <a
          href={`https://pokemondb.net/pokedex/all#type=${type.type.toLowerCase()}`}
          target="_blank"
        >
          <img
            src={type.svg}
            alt={`${type.type}-icon`}
            className="icon"
            style={{
              background: `${type.color}`,
              boxShadow: `0 0 20px ${type.color}`,
            }}
          />
        </a>

        <div
          className="offense-info"
          style={{ border: `2px solid ${type.color}` }}
        >
          <div
            className="info-border"
            style={{
              background: `${type.color}`,
            }}
          >
            <h4>
              Offensive properties of
              <img
                src={type.svg}
                className="title-img"
                alt={`${type.type}-icon`}
              />
              {type.type} type moves
            </h4>
          </div>
          <h3>Super effective (×2): </h3>
          <div id="effectiveness">
            {type.effective.map((el, i) => (
              <a
                href={`#${el}`}
                key={i}
                className="effective"
                style={{
                  background: `${colorRef
                    .filter((e) => e.name === el)
                    .map((c) => c.color)}`,
                }}
              >
                <img
                  src={`https://github.com/duiker101/pokemon-type-svg-icons/blob/master/icons/${el.toLowerCase()}.svg?raw=true}`}
                  alt={`${type.type}-icon`}
                  style={{
                    width: "15px",
                    height: "15px",
                    margin: "-23px -15px -23px -23px",
                  }}
                />
                {el}
              </a>
            ))}
          </div>

          <h3>Not very effective (×½): </h3>
          <div id="noteffectiveness">
            {type.noteffective.map((el, i) => (
              <a
                href={`#${el}`}
                key={i}
                className="noteffective"
                style={{
                  background: `${colorRef
                    .filter((e) => e.name === el)
                    .map((c) => c.color)}`,
                }}
              >
                <img
                  src={`https://github.com/duiker101/pokemon-type-svg-icons/blob/master/icons/${el.toLowerCase()}.svg?raw=true}`}
                  alt={`${type.type}-icon`}
                  style={{
                    width: "15px",
                    height: "15px",
                    margin: "-23px -15px -23px -23px",
                  }}
                />
                {el}
              </a>
            ))}
          </div>

          <h3>Has no effect (x0): </h3>
          <div id="noeffect">
            {type.noeffect.map((el, i) => (
              <a
                href={`#${el}`}
                key={i}
                className="noeffectiveness"
                style={{
                  background: `${colorRef
                    .filter((e) => e.name === el)
                    .map((c) => c.color)}`,
                }}
              >
                <img
                  src={`https://github.com/duiker101/pokemon-type-svg-icons/blob/master/icons/${el.toLowerCase()}.svg?raw=true}`}
                  alt={`${type.type}-icon`}
                  style={{
                    width: "15px",
                    height: "15px",
                    margin: "-23px -15px -23px -23px",
                  }}
                />
                {el}
              </a>
            ))}
          </div>
        </div>

        <div
          className="defense-info"
          style={{ border: `2px solid ${type.color}` }}
        >
          <div
            className="info-border"
            style={{
              background: `${type.color}`,
            }}
          >
            <h4>
              Defensive properties of
              <img
                src={type.svg}
                className="title-img"
                alt={`${type.type}-icon`}
              />
              {type.type} type moves
            </h4>
          </div>
          <h3>Weak to (x2): </h3>
          <div id="weaknesses">
            {type.weakness.map((el, i) => (
              <a
                href={`#${el}`}
                key={i}
                className="weakness"
                style={{
                  background: `${colorRef
                    .filter((e) => e.name === el)
                    .map((c) => c.color)}`,
                }}
              >
                <img
                  src={`https://github.com/duiker101/pokemon-type-svg-icons/blob/master/icons/${el.toLowerCase()}.svg?raw=true}`}
                  alt={`${type.type}-icon`}
                  style={{
                    width: "15px",
                    height: "15px",
                    margin: "-23px -15px -23px -23px",
                  }}
                />
                {el}
              </a>
            ))}
          </div>

          <h3>Resists (×½): </h3>
          <div id="resistances">
            {type.resist.map((el, i) => (
              <a
                href={`#${el}`}
                key={i}
                className="resistance"
                style={{
                  background: `${colorRef
                    .filter((e) => e.name === el)
                    .map((c) => c.color)}`,
                }}
              >
                <img
                  src={`https://github.com/duiker101/pokemon-type-svg-icons/blob/master/icons/${el.toLowerCase()}.svg?raw=true}`}
                  alt={`${type.type}-icon`}
                  style={{
                    width: "15px",
                    height: "15px",
                    margin: "-23px -15px -23px -23px",
                  }}
                />
                {el}
              </a>
            ))}
          </div>

          <h3>Immune to (x0): </h3>
          <div id="immune">
            {type.immune.map((el, i) => (
              <a
                href={`#${el}`}
                key={i}
                className="immunity"
                style={{
                  background: `${colorRef
                    .filter((e) => e.name === el)
                    .map((c) => c.color)}`,
                }}
              >
                <img
                  src={`https://github.com/duiker101/pokemon-type-svg-icons/blob/master/icons/${el.toLowerCase()}.svg?raw=true}`}
                  alt={`${type.type}-icon`}
                  style={{
                    width: "15px",
                    height: "15px",
                    margin: "-23px -15px -23px -23px",
                  }}
                />
                {el}
              </a>
            ))}
          </div>
        </div>
      </div>
    ));
  return (
    <>
      <div id="wrap">
        <InfoTabDisplay />
        <h1>Pokemon Types Chart</h1>
        <div id="sig">- By R McGregor</div>
        <GoTop />
        <input
          id="input-search"
          placeholder="Search for Pokemon Types here..."
          onChange={handleChange}
        ></input>
        <div className="type-display-box">{displayTypes}</div>
      </div>
    </>
  );
}
