import { Text, View, StyleSheet } from 'react-native'

export default function Application() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Candidaturas</Text>
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
  text: {
    color: '#fff',
  },
});
