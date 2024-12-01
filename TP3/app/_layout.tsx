import { Stack } from "expo-router";
import { LogBox } from "react-native"
import { StatusBar } from "expo-status-bar"
import { ThemeProvider } from '../constants/ThemeContext';

LogBox.ignoreAllLogs(true)

export default function RootLayout() {
  return (
    <>
    <ThemeProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="applicationStatus/[id]" options={{ headerShown: true, headerShadowVisible: false, title: 'Voltar', headerTintColor: 'white', headerStyle: { backgroundColor: '#140024' },  }} />
        <Stack.Screen name="not-found" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  </>
  );
}

// usar headerLeft: () => <></>  evita que o botão apareca em cima na tela
// statusBar é a barra que tem os status do celular, de hora bateria etc