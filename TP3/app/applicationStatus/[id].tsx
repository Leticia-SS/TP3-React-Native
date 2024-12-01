import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../../constants/ThemeContext';
import { createThemedStyles, lightTheme, darkTheme } from '../../constants/theme';


type CandidaturaParams = {
  id: string;
  vaga: string;
  empresa: string;
  status: 'Aprovado' | 'Pendente' | 'Reprovado';
};

export default function ApplicationStatusScreen() {
  const params = useLocalSearchParams<CandidaturaParams>();
  const { theme } = useTheme();
  const styles = createThemedStyles(theme === 'light' ? lightTheme : darkTheme);


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
      <View style={localStyles.card}>
        <Text style={[styles.text, localStyles.headerText]}>Detalhes da Candidatura</Text>
        <View style={localStyles.infoContainer}>
          <Text style={styles.primaryText}>Vaga:</Text>
          <Text style={styles.text}>{params.vaga}</Text>
        </View>
        <View style={localStyles.infoContainer}>
          <Text style={styles.primaryText}>Empresa:</Text>
          <Text style={styles.text}>{params.empresa}</Text>
        </View>
        <View style={localStyles.infoContainer}>
          <Text style={styles.primaryText}>Status:</Text>
          <View 
            style={[
              localStyles.statusBadge, 
              { backgroundColor: getStatusColor(params.status) }
            ]}
          >
            <Text style={localStyles.statusText}>{params.status}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
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

