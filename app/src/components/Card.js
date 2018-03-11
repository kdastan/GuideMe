import React, {Component} from 'react';
import {View, StyleSheet, Text, Image, TouchableHighlight, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Card extends Component{
    nav = (info, img, root) => {
        this.props.move.navigate(root, {info, img});
    }
    render(){
        return(
            <TouchableOpacity onPress={() => this.nav(this.props.info, this.props.img, this.props.root)}>
            <View style={styles.container}>
                <View style={styles.background}/>
                <Image style={styles.image} source={this.props.img}/>
                <View style={styles.textContainer}>
                    <View style={styles.titleContainer}>
                    <View style={{flex:1, flexDirection: 'row'}}>
                    <View style={{flex: 5}}>
                        <Text numberOfLines={2} style={styles.text}>{this.props.info.title}</Text>
                        </View>
                        <View style={{flex: 5, alignItems: 'flex-end'}}>
                        <Text style={styles.text}>{this.props.info.time}</Text>
                        <Text style={styles.text}>{this.props.info.price}</Text>
                        </View>
                    </View>
                    </View>
                    <View style={styles.synopsisContainer}>
                        <Text numberOfLines={2} style={styles.text}>{this.props.info.synopsis}</Text>
                    </View>
                </View>
            </View>
            </TouchableOpacity>
        );
    }  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 15,
        alignItems: 'center',
        height: 200,
        borderRadius: 10
    },
    image: {
        width: "100%",
        borderRadius: 10,
        height: "100%",
        opacity: 0.5,
    },
    background: {
        width: "100%",
        borderRadius: 10,
        height: "100%",
        backgroundColor: 'black',
        position: "absolute",
    },
    text: {
        color: 'white',
        fontWeight: 'bold'
    },
    titleContainer: {
        flex: 3,
        padding: 15,
        paddingBottom: 0,

    },
    synopsisContainer: {
        flex: 7,
        justifyContent: 'flex-end',
        padding: 15,
        paddingBottom: 10,
        alignItems: 'center',
    },
    textContainer:{
        width: "100%",
        borderRadius: 10,
        height: "100%",
        position: "absolute",
        padding: 0
    }
})