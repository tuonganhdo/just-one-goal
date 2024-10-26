import React from 'react';
import {View, Text, StyleSheet, FlatList, useWindowDimensions} from 'react-native';
import slides from './onboardingSlides'

export default function OnboardingItem({item}: {item: any}) {
    const { width } = useWindowDimensions();

    return (
        <View style={[styles.container, {width}]}>
            <Text style={styles.icon}>{item.icon}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    icon: {
        fontSize: 70,
        justifyContent: 'center',
    },
    title: {
        fontSize: 46,
        fontWeight: 600,
        marginBottom: 10,
        textAlign: 'center'
    },
    description: {
        fontSize: 30,
        fontWeight: 400,
        textAlign: 'center'
    }
});