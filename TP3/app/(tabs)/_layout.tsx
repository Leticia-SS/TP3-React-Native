import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
  <Tabs>
    <Tabs.Screen name="index" options={{ title: 'Home', headerShown: false }} />
    <Tabs.Screen name="profile" options={{ title: 'Perfil', headerShown: false }} />
    <Tabs.Screen name="not-found" options={{  headerShown: false }} />
  </Tabs>
  );
}
