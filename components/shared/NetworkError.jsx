import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
} from "react-native";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12
    },
    description: {
        color: "#999"
    },
    button: {
        backgroundColor: '#db893f',
        width: 'auto',
        height: 40,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 8
    },
    buttonText: {
        color: "#fff",
        lineHeight: 40
    }
})

const NetworkError = (prop) => {
    const description = prop.description || "网络错误, 请稍等再试..."

    const { onPressed }  = prop

    return (
        <View style={styles.container}>
            <SimpleLineIcons name="drawer" color="#ddd" size={160} />
            <Text style={styles.description}>{  description }</Text>
            <TouchableOpacity activeOpacity={0.6} style={styles.button} onPress={onPressed}>
                <Text style={styles.buttonText}>重新加载</Text>
            </TouchableOpacity>
        </View>
    )
}

export default NetworkError;