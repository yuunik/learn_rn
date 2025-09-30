import { Slot, Stack } from "expo-router";
import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5'
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        margin: 20
    },
    footer: {
        fontSize: 12,
        color: '#000',
        textAlign: 'center',
        margin: 20
    }
})

const Layout = () => {
    return (
        <Stack style={styles.container} screenOptions={{ headerTitleAlign: 'center', animation: 'slide_from_right' }}>
            <Text style={styles.header}>React Native</Text>
            <Slot />
            <Text style={styles.footer}>@develop with yuunik</Text>
        </Stack>
    )
}

export default Layout