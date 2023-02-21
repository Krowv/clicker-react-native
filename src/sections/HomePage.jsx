import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, Pressable, Image, Dimensions} from 'react-native';
import {useCounterSetter, useCounterValue, useValueToAdd} from "../providers/GameProvider";
import {Video} from "expo-av";
import React, {useEffect, useState} from "react";
export function HomePage() {
    const counter = useCounterValue();
    const setCounter = useCounterSetter();
    const videoRef = React.useRef(null);
    const valueToAdd = useValueToAdd();
    const [autoClicker, setAutoclicker] = useState(false);
    const onPress = () => {
        setCounter(counter+valueToAdd)
    }

    // Au lancement de la page, un autoclicker se lance,
    useEffect(() => {
        setInterval(() => {
            setCounter((preValue) => {
                return preValue + 1;
            })
        }, 1000)
    }, [autoClicker]);

    return (
        <Pressable style={styles.container} onPress={onPress}>
            <Video
                source={require("../../assets/video1.mp4")}
                style={styles.backgroundVideo}
                muted={true}
                repeat={true}
                resizeMode={"cover"}
                rate={1.0}
                ignoreSilentSwitch={"obey"}
                shouldPlay={true}
                isLooping={true}
            />
            <Text style={{color: 'white'}}>lignes de code : {counter}</Text>
            <StatusBar style="auto" />
        </Pressable>
    );
}
const { height } = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        color: 'white'
    },
    backgroundVideo: {
        height: height,
        position: "absolute",
        top: 0,
        left: 0,
        alignItems: "stretch",
        bottom: 0,
        right: 0
    }
});