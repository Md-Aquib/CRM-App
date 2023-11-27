import React, { useState } from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBars, faTimes, faUserGear } from "@fortawesome/free-solid-svg-icons";
import Topbar from "./Topbar";

const Header = ({ navigation }) => {
    const [isTopbarOpen, setIsTopbarOpen] = useState(false);

    const toggleTopbar = () => {
        setIsTopbarOpen(!isTopbarOpen);
    };

    const closeTopbar = () => {
        setIsTopbarOpen(false);
    };

    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#111",
                height: 80,
                paddingTop: 25,
            }}
        >
            <TouchableOpacity
                onPress={toggleTopbar}
                style={{ position: "absolute", left: 10 }}
                activeOpacity={1}
            >
                <FontAwesomeIcon
                    icon={isTopbarOpen ? faTimes : faBars}
                    size={20}
                    color="white"
                    style={{ marginTop: 23 }}
                />
            </TouchableOpacity>
            <Text style={{ color: "white", fontSize: 18 }}>CRM</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("UserProfile")}
                style={{ position: "absolute", right: 10 }}
                activeOpacity={1}
            >
                <FontAwesomeIcon
                    icon={faUserGear}
                    size={20}
                    color="white"
                    style={{ marginTop: 28 }}
                />
            </TouchableOpacity>

            <Topbar isOpen={isTopbarOpen} onClose={closeTopbar} />
        </View>
    );
};

export default Header;
