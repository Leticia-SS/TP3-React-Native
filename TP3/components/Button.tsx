import { StyleSheet, View, Pressable, Text } from "react-native"

type Props = {
    label: string
}

export default function Button({label}: Props) {
    return(
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={()=> alert('button')}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#8c52ff',
        width: 300,
        height: 80,
        marginHorizontal: 20,
        alignItems: 'center',
        padding: 5
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonLabel: {
        color: 'white',
        fontSize: 16
    }
})