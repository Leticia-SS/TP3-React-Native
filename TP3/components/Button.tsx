import { StyleSheet, View, Pressable, Text } from "react-native"

type Props = {
    label: string,
    theme?: "primary",
    onPress: () => void,
}

export default function Button({label, theme, onPress}: Props) {
    if(theme==="primary") {
    return(
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    )
}}

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