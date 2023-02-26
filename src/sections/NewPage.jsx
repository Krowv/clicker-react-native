import { StyleSheet, Text, View, Button } from 'react-native';
import { useGameDispatch, useGameState } from '../providers/GameProvider';

export function NewPage() {
    const gameState = useGameState()
    const dispatch = useGameDispatch()
    const title = `Ajouter ${gameState.incomePerClick} par click`
    return (
        <View style={styles.container}>
            <View style={styles.border}>
                <Text style={styles.mainMoney}> Lignes de code : {gameState.counter} </Text>
                <Text style={styles.suppInfo}>Lignes par click : {title}</Text>
            </View>
            <View style={styles.line}>
                <Button style={styles.selfAlign} title={title} onPress={() => {dispatch("addTwentyFiveStacks")}}></Button>
                <Text style={styles.selfAlign}>Coût : {gameState.costOfTheAugment}</Text>
            </View>
            <View style={styles.container}>
                <Text>AutoClicker :</Text>
                <Button title="Ajouter 50 par seconde" onPress={() => {dispatch("buyOne")}}></Button>
                <Text>Coût auto-clicker : {gameState.autoClickerCost}</Text>
                <Text>Auto-clicker actuel : {gameState.autoClickerIncome}</Text>
            </View>
        </View>
    )
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