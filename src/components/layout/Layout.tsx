import Head from 'next/head';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/store';
import { fetchUserWithThunk } from '@/store/user/userSlice';
import { useRouter } from 'next/router';
import { PATHS } from '@/constant';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUserWithThunk(11));
  }, []);

  const router = useRouter().pathname;
  const isSign =
    router === PATHS.signUp ||
    router === PATHS.signIn ||
    router === PATHS.renew;

  return (
    <>
      {!isSign && <Header />}
      {children}
      {!isSign && <Footer />}
    </>
  );
}
