import { View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textDisPlay: {
        fontSize: 20,
        width: 200,
        fontWeight: 'bold',
        color: '#e29447'
    }
})

const App = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textDisPlay}>Hello World</Text>
        </View>
    )
}

export default App