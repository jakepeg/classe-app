import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import { Icon } from "expo";

function mapStateToProps(state) {
  return {
    kids: state.child_list
  };
}

class Child extends React.Component {
  render() {
    return (
      <Container>
        <Image source={{ uri: this.props.profile_pic, cache: "force-cache" }} />
        <Content>
          <Name>{this.props.name}</Name>
          {this.props.kids[this.props.indexkey].classes.map((classe, index) => (
            <Text key={index}>
              {classe.class_name} ({classe.class_teacher_name})
            </Text>
          ))}
          <TouchableOpacity onPress={this.handleAddClass}>
            <Button>
              <ButtonText>Add a class</ButtonText>
            </Button>
          </TouchableOpacity>
          <RightArrow style={{ position: "absolute", right: 80 }}>
            <Icon.Ionicons
              name="ios-arrow-forward"
              size={20}
              color="#BDE4F7"
              style={{ marginTop: -2 }}
            />
          </RightArrow>
        </Content>
      </Container>
    );
  }
}

export default connect(mapStateToProps)(Child);

const Container = styled.View`
  flex-direction: row;
  margin-top: 30px;
`;

const Image = styled.Image`
  width: 68px;
  height: 68px;
  border-radius: 34px;
  justify-content: center;
  border-width: 2px;
  border-color: #bde4f7;
`;

const Content = styled.View`
  padding-left: 20px;
  width: 100%;
`;

const Name = styled.Text`
  color: #ffffff;
  font-size: 22px;
  font-weight: 500;
`;

const Text = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
  margin-top: 5px;
`;

const RightArrow = styled.View`
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
`;

const Button = styled.View`
  background: #d5003c;
  width: 130px;
  height: 35px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 10px;
`;
const ButtonText = styled.Text`
  color: white;
  font-weight: 500;
  font-size: 16px;
`;
