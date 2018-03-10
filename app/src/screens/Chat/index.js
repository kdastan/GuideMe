import React, { Component } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { ApiAiClient } from "api-ai-javascript";

class Chat extends Component {
  state = {
    messages: [],
  }

  handleRequest = (phrase) => {

    const client = new ApiAiClient({
      accessToken: 'af0501abc06549e0bc61cccc2c52165f'
    })
      .textRequest(phrase)
      .then((response) => this.onReceive(response.result.fulfillment.speech))
      .catch((error) => { console.log(error) })
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello traveller, I can help you in your trip. Type me, sometimes :)',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: require('../AssistMe/assets/images.png'),
          },
        },
      ],
    })
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
            avatar: require('../AssistMe/assets/images.png')
          },
        }),
      };
    });
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
    this.handleRequest(messages[0].text);
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    )
  }
}

export default Chat;