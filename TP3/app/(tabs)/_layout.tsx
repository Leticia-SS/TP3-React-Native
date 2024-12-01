import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons"
import { useTheme } from '../../constants/ThemeContext';
import { lightTheme, darkTheme } from '../../constants/theme';


export default function TabsLayout() {
  const { theme } = useTheme();
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
  <Tabs 
    screenOptions={{
      tabBarActiveTintColor: currentTheme.primary,
      tabBarActiveBackgroundColor: theme === 'light' ? '#e0e0e0' : '#140024',
      headerShadowVisible: false,
      headerTintColor: currentTheme.primary,
      headerStyle: {
        backgroundColor: currentTheme.background,
      },
      tabBarStyle: {
        borderTopWidth: 0,
        backgroundColor: currentTheme.background,
      },
      tabBarLabelPosition: 'below-icon',
    }}
  >
    <Tabs.Screen name="index" options={{ title: 'Perfil', headerShown: false, tabBarIcon: ({focused, color}) => <Ionicons name={ focused ? "person-circle-sharp" : "person-circle-outline"} size={20} color={color} /> }} />
    <Tabs.Screen name="projects" options={{ title: 'Projetos', headerShown: false, tabBarIcon: ({focused, color}) => <Ionicons name={ focused ? "folder-sharp" : "folder-outline"} size={20} color={color} /> }} />
    <Tabs.Screen name="articles" options={{ title: 'Artigos', headerShown: false, tabBarIcon: ({focused, color}) => <Ionicons name={ focused ? "newspaper-sharp" : "newspaper-outline"} size={20} color={color} /> }} />
    <Tabs.Screen name="qualifications" options={{ title: 'Qualificações', headerShown: false, tabBarIcon: ({focused, color}) => <Ionicons name={ focused ? "briefcase-sharp" : "briefcase-outline"} size={20} color={color} /> }} />
    <Tabs.Screen name="applications" options={{ title: 'Candidatura', headerShown: false, tabBarIcon: ({focused, color}) => <Ionicons name={ focused ? "person-add-sharp" : "person-add-outline"} size={20} color={color} /> }} />

    <Tabs.Screen name="not-found" options={{  headerShown: false }} />
  </Tabs>
  );
}
