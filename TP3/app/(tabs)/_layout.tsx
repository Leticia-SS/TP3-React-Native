import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons"

export default function TabsLayout() {
  return (
  <Tabs 
    screenOptions={{
      tabBarActiveTintColor: '#8c52ff',
      tabBarActiveBackgroundColor: '#140024',
      headerShadowVisible: false,
      headerTintColor: '#8c52ff',
      headerStyle: {
        backgroundColor: '#140024'
      },
      tabBarStyle: {
        borderTopWidth: 0, 
        backgroundColor: '#0d0018'
      }
    }}
  >
    <Tabs.Screen name="index" options={{ title: 'Home', headerShown: false, tabBarIcon: ({focused, color}) => <Ionicons name={ focused ? "home-sharp" : "home-outline"} size={20} color={color} /> }} />
    <Tabs.Screen name="profile" options={{ title: 'Perfil', headerShown: false, tabBarIcon: ({focused, color}) => <Ionicons name={ focused ? "id-card-sharp" : "id-card-outline"} size={20} color={color} /> }} />
    <Tabs.Screen name="not-found" options={{  headerShown: false }} />
  </Tabs>
  );
}
