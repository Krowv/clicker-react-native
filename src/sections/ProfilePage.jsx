import { StyleSheet, Text, View, Button } from 'react-native';
import { useCounterValue } from '../providers/GameProvider';

export function ProfilePage() {
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
            <Text>C'est la page du profil</Text>
            <Text>Il est vide</Text>
        </View>
    )

}