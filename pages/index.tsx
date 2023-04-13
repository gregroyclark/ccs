import { Inter } from 'next/font/google';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Main from '@/components/Main';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Clark Creative Services - CCS</title>
        <meta
          name='description'
          content='Clark Creative Services (CCS) is a full service creative agency specializing in web design & development. Other services include marketing, content writing, and social media.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Main />
      <Services />
      <Portfolio />
    </div>
  );
}
