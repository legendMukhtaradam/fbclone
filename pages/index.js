import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Login from "../components/Login";
import { getSession } from 'next-auth/react';
import Head from 'next/head';
import Feed from '../components/Feed';
import Widgets from '@/components/Widgets';
import { db } from '@/firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';

export default function Home({ session, posts }) {

  if (!session) return <Login/>;

  return (
    <div className='h-screen bg-gray-100 overflow-hidden'>
      <Head>
        <title>Facebook</title>
      </Head>
      
      {/* Heder */}
      <Header/>
      <main className='flex'>
        <Sidebar/>
        <Feed posts={posts}/>
        <Widgets/>
      </main>
    </div>
  );
}
 

export async function getServerSideProps(context){

  const session = await getSession(context);

  const posts = query(collection(db, "posts"), orderBy("timestamp","desc"))

  // const docs = posts.doc.map((post) =>({
  //   id: post.id,
  //   ...post.data(),
  //   timestamp:null,
  // }))

  const querySnapshot = await getDocs(posts);

  const docs = await querySnapshot.docs.map((doc) => ({
  id: doc.id,
  ...doc.data(),
  timestamp: null, // You can set your timestamp value here
  }));
  
  return {
    props:{
      session,
      posts: docs,
    }
  };
};