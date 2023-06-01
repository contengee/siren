import { useEffect } from 'react';

export default function Index() {
  useEffect(() => {
    window.location.href = '../pages/page'; // 遷移先のページのパスを指定します
  }, []);

  return null;
}
