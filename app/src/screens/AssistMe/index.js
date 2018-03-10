import React, { Component } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StatusBar } from 'react-native';

class AssistMe extends Component {
  renderRow = (item) => {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Chat')}>
        <View style={{ height: 75, alignItems: 'center', paddingLeft: 10, flexDirection: 'row' }}>
          <Image style={{ width: 40, height: 40, borderRadius: 20 }} source={require('./assets/images.png')} />
          <Text style={{ paddingLeft: 10 }}>{'Assistant Bot'}</Text>
          <View style={{ bottomBorderColor: 'red', bottomBorderWidth: 1 }} />
        </View>
        <View style={{ backgroundColor: '#2088AA', height: 0.5 }} />
      </TouchableOpacity>
    );
  }

  renderItem = (item) => {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('UserChat')}>
        <View style={{ height: 75, alignItems: 'center', paddingLeft: 10, flexDirection: 'row' }}>
          <Image style={{ width: 40, height: 40, borderRadius: 20 }} source={require('./assets/user.png')} />
          <Text style={{ paddingLeft: 10 }}>{item.key}</Text>
        </View>
        <View style={{ backgroundColor: '#2088AA', height: 0.5 }} />
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white', paddingLeft: 10 }}>
        <StatusBar barStyle="light-content" />
        <FlatList
          ListHeaderComponent={this.renderRow()}
          data={[{ key: 'Иван Крепак' }, { key: 'Мурат Мусса' }, { key: 'Жаксылык Жанабаева' }]}
          renderItem={({ item }) => this.renderItem(item)}
        />
      </View>
    );
  }
}

export default AssistMe;