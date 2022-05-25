import React from "react";
import "./donation.css";

export const DonationTile = () => {
  return (
    <div id="donation_tile">
      <h1 className="donation__header">
        MAKE A DONATION NOW ! <br /> YOU WILL CHANGE SOMEONE'S LIFE FOREVER
      </h1>

      <a className="donate__button" href={"#donate"}>
        DONATE NOW
      </a>
    </div>
  );
};

export default DonationTile;
