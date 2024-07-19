// pages/index.js
import Head from 'next/head';
import Header from '../components/Header';
import ProductDescription from '../components/ProductDescription';
import ImageGallery from '../components/ImageGallery';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fictional Product Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <ProductDescription />
        <ImageGallery />
        <ContactForm />
      </main>
    </div>
  );
}
