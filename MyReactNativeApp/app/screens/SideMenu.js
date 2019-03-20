// Copyright (C) 2019 INTUZ. 

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to
// the following conditions:

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR
// ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH
// THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View } from 'react-native';
import styles from './SideMenu.styles';
import { OnLogOut } from "../auth";

class SideMenu extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
        this.props.navigation.closeDrawer();
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>

                    <View style={styles.navSectionStyle}>
                        <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Home')}>
                            Home
                  </Text>
                    </View>
                    <View style={styles.navSectionStyle}>
                        <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Profile')}>
                            Profile
                  </Text>
                    </View>
                    <View style={styles.navSectionStyle}>
                        <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Settings')}>
                            Settings
                  </Text>
                    </View>
                    <View style={styles.navSectionStyle}>
                        <Text style={styles.navItemStyle}
                            onPress={() => OnLogOut().then(() => this.props.navigation.navigate("SignedOut"))}>
                            Logout
                  </Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
export default SideMenu;