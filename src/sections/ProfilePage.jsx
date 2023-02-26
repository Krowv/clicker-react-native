import { StyleSheet, Text, View, Image, Button } from 'react-native';
//On ajoute imagePicker
import * as ImagePicker from 'expo-image-picker';
import {useState} from "react";

export function ProfilePage() {
    const [image, setImage] = useState(null);
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <>
            <View style={styles.profilePictureGlobal}>
                <Image
                    style={styles.profilePictureSlot}
                    source= {{
                        uri: image,
                    }}
                />
                <Button title="Modifier" onPress={pickImage} />
            </View>
            <View style={styles.container}>
                <Text>Les infos du profile</Text>
                <Text>Il est vide</Text>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    profilePictureGlobal: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profilePictureSlot: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 30,
        borderColor: 'black',
        width: 100,
        height: 100,
    },
    container: {
        flex: 3,
        backgroundColor: '#A1B2C3',
        alignItems: 'center',
        justifyContent: 'center',
    },
})