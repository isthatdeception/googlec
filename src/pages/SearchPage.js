import React from "react";
import "../css/SearchPage.css";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";

// searchpage 
function SearchPage() {
  
  /**
   * search page
   * hooks and state
   * also have to make some events for refreshing
   * and more
   *
   * for search ..
   * we will use the term that is been provided by the user
   * and so can he/ she can experience his search results
   * as per alongside their query
   */

  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);

  /**
   * for custom search
   * https://developers.google.com/custom-search/
   * custom search api
   * provided by google
   */

  console.log(data);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <h1>{term}</h1>
      </div>
      <div className="searchPage__results"></div>
    </div>
  );
}

export default SearchPage;
