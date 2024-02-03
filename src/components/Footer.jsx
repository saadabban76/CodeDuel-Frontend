import { cn } from "@/lib/utils";
import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ className }) => {
  return (
    <div className={cn("w-full p-4 px-4 text-gray-400 bg-black/90", className)}>
      <div className="py-2 flex justify-between items-center">
        {/* copyright */}
        <h2>Copyright &copy; 2024 Code Duel</h2>
        {/* right Side */}
        <div className="flex items-center space-x-4">
          <Link to="/help">Help</Link>
          <Link to="/discord">Discord</Link>
          <Link to="/instagram">Instagram</Link>
          <Link to="/Github">Github</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
