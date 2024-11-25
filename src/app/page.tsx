
import Articles from "./components/Articles";
import ChatInfo from "./components/ChatInfo";
import Faq from "./components/Faq";
import Hero from "./components/Hero";
import Why from "./components/Why";
import Partners from '@/components/Partners';
export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Why />
      <ChatInfo />
      <Articles />
      <Partners />
      <Faq />

    </div>
  );
}
