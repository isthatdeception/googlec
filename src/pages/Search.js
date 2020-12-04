/**
 * searchBar
 */

// react
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";

// icons
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";

// custom style CSS

import "../css/Search.css";
import { Button } from "@material-ui/core";

function Search(hideButtons = false) {
  const { state, dispatch } = useStateValue();

  const { input, setInput } = useState("");
  const history = useHistory();

  const search = (e) => {
    // preventing refresh
    e.preventDefault();
    history.push("/search");
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={input} onchange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>

      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm feeling lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            className="search__buttonsHidden"
            type="submit"
            onClick={search}
            variant="outlined"
          >
            Google Search
          </Button>
          <Button className="search__buttonsHidden" variant="outlined">
            I'm feeling lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
