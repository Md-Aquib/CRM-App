import React, { useState, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import AuthContext from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";

const LoginPage = () => {
    const navigation = useNavigation();

    const { loginUser, loginSuccess, message } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        loginUser(email, password);

        if (loginSuccess) {
            navigation.navigate("Dashboard");
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#222" style="light" />
            <View style={styles.cardContainer}>
                <Text style={[styles.title, styles.textBold]}>
                    Welcome Back!
                </Text>
                <Text style={styles.sub_title}>Login</Text>
                {message ? (
                    <Text style={styles.errorMessage}>{message}</Text>
                ) : null}
                <TextInput
                    style={[styles.input, styles.textBold]}
                    placeholder="Email"
                    placeholderTextColor="#000"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    style={[styles.input, styles.textBold]}
                    placeholder="Password"
                    placeholderTextColor="#000"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleLogin}
                    activeOpacity={1}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#111",
    },

    cardContainer: {
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: 20,
        flex: 1,
        marginTop: 160,
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
    },
    title: {
        fontSize: 30,
        marginBottom: 30,
    },
    sub_title: {
        fontSize: 24,
        marginBottom: 30,
    },
    textBold: {
        fontWeight: "600",
    },
    input: {
        width: "85%",
        height: 55,
        borderColor: "#000",
        borderWidth: 1.5,
        borderRadius: 8,
        marginBottom: 30,
        paddingLeft: 10,
    },
    button: {
        backgroundColor: "#1AA7EC",
        padding: 15,
        paddingLeft: 140,
        paddingRight: 140,
        borderRadius: 10,
    },
    buttonText: {
        color: "white",
        fontSize: 18,
    },
    errorMessage: {
        color: "red",
        fontWeight: "bold",
        marginVertical: 10,
    },
});

export default LoginPage;
