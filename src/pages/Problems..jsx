import React from "react";
import { cn } from "@/lib/utils";
import Nav from "@/components/problems/Nav";
import ProblemsContainer from "@/components/problems/ProblemsContainer";
import Footer from "@/components/Footer";
import { useAddress } from "@thirdweb-dev/react";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";

const Problems = () => {

  const address = useAddress();
  const navigate = useNavigate();

  if (!address) {
    toast.error('please login to access this page !');
    return navigate('/');
  }

  return (
    <main className="w-full pb-4 dark relative bg-gradient-to-br from-[#0F1522] to-background min-h-screen">
      <Toaster />
      <Nav />
      <ProblemsContainer />
      <Footer className={cn("absolute bottom-0")} />
    </main>
  );
};

export default Problems;
