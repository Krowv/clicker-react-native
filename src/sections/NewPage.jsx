import { StyleSheet, Text, View, Button } from 'react-native';
import { useCounterSetter, useCounterValue, useValueToAddSetter, useValueToAdd } from '../providers/GameProvider';
import { useCostSetter, useCostValue } from '../providers/GameCounterProvider';
import {
    useAutoClickerCostSetter,
    useAutoClickerCostValue,
    useAutoClickerIncomeSetter,
    useAutoClickerIncomeValue
} from "../providers/GameAutoClickerProvider";
export function NewPage() {
    const counter = useCounterValue();
    const setCounter = useCounterSetter();
    const setValueToAdd = useValueToAddSetter();
    const setCostOfTheAugment = useCostSetter();
    const costOfTheAugment = useCostValue();
    //Les valeurs pour l'auto-clicker
    const autoClickerIncomeSetter = useAutoClickerIncomeSetter();
    const autoClickerIncome = useAutoClickerIncomeValue();
    const autoClickerCostSetter = useAutoClickerCostSetter();
    const autoClickerCost = useAutoClickerCostValue();
    const boughtOne = () => {
        if (counter >= autoClickerCost) {
            setCounter(counter - autoClickerCost);
            autoClickerCostSetter(Math.round(autoClickerCost * 1.6));
            autoClickerIncomeSetter(Math.round(autoClickerIncome + 50));
        }
    }
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
            <Button title="Ajouter 25 par clic" onPress={addTwentyFiveStacks}></Button>
            <Text>Coût : {costOfTheAugment}</Text>
            <Text>AutoClicker :</Text>
            <Button title="Ajouter 50 par seconde" onPress={boughtOne}></Button>
            <Text>Coût auto-clicker : {autoClickerCost}</Text>
            <Text>Auto-clicker actuel : {autoClickerIncome}</Text>
        </View>
    )
}