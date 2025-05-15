import { useState } from "react";

export const useSurveys = () => {
  //   const [surveys, setSurveys] = useState<Survey[]>([]);
  const [isLoading] = useState(true);
  const [error] = useState<Error | null>(null);

  const surveys = [
    {
      id: "1",
      name: "Test Survey",
      point: "100",
      code_name: "test",
      test: "test",
    },
    {
      id: "2",
      name: "Test Survey 2",
      point: "200",
      code_name: "test2",
      test: "test2",
    },
    {
      id: "3",
      name: "Test Survey 3",
      point: "300",
      code_name: "test3",
      test: "test3",
    },
    {
      id: "4",
      name: "Test Survey 4",
      point: "400",
      code_name: "test4",
      test: "test4",
    },
    {
      id: "5",
      name: "Test Survey 5",
      point: "500",
      code_name: "test5",
      test: "test5",
    },
    {
      id: "6",
      name: "Test Survey 6",
      point: "600",
      code_name: "test6",
      test: "test6",
    },
  ];

  //   useEffect(() => {
  //     const fetchSurveys = async () => {
  //       try {
  //         const response = await fetch("/api/surveys");
  //         if (!response.ok) {
  //           throw new Error("Failed to fetch surveys");
  //         }
  //         const data = await response.json();
  //         setSurveys(data);
  //       } catch (err) {
  //         setError(err as Error);
  //       } finally {
  //         setIsLoading(false);
  //       }
  //     };

  //     fetchSurveys();
  //   }, []);

  return { surveys, isLoading, error };
};
