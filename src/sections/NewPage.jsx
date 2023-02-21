import { StyleSheet, Text, View, Button } from 'react-native';
import {useEffect, useState} from "react";
import { useCounterSetter, useCounterValue, useValueToAddSetter, useValueToAdd } from '../providers/GameProvider';

export function NewPage() {
    const counter = useCounterValue();
    const setCounter = useCounterSetter();

    const setValueToAdd = useValueToAddSetter();
    const ValueToAdd = useValueToAdd();

    const addTwentyFiveStacks = () =>{
        if (counter > 100) {
            setValueToAdd(preValue => preValue + 25)
            setCounter(preValue => preValue - 25);
        }
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
    });
 return (
    <View style={styles.container}>
        <Text>Aucun article dans votre panier {counter} </Text>
        <Button title="Add + 25" onPress={addTwentyFiveStacks}></Button>
        <Button title="Add 1 on your click"></Button>
        <Button title="Add 1000"></Button>
    </View>
 )   

}