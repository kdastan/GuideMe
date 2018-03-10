import React, { Component } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { ApiAiClient } from "api-ai-javascript";

class Chat extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`,
    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
  });

  state = {
    messages: [],
    user: true
  }

  onReceive(text) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, {
          _id: Math.round(Math.random() * 1000000),
          text: text,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: require('../AssistMe/assets/Islam.png')
          },
        }),
      };
    });
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  swithcer = (messages) => {
    if (this.state.user) {
      this.onSend(messages);
      this.setState({ user: false });
    } else {
      this.onReceive(messages[0].text);
      this.setState({ user: true });
    }
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.swithcer(messages)}
        user={{
          _id: 1,
        }}
      />
    )
  }
}

export default Chat;