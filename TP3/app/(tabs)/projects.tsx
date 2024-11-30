import { Text, View, StyleSheet } from 'react-native'

export default function Projects() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Projetos</Text>
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
