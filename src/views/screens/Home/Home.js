import React, {Component} from 'react';
import {FlatList, View, StyleSheet, ActivityIndicator, TouchableOpacity} from 'react-native';
import theme from '../../../themes';
import Icon from 'react-native-vector-icons/FontAwesome5';
import constants from '../../../constants';
import BlogsItem from './components/BlogsItem';

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
        this.state = {
            loading: true,
            dataSource: [],
        };
    }

    componentDidMount() {
        fetch(constants.url.url)
            .then(response => response.json())
            .then((responseJson) => {
                this.setState({
                    loading: false,
                    dataSource: responseJson,
                });
            })
            .catch(error => console.log(error)); //to catch the errors if any
    }

    FlatListItemSeparator = () => {
        return (
            <View style={{
                height: .5,
                width: '100%',
                backgroundColor: theme.colors.divider,
            }}
            />
        );
    };

    onBlogItemPressed = title => {
        this.props.navigation.navigate('ShowBlog', {itemTitle: title});
    };

    render() {
        if (this.state.loading) {
            return (
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="orange" />
                </View>
            );
        }
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.dataSource}
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    renderItem={({item}) => <BlogsItem itemTitle={item.name}
                                                       onPress={() => this.onBlogItemPressed(item.name)} />}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
    },
});

export default Home;
