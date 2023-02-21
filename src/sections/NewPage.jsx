import { StyleSheet, Text, View, Button } from 'react-native';
import {useEffect, useState} from "react";
import { useCounterValue } from '../providers/GameProvider';

export function NewPage() {
    const counter = useCounterValue();
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
        <Text>Merci d'en rajouter</Text>
    </View>
 )   

}