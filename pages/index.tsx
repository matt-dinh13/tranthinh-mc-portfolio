import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Trần Thịnh - Người dẫn chương trình chuyên nghiệp | Professional MC</title>
        <meta name="description" content="MC song ngữ chuyên nghiệp cho đám cưới, sự kiện doanh nghiệp và lễ hội văn hóa tại Huế, Việt Nam. Bilingual MC for weddings, corporate events, and cultural celebrations." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Testimonials />
          <Contact />
        </main>
      </div>
    </>
  );
}
