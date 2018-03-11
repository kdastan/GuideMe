import React, { Component } from 'react';
import { FlatList, StyleSheet, Image, YellowBox } from 'react-native';
import Card from '../../components/Card';

import dummyData from '../../dummyData/dummyData.json';

const images = [
  require("../../../assets/shymbulak.jpg"),
  require("../../../assets/medeo.jpg"),
  require("../../../assets/kok_tobe.jpg"),
  require("../../../assets/charyn.jpg")
]

class GuideMe extends Component {
  componentWillMount() {
    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
    ]);
  }

  renderCards = (item, index) => {
		return <Card key={index} img={images[index]} info={item} move={this.props.navigation} root={'DetailView'}/>
	};

  render() {
    return (
      <FlatList
        style={styles.container}
        data={dummyData.tours}
        renderItem={({ item, index }) => this.renderCards(item, index)}
        keyExtractor={(item, index) => index}
        ItemSeparatorComponent={this.renderSeparator}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  }
})

export default GuideMe;