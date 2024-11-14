import React from "react";

const MauticForm = () => {
  return (
    <div>
      <h2>Contact Us</h2>
      <iframe
        src="//mautic-lando.lndo.site/form/4"
        width="300"
        height="500"
        frameBorder="0"
        allowTransparency="true"
        title="Mautic Form"
      >
        <p>Your browser does not support iframes.</p>
      </iframe>
    </div>
  );
};

export default MauticForm;
