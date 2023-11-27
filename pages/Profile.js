import React, { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
} from "react-native";
import AuthContext from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

function Profile() {
    const navigation = useNavigation();

    const { logoutUser, loginSuccess, name, email, userType, team } =
        useContext(AuthContext);

    const handleLogout = () => {
        logoutUser();

        if (!loginSuccess) {
            navigation.navigate("Login");
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#222" style="light" />
            <FontAwesomeIcon
                icon={faCircleUser}
                size={120}
                color="#3FE0D0"
                style={{ marginTop: 70, marginBottom: 50 }}
            />
            <View style={styles.rowContainer}>
                <Text style={[styles.label, styles.textBold]}>Name:</Text>
                <TextInput
                    style={[styles.input, styles.textBold]}
                    placeholderTextColor="#000"
                    value={name}
                    editable={false}
                />
            </View>

            <View style={styles.rowContainer}>
                <Text style={[styles.label, styles.textBold]}>Email:</Text>
                <TextInput
                    style={[styles.input, styles.textBold]}
                    placeholderTextColor="#000"
                    value={email}
                    editable={false}
                />
            </View>

            <View style={styles.rowContainer}>
                <Text style={[styles.label, styles.textBold]}>User:</Text>
                <TextInput
                    style={[styles.input, styles.textBold]}
                    placeholderTextColor="#000"
                    value={userType}
                    editable={false}
                />
            </View>

            {userType === "salesperson" && (
                <View style={styles.rowContainer}>
                    <Text style={[styles.label, styles.textBold]}>Team:</Text>
                    <TextInput
                        style={[styles.input, styles.textBold]}
                        placeholderTextColor="#000"
                        value={team}
                        editable={false}
                    />
                </View>
            )}

            <View style={styles.horizontalLine}></View>

            <TouchableOpacity
                style={styles.logoutButton}
                onPress={handleLogout}
                activeOpacity={1}
            >
                <View style={styles.logoutTextContainer}>
                    <Text style={styles.logoutText}>Logout</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    rowContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 30,
        marginLeft: 20,
        marginRight: 50,
    },
    label: {
        marginRight: 10,
        fontWeight: "bolder",
    },
    input: {
        flex: 1,
        borderWidth: 1.5,
        borderColor: "#999",
        borderRadius: 5,
        height: 40,
        paddingLeft: 10,
    },
    textBold: {
        fontWeight: "bold",
    },
    horizontalLine: {
        height: 4,
        width: "100%",
        backgroundColor: "#999",
        marginTop: 90,
    },
    logoutButton: {
        backgroundColor: "#e5e5e5",
        padding: 15,
        borderRadius: 5,
        width: "100%",
        marginTop: 2,
    },
    logoutTextContainer: {
        flexDirection: "row",
        alignItems: "left",
    },
    logoutText: {
        fontWeight: "bold",
        color: "#222",
        fontSize: 16,
    },
});

export default Profile;
