import React from "react";
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Platform
} from "react-native";
import styled from "styled-components";
import Card from "../components/Card";
import { connect } from "react-redux";
import Header from "../components/Header";
import ModalLogin from "../components/ModalLogin";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const CardsQuery = gql`
  query GET_POSTS {
    posts {
      edges {
        node {
          postId
          title
          date
          content
          categories {
            edges {
              node {
                name
              }
            }
          }
          author {
            name
          }
          featuredImage {
            sourceUrl
          }
        }
      }
    }
  }
`;

function mapStateToProps(state) {
  return { action: state.action, name: state.name };
}

function mapDispatchToProps(dispatch) {
  return {
    openLogin: () =>
      dispatch({
        type: "OPEN_LOGIN"
      })
  };
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  // componentDidMount() {
  //   // if not loggedd in...
  //   this.props.openLogin();
  // }

  render() {
    return (
      <RootView>
        <StatusBar backgroundColor="transparent" translucent={true} />
        <SafeAreaView>
          <ScrollView style={{ height: "100%" }}>
            <Header />
            <Subtitle>{"Fil d'activité".toUpperCase()}</Subtitle>
            <ScrollView
              horizontal={false}
              style={{ paddingBottom: 30 }}
              showsHorizontalScrollIndicator={false}
            >
              <Query query={CardsQuery}>
                {({ loading, error, data }) => {
                  if (loading) return <Message>Loading...</Message>;
                  if (error) return <Message>Error...</Message>;
                  return (
                    <CardsContainer>
                      {data.posts.edges.map((edge, index) => (
                        <TouchableOpacity
                          key={index}
                          onPress={() => {
                            this.props.navigation.push("Section", {
                              section: edge.node
                            });
                          }}
                        >
                          <Card
                            title={edge.node.title}
                            key={edge.node.postId}
                            image={{ uri: edge.node.featuredImage.sourceUrl }}
                            author={edge.node.author.name}
                            subtitle={edge.node.categories.edges[0].node.name}
                            category={edge.node.categories.edges[0].node.name}
                            date={edge.node.date}
                          />
                        </TouchableOpacity>
                      ))}
                    </CardsContainer>
                  );
                }}
              </Query>
            </ScrollView>
          </ScrollView>
        </SafeAreaView>
        {/* <ModalLogin /> */}
      </RootView>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);

const Message = styled.Text`
  margin: 20px;
  color: #b8bece;
  font-size: 15px;
  font-weight: 500;
`;

const CardsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 10px;
`;

const RootView = styled.View`
  background: white;
  flex: 1;
  margin-top: ${Platform.OS == "android" ? 0 : -44};
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  text-transform: uppercase;
`;
