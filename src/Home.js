import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";
function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
          title="Unique stays"
          description="Spaces that are more than just a place to sleep."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family."
        />
      </div>
      <div className="home__section">
        <Card
          src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
          title="3 Bedroom Flat in Bournemouth"
          description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
          price="£130/night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/b5e7db48-f01d-4a20-b065-558ef56ca790.jpg?im_w=720"
          title="Penthouse in London"
          description="Enjoy the amazing sights of London with this stunning penthouse"
          price="£350/night"
        />
        <Card
          src="https://media.nomadicmatt.com/2018/apartment.jpg"
          title="1 Bedroom apartment"
          description="Superhost with great amenities and a fabolous shopping complex nearby"
          price="£70/night"
        />
      </div>
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/5559a635-d940-4eff-b486-5d6415d76e18.jpg?im_w=720"
          title="The Hut, in Blue Area"
          description="Set in the tranquil heart of the Capital's sought after Blue Area,"
          price="£80/night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/2bb42551-fd27-4f7f-bfc9-063957b15e3f.jpg?im_w=720"
          title="Holiday trip of sindh in classic Volkswagen Camper"
          description="Volkswagen microbus camper tour will take you on an amazing trip of Sindh."
          price="£650/night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/2e5550b5-628f-46a6-ae3b-93495384c15e.jpg?im_w=720"
          title="Unique glamping experience near Ely"
          description="A beautifully converted 1945 boat nestled within a private forest"
          price="£870/night"
        />
      </div>
    </div>
  );
}

export default Home;
