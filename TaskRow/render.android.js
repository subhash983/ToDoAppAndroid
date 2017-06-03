import {Text, StyleSheet, View, TouchableHighlight} from 'react-native';
import React from 'react';
export default function render(styles) {
  return (
      <View style={styles.container}>
          <Text style={styles.label}>and: {this.props.todo.task}..</Text>
          <TouchableHighlight style={styles.doneButton} onPress={this.onDonePressed.bind(this)}>
              <Text>Done</Text>
          </TouchableHighlight>
      </View>
  );
}
