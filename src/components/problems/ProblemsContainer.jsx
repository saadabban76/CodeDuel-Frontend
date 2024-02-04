import React, { useEffect, useState } from "react";
import Problem from "./Problem";
import {
  Table,
  TableBody,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import MaxWidthWrapper from "../MaxWidthWrapper";
import axios from "axios";
import { useGetQuestions } from "@/hooks/getQuestions";

const ProblemsContainer = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const problems = useGetQuestions();

  const isAnyOpen = activeIndex !== null;
  console.log("active INdex : ", activeIndex);

  return (
    <main className="flex-1 p-2 relative">
      <Table className="text-white max-w-[1000px] mr-auto px-4 w-full">
        <TableHeader>
          <TableRow className="text-white border-gray-500 text-left">
            <TableHead>Id</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Fees</TableHead>
            <TableHead>Take Part</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="relative">
          {problems.length > 0 &&
            problems.map((p, i) => {
              const handleOpen = () => {
                setActiveIndex(activeIndex === i ? null : i);
              };
              const isOpen = i === activeIndex;

              return (
                <Problem
                  key={i}
                  id={i}
                  fees={p.fees}
                  title={p.title}
                  description={p.description}
                  isOpen={isOpen}
                  isAnyOpen={isAnyOpen}
                  handleOpen={handleOpen}
                />
              );
            })}
        </TableBody>
      </Table>

      {!problems.length > 0 && (
        // <h1 className="text-primary text-center top-1 px-2 pt-5 text-xl w-full">
        //   There are no Questions as of now ! come back later or add your own
        //   question
        // </h1>
        <Problem
        id={1}
        fees={23}
        title={"Longest Substring Without Repeating Characters"}
        description={"Given a string `s`, find the length of the longest substring without repeating characters."}
        isOpen={false}
        isAnyOpen={isAnyOpen}
        // handleOpen={handleOpen}
      />
      )}
    </main>
  );
};

export default ProblemsContainer;
