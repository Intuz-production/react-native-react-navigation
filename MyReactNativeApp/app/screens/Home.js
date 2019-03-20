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
import { ScrollView, Text, Linking, View, FlatList } from "react-native";
import { Card, Button, ListItem } from "react-native-elements";


class Home extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ marginBottom: 10 }}>
          "Home Screen"
            </Text>
        <Button
          backgroundColor="#03A9F4"
          title="Details"
          onPress={() => this.props.navigation.navigate('Detail')} />
      </View>
    );
  }
}



export default Home;