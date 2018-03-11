import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Card from '../../components/Card';
import dummyData from '../../dummyData/dummyData.json';

const images = [
  require("../../../assets/korean.jpg"),
  require("../../../assets/dance.jpg"),
  require("../../../assets/veshi.jpg"),
  require("../../../assets/sun.jpg")
]
class Today extends Component {
  renderCards = (item, index) => {
    return <Card key={index} img={images[index]} info={item} move={this.props.navigation} root={'EventView'} />
  };
  render() {
    return (
      <FlatList
        style={styles.container}
        data={dummyData.events}
        renderItem={({ item, index }) => this.renderCards(item, index)}
        keyExtractor={(item, index) => item.title}
        ItemSeparatorComponent={this.renderSeparator} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  }
})
export default Today;