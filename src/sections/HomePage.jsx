import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Pressable } from 'react-native';
import {useCounterSetter, useCounterValue} from "../providers/GameProvider";

export function HomePage() {
    const counter = useCounterValue();
    const setCounter = useCounterSetter();
    const onPress = () => {
        setCounter(counter + 1)
    }

    return (
        <Pressable style={styles.container} onPress={onPress}>
            <Text>lignes de code : {counter}</Text>
            <StatusBar style="auto" />
        </Pressable>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        alignItems: 'center',
    },
});