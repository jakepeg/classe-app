import React from "react";
import styled from "styled-components";
import { withNavigation } from "react-navigation";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { Icon } from "expo";
import firebase from "../components/Firebase";

class SignupScreen extends React.Component {
  state = {
    name: "",
    email: "",
    phone: "",
    password: "",
    language: "English",
    isSuccessful: false,
    isLoading: false
  };

  static navigationOptions = {
    header: null
  };

  tapBackground = () => {
    Keyboard.dismiss();
    this.props.closeLogin();
  };

  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate("SignIn"))
      .catch(error => this.setState({ errorMessage: error.message }));
  };

  render() {
    return (
      <Container>
        <Modal>
          <Logo source={require("../assets/logo.png")} />
          <Text>Get Started with ClasseApp</Text>
          <TextInput
            onChangeText={email => this.setState({ email })}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            onChangeText={password => this.setState({ password })}
            placeholder="Password"
            secureTextEntry={true}
          />
          <IconEmail>
            <Icon.Ionicons name="ios-mail" size={26} color="#009adb" />
          </IconEmail>

          <IconPassword>
            <Icon.Ionicons name="ios-lock" size={26} color="#009adb" />
          </IconPassword>

          <TouchableOpacity onPress={this.handleSignUp}>
            <Button>
              <ButtonText>Sign Up</ButtonText>
            </Button>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("SignIn")}
          >
            <LinkText>Login</LinkText>
          </TouchableOpacity>
        </Modal>
      </Container>
    );
  }
}

export default withNavigation(SignupScreen);

const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #009adb;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.Image`
  width: 68px;
  height: 68px;
  margin-top: -32px;
  border-radius: 32px;
  border-width: 4px;
  border-color: #ffffff;
`;
const Text = styled.Text`
  margin-top: 20px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  width: 160px;
  text-align: center;
  color: #b8bece;
`;
const TextInput = styled.TextInput`
  border: 1px solid #dbdfea;
  width: 295px;
  height: 44px;
  border-radius: 10px;
  font-size: 17px;
  color: #3c4560;
  margin-top: 20px;
  padding-left: 44px;
`;

const Button = styled.View`
  background: #d5003c;
  width: 295px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  /* box-shadow: 0 10px 20px #c2cbff; */
  margin-top: 20px;
`;
const ButtonText = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 20px;
  /* text-transform: uppercase; */
`;
const LinkText = styled.Text`
  color: #009adb;
  font-weight: 600;
  font-size: 18px;
  margin-top: 20px;
`;
const IconName = styled.View`
  width: 26px;
  height: 26px;
  position: absolute;
  top: 175px;
  left: 35px;
`;
const IconEmail = styled.View`
  width: 26px;
  height: 26px;
  position: absolute;
  top: 116px;
  left: 31px;
`;
const IconPassword = styled.View`
  width: 26px;
  height: 26px;
  position: absolute;
  top: 178px;
  left: 35px;
`;

const IconPhone = styled.View`
  width: 26px;
  height: 26px;
  position: absolute;
  top: 302px;
  left: 35px;
`;

const Modal = styled.View`
  width: 335px;
  height: 350px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  align-items: center;
`;
