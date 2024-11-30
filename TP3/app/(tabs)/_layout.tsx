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
      },
      tabBarLabelPosition: 'below-icon',
    }}
  >
    <Tabs.Screen name="index" options={{ title: 'Home', headerShown: false, tabBarIcon: ({focused, color}) => <Ionicons name={ focused ? "home-sharp" : "home-outline"} size={20} color={color} /> }} />
    <Tabs.Screen name="projects" options={{ title: 'Projetos', headerShown: false, tabBarIcon: ({focused, color}) => <Ionicons name={ focused ? "folder-sharp" : "folder-outline"} size={20} color={color} /> }} />
    <Tabs.Screen name="articles" options={{ title: 'Artigos', headerShown: false, tabBarIcon: ({focused, color}) => <Ionicons name={ focused ? "newspaper-sharp" : "newspaper-outline"} size={20} color={color} /> }} />
    <Tabs.Screen name="qualifications" options={{ title: 'Qualificações', headerShown: false, tabBarIcon: ({focused, color}) => <Ionicons name={ focused ? "briefcase-sharp" : "briefcase-outline"} size={20} color={color} /> }} />
    <Tabs.Screen name="applications" options={{ title: 'Candidatura', headerShown: false, tabBarIcon: ({focused, color}) => <Ionicons name={ focused ? "person-add-sharp" : "person-add-outline"} size={20} color={color} /> }} />

    <Tabs.Screen name="not-found" options={{  headerShown: false }} />
  </Tabs>
  );
}
