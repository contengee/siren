import { useEffect } from 'react';
import { useRouter } from 'next/router';

const CustomErrorPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/page');
  }, []);

  return null;
};

export default CustomErrorPage;
