import { Text, View, StyleSheet, FlatList, ListRenderItem } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Qualification = {
  id: string;
  title: string;
};

export default function Qualifications() {
    const insets = useSafeAreaInsets();

    const qualifications: Qualification[] = [
        { id: '1', title: 'Desenvolvimento React Native' },
        { id: '2', title: 'Certificação AWS Solutions Architect' },
        { id: '3', title: 'JavaScript Avançado' },
        { id: '4', title: 'Metodologias Ágeis (Scrum, Kanban)' },
        { id: '5', title: 'Design Responsivo' },
        { id: '6', title: 'Banco de Dados Relacionais e Não-Relacionais' },
        { id: '7', title: 'Certificação em UX/UI Design' },
    ];

    const renderItem: ListRenderItem<Qualification> = ({ item }) => (
        <View style={styles.item}>
        <Text style={styles.itemText}>{item.title}</Text>
        </View>
    );

    return (
        <View style={[styles.container,  { paddingTop: insets.top }]}>
        <Text style={styles.headerText}>Qualificações</Text>
        <FlatList
            data={qualifications}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.list}
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
    headerText: {
        fontSize: 24,
        color: '#fff',
        marginBottom: 20,
        paddingTop: 20
    },
    list: {
        width: '90%',
    },
    item: {
        backgroundColor: '#1E0033',
        padding: 15,
        marginVertical: 8,
        borderRadius: 8,
    },
    itemText: {
        color: '#fff',
        fontSize: 16,
    },
});
