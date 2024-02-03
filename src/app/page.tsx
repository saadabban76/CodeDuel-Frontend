
import BannerGrids from "@/components/BannerGrids";
import { Faq } from "@/components/Faq";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import './globals.css'
import Logos from "@/components/Logos";
import Link from "next/link";
import { userStore } from "@/store/user";
import { ThirdwebProvider, coinbaseWallet, metamaskWallet, walletConnect } from "@thirdweb-dev/react";

export default function Home() {

  return (
    // Landing Page
    <ThirdwebProvider
      supportedWallets={[
        metamaskWallet({
          recommended: true,
        }),
        coinbaseWallet(),
        walletConnect(),
      ]}
      activeChain="ethereum"
      clientId="e12bf4273bc073fcae7f55d5163cbda8"
    >
      <main className="p-2 dark bg-gradient-to-br from-[#0F1522] to-background to text-foreground">
        <Navbar />
        <div className='flex flex-col space-y-4'> {/* Container */}
          {/* hero section */}
          <section className='w-full px-5 py-32 flex
         items-center justify-center'>
            <div className='max-w-full flex max-lg:flex-col items-center gap-10 justify-between flex-row-reverse'>
              {/* image */}
              <div className='xl:w-[900px] flex-1 md:w-[600px] max-w-[760px]
            shadow-xl shadow-[#2A2A2A] '>
                <Image
                  src='/assets/home-ss.png'
                  alt='homepage-screenshot'
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-full"
                // className='xl:w-[900px] shadow-xl shadow-[#2A2A2A] 
                // rounded-md'
                />
              </div>
              {/* right section */}
              <section className='flex flex-1 flex-col space-y-4 items-start 
            max-lg:items-center '>
                <h1 className='text-white  w-[370px] xl:w-[700px] flex flex-col font-extrabold lg:text-[2.6rem] max-lg:w-full max-lg:text-center text-[2rem]'>A New Way to
                  <span className=''>Solve Challenges and win rewards</span> </h1>
                <p className='text-foreground text-gray-300 max-lg:text-center max-lg:w-full w-[70%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, magnam inventore rerum nam id beatae!</p>
                <Button className='px-8 py-4 mt-10'>
                  <Link href='/problems' >
                    Enter App !
                  </Link>
                </Button>
              </section>
            </div>
          </section>
          <Logos />
          {/* components */}
          <BannerGrids />
          {/* faq */}
          <Faq />
          <Footer />
        </div>
      </main>\
    </ThirdwebProvider>

  );
}