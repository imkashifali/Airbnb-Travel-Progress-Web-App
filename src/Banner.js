import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Banner.css";
import Search from "./Search";

function Banner() {
  const history = useHistory();
  const [showSearch, setshowSearch] = useState(false);
  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <Search />}
        <Button
          onClick={() => setshowSearch(!showSearch)}
          className="banner__searchButton"
          variant="outlined"
        >
          {showSearch ? "hide" : "Search Date"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Go Near</h1>
        <h5>
          Settle in somewhere new. Discover stays to live, work, or just relax..
        </h5>
        <Button onClick={() => history.push("/search")} variant="outlined">
          Explore Nearby
        </Button>
      </div>
    </div>
  );
}

export default Banner;
