import { View, Text, StyleSheet, Button, Linking, SafeAreaView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

type RepoParams = {
  id: string;
  name: string;
  description: string;
  updated_at: string;
  html_url: string;
};

export default function ProjectDetailScreen() {
  const params = useLocalSearchParams<RepoParams>();

  const openRepoInBrowser = () => {
    Linking.openURL(params.html_url);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{params.name}</Text>
        <Text style={styles.description}>{params.description}</Text>
        <Text style={styles.meta}>
          Última atualização: {new Date(params.updated_at).toLocaleDateString()}
        </Text>
        <Button title="Abrir no GitHub" onPress={openRepoInBrowser} color="#8c52ff" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#140024',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#1E0033',
    borderRadius: 12,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#8c52ff',
    marginBottom: 10,
  },
  meta: {
    fontSize: 14,
    color: '#9E9E9E',
    marginBottom: 20,
  },
});
