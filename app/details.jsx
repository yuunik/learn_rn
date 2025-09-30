import { Text, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textDisPlay: {
        fontSize: 20,
        width: 200,
        fontWeight: 'bold',
        color: '#f5f5f5'
    }
})

const Details = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textDisPlay}>Details</Text>
        </View>
    )
}

export default Details