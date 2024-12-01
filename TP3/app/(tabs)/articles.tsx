import { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { fetchArtigos } from '../../API/api';
import { Artigo } from '../../API/type';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Articles() {
  const insets = useSafeAreaInsets();
  const [articles, setArticles] = useState<Artigo[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function loadArticles() {
      try {
        const data = await fetchArtigos();
        setArticles(data);
      } catch (error) {
        console.error('Erro ao carregar artigos:', error);
      } finally {
        setLoading(false);
      }
    }
    loadArticles();
  }, []);

  const navigateToArticle = (article: Artigo) => {
    router.push({
      pathname: "/articlesPage/[id]",
      params: { 
        id: article.id.toString(),
        titulo: article.titulo,
        autor: article.autor,
        data: article.data,
        conteudo: article.conteudo,
      }
    });
  };

  const renderArticle = ({ item }: { item: Artigo }) => (
    <TouchableOpacity 
      style={styles.articleItem} 
      onPress={() => navigateToArticle(item)}
    >
      <Text style={styles.articleTitle}>{item.titulo}</Text>
      <Text style={styles.articleAuthor}>Por {item.autor}</Text>
      <Text style={styles.articleDate}>{item.data}</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#8c52ff" />
      </View>
    );
  }

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text style={styles.headerText}>Artigos</Text>
      <FlatList
        data={articles}
        renderItem={renderArticle}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#140024',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0d0018',
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
    paddingTop: 20,
    textAlign: 'center',
  },
  listContainer: {
    paddingBottom: 20,
    width: '90%',
  },
  articleItem: {
    backgroundColor: '#1E0033',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
  },
  articleTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  articleAuthor: {
    color: '#8c52ff',
    fontSize: 14,
  },
  articleDate: {
    color: '#9E9E9E',
    fontSize: 12,
  },
});
