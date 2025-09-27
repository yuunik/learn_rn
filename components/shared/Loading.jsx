import {ActivityIndicator, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    loading: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 9999
    }
})

const Loading = () => {
    return (
        <ActivityIndicator sizee="small" style={styles.loading} />
    )
}

export default Loading;