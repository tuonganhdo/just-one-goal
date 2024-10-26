import { StyleSheet, Text, View, TextInput } from "react-native";
import React from 'react';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import Onboarding from '../../components/onboarding/Onboarding'

export default function Page() {
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');

    return (
        <View style={styles.container}>
            <SafeAreaProvider>
                <SafeAreaView>
                <TextInput
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="What should we call you?"
                    keyboardType="default"
                />
                </SafeAreaView>
            </SafeAreaProvider>
            <Onboarding/>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
