import { Text, View, StyleSheet } from 'react-native'
// import ProfileImage from '@/components/ProfileImage';

export default function Articles() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Artigos</Text>
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
