/**
 * useGoogleSearch
 * custom search engine api
 */

import { useState, useEffect } from "react";

const config = require("./config");
// dotenv file for sensitive infos..
// require("dotenv").config();

// google search
const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  /* 
  effect hook
  get info from the data layer
  for the search engine term to pass on to the
  custom search api
  **/

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${config.api_key}&cx=${config.context_key}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };

    fetchData();
  }, [term]);

  return { data };
};

export default useGoogleSearch;
