import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import slides from './onboardingSlides'
import OnboardingItem from './onboardingItem'

const Onboarding = () => {
    return (
        <View style={styles.container}>
            <FlatList data={slides} renderItem={({item}) => <OnboardingItem item={item} />}/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Onboarding;