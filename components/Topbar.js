import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";

const Topbar = ({ isOpen, onClose }) => {
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (isOpen) {
            setHeight(500);
        } else {
            setHeight(0);
        }
    }, [isOpen]);

    return <View style={[styles.container, { height }]}></View>;
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(0,0,0,0.9)",
        marginTop: 80,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        flexDirection: "row",
        justifyContent: "space-between",
    },
});

export default Topbar;
