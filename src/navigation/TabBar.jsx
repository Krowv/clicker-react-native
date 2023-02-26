import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { HomePage } from "../sections/HomePage";
import { NewPage } from "../sections/NewPage";
import { ProfilePage } from "../sections/ProfilePage";
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();

function TabBarIcon({focused, imageUri}){
  return (
    <Image
      style={{
        tintColor: focused ? '#1a0dab' : "",
        height: 24,
        width: 24,
      }}
      source= {{
        uri: imageUri,
      }}
    />
  )
}

export function TabNavigator() {
    return (
    <Tab.Navigator>
        <Tab.Screen 
            name="Accueil" 
            component={HomePage} 
            options={{
                title:'Accueil',
                tabBarIcon: ({focused}) => (
                    <TabBarIcon imageUri="https://cdn-icons-png.flaticon.com/512/25/25694.png" focused={focused} />
                ),
            }} 
        />
        <Tab.Screen 
            name="New Page" 
            component={NewPage}
            options={{
                title:'Magasin',
                tabBarIcon: ({focused}) => (
                    <TabBarIcon imageUri="https://cdn-icons-png.flaticon.com/512/126/126083.png" focused={focused} />
                ),
            }}
        />
        <Tab.Screen
            name="Profile page"
            component={ProfilePage}
            options={{
                title:'Profil',
                tabBarIcon: ({focused}) => (
                    <TabBarIcon imageUri="https://cdn-icons-png.flaticon.com/512/16/16363.png" focused={focused} />
                ),
            }}
        />
    </Tab.Navigator>
    );
}
