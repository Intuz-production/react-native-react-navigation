// Copyright (C) 2019 INTUZ. 

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to
// the following conditions:

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR
// ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH
// THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

import React from "react";
import { Platform, StatusBar, Dimensions, TouchableOpacity, Text } from "react-native";
import { StackNavigator, createStackNavigator, createSwitchNavigator, createBottomTabNavigator, createDrawerNavigator } from "react-navigation";
import { FontAwesome } from "react-native-vector-icons";
import IOSIcon from "react-native-vector-icons/Ionicons";

import Login from "./screens/Login";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Detail from "./screens/Detail";
import SignUp from "./screens/Signup";
import SideMenu from './screens/SideMenu';
import Setting from './screens/Setting';

const headerStyle = {
    marginTop: Platform.OS === "android" ? 0 : 20
    //marginTop: 20
}


export const HomeStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: "Home"
        }
    },
    Detail: {
        screen: Detail,
        navigationOptions: {
            title: "Detail Page"
        }
    }
})

export const ProfileStack = createStackNavigator({
    Profile: {
        screen: Profile,
        navigationOptions: {
            title: "Profile"
        }
    },
    Setting: {
        screen: Setting,
        navigationOptions: ({ navigation }) => ({
            title: 'Setting'
        })
    }
});

ProfileStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }
    return {
        tabBarVisible,
    };
};

//Bottom Tabs
export const LoggedIn = createBottomTabNavigator(
    {
        Home: {
            screen: HomeStack,
            navigationOptions: {
                title: "Home",
                tabBarLabel: "Home",
                // tabBarIcon: ({ tintColor }) => (
                //     <FontAwesome name="home" size={30} color={tintColor} />
                // )
            }
        },
        Profile: {
            screen: ProfileStack,
            navigationOptions: {
                title: "Profile",
                tabBarLabel: "Profile",
                // tabBarIcon: ({ tintColor }) => (
                //     <FontAwesome name="user" size={30} color={tintColor} />
                // )
            }
        }
    },
    {
        tabBarOptions: {
            style: {
                paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
            }
        }
    }
);

// SignIn and SignUp page
export const LoggedOut = createStackNavigator({
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            title: "Sign Up",
            headerStyle
        }
    },
    SignIn: {
        screen: Login,
        navigationOptions: {
            title: "Sign In",
            headerStyle
        }
    }
});

export const stackNav = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => ({
            title: "Home",
            headerLeft: (<TouchableOpacity onPress={() => navigation.openDrawer()}>
                <IOSIcon name="ios-menu" size={30} />
            </TouchableOpacity>
            ),
            headerStyle
        })
    },
    Detail: {
        screen: Detail,
        navigationOptions: {
            title: "Detail Page"
        }
    }
});

export const MyDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: stackNav
    },
    Profile: {
        screen: Profile
    }
}, {
        contentComponent: SideMenu,
        drawerWidth: Dimensions.get('window').width - 120
    });

// Navigation drawer
const DrawerStack = createDrawerNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: "Home"
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            title: "Profile"
        }
    },
    Setting: {
        screen: Setting,
        navigationOptions: {
            title: "Setting Page"
        }
    }
}, {
        contentComponent: SideMenu,
        drawerWidth: Dimensions.get('window').width - 120,
    })
// create stack navigator
const DrawerNavigation = createStackNavigator({
    DrawerStack: {
        screen: DrawerStack,
        navigationOptions: ({ navigation }) => ({
            title: "ReactApp",
            headerLeft: (<TouchableOpacity onPress={() => navigation.openDrawer()}>
                <IOSIcon name="ios-menu" size={30} />
            </TouchableOpacity>
            ),
            headerStyle
        })
    },
    Detail: {
        screen: Detail,
        navigationOptions: ({ navigation }) => ({
            title: navigation.getParam('otherParam', 'test'),
        })
    }
})

export const createRootNavigator = (signedIn = false) => {
    return createSwitchNavigator(
        {
            SignedIn: {
                /**
                 * To set Bottom Tabs use 'screen: LoggedIn'
                 */
                /**
                 * To set Navigation Drawer use 'screen: DrawerNavigation'
                 */
                screen: DrawerNavigation
            },
            SignedOut: {
                screen: LoggedOut,
            }
        },
        {
            initialRouteName: signedIn ? "SignedIn" : "SignedOut"
        }
    );
}


