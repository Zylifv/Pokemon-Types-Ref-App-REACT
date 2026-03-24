import { useState, useEffect } from "react";

const InfoTabDisplay = () => {
  const [infoDisplay, setInfoDisplay] = useState(false);

  return (
    <>
      <button
        type="button"
        id="info-tab-btn"
        onClick={() => {
          setInfoDisplay(!infoDisplay);
        }}
      >
        <img
          id="info-tab-svg"
          src={
            infoDisplay
              ? "https://www.svgrepo.com/show/155822/up-arrow-angle.svg"
              : "https://www.svgrepo.com/show/102662/arrow-down-angle.svg"
          }
          alt="down-arrow-symbol"
        />
      </button>
      <p id={infoDisplay ? "information" : "hide-information"}>
        Use the search bar to find a desired Pokemon type or scroll to search
        though all current types. The type charts show offensive and defensive
        properties including immunities and no-effect match-ups. Each property
        symbol is a clickable button that will take you to that types chart. The
        type symbol at the top of each chart is an external link that lists all
        Pokemon that currently possess that type.
        <p>Have fun!</p>
      </p>
    </>
  );
};

export default InfoTabDisplay;
