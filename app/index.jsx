import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import {Link, useRouter} from "expo-router";

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
    }
})

const App = () => {
    const router = useRouter()

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>首页</Text>
            {/* 方式 1 */}
            {/*<TouchableOpacity style={styles.button} onPress={() => router.push("/course/123")}>
                <Text>跳转至课程详情页</Text>
            </TouchableOpacity>*/}

            {/* 方式 2 */}
            <TouchableOpacity style={styles.button} onPress={() => router.push("/course/[id]", { params: { id: 123 }})}>
                <Text>跳转至课程详情页</Text>
            </TouchableOpacity>

            {/* 方式 3 */}
            {/*<Link href="/course/1" style={styles.button}>*/}
            {/*    <Text>跳转至课程详情页</Text>*/}
            {/*</Link>*/}

            {/* 方式 4 */}
            {/*<Link href={{ pathname: "/course/[id]", params: { id: 2 }} } style={styles.button}>*/}
            {/*    <Text>跳转至课程详情页</Text>*/}
            {/*</Link>*/}
        </View>
    )
}

export default App