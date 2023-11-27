import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const HomePage = () => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#222" style="light" />
            <Text style={styles.title}>Welcome to CRM App</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
});

export default HomePage;
