import { NavigationContainer } from "@react-navigation/native";
import {TabNavigator} from "./src/navigation/TabBar";
import { GameCounterProvider } from "./src/providers/GameCounterProvider";
import {GameProvider} from "./src/providers/GameProvider";

export default function App() {

  return (
    <GameCounterProvider>
      <GameProvider>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </GameProvider>
    </GameCounterProvider>
  );

}