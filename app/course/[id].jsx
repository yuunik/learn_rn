import { View, Text, StyleSheet } from "react-native";
import {useLocalSearchParams} from "expo-router";

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
    }
})

const CourseInfo = () => {
    const { id } = useLocalSearchParams();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>课程详情页</Text>
            <Text style={styles.text}>当前课程的id: { id }</Text>
        </View>
    )
}

export default CourseInfo