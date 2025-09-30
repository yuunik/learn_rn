import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {Stack, useLocalSearchParams, useNavigation} from "expo-router";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 30
    },
    text: {
        fontSize: 20,
        fontWeight: "bold"
    },
    button: {
        backgroundColor: '#abc',
        borderRadius: 12,
        padding: 12,
    }
})

const CourseInfo = () => {
    const { id, title } = useLocalSearchParams();

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>课程详情页</Text>
            <Text style={styles.text}>当前课程的id: { id }, title: { title }</Text>
            <TouchableOpacity onPress={() => navigation.setOptions({ title: "修改后的标题"})}>
                <Text>Set Title</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CourseInfo