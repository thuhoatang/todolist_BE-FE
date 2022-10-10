import React, { useState } from "react";
import { connect } from "react-redux";

const Spinner = (props) => {
  const isLoading = props.isLoading;
  if (isLoading)
    return (
      <div className="ui active dimmer">
        <div className="ui text loader">{props.message}</div>
      </div>
    );
  else return <></>;
};

Spinner.defaultProps = {
  message: "Loading...",
};

const mapstateToProps = (state) => {
  return { isLoading: state.spinner.isLoading };
};
export default connect(mapstateToProps, {})(Spinner);
