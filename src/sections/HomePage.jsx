import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Pressable, Dimensions } from 'react-native';
import {Video} from "expo-av";
import React from "react";
import { useGameDispatch, useGameState } from '../providers/GameProvider';

export function HomePage() {
    const gameState = useGameState()
    const dispatch = useGameDispatch()
    const onPress = () => {
        dispatch("incrementCounter")
    }
    
    /* Lorsqu'on passe un boolean en props avec la valeur true il est pas nécessaire de le specifier shouldPlay={true} est équivalent a shouldPlay  */
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <Video
                shouldPlay
                isLooping
                muted
                repeat
                source={require("../../assets/video1.mp4")}
                style={styles.backgroundVideo}
                resizeMode="cover"
                rate={1.0}
                ignoreSilentSwitch={"obey"}
            />
            <Text style={[styles.homeText, styles.homeTitle]}>lignes de code : {gameState.counter}</Text>
            <Text style={[styles.homeText, styles.homeSubTitle]}>Revenus passifs : {gameState.autoClickerIncome}/s</Text>
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
        color: 'white',
        fontSize: '24px',
        fontWeight: 'bold',
    },
    backgroundVideo: {
        height: height,
        position: "absolute",
        top: 0,
        left: 0,
        alignItems: "stretch",
        bottom: 0,
        right: 0
    },
    homeText: {
        color: 'white',
    },
    homeTitle: {
        fontSize: 18,
    },
    homeSubTitle: {
        fontSize: 14,
    }
});