import React, { useState, useRef } from 'react';
import {View, Text, StyleSheet, FlatList, Animated} from 'react-native';

const Paginator = ({ data }:{data : any}) => {

    return(
        <View style ={{ flexDirection: 'row', height: 64}}>
            {data.map((_ : any, i : any) => {
                return <View></View>
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})