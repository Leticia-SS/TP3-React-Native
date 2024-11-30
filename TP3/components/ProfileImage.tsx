import { StyleSheet } from "react-native";
import { Image } from "expo-image";

type Props = {
    imgSource: string
}

export default function ProfileImage({imgSource}: Props) {
    return(
        <Image source={imgSource} style={styles.image} />
    )
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        borderRadius: 100
    }
})