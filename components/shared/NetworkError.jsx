import {View, StyleSheet, Text} from "react-native";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    description: {
        color: "#999"
    }
})

const NetworkError = () => {
    return (
        <View style={styles.container}>
            <SimpleLineIcons name="drawer" color="#ddd" size={160} />
            <Text style={styles.description}>网络错误, 请稍等再试...</Text>
        </View>
    )
}

export default NetworkError;