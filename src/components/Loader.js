import React from "react";

const Loader = ({ message = null }) => {
  return (
    <div className="uk-flex uk-flex-column uk-flex-middle uk-margin-top">
      <div uk-spinner="ratio: 1" />
      {message && <h6>{message}</h6>}
      <div className="loader uk-margin">Loading</div>
    </div>
  );
};

export default Loader;
