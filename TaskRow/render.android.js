import {
    Text,
    StyleSheet,
    View,
    TouchableHighlight,
    Image,
    Animated
} from 'react-native';
import React from 'react';

export default function render(styles) {
    const doneAnimation = new Animated.ValueXY();

    const localStyle = StyleSheet.create({
        doneButton: {
            borderRadius: 5,
            padding: 5
        },
        row: {
            transform: doneAnimation.getTranslateTransform()
        }
    });

    function animatedPress() {
        Animated.spring(doneAnimation, {
            tension: 2,
            friction: 3,
            toValue: {
                x: -500,
                y: 0
            }
        }).start();

        setTimeout(() => this.onDonePressed(), 1000);
    }

    return (
        <Animated.View style={[styles.container, localStyle.row]}>
            <Text style={styles.label}>{this.props.todo.task}..</Text>
            <TouchableHighlight underlayColor='#ddd' style={localStyle.doneButton} onPress={animatedPress.bind(this)}>
                <Image source={require('../images/done.png')} style={styles.doneImage}/>
            </TouchableHighlight>
        </Animated.View>
    );
}
