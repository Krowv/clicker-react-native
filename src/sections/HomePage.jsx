import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
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
        <View style={styles.container}>
            <Text>Counter : {counter}</Text>
            <Text>AutoClicker : {autoClicker ? 'true' : 'false'}</Text>
            <Button title="Add counter" onPress={onPress}></Button>
            <Button title="Set Autoclicker" onPress={() => setAutoclicker(!autoClicker)}></Button>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});