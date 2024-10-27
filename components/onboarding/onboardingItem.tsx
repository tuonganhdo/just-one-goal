import React from 'react';
import {View, Text, StyleSheet, FlatList, useWindowDimensions} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

import slides from './onboardingSlides'

export default function OnboardingItem({item}: {item: any}) {
    const {height, width, scale, fontScale} = useWindowDimensions();

    return (
        <SafeAreaProvider >
            <SafeAreaView style={[styles.container, {width}, {height}]}>
                <View style={styles.textContainer}>
                    <Text style={styles.icon}>{item.icon}</Text>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    textContainer: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 20,
        paddingHorizontal: 55,
    },
    icon: {
        fontSize: 60,
        justifyContent: 'center',
        paddingHorizontal: 20,
        marginBottom: 30,
    },
    title: {
        fontSize: 30,
        fontWeight: '600',
        marginBottom: 15,
        textAlign: 'center',
        width: 'auto',
    },
    description: {
        fontSize: 20,
        fontWeight: '400',
        textAlign: 'center',
        width: 'auto',
    }
});