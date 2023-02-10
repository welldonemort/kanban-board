import { connect } from "react-redux";
import { Component } from "./component";

const mapStateToProps = (state) => {
  return {
    tasks: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTasks: (new_tasks) =>
      dispatch({ type: "SET_TASKS", payload: new_tasks }),
  };
};

export const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
