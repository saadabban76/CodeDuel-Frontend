import BannerGrids from "@/components/BannerGrids";
import { Faq } from "@/components/Faq";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    // Landing Page
    <main className="p-2 dark bg-background text-foreground">
      <Navbar />
      <div className='flex flex-col space-y-4'> {/* Container */}
        {/* hero section */}
        <section className='w-full px-5 py-32 flex
         items-center justify-center'>
          <div className='flex max-sm:flex-col items-center gap-10 justify-between'>
            {/* image */}
            <div className='max-h-[300px] max-w-[450px]'>
              <Image
                src='/assets/home-ss.png'
                alt='homepage-screenshot'
                width='600'
                height='600'
                className='xl:w-[900px] shadow-xl shadow-[#2A2A2A] rounded-md'
              />
            </div>
            {/* right section */}
            <section className='flex flex-col space-y-6 items-center'>
              <h1 className='text-white font-bold text-2xl'>A New Way to Challenge and win rewards</h1>
              <p className='text-foreground text-center w-[70%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, magnam inventore rerum nam id beatae!</p>
              <Button className='px-5 py-1'>Enter App !</Button>
            </section>
          </div>
        </section>
        {/* components */}
        <BannerGrids />
        {/* faq */}
        <Faq />
        <Footer/>
      </div>
    </main>
  );
}
