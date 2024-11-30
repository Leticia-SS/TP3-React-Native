import { Stack } from "expo-router";
import { LogBox } from "react-native"
import { StatusBar } from "expo-status-bar"

LogBox.ignoreAllLogs(true)

export default function RootLayout() {
  return (
    <>
    <StatusBar style="light" /> 
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="not-found" options={{ headerShown: false }} />
    </Stack>
  </>
  );
}

// usar headerLeft: () => <></>  evita que o botão apareca em cima na tela
// statusBar é a barra que tem os status do celular, de hora bateria etc