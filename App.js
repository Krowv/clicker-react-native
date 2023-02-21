import { NavigationContainer } from "@react-navigation/native";
import {TabNavigator} from "./src/navigation/TabBar";
import {GameProvider} from "./src/providers/GameProvider";

export default function App() {

  return (
    <GameProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </GameProvider>
  );
  
}