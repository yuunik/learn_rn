import { useEffect, useState } from "react";
import request from "../utils/request";

const useFetchData = (url, method, params) => {
  // 状态
  const [data, setData] = useState();

  // 加载中
  const [isLoading, setIsLoading] = useState(false);

  // 错误
  const [error, setError] = useState();

  // 请求数据
  const fetchData = async () => {
    try {
      // 加载中
      setIsLoading(true);
      const res = await request({
        url,
        method,
        data: params,
      });
      // 设置数据
      setData(res.data);
    } catch {
      setError(true);
    } finally {
      // 加载完成
      setIsLoading(false);
    }
  };

  // 重新加载数据
  const onReload = async () => {
    // 重置错误
    setError(false);
    await fetchData();
  };

  useEffect(() => {
    fetchData();
  }, [url, JSON.stringify(params)]);

  return {
    data,
    isLoading,
    error,
    setData,
    onReload,
  };
};

export default useFetchData;
