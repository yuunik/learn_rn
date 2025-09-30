import {View, Alert, Text, StyleSheet, Dimensions} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

const { width, height } = Dimensions.get("window")

const AppAlert = () => {
    const onPress = () => Alert.alert('提示信息', '你想干嘛?', [
        {
            text: '确定',
            onPress: () => console.log("确认了")
        }
    ])

    const onCancel = () => Alert.alert("提示信息", "你又想干嘛?", [
        {
            text: "取消1",
            onPress: () => console.log("取消了1")
        },
        {
            text: "取消",
            onPress: () => console.log("取消了")
        },
        {
            text: "确定",
            onPress: () => console.log("确认了")
        }
    ])


    return (
        <View style={styles.container}>
            <Text>当前屏幕宽度为: { width } , 高度为: { height }</Text>
        </View>
    )
}

export default AppAlert