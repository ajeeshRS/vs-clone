'use client';
// Components
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Faqs from '@/components/Faqs';
import AiOverviewSection from '@/components/AiOverviewSection';
import CardGroup from '@/components/CardGroup';
import WorkFlowCards from '@/components/WorkFlowCards';
import GetStartedCard from '@/components/GetStartedCard';
import DocCard from '@/components/DocCard';
import PopupNav from '@/components/PopupNav';
import IntLLM from '@/components/IntLLm';
import Hero from '@/components/Hero';
import Hero2 from '@/components/Hero2';

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-[#5A00E8] via-slate-900 to-gray-900  flex min-h-screen flex-col items-center justify-between pt-16 ">
      {/* Navbar */}
      <Navbar />
      <PopupNav />

      {/* Main hero section*/}
      <Hero />

      {/* Hero-2 section */}
      <Hero2 />

      {/* Integrations and LLMs */}
      <IntLLM />

      {/* AI overview */}
      <AiOverviewSection />

      {/* Workflow cards */}
      <WorkFlowCards />

      {/* Card-group */}
      <CardGroup />

      {/* Documentation section */}
      <DocCard />

      {/* FAQ section */}
      <Faqs />

      {/* Get started card */}
      <GetStartedCard />

      {/* footer */}
      <Footer />
    </main>
  );
}
