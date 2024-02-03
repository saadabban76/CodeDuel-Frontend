import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export const useGetQuestions = async () => {
  const [questions, setQuestions] = useState();

  const questionsHandler = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/get_question",
        {
          params: {
            question_id: 0,
            question_title: "",
            rival_id: 0,
            question_category: "All"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      );
      console.log("Response:", response.data);

      setQuestions(response.data);

      if ("Err" in response.data) {
        toast.error(`Error while fetching questions server !`);
      } else {
        toast.success("questions fetched succesfully !");
      }
    } catch (error) {
      console.log("errro : ", error);
      toast.error("fetching of questions failed !");
    }
  };

  useEffect(() => {
    questionsHandler();
  }, []);

  return questions;
};
