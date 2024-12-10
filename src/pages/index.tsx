import React from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/giverform');
  }, [router]);

  return <div>Loading...</div>;
};

export default Home;
