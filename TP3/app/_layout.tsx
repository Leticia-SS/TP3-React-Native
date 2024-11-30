import { Stack } from "expo-router";
import { LogBox } from "react-native"

LogBox.ignoreAllLogs(true)

export default function RootLayout() {
  return (
  <Stack>
    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    <Stack.Screen name="not-found" options={{ headerShown: false }} />
  </Stack>);
}

// usar headerLeft: () => <></>  evita que o botão apareca em cima na tela