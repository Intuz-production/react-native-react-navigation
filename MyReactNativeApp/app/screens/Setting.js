// Copyright (C) 2019 INTUZ. 

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to
// the following conditions:

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR
// ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH
// THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

import React, { Component } from "react";
import { Dimensions, Platform, Text, Linking, View, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Card, Button } from "react-native-elements";
import Icon from 'react-native-vector-icons/MaterialIcons';
import ParallaxScrollView from 'react-native-parallax-scrollview';

// const {
//     height: SCREEN_HEIGHT,
// } = Dimensions.get('window');

//const SCREEN_HEIGHT = Dimensions.get('screen').height;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

class Setting extends Component {

    renderNavBar = () => (
        <View style={styles.navContainer}>
            <View style={styles.statusBar} />
            <View style={styles.navBar}>
                <TouchableOpacity style={styles.iconLeft} onPress={() => { }}>
                    <Icon name="add" size={25} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconRight} onPress={() => { }}>
                    <Icon name="search" size={25} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    )

    renderContent = () => {

    }

    render() {
        return (
            <ParallaxScrollView
                windowHeight={SCREEN_HEIGHT * 0.4}
                backgroundSource='http://i.imgur.com/UyjQBkJ.png'
                navBarTitle='John Oliver'
                userName='John Oliver'
                userTitle='Comedian'
                userImage='http://i.imgur.com/RQ1iLOs.jpg'
                leftIcon={{ name: 'rocket', color: 'rgba(193, 193, 193, 1)', size: 30, type: 'font-awesome' }}
                rightIcon={{ name: 'user', color: 'rgba(193, 193, 193, 1)', size: 30, type: 'font-awesome' }}
            >
                <ScrollView style={{ flex: 1, backgroundColor: 'rgba(228, 117, 125, 1)' }}>
                    <View style={{ height: 150, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 32, color: 'white' }}>Custom view</Text>
                    </View>
                    <View style={{ height: 150, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 32, color: 'white' }}>keep going.</Text>
                    </View>
                    <View style={{ height: 150, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 32, color: 'white' }}>keep going..</Text>
                    </View>
                    <View style={{ height: 150, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 32, color: 'white' }}>keep going...</Text>
                    </View>
                    <View style={{ height: 150, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 32, color: 'white' }}>the end! :)</Text>
                    </View>
                </ScrollView>
            </ParallaxScrollView>
        );
    }
}

const images = {
    //background: require('../../../img/test.jpg'),
};

const styles = StyleSheet.create({
    navContainer: {
        height: HEADER_HEIGHT,
        marginHorizontal: 10,
    },
    statusBar: {
        height: STATUS_BAR_HEIGHT,
        backgroundColor: 'transparent',
    },
    navBar: {
        height: NAV_BAR_HEIGHT,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'transparent',
    },
    titleStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
});
export default Setting;


