import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './Reducers/Index';
import ServiceCallAction from './Actions/ServiceCallAction';
import theme from '../../../themes';
import Icon from 'react-native-vector-icons/FontAwesome5';

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

    render() {
        return (
            <Provider store={store}>
                <ServiceCallAction />
            </Provider>
        );
    }
}

export default Home;
