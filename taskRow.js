import React from 'react';
import {Text, StyleSheet, View, TouchableHighlight} from 'react-native'

class TaskRow extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    onDonePressed() {
        this.props.onDone(this.props.todo);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.label}>{this.props.todo.task}..</Text>
                <TouchableHighlight style={styles.doneButton} onPress={this.onDonePressed.bind(this)}>
                    <Text>Done</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

TaskRow.propTypes = {
    todo: React.PropTypes.shape({task: React.PropTypes.string.isRequired}).isRequired,
    onDone: React.PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#E7E7E7',
        padding: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20
    },
    label: {
        fontSize: 20,
        fontWeight: '300'
    },
    doneButton: {
        borderRadius: 5,
        backgroundColor: '#EAEAEA',
        padding: 5
    }
})

export default TaskRow;
