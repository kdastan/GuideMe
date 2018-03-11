import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ActionSheet from 'react-native-actionsheet'

export default class EventView extends Component {
    state = {
        businessId: ''
    }
    onPress = btnIndex => {
        switch (btnIndex) {
            case 0:
                console.log(btnIndex, 'BTN_INDEX');
                break;
            case 1:
                console.log(btnIndex, 'BTN_INDEX');
                break;
            case 2:
                console.log(btnIndex, 'BTN_INDEX');
                break;
            default:
        }
    };

    showActionSheet = () => {
        this.actionSheet.show();
    };

    render() {
        const { info, img } = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                <View style={{ flex: 4, backgroundColor: 'red' }}>
                    <Image style={{ width: "100%", height: "100%" }} source={img} />
                    <View style={styles.background} />
                    <View style={styles.titleContainer}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 5 }}>
                                <Text style={{ fontSize: 18, color: 'white', fontWeight: "bold" }}>{info.title}</Text>
                            </View>
                            <View style={{ flex: 5, alignItems: 'flex-end' }}>
                                <Text style={{ color: 'white' }}>{info.time}</Text>
                                <Text style={{ color: 'white' }}>{info.price}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 8, backgroundColor: '#e6e6e6', padding: 5 }}>
                    <ScrollView>
                        <View style={{ flex: 4, backgroundColor: 'white', marginBottom: 10, borderRadius: 5, paddingVertical: 15, paddingHorizontal: 25 }}>
                            <Text style={{ color: 'black', fontWeight: 'bold' }}>{info.synopsis}</Text>
                        </View>
                        <View style={{ flex: 4, backgroundColor: 'white', marginBottom: 10, borderRadius: 5, paddingVertical: 15, paddingHorizontal: 25 }}>
                            <Text style={{ color: 'black', fontWeight: 'bold' }}>{info.place}</Text>
                        </View>
                        <View style={{ flex: 2, backgroundColor: 'white', marginBottom: 10, borderRadius: 5, paddingVertical: 15, paddingHorizontal: 25 }}>
                            <Text style={{ color: 'black', fontWeight: 'bold' }}>{info.route}</Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        width: "100%",
        height: "100%",
        backgroundColor: 'black',
        position: "absolute",
        opacity: 0.5
    },
    titleContainer: {
        flex: 1,
        width: "100%",
        height: "100%",
        position: 'absolute',
        padding: 15,
        paddingBottom: 0
    },
})