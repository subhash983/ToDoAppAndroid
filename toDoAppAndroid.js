import React from 'react';
import {StyleSheet, View, Navigator, Text} from 'react-native';
import {StackNavigator} from 'react-navigation';
import TaskList from './taskList';
import TaskFormScreen from './taskForm';

class HomeScreen extends React.Component {
    static navigationOptions = {
        headerTitle: 'Welcome',
        headerStyle: {
            paddingLeft: 110,
            paddingTop: 20,
            justifyContent: 'center',
            backgroundColor: '#e00822'
        }
    };
    constructor(props, context) {
        super(props, context);
        this.state = {
            todos: [
                {
                    task: 'Learn React Native'
                }, {
                    task: 'Learn Redux'
                }
            ]
        }
    }

    componentWillMount() {
        const {state} = this.props.navigation;
        if (state.params && state.params.task) {
            this.state.todos.push({task: state.params.task});
            this.setState({todos: this.state.todos});
        }
    }

    onAddStarted() {
        this.props.navigation.navigate('TaskForm');
    }

    onDone(todo) {
        var indx = this.state.todos.indexOf(todo);
        this.state.todos.splice(indx, 1);
        this.setState({todos: this.state.todos});
    }

    render() {

        return (<TaskList todos={this.state.todos} onAddStarted={this.onAddStarted.bind(this)} onDone={this.onDone.bind(this)}/>);
    }
}

const ToDoApp = StackNavigator({
    Home: {
        screen: HomeScreen
    },
    TaskForm: {
        screen: TaskFormScreen
    }
}, {initialRouteName: 'Home'});

const styles = StyleSheet.create({
    header: {
        padding: 20
    }
});

export default ToDoApp;
