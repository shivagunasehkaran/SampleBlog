import React, {Component} from 'react';
import {
    Text,
} from 'react-native';
import {
    createSwitchNavigator,
    createAppContainer,
} from 'react-navigation';
import {
    createBottomTabNavigator,
} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Home from './views/screens/Home/Home';
import AddBlog from './views/screens/AddBlog/AddBlog';
import EditBlog from './views/screens/EditBlog/EditBlog';
import ShowBlog from './views/screens/ShowBlog/ShowBlog';

const AppNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: Home,
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
            screen: ShowBlog,
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
            screen: AddBlog,
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
            screen: EditBlog,
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
            activeTintColor: 'orange',
            inactiveTintColor: 'gray',
        },
    },
);

const InitialNavigator = createSwitchNavigator({
    App: AppNavigator,
});

const AppContainer = createAppContainer(InitialNavigator);

class App extends Component {

    render() {
        return (
            <AppContainer />
        );
    }
}

export default App;
