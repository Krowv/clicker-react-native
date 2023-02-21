import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import {useEffect, useState} from "react";
import { useCounterValue, useCounterSetter, useValueToAdd, useValueToAddSetter } from '../providers/GameProvider';

export function HomePage() {
    const counter = useCounterValue();
    const setCounter = useCounterSetter();



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