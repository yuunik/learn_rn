import {Button, Text, View, StyleSheet} from "react-native";
import {useContext} from "react";
import ThemeContext from "../utils/context";

// 样式
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    }
})


const Son = () => {
    const theme = useContext(ThemeContext)

    return (
        <View style={[ styles.container, { backgroundColor: theme.backgroundColor }]}>
            <Text style={{ fontSize: 30, color: theme.color }}>Hello, world!</Text>
            <Button title="切换模式" onPress={() => {}}/>
        </View>
    )
}

export default Son