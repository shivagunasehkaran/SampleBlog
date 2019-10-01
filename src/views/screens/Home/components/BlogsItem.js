import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';

class BlogsItem extends Component {
    static propTypes = {
        onPress: PropTypes.func,
    };

    render() {
        const {itemTitle} = this.props;
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={styles.item}>
                    <Text style={styles.title}>{itemTitle}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default BlogsItem;

const styles = StyleSheet.create({
    item: {
        padding: 15,
        marginVertical: 1,
        marginHorizontal: 10,
    },
    title: {
        fontSize: 18,
    },
});
