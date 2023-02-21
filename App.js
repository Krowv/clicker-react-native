import { NavigationContainer } from "@react-navigation/native";
import {TabNavigator} from "./src/navigation/TabBar";
import { GameCounterProvider } from "./src/providers/GameCounterProvider";
import {GameProvider} from "./src/providers/GameProvider";
import {IncomePerClickProvider} from "./src/providers/IncomePerClickProvider";

export default function App() {

  return (
    <GameCounterProvider>
      <IncomePerClickProvider>
        <GameProvider>
          <NavigationContainer>
            <TabNavigator />
          </NavigationContainer>
        </GameProvider>
      </IncomePerClickProvider>
    </GameCounterProvider>
  );

}