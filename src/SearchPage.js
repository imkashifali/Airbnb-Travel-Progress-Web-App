import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from './SearchResult';

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays · 26 October to 30 October · 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
          img="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          location="Private room in center of London"
          title="Online Experiences"
          description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine."
          star={4}
          price="£30 / night"
          total="£117 total"
        />
        <SearchResult
          img="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
          location="Private room in center of London"
          title="Unique stays"
          description="2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen."
          star={2}
          price="£320 / night"
          total="£1127 total"
        />
        <SearchResult
          img="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          location="Private room in center of London"
          title="Entire homes"
          description="4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine."
          star={5}
          price="£320 / night"
          total="£657 total"
        />
         <SearchResult
          img="https://a0.muscache.com/im/pictures/5559a635-d940-4eff-b486-5d6415d76e18.jpg?im_w=720"
          title="The Hut, in Blue Area"
          location="Private room in center of Islamabad"
          description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine,"
          star={5}
          price="$80/night"
          total="$347 total"
        />
        <SearchResult
          img="https://a0.muscache.com/im/pictures/2bb42551-fd27-4f7f-bfc9-063957b15e3f.jpg?im_w=720"
          title="Holiday trip of sindh in classic Volkswagen Camper"
          location="Private room in center of London"
          description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning."
          star={6}
          price="$120/night"
          total="$347 total"
        />
        <SearchResult
          img="https://a0.muscache.com/im/pictures/2e5550b5-628f-46a6-ae3b-93495384c15e.jpg?im_w=720"
          title="Unique glamping experience near Ely"
          location="Private room in center of London"
          description="2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine"
          star={5}
          price="$420/night"
          total="$1247 total"

        />
        <SearchResult
          img="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
          title="3 Bedroom Flat in Bournemouth"
          location="Private room in center of London"
          description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
          star={5}
          price="$120/night"
          total="$547 total"
        />
        <SearchResult
          img="https://a0.muscache.com/im/pictures/b5e7db48-f01d-4a20-b065-558ef56ca790.jpg?im_w=720"
          title="Penthouse in London"
          location="Private room in center of London"
          description="2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen"
          star={5}
          price="$120/night"
          total="$547 total"
        />
        <SearchResult
          img="https://media.nomadicmatt.com/2018/apartment.jpg"
          title="1 Bedroom apartment"
          description="4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine"
          location="Private room in center of London"
          star={5}
          price="$120/night"
          total="$447 total"
        />
    </div>
  );
}

export default SearchPage;
