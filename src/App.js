import React, {Component} from 'react';
import {Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/FontAwesome5';
import Home from './views/screens/Home/Home';
import AddBlog from './views/screens/AddBlog/AddBlog';
import EditBlog from './views/screens/EditBlog/EditBlog';
import ShowBlog from './views/screens/ShowBlog/ShowBlog';
import theme from './themes';

const HomeScreen = createStackNavigator({
    Home: {
        screen: Home,
    },
});

const ShowBlogScreen = createStackNavigator({
    ShowBlog: {
        screen: ShowBlog,
    },
});

const AddBlogScreen = createStackNavigator({
    AddBlog: {
        screen: AddBlog,
    },
});

const EditBlogScreen = createStackNavigator({
    EditBlog: {
        screen: EditBlog,
    },
});

const TabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarLabel: ({tintColor}) => (
                    <Text style={{fontSize: 10, color: tintColor}}>
                        {('Home')}
                    </Text>
                ),
                tabBarIcon: ({horizontal, tintColor}) =>
                    <Icon name="home" size={horizontal ? 20 : 25} color={tintColor} />,
            },
        },
        ShowBlog: {
            screen: ShowBlogScreen,
            navigationOptions: {
                tabBarLabel: ({tintColor}) => (
                    <Text style={{fontSize: 10, color: tintColor}}>
                        {('Show blog')}
                    </Text>
                ),
                tabBarIcon: ({horizontal, tintColor}) =>
                    <Icon name="clipboard" size={horizontal ? 20 : 25} color={tintColor} />,
            },
        },
        AddBlog: {
            screen: AddBlogScreen,
            navigationOptions: {
                tabBarLabel: ({tintColor}) => (
                    <Text style={{fontSize: 10, color: tintColor}}>
                        {('Add blog')}
                    </Text>
                ),
                tabBarIcon: ({horizontal, tintColor}) =>
                    <Icon name="plus" size={horizontal ? 20 : 25} color={tintColor} />,
            },
        },
        EditBlog: {
            screen: EditBlogScreen,
            navigationOptions: {
                tabBarLabel: ({tintColor}) => (
                    <Text style={{fontSize: 10, color: tintColor}}>
                        {('Edit blog')}
                    </Text>
                ),
                tabBarIcon: ({horizontal, tintColor}) =>
                    <Icon name="edit" size={horizontal ? 20 : 25} color={tintColor} />,
            },
        },
    },
    {
        tabBarOptions: {
            activeTintColor: theme.colors.buttonColor,
            inactiveTintColor: theme.colors.secondaryText,
            style: {
                backgroundColor: theme.colors.divider,
            },
        },
    },
);

const AppContainer = createAppContainer(TabNavigator);

class App extends Component {
    render() {
        return (
            <AppContainer />
        );
    }
}

export default App;
