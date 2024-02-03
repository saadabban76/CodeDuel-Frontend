import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { useAddress } from "@thirdweb-dev/react";
import { User } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const address = useAddress();
  const loginHandler = () => {
    return navigate("/login");
  };

  return (
    <nav className="sticky inset-x-0 bg-secondary pz-2 py-3">
      <MaxWidthWrapper className="">
        <main className="flex items-center justify-between ">
          {/* Logo */}
          <div className="flex items-center space-x-4 w-full h-full">
            <img
              onClick={() => navigate("/")}
              src="/assets/logo.png"
              alt="Code Duel"
              className="w-[180px] h-[100%] cursor-pointer"
            />

            <Link
              to="/contest"
              className={buttonVariants({
                variant: "link",
                className: "text-sm text-second"
              })}
            >
              Contest
            </Link>
            <Link
              to="/contest"
              className={buttonVariants({
                variant: "link",
                className: "text-sm text-second"
              })}
            >
              Feeds
            </Link>
            <Link
              to="/contest"
              className={buttonVariants({
                variant: "link",
                className: "text-sm text-second"
              })}
            >
              Discussions
            </Link>
            <Link
              to="/contest"
              className={buttonVariants({
                variant: "link",
                className: "text-sm text-second"
              })}
            >
              Contact Us
            </Link>
          </div>
          {/* right side */}
          {address ? (
            <div className="flex items-center space-x-4">
              <p className="text-gray-400">{address}</p>
              <User size={28} className="text-gray-100" />
            </div>
          ) : (
            <div className="">
              <Button
                onClick={loginHandler}
                className="border-b border-primary
                                 px-10 py-2"
              >
                Login
              </Button>
            </div>
          )}
        </main>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Nav;
