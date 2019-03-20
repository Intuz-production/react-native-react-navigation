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
import { ScrollView, Text, Linking, View, FlatList, Animated, Dimensions } from "react-native";
import { Card, Button, ListItem } from "react-native-elements";
//import ParallaxScrollView from 'react-native-parallax-scrollview';
import { Dropdown } from 'react-native-material-dropdown';

var itemName = "Beyside";
export const SCREEN_HEIGHT = Dimensions.get('window').height;
class Detail extends Component {

    topTabs = ["Recommended", "Quick Bites", "Others"]
    constructor(props) {
        super(props);
        this.state = {
            showTabs: false,
            loading: false,
            data: [],
            page: 1,
            seed: 1,
            error: null,
            refreshing: false,
            fadeAnim: new Animated.Value(0),
            test: '',
            showWorkingHours: false
        };
    }

    componentDidMount() {
        this.makeRemoteRequest();
    }

    makeRemoteRequest = () => {
        const { page, seed } = this.state;
        const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
        this.setState({ loading: true });

        fetch(url).then(res => res.json()).then(res => {
            this.setState({
                data: page === 1 ? res.results : [...this.state.data, ...res.results],
                error: res.error || null,
                loading: false,
                refreshing: false
            })
        })
            .catch(error => {
                this.setState({ error, loading: false });
            });
    }

    renderHeader = (data, showWorkingHours) => {
        let workingHoursView
        if (showWorkingHours) {
            console.log("Show View: " + this.state.showWorkingHours)
            workingHoursView = <FlatList
                style={{ backgroundColor: 'lightgrey' }}
                data={data}
                renderItem={({ item }) => (
                    <ListItem
                        title={`${item}`}
                        containerStyle={{ borderBottomWidth: 0 }}
                        hideChevron
                    />
                )}
                keyExtractor={item => item}
            />
        } else {
            console.log("Not Show View: " + this.state.showWorkingHours)
            workingHoursView = null
        }
        return (
            <View style={{ margin: 20 }}>
                <Card>
                    <Text> {itemName} </Text>
                    <Text> 46-40 Francis Lewis </Text>
                    {/* <Dropdown
                        label='Working Hours'
                        data={data}
                        style={{ margin: 10 }}
                    /> */}
                    <Button
                        buttonStyle={{ marginTop: 20 }}
                        backgroundColor="lightgrey"
                        title="Working Hours"
                        onPress={() => {
                            this.renderWorkingHours();
                        }}
                    />
                    {workingHoursView}
                </Card>
            </View>);
    }

    renderWorkingHours = () => {
        this.setState(this.state.showWorkingHours ? { showWorkingHours: false } : { showWorkingHours: true })
    }

    ViewVisibility = () => {
        console.log('Visible');
        this.setState({ showTabs: true })
        this.props.navigation.setParams({ otherParam: itemName })
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue: 1,
                duration: 3000,
            }
        ).start();
    }

    ViewInvisibility = () => {
        console.log('Invisible');
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('otherParam'),
        };
    };

    render() {
        let { fadeAnim } = this.state;
        let data = ["Monday-Friday  08:00 - 22:00", "Saturday-Sunday 10:00 - 15:00"];
        // let data = [{
        //     value: "Monday-Friday  08:00 - 22:00",
        // }, {
        //     value: "Saturday-Sunday 10:00 - 15:00",
        // }, {
        //     value: "Monday-Friday  08:00 - 22:00",
        // }, {
        //     value: "Saturday-Sunday 10:00 - 15:00",
        // }, {
        //     value: "Monday-Friday  08:00 - 22:00",
        // }, {
        //     value: "Saturday-Sunday 10:00 - 15:00",
        // }, {
        //     value: "Monday-Friday  08:00 - 22:00",
        // }, {
        //     value: "Saturday-Sunday 10:00 - 15:00",
        // }];
        return (
            <View style={{ flex: 1 }}>
                <Animated.View opacity={this.state.showTabs ? fadeAnim : 0}>
                    <FlatList
                        style={{ backgroundColor: 'lightgrey' }}
                        data={this.topTabs}
                        renderItem={({ item }) => (
                            <ListItem
                                title={`${item}`}
                                containerStyle={{ borderBottomWidth: 0 }}
                            />
                        )}
                        keyExtractor={item => item}
                        horizontal />

                </Animated.View>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => (
                        <ListItem
                            roundAvatar
                            title={`${item.name.first} ${item.name.last}`}
                            subtitle={item.email}
                            avatar={{ uri: item.picture.thumbnail }}
                            containerStyle={{ borderBottomWidth: 0 }}
                        />
                    )}
                    keyExtractor={item => item.email}
                    ListHeaderComponent={this.renderHeader(data, this.state.showWorkingHours)}
                    onScrollBeginDrag={() => { this.ViewVisibility(); }}
                    onRefresh={this.ViewInvisibility()}
                />
            </View>
        )
    }

    // render() {
    //     return (
    //         <ParallaxScrollView
    //             windowHeight={SCREEN_HEIGHT * 0.4}
    //             backgroundSource='http://i.imgur.com/UyjQBkJ.png'
    //             navBarTitle='John Oliver'
    //             userName='John Oliver'
    //             userTitle='Comedian'
    //             userImage='http://i.imgur.com/RQ1iLOs.jpg'
    //             leftIcon={{ name: 'rocket', color: 'rgba(193, 193, 193, 1)', size: 30, type: 'font-awesome' }}
    //             rightIcon={{ name: 'user', color: 'rgba(193, 193, 193, 1)', size: 30, type: 'font-awesome' }}
    //         >
    //             <ScrollView style={{ flex: 1, backgroundColor: 'rgba(228, 117, 125, 1)' }}>
    //                 <View style={{ height: 300, justifyContent: 'center', alignItems: 'center' }}>
    //                     <Text style={{ fontSize: 32, color: 'white' }}>Custom view</Text>
    //                 </View>
    //                 <View style={{ height: 300, justifyContent: 'center', alignItems: 'center' }}>
    //                     <Text style={{ fontSize: 32, color: 'white' }}>keep going.</Text>
    //                 </View>
    //                 <View style={{ height: 300, justifyContent: 'center', alignItems: 'center' }}>
    //                     <Text style={{ fontSize: 32, color: 'white' }}>keep going..</Text>
    //                 </View>
    //                 <View style={{ height: 300, justifyContent: 'center', alignItems: 'center' }}>
    //                     <Text style={{ fontSize: 32, color: 'white' }}>keep going...</Text>
    //                 </View>
    //                 <View style={{ height: 300, justifyContent: 'center', alignItems: 'center' }}>
    //                     <Text style={{ fontSize: 32, color: 'white' }}>the end! :)</Text>
    //                 </View>
    //             </ScrollView>
    //         </ParallaxScrollView>
    //     );
    // }
}

export default Detail;