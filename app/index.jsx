import {View, StyleSheet, Text, TouchableOpacity} from "react-native";
import {Link} from "expo-router";

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
    }
})

const App = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textDisPlay}>Hello World</Text>
            <Link href="/details" asChild>
                <TouchableOpacity style={styles.button}>
                    <Text>Go to Details</Text>
                </TouchableOpacity>
            </Link>
        </View>
    )
}

export default App