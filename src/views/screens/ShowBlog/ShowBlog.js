import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import theme from '../../../themes';

class ShowBlog extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.container}>
                    <Text style={styles.title}>
                        {('My Blog Title')}
                    </Text>
                    <Text style={styles.content}>
                        {('My big blog post today is all about xyz.')}
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        top: 10,
        height: 300,
        marginLeft: 10,
        marginRight: 10,
        borderColor: theme.colors.black,
        borderWidth: 0.5,
        backgroundColor: theme.colors.divider,
    },
    title: {
        fontSize: 20,
        paddingLeft: 15,
        paddingTop: 15,
        fontWeight: '500',
        color: theme.colors.black,
    },
    content: {
        fontSize: 15,
        paddingLeft: 15,
        paddingTop: 15,
        fontWeight: '300',
        color: theme.colors.black,
    },
});

export default ShowBlog;
