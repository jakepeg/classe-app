import React from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { ChatManager, TokenProvider } from "@pusher/chatkit-client";

const CHATKIT_TOKEN_PROVIDER_ENDPOINT =
  "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/90511c2a-86a6-4b7b-8961-6c52c5f1a4d4/token";
const CHATKIT_INSTANCE_LOCATOR = "v1:us1:90511c2a-86a6-4b7b-8961-6c52c5f1a4d4";
const CHATKIT_ROOM_ID = "21068236";
const CHATKIT_USER_NAME = "jakepeg@gmail.com";

export default class MyChat extends React.Component {
  state = {
    messages: []
  };

  componentDidMount() {
    const tokenProvider = new TokenProvider({
      url: CHATKIT_TOKEN_PROVIDER_ENDPOINT
    });

    const chatManager = new ChatManager({
      instanceLocator: CHATKIT_INSTANCE_LOCATOR,
      userId: CHATKIT_USER_NAME,
      tokenProvider: tokenProvider
    });

    chatManager
      .connect()
      .then(currentUser => {
        this.currentUser = currentUser;
        this.currentUser.subscribeToRoom({
          roomId: CHATKIT_ROOM_ID,
          hooks: {
            onMessage: this.onReceive
          }
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  onReceive = data => {
    const { id, senderId, text, createdAt } = data;
    const incomingMessage = {
      _id: id,
      text: text,
      createdAt: new Date(createdAt),
      user: {
        _id: senderId,
        name: senderId,
        avatar: require("../assets/teacher_avatar.jpg")
      }
    };

    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, incomingMessage)
    }));
  };

  onSend = (messages = []) => {
    messages.forEach(message => {
      this.currentUser
        .sendMessage({
          text: message.text,
          roomId: CHATKIT_ROOM_ID
        })
        .then(() => {})
        .catch(err => {
          console.log(err);
        });
    });
  };

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: CHATKIT_USER_NAME
        }}
        renderUsernameOnMessage={true}
      />
    );
  }
}