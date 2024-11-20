import React from "react";

const MauticForm = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Contact Us</h2>
      <h6 style={{ color: "#E11000" }}>Fill out the form</h6>
      <iframe
        src="//mautic-lando.lndo.site/form/4"
        width="300"
        height="500"
        frameBorder="0"
        title="Mautic Form"
      >
        <p>Your browser does not support iframes.</p>
      </iframe>
    </div>
  );
};

export default MauticForm;
