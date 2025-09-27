import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useEffect, useState } from "react";

import Loading from "./components/shared/Loading";
import NetworkError from "./components/shared/NetworkError";

export default function App() {
  const [forumList, setForumList] = useState([]);

  const [keyword, setKeyword] = useState('');

  const [isShowLoading, setIsShowLoading] = useState(false);

  const [error, setError] = useState(false);

  const getForumList = async () => {
    try {
      setIsShowLoading(true)
      await new Promise(resolve => setTimeout(resolve, 2000))

      const formData = new FormData();

      formData.append("page", "0");
      formData.append("token", "LOGIN:07df19f2f7a2a6cbe3f9a9477d911dca");
      formData.append("pageSize", "5");
      formData.append("searchKey", keyword);


      const res = await fetch("http://192.168.1.21:8013/forum/forums", {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: formData
      })

      const response = await res.json();
      setForumList(response.data)
    } catch {
      setError(true)
    } finally {
      setIsShowLoading(false)
    }
  }

  useEffect(() => {
    getForumList();
  }, [keyword]);

  // 加载中
  if (isShowLoading) {
    return <Loading />
  }

  // 网络错误提示
  if (error) {
    return (
      <NetworkError />
    )
  }

  return (
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Enter... " onChangeText={text => setKeyword(text)} defaultValue={keyword} />
        {forumList.length > 0 ? (
            forumList.map(item => (
                <Text key={item.id} style={styles.title}>{item.title}</Text>
            ))
        ) : (
            <Text>暂无帖子</Text>
        )}
        <Button title="获取帖子列表" onPress={getForumList}/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    title: {
      fontSize: 20,
        fontWeight: 'bold',
        color: '#e29447'
    },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  loading: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 9999,
  }
});
