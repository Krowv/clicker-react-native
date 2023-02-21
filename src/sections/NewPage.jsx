import { StyleSheet, Text, View, Button } from 'react-native';
import {useEffect, useState} from "react";
import { useCounterSetter, useCounterValue, useValueToAddSetter, useValueToAdd } from '../providers/GameProvider';
import { useCostSetter, useCostValue } from '../providers/GameCounterProvider';
import { useIncomeAddedPerClick, useIncomeAddedPerClickSetter } from '../providers/IncomePerClickProvider';

export function NewPage() {
    const counter = useCounterValue();
    const setCounter = useCounterSetter();

    const setIncomePerClick = useIncomeAddedPerClickSetter();
    const IncomePerClick = useIncomeAddedPerClick();

    const setCostOfTheAugment = useCostSetter();
    const costOfTheAugment = useCostValue();

    const addTwentyFiveStacks = () =>{
        if (counter > costOfTheAugment) {
            setIncomePerClick(preValue => Math.round(preValue * 1.5))
            incrementCost();
            setCounter(preValue => preValue - costOfTheAugment);
        }
    }

    const incrementCost = () => {
        setCostOfTheAugment(preCost => Math.round(preCost * 2));
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: 10
        },
        border: {
            borderTopColor : 'black',
            borderTopWidth: 2,
            borderRightColor: 'black',
            borderRightWidth: 2,
            borderBottomColor: 'black',
            borderBottomWidth: 2,
            borderLeftColor: 'black',
            borderLeftWidth:2,
            padding: 10,
        },
        selfAlign : {
            textAlign: 'center',
        },
        alignCostButton : {
            flex : 1,

        }
    });
 return (
    <View style={styles.container}>
        <Text
            style={styles.border}>
            Lignes de code : {counter} | {IncomePerClick}
        </Text>
        <Text>Lignes par click : {IncomePerClick}</Text>
        <View>
            <Button style={styles.selfAlign} title="Ajouter" onPress={addTwentyFiveStacks}></Button>
            <Text style={styles.selfAlign}>Coût : {costOfTheAugment}</Text>
        </View>
        <Text>Do not forget to subscribe</Text>
    </View>
 )   

}