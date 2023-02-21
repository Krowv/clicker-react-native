import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Pressable, Dimensions } from 'react-native';
import { useCounterValue, useCounterSetter } from '../providers/GameProvider';
import {Video} from "expo-av";
import React, {useState} from "react";
import {useAutoClickerIncomeValue} from "../providers/GameAutoClickerProvider";
import { useIncomeAddedPerClick, useIncomeAddedPerClickSetter } from '../providers/IncomePerClickProvider';
export function HomePage() {
    const counter = useCounterValue();
    const setCounter = useCounterSetter();
    const videoRef = React.useRef(null);
    const incomePerClick = useIncomeAddedPerClick();
    const setIncomePerClick = useIncomeAddedPerClickSetter();
    const [autoClicker, setAutoclicker] = useState(false);
    const autoClickerValue = useAutoClickerIncomeValue()
    const onPress = () => {
        setCounter(counter+incomePerClick)
    }
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <Video
                source={require("../../assets/video1.mp4")}
                style={styles.backgroundVideo}
                muted={true}
                repeat={true}
                resizeMode="cover"
                rate={1.0}
                ignoreSilentSwitch={"obey"}
                shouldPlay={true}
                isLooping={true}
            />
            <Text style={[styles.homeText, styles.homeTitle]}>lignes de code : {counter}</Text>
            <Text style={[styles.homeText, styles.homeSubTitle]}>Revenus passifs : {autoClickerValue}/s</Text>
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