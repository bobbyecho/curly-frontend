import React from "react";
import PropTypes from "prop-types";
import Header from "../Header";

export default function Container({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
