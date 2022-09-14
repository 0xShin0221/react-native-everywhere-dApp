import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionSpecs,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import * as React from "react";

// importing components
import MainHeader from "../components/MainHeader";

import Home from "../screens/Home";
import Nft from "../screens/NFT";
// importing services
import { CombinedDarkTheme } from "../services/themes";

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer theme={CombinedDarkTheme}>
      <Stack.Navigator
        screenOptions={{
          header: MainHeader,
          gestureDirection: "horizontal",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: TransitionSpecs.TransitionIOSSpec,
            close: TransitionSpecs.TransitionIOSSpec,
          },
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Nft" component={Nft} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
