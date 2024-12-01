import { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Switch } from "react-native";
import { StatusBar } from 'expo-status-bar';
import * as ImagePicker from 'expo-image-picker';
import ProfileImage from '../../components/ProfileImage';

export default function Index() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [profileImage, setProfileImage] = useState(require('../../assets/images/ProfilePlaceholder.jpg'));

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  return (
    <View style={[styles.container, isDarkMode ? styles.darkMode : styles.lightMode]}>
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />
      <TouchableOpacity onPress={pickImage}>
        <ProfileImage imgSource={profileImage} />
      </TouchableOpacity>
      <Text style={[styles.text, isDarkMode ? styles.darkText : styles.lightText]}>Lara Valente</Text>
      <Text style={[styles.text, isDarkMode ? styles.darkText : styles.lightText]}>Idade: 20 anos</Text>
      <Text style={[styles.text, isDarkMode ? styles.darkText : styles.lightText]}>Desenvolvedor Full Stack</Text>
      <View style={styles.themeToggle}>
        <Text style={[styles.text, isDarkMode ? styles.darkText : styles.lightText]}>Tema Escuro</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#8c52ff" }}
          thumbColor={isDarkMode ? "#f4f3f4" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleTheme}
          value={isDarkMode}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  darkMode: {
    backgroundColor: '#140024',
  },
  lightMode: {
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 18,
    marginVertical: 5,
  },
  darkText: {
    color: '#fff',
  },
  lightText: {
    color: '#000',
  },
  themeToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
});

