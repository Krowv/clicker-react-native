import {createBottomTabNavigator, createButtonTabNavigation} from "@react-navigation/bottom-tabs";
import { HomePage } from "../sections/HomePage";
import { NewPage } from "../sections/NewPage";
const Tab = createBottomTabNavigator();
import { Image } from 'react-native';

export function TabNavigator() {
    return (
    <Tab.Navigator>
        <Tab.Screen 
            name="Accueil" 
            component={HomePage} 
            options={{
                title:'Accueil',
                tabBarIcon: () => (
                    <Image 
                        style={{width: 24, height: 24}}
                        source= {{
                            uri: "https://cdn-icons-png.flaticon.com/512/25/25694.png",
                        }}
                    />
                ),
            }} 
        />

        <Tab.Screen 
            name="New Page" 
            component={NewPage}
            options={{
                title:'Panier',
                tabBarIcon: () => (
                    <Image 
                        style={{width: 24, height: 24}}
                        source= {{
                            uri: "https://cdn-icons-png.flaticon.com/512/126/126083.png",
                        }}
                    />
                ),
            }}
        />
    </Tab.Navigator>
    );
}