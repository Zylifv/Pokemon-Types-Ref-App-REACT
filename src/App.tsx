import "./styles.css";
import { useState, useEffect } from "react";
import { typesRef } from "./pokemon";
import GoTop from "./ScrollBtn";
import InfoTabDisplay from "./InfoTabBtn";
import DisplayTypes from "./DisplayTypes";

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
        <DisplayTypes />
      </div>
    </>
  );
}
