import {Text, TextInput, View, TouchableHighlight, StyleSheet} from 'react-native';
import React from 'react';

class TaskFormScreen extends React.Component {
    static navigationOptions = {
        headerTitle: 'TaskForm',
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
            task: ''
        }
    }

    onCancel() {
        const {goBack} = this.props.navigation;
        goBack();
    }

    onAdd(task) {
        const {goBack} = this.props.navigation;
        this.props.navigation.navigate('Home', {task: this.task});
    }

    onChange(text) {
        this.task = text;
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input} onChangeText={this.onChange.bind(this)}/>
                <TouchableHighlight style={styles.button} onPress={this.onAdd.bind(this)}>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.button, styles.cancelButton]} onPress={this.onCancel.bind(this)}>
                    <Text style={styles.buttonText}>Cancel</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 150,
        backgroundColor: '#F7F7F7'
    },
    input: {
        borderWidth: 1,
        borderColor: '#D7D7D7',
        height: 50,
        marginLeft: 10,
        marginRight: 10,
        padding: 15,
        borderRadius: 3
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#FAFAFA'
    },
    button: {
        height: 45,
        alignSelf: 'stretch',
        backgroundColor: '#05A5D1',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cancelButton: {
        backgroundColor: '#666'
    }
});
export default TaskFormScreen;
