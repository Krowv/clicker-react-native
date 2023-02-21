import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { HomePage } from "../sections/HomePage";
import { NewPage } from "../sections/NewPage";
import { ProfilePage } from "../sections/ProfilePage";
const Tab = createBottomTabNavigator();
import {Image} from 'react-native';
export function TabNavigator() {
    return (
    <Tab.Navigator>
        <Tab.Screen 
            name="Accueil" 
            component={HomePage} 
            options={{
                title:'Accueil',
                tabBarIcon: ({focused}) => (
                    <Image
                        style={{
                            tintColor: focused ? '#1a0dab' : "",
                            height: 24,
                            width: 24,
                        }}
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
                title:'Magasin',
                tabBarIcon: ({focused}) => (
                    <Image
                        style={{
                            tintColor: focused ? '#1a0dab' : "",
                            height: 24,
                            width: 24,
                        }}
                        source= {{
                            uri: "https://cdn-icons-png.flaticon.com/512/126/126083.png",
                        }}
                    />
                ),
            }}
        />
        <Tab.Screen
            name="Profile page"
            component={ProfilePage}
            options={{
                title:'Profil',
                tabBarIcon: ({focused}) => (
                    <Image
                        style={{
                            tintColor: focused ? '#1a0dab' : "",
                            height: 24,
                            width: 24,
                        }}
                        source= {{
                            uri: "https://cdn-icons-png.flaticon.com/512/16/16363.png",
                        }}
                    />
                ),
            }}
        />
    </Tab.Navigator>
    );
}
