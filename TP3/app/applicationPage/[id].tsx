import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type CandidaturaParams = {
  id: string;
  vaga: string;
  empresa: string;
  status: 'Aprovado' | 'Pendente' | 'Reprovado';
};

export default function ApplicationStatusScreen() {
  const insets = useSafeAreaInsets();
  const params = useLocalSearchParams<CandidaturaParams>();

  const getStatusColor = (status: 'Aprovado' | 'Pendente' | 'Reprovado') => {
    switch (status) {
      case 'Aprovado': return '#4CAF50';
      case 'Pendente': return '#FFC107';
      case 'Reprovado': return '#F44336';
      default: return '#9E9E9E';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.headerText}>Detalhes da Candidatura</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Vaga:</Text>
          <Text style={styles.value}>{params.vaga}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Empresa:</Text>
          <Text style={styles.value}>{params.empresa}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Status:</Text>
          <View 
            style={[
              styles.statusBadge, 
              { backgroundColor: getStatusColor(params.status) }
            ]}
          >
            <Text style={styles.statusText}>{params.status}</Text>
          </View>
        </View>
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
      height: '100%',
      maxWidth: 400,
      backgroundColor: '#1E0033',
      borderRadius: 12,
      padding: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    headerText: {
      fontSize: 24,
      color: '#fff',
      textAlign: 'center',
      marginBottom: 20,
      fontWeight: 'bold',
    },
    infoContainer: {
      marginBottom: 20,
    },
    label: {
      fontSize: 16,
      color: '#8c52ff',
      marginBottom: 5,
      fontWeight: 'bold',
    },
    value: {
      fontSize: 18,
      color: '#fff',
    },
    statusBadge: {
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 20,
      alignSelf: 'flex-start',
    },
    statusText: {
      color: '#fff',
      fontSize: 14,
      fontWeight: 'bold',
    },
});

