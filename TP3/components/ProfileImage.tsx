import React from 'react';
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
// import { Ionicons } from '@expo/vector-icons';

type Props = {
    imgSource: string
}

export default function ProfileImage({imgSource}: Props) {
    return(
        <View style={styles.container}>
            <Image source={imgSource} style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        marginBottom: 20,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 100
    },
})

