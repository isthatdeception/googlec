/**
 * searchBar
 */

// react
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

// icons
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";

// custom style CSS

import "../css/Search.css";
import { Button } from "@material-ui/core";

function Search({ hideButtons = false }) {

  // state is just an arbitary reason as we need to dispatch the result
  // we can also write it as
  // const [{ state }, dispatch] = useStateValue();
  // that is how the things are below
  
  const [{ state }, dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const history = useHistory();

  const search = (e) => {
    // preventing refresh
    e.preventDefault();

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    // do something with input and comeback and fix
    history.push("/search");
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
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
