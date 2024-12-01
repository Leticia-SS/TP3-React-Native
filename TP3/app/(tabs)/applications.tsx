import { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { fetchCandidaturas } from '../../API/api';
import { Candidatura } from '../../API/type';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Applications() {
  const insets = useSafeAreaInsets();

  const [candidaturas, setCandidaturas] = useState<Candidatura[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function loadCandidaturas() {
      try {
        const data = await fetchCandidaturas();
        setCandidaturas(data);
      } catch (error) {
        console.error('Erro ao carregar candidaturas:', error);
      } finally {
        setLoading(false);
      }
    }
    loadCandidaturas();
  }, []);

  const navigateToApplicationStatus = (candidatura: Candidatura) => {
    router.push({
      pathname: "/applicationPage/[id]",
      params: { 
        id: candidatura.id.toString(),
        vaga: candidatura.vaga,
        empresa: candidatura.empresa,
        status: candidatura.status
      }
    });
  };

  const getStatusColor = (status: 'Aprovado' | 'Pendente' | 'Reprovado') => {
    switch (status) {
      case 'Aprovado': return '#4CAF50';
      case 'Pendente': return '#FFC107';
      case 'Reprovado': return '#F44336';
      default: return '#9E9E9E';
    }
  };

  const renderCandidatura = ({ item }: { item: Candidatura }) => (
    <TouchableOpacity 
      style={styles.candidaturaItem} 
      onPress={() => navigateToApplicationStatus(item)}
    >
      <View style={styles.candidaturaHeader}>
        <Text style={styles.candidaturaCargo}>{item.vaga}</Text>
        <View 
          style={[
            styles.statusBadge, 
            { backgroundColor: getStatusColor(item.status) }
          ]}
        >
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
      </View>
      <Text style={styles.candidaturaEmpresa}>{item.empresa}</Text>
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
      <Text style={styles.headerText}>Minhas Candidaturas</Text>
      <FlatList
        data={candidaturas}
        renderItem={renderCandidatura}
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
    textAlign: 'center'
  },
  listContainer: {
    paddingBottom: 20,
    width: '90%'
  },
  candidaturaItem: {
    backgroundColor: '#1E0033',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
  },
  candidaturaHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 5,
  },
  candidaturaCargo: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
  candidaturaEmpresa: {
    color: '#8c52ff',
    fontSize: 14,
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  statusText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

