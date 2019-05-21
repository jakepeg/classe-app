import React from "react";
import styled from "styled-components";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Animated,
  Dimensions
} from "react-native";
import LoginSuccess from "./LoginSuccess";
import Loading from "./Loading";

class ModalLogin extends React.Component {
  state = {
    email: "",
    password: "",
    iconEmail: require("../assets/icon-email.png"),
    iconPassword: require("../assets/icon-password.png"),
    isSuccessful: false,
    isLoading: false
  };

  handleLogin = () => {
    // Start loading
    this.setState({ isLoading: true });

    // Simulate API Call
    setTimeout(() => {
      // Stop loading and show success
      this.setState({ isLoading: false });
      this.setState({ isSuccessful: true });
    }, 2000);
  };

  focusEmail = () => {
    this.setState({
      iconEmail: require("../assets/icon-email-animated.gif"),
      iconPassword: require("../assets/icon-password.png")
    });
  };

  focusPassword = () => {
    this.setState({
      iconEmail: require("../assets/icon-email.png"),
      iconPassword: require("../assets/icon-password-animated.gif")
    });
  };

  tapBackground = () => {
    Keyboard.dismiss();
  };

  render() {
    return (
      // <TouchableWithoutFeedback onPress={this.tapBackground}>
      <AnimatedContainer style={{ top: this.state.top }}>
        <Modal>
          <Logo source={require("../assets/logo.png")} />
          <Text>Get Organised with ClasseApp</Text>
          <TextInput
            onChangeText={email => this.setState({ email })}
            placeholder="Email"
            keyboardType="email-address"
            onFocus={this.focusEmail}
          />
          <TextInput
            onChangeText={password => this.setState({ password })}
            placeholder="Password"
            secureTextEntry={true}
            onFocus={this.focusPassword}
          />
          <IconEmail source={this.state.iconEmail} />
          <IconPassword source={this.state.iconPassword} />
          <TouchableOpacity onPress={this.handleLogin}>
            <ButtonView>
              <ButtonText>Log in</ButtonText>
            </ButtonView>
          </TouchableOpacity>
        </Modal>
        <LoginSuccess isActive={this.state.isSuccessful} />
        <Loading isActive={this.state.isLoading} />
      </AnimatedContainer>
      // </TouchableWithoutFeedback>
    );
  }
}

export default ModalLogin;

const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 154, 219, 1);
  justify-content: center;
  align-items: center;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const TextInput = styled.TextInput`
  border: 1px solid #464646;
  width: 295px;
  height: 44px;
  border-radius: 10px;
  font-size: 17px;
  color: #3c4560;
  padding-left: 44px;
  margin-top: 20px;
`;

const Modal = styled.View`
  width: 335px;
  height: 370px;
  border-radius: 20px;
  /* background: white;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15); */
  align-items: center;
`;

const Logo = styled.Image`
  width: 64px;
  height: 64px;
  margin-top: 20px;
`;

const Text = styled.Text`
  margin-top: 20px;
  font-size: 13px;
  font-weight: 600;
  /* text-transform: uppercase; */
  width: 160px;
  color: #464646;
  text-align: center;
`;

const ButtonView = styled.View`
  background: #d5003c;
  width: 295px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 30px;
  /* box-shadow: 0 10px 20px #d5003c; */
`;

const ButtonText = styled.Text`
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 20px;
`;

const IconEmail = styled.Image`
  width: 24px;
  height: 16px;
  position: absolute;
  top: 170px;
  left: 31px;
`;

const IconPassword = styled.Image`
  width: 18px;
  height: 24px;
  position: absolute;
  top: 230px;
  left: 35px;
`;
