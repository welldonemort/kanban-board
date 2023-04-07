import { connect } from "react-redux";
import { Component } from "./component";

const mapStateToProps = (state) => {
  return {
    state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTasks: (new_tasks) =>
      dispatch({ type: "SET_TASKS", payload: new_tasks }),
    setAccounting: (new_accounting) =>
      dispatch({ type: "SET_ACCOUNTING", payload: new_accounting }),
  };
};

export const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
