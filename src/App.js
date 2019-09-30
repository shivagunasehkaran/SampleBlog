/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';

import Tabs from 'react-native-tabs';

// TODO: temp icons, to be replaced later
import bookmarkOffIcon from './assets/icons/bookmark-off.png';
import filterOffIcon from './assets/icons/bookmark-off.png';
import callOffIcon from './assets/icons/bookmark-off.png';
import IconButton from './views/components/buttons/IconButton';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const self = this;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Tabs selected="second" style={{backgroundColor: 'white'}}>
                    <View style={styles.bookmarkIcon}>
                        <IconButton source={bookmarkOffIcon} />
                    </View>
                    <View style={styles.bookmarkIcon}>
                        <IconButton source={filterOffIcon} />
                    </View>
                    <View style={styles.bookmarkIcon}>
                        <IconButton source={callOffIcon} />
                    </View>
                </Tabs>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    bookmarkIcon: {
        position: 'absolute',
        bottom: 0,
    },
});

export default App;

