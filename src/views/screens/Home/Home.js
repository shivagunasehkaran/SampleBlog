import React, {Component} from 'react';
import {SafeAreaView, FlatList, View, Text, StyleSheet} from 'react-native';
import theme from '../../../themes';
import Icon from 'react-native-vector-icons/FontAwesome5';

const DATA = [
    {
        title: 'Blog title 1',
    },
    {
        title: 'Blog title 2',
    },
    {
        title: 'Blog title 3',
    },
    {
        title: 'Blog title 4',
    },
    {
        title: 'Blog title 5',
    },
];

const Item = ({title}) => {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

class Home extends Component {
    static navigationOptions = ({navigation}) => ({
        title: ('Blog list'),
        headerStyle: {
            backgroundColor: theme.colors.buttonColor,
        },
        headerRight: (
            <Icon style={{paddingRight: 15, color: theme.colors.black}}
                  onPress={() => navigation.navigate('AddBlog')}
                  name="plus"
                  size={20} />
        ),
    });

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={DATA}
                    renderItem={({item}) => <Item title={item.title} />}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
    },
    item: {
        backgroundColor: theme.colors.divider,
        padding: 15,
        marginVertical: 1,
        marginHorizontal: 10,
    },
    title: {
        fontSize: 18,
    },
});

export default Home;
