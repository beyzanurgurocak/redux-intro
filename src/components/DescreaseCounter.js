import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { descreaseCounter } from "../redux/actions/counterAction";

class DescreaseCounter extends Component {
  render() {
    return (
      <div>
        <button
          onClick={(e) => {
            this.props.dispatch(descreaseCounter());
          }}
        >
          1 eksilt
        </button>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(descreaseCounter, dispatch) };
}
export default connect(mapDispatchToProps)(DescreaseCounter);
