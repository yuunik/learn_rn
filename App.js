import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useEffect, useState } from "react";

import Loading from "./components/shared/Loading";
import NetworkError from "./components/shared/NetworkError";
import request from "./utils/request";
import useFetchData from "./hooks/useFetchData";

export default function App() {
  const [keyword, setKeyword] = useState('');

  const formData = new FormData();
  formData.append('token', 'LOGIN:07df19f2f7a2a6cbe3f9a9477d911dca');
  formData.append('page', '0');
  formData.append('pageSize', '5');
  formData.append('searchKey', keyword);

  const { data: forumList , isLoading, error, onReload} = useFetchData("/forum/forums", "POST", formData)

  // 加载中
  if (isLoading) {
    return <Loading />
  }

  // 网络错误提示
  if (error) {
    return (
      <NetworkError description="Network error" onPressed={onReload} />
    )
  }

  return (
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Enter... " onChangeText={text => setKeyword(text)} defaultValue={keyword} />
        {Array.isArray(forumList) && forumList.length > 0 ? (
            forumList.map(item => (
                <Text key={item.id} style={styles.title}>{item.title}</Text>
            ))
        ) : (
            <Text>暂无帖子</Text>
        )}
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
