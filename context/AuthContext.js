import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IP_ADDRESS } from "@env";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(null);
    const [userType, setUserType] = useState(null);
    const [team, setTeam] = useState(null);
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [id, setId] = useState(null);
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [loginSuccess, setLoginSuccess] = useState(false);

    // Use useEffect to load authentication data from local storage on app start
    useEffect(() => {
        const loadAuthenticationData = async () => {
            const token = await AsyncStorage.getItem("token");
            if (token) {
                setAuthToken(token);
                setUserType(await AsyncStorage.getItem("user_type"));
                setName(await AsyncStorage.getItem("name"));
                setEmail(await AsyncStorage.getItem("email"));
                setId(await AsyncStorage.getItem("id"));
                setTeam(await AsyncStorage.getItem("team"));
            }
        };
        loadAuthenticationData();
    }, []);

    // Login function
    const loginUser = async (email, password) => {
        setLoading(true);

        console.log(IP_ADDRESS);

        try {
            const response = await fetch(
                `http://${IP_ADDRESS}:8000/api/auth/login/`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email, password }),
                }
            );

            if (response.status === 200) {
                const data = await response.json();
                setAuthToken(data.token);
                setUserType(data.user_type);
                setName(data.name);
                setEmail(data.email);
                setId(data.id.toString());

                await AsyncStorage.setItem("token", data.token);
                await AsyncStorage.setItem("user_type", data.user_type);
                await AsyncStorage.setItem("name", data.name);
                await AsyncStorage.setItem("email", data.email);
                await AsyncStorage.setItem("id", data.id.toString());

                if (data.team) {
                    setTeam(data.team);
                    await AsyncStorage.setItem("team", data.team);
                }

                setLoginSuccess(true);
            } else {
                const data = await response.json();
                setMessage(data.message);
            }
        } catch (error) {
            // Handle network errors or other exceptions
            console.error("Login error:", error);
        }

        setLoading(false);
    };

    // Logout function
    const logoutUser = async () => {
        setAuthToken(null);
        setUserType(null);
        setEmail(null);
        setName(null);
        setId(null);
        setTeam(null);

        await AsyncStorage.removeItem("token");
        await AsyncStorage.removeItem("user_type");
        await AsyncStorage.removeItem("name");
        await AsyncStorage.removeItem("email");
        await AsyncStorage.removeItem("id");

        if (AsyncStorage.getItem("team")) {
            await AsyncStorage.removeItem("team");
        }

        setLoginSuccess(false);
    };

    const contextData = {
        authToken,
        userType,
        message,
        loading,
        loginUser,
        logoutUser,
        team,
        name,
        email,
        id,
        setMessage,
        loginSuccess,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
};
