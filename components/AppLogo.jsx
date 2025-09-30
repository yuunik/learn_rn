import { Image } from "expo-image";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    logo: {
        width: 130,
        height: 30
    }
})

const AppLogo = () => {
    return (
        <Image source={require('../assets/company-logo-full.png')} contentFit="contain" style={styles.logo} />
    )
}

export default AppLogo;