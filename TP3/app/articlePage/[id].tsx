import { Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

type ArticleParams = {
  id: string;
  titulo: string;
  autor: string;
  data: string;
  conteudo: string;
};

export default function ArticleDetailScreen() {
  const params = useLocalSearchParams<ArticleParams>();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>{params.titulo}</Text>
        <Text style={styles.meta}>
          Por {params.autor} - {params.data}
        </Text>
        <Text style={styles.contentText}>{params.conteudo}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#140024',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  meta: {
    fontSize: 14,
    color: '#8c52ff',
    marginBottom: 20,
  },
  contentText: {
    fontSize: 16,
    color: '#fff',
    lineHeight: 24,
  },
});
