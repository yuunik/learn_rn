import {Text, View, StyleSheet, TouchableOpacity, TouchableHighlight} from 'react-native'
import {useRouter} from "expo-router";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    },
    textDisPlay: {
        textAlign: 'center',
        fontSize: 20,
        width: 200,
        fontWeight: 'bold',
        color: '#f5f5f5'
    }
})

const Details = () => {
    const router = useRouter()

    return (
        <View style={styles.container}>
            <Text style={styles.textDisPlay}>Details</Text>
            <TouchableOpacity onPress={() => router.back()}>
                <Text style={{ color: '#f5f5f5' }}>Go Back</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.navigate("/details")}>
                <Text style={{ color: '#f5f5f5' }}>Navigate</Text>
            </TouchableOpacity>
            <TouchableHighlight onPress={() => router.push("/details")}>
                <Text style={{ color: '#f5f5f5' }}>Push</Text>
            </TouchableHighlight>
        </View>
    )
}

export default Details