import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { BottomTabs } from "./src/navigator/BottomTabs";
import { StackNavigator } from "./src/navigator/StackNavigator";
import { AuthProvider } from "./src/context/AuthContext/AuthContext";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <NavigationContainer>
        <AppState>
          <StackNavigator />
        </AppState>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const AppState = ({ children }: any) => {
  return <AuthProvider>
    {children}
  </AuthProvider>
};
