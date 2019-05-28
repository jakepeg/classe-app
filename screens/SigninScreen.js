import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import ModalLogin from "../components/ModalLogin";

function mapStateToProps(state) {
  return { action: state.child_name };
}

const mapDispatchToProps = dispatch => ({
  openLogin: () =>
    dispatch({
      type: "OPEN_LOGIN"
    })
});

class SigninScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    this.props.openLogin();
  }

  render() {
    return (
      <Wrapper>
        <ModalLogin />
      </Wrapper>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SigninScreen);

const Wrapper = styled.View`
  height: 100%;
  width: 100%;
  background: #009adb;
`;
