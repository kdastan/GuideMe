import React, { Component } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

class AssistMe extends Component {
  renderRow = (item) => {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Chat')}>
        <View style={{ height: 55, alignItems: 'center', paddingLeft: 10, flexDirection: 'row' }}>
          <Image style={{ width: 40, height: 40, borderRadius: 20 }} source={require('./assets/images.png')} />
          <Text style={{ paddingLeft: 10 }}>{'Assistant Bot'}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          ListHeaderComponent={this.renderRow()}
          data={[{ key: 'Assistant Bot' }]}
          renderItem={({ item }) => this.renderRow(item)}
        />
      </View>
    );
  }
}

export default AssistMe;