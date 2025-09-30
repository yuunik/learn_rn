import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { useRouter, Stack} from "expo-router";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#abc',
    },
    button: {
        backgroundColor: '#cba',
        padding: 12,
        borderRadius: 12,
        textAlign: 'center'
    },
    buttonText: {
        color: '#f5f5f5',
        fontSize: 16
    }
})

const App = () => {
    const router = useRouter()

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => router.push('/course/[id]', { params: { id: 123, title: 'Course Info'}})}>
                <Text style={styles.buttonText}>Go to courseInfo</Text>
            </TouchableOpacity>
        </View>
    )
}

export default App