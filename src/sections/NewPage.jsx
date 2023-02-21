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
            textAlign: 'center',
            width: 300
        },
        selfAlign : {
            textAlign: 'center',
            padding: 5,
        },
        alignCostButton : {
            flex : 1,
        },
        line : {
            flex : 1,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
        },
        mainMoney: {
            fontSize : 17,
        },
        suppInfo : {
            fontSize: 10
        }
    });

    const title = "Ajouter " + IncomePerClick + " Par click ";
 return (
    <View style={styles.container}>
        <View style={styles.border}>
            <Text style={styles.mainMoney}> Lignes de code : {counter} </Text>
            <Text style={styles.suppInfo}>Lignes par click : {IncomePerClick}</Text>
        </View>
        <View style={styles.line}>
            <Button style={styles.selfAlign} title={title} onPress={addTwentyFiveStacks}></Button>
            <Text style={styles.selfAlign}>Coût : {costOfTheAugment}</Text>
        </View>
        <Text>Do not forget to subscribe</Text>
    </View>
 )   

}