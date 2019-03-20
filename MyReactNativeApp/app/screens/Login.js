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
import { View, Alert } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { OnLogIn } from "../auth";


class Login extends Component {

    state = { email: '', password: '' };
    constructor(props) {
        super(props)
    }

    handleEmail = (text) => {
        this.setState({ email: text })
    }

    handlePassword = (text) => {
        this.setState({ password: text })
    }

    handleLogin = (email, password) => {
        if (this.isValid(email, password)) {
            OnLogIn().then(() => this.props.navigation.navigate("SignedIn"));
        }
    };

    isValid = (email, password, confirmPassword) => {
        if (email == '') {
            Alert.alert("Error", "Email is required");
            return false;
        } else if (password == '') {
            Alert.alert("Error", "Password is required");
            return false;
        }
        return true;
    }

    render() {
        return (
            <View style={{ paddingVertical: 20 }}>
                <Card>
                    <FormLabel>Email</FormLabel>
                    <FormInput placeholder="Email address..."
                        onChangeText={this.handleEmail} />
                    <FormLabel>Password</FormLabel>
                    <FormInput secureTextEntry placeholder="Password..."
                        onChangeText={this.handlePassword} />

                    <Button
                        buttonStyle={{ marginTop: 20 }}
                        backgroundColor="#03A9F4"
                        title="SIGN IN"
                        onPress={() => {
                            this.handleLogin(this.state.email, this.state.password);
                        }}
                    />
                </Card>
            </View>
        );
    }
}
export default Login;