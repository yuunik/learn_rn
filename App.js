import {
  Text,
  StyleSheet,
  View,
  Dimensions
}  from "react-native";
import { Image } from 'expo-image'
import {useEffect, useState} from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import request from "./utils/request";

// 样式
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  display: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    color: 'black',
    fontSize: 80
  },
  content: {
    color: 'red',
    fontSize: 30,
    height: 100
  },
  logo: {
    width: 300,
    height: 300,
    borderRadius: 12,
    boxShadow: '0 0 10px rgba(0,0,0,0.5)',
    margin: 20,
    overflow: 'hidden'
  }
})

const { width, height } = Dimensions.get("window")

const App = () => {
  const [refreshing, setRefreshing] = useState(false);

  const [forumList, setForumList] = useState();

  // 获取贴文列表
  const getForumList = async  () => {
    const formData = new FormData();
    formData.append('page', 0);
    formData.append('page_size', 100);
    formData.append('token', 'LOGIN:07df19f2f7a2a6cbe3f9a9477d911dca');

    const res = await request({
      url: '/forum/forums',
      method: 'post',
      data: formData
    })
    console.log(res);
    setForumList(res.data)
  };

  // 列表子项
  const getRenderItem = ({ item }) => (
        <Text style={styles.content}>{item.title}</Text>
  )

  // 列表头部
  const getListHeaderComponent = () => (
      <Text style={styles.header}>Forum List</Text>
  )

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  const onEndReached = () => {
    console.log('onEndReached');
  };

  useEffect(() => {
    getForumList();
  }, []);

  return (
      <SafeAreaView style={[styles.container]}>
        <View style={styles.display}>
          <Image source={{ uri: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg' }} style={styles.logo} />
          <Text>11111</Text>
        </View>
      </SafeAreaView>
  )
}

export default App;