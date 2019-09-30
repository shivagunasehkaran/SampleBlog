import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class AddBlog extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Text>Add Blog</Text>
                <Button onPress={() => this.props.navigation.navigate('Home')} title="Home" />
            </View>
        );
    }
}

export default AddBlog;
