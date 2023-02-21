import { StyleSheet, Text, View, Button } from 'react-native';
import {useEffect, useState} from "react";
import { useCounterSetter, useCounterValue, useValueToAddSetter, useValueToAdd } from '../providers/GameProvider';
import { useCostSetter, useCostValue } from '../providers/GameCounterProvider';

export function NewPage() {
    const counter = useCounterValue();
    const setCounter = useCounterSetter();

    const setValueToAdd = useValueToAddSetter();
    const ValueToAdd = useValueToAdd();

    const setCostOfTheAugment = useCostSetter();
    const costOfTheAugment = useCostValue();

    const addTwentyFiveStacks = () =>{
        if (counter > costOfTheAugment) {
            setValueToAdd(preValue => preValue * 1.5)
            setCounter(preValue => preValue - costOfTheAugment);
            incrementCost();
        }
    }

    const incrementCost = () => {
        setCostOfTheAugment(preCost => preCost + 25);
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
        <Text>Argent : {counter} </Text>
        <Button title="Add + 25" onPress={addTwentyFiveStacks}></Button>
        <Text>Coût : {costOfTheAugment}</Text>
        <Button title="Add 1 on your click" onPress={incrementCost}></Button>
        <Button title="Add 1000"></Button>
    </View>
 )   

}