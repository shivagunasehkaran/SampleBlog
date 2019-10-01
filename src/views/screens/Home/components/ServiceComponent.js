import React, {Component} from 'react';
import {StyleSheet, View, ActivityIndicator, FlatList} from 'react-native';
import theme from '../../../../themes';
import {Icon} from 'react-native-vector-icons';
import BlogsItem from './BlogsItem';

export default class ServiceComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            dataSource: [],
        };
    }

    componentDidMount() {
        this.props.callService();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.data != null) {
            this.setState({
                loading: false,
                dataSource: nextProps.data,
            });
        }
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
                    renderItem={({item}) => <BlogsItem itemTitle={item.name} />}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    containerList: {
        flex: 1,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginLeft: 12,
        fontSize: 16,
    },
    photo: {
        height: 80,
        width: 80,
        borderRadius: 20,
        backgroundColor: '#000000',
    },

    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,

    },
});
