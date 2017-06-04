import {
    Text,
    ListView,
    View,
    StyleSheet,
    TouchableHighlight,
    Switch
} from 'react-native';
import React from 'react';
import TaskRow from './TaskRow/component';

class TaskList extends React.Component {
    constructor(props, context) {
        super(props, context);

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.state = {
            dataSource: ds.cloneWithRows(props.todos)
        };
    }

    componentWillReceiveProps(newProps) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.setState({
            dataSource: ds.cloneWithRows(newProps.todos)
        });
    }

    renderRow(todo) {
        return (<TaskRow todo={todo} onDone={this.props.onDone}/>);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.toggleRow}>
                    <Switch style={styles.switch} onValueChange={this.props.onToggle} value={this.props.filter != 'pending'}/>
                    <Text style={styles.toggleText}>Showing {this.props.todos.length + ' '}
                        {this.props.filter + ' '}
                        todo(s)</Text>
                </View>
                <ListView style={styles.listview} key={this.props.todos} dataSource={this.state.dataSource} renderRow={this.renderRow.bind(this)}/>
                <TouchableHighlight style={styles.button} onPress={this.props.onAddStarted}>
                    <Text style={styles.buttonText}>Add One</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

TaskList.propTypes = {
    todos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    onAddStarted: React.PropTypes.func.isRequired,
    onDone: React.PropTypes.func.isRequired,
    filter: React.PropTypes.string.isRequired,
    onToggle: React.PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        backgroundColor: '#F7F7F7',
        flex: 1,
        justifyContent: 'flex-start'
    },
    listview: {
        paddingLeft: 10,
        paddingRight: 10
    },
    button: {
        height: 60,
        borderColor: '#05A5D1',
        borderWidth: 2,
        backgroundColor: '#333',
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#FAFAFA',
        fontSize: 20,
        fontWeight: '600'
    },
    toggleRow: {
        flexDirection: 'row',
        padding: 10
    },
    toggleText: {
        fontSize: 20,
        paddingLeft: 10,
        paddingTop: 3
    }
});

export default TaskList;
