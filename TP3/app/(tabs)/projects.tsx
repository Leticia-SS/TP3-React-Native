import { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Repository } from '../../API/type';

export default function Projects() {
  const insets = useSafeAreaInsets();
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const fetchGitHubRepos = async () => {
    try {
      const response = await fetch('https://api.github.com/users/Leticia-SS/repos?sort=updated&per_page=10');
      const data = await response.json();
      setRepos(data);
    } catch (error) {
      console.error('Erro ao carregar repositórios:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGitHubRepos();
  }, []);

  const navigateToRepoDetail = (repo: Repository) => {
    router.push({
      pathname: "/projectPage/[id]",
      params: {
        id: repo.id.toString(),
        name: repo.name,
        description: repo.description || 'Sem descrição',
        updated_at: repo.updated_at,
        html_url: repo.html_url,
      },
    });
  };

  const renderRepo = ({ item }: { item: Repository }) => (
    <TouchableOpacity 
      style={styles.repoItem} 
      onPress={() => navigateToRepoDetail(item)}
    >
      <Text style={styles.repoName}>{item.name}</Text>
      <Text style={styles.repoDescription}>{item.description || 'Sem descrição disponível'}</Text>
      <Text style={styles.repoDate}>Última atualização: {new Date(item.updated_at).toLocaleDateString()}</Text>
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
      <Text style={styles.headerText}>Projetos Recentes</Text>
      <FlatList
        data={repos}
        renderItem={renderRepo}
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
  repoItem: {
    backgroundColor: '#1E0033',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
  },
  repoName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  repoDescription: {
    color: '#8c52ff',
    fontSize: 14,
    marginBottom: 5,
  },
  repoDate: {
    color: '#9E9E9E',
    fontSize: 12,
  },
});
