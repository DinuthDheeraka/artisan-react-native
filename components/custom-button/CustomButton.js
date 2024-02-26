import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const CustomButton = ({title, borderColor, letterSpacing, width, height, color, bgColor, onPress}) => {

    const styles = StyleSheet.create({
        container: {
            // borderWidth: 1,
            // borderColor: '#111111',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-start',
        },
        button: {
            backgroundColor: bgColor === undefined ? '#1c1c1c' : bgColor,
            padding: 10,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: borderColor === undefined ? undefined : borderColor,
            width: width === undefined ? 200 : width,
            height: width === undefined ? 60 : height,
            justifyContent: 'center',
            alignItems: 'center',
        },
        buttonText: {
            letterSpacing: letterSpacing === undefined ? 0 : 1,
            color: color === undefined ? 'white' : color,
            fontSize: 16,
            fontWeight: '500',
        },
    });

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CustomButton;
