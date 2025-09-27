import {View, StyleSheet, Text, Button, TouchableOpacity} from "react-native";
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
        padding: 8,
        borderRadius: 8
    }
})

const NetworkError = () => {
    return (
        <View style={styles.container}>
            <SimpleLineIcons name="drawer" color="#ddd" size={160} />
            <Text style={styles.description}>网络错误, 请稍等再试...</Text>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
                <Text style={{ color: "#fff" }}>重新加载</Text>
            </TouchableOpacity>
        </View>
    )
}

export default NetworkError;