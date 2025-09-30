import {View, StyleSheet, Text, TouchableOpacity, TouchableHighlight} from "react-native";
import {Link, useRouter} from "expo-router";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12,
    },
    textDisPlay: {
        fontSize: 20,
        width: 200,
        fontWeight: 'bold',
        color: '#e29447',
        textAlign: 'center'
    },
    button: {
        backgroundColor: '#e29447',
        padding: 10,
        borderRadius: 5
    },
    buttonText: {
        color: '#f5f5f5',
        fontSize: 16
    }
})

const App = () => {
    const router = useRouter();

    const onNavigate = () => router.navigate("/details")

    const onReplace = () => router.replace("/details")

    return (
        <View style={styles.container}>
            <Text style={styles.textDisPlay}>Hello World</Text>
            <TouchableOpacity style={styles.button} onPress={onNavigate}>
                <Text style={styles.buttonText}>navigate</Text>
            </TouchableOpacity>
            <TouchableHighlight style={styles.button} onPress={onReplace}>
                <Text style={styles.buttonText}>replaces</Text>
            </TouchableHighlight>
        </View>
    )
}

export default App