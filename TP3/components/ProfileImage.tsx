import React from 'react';
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Ionicons } from '@expo/vector-icons';

type Props = {
    imgSource: string
}

export default function ProfileImage({imgSource}: Props) {
    return(
        <View style={styles.container}>
            <Image source={imgSource} style={styles.image} />
            <View style={styles.editIcon}>
                <Ionicons name="pencil" size={20} color="white" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        marginBottom: 20,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100
    },
    editIcon: {
        position: 'absolute',
        right: 10,
        bottom: 10,
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderRadius: 15,
        padding: 5,
    }
})

