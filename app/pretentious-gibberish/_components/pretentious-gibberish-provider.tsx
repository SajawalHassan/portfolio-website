"use client";

import { useEffect } from "react";
import { useEverythingState } from "@/store/store";

export function PrententiousGibberishProvider({ children }: { children: React.ReactNode }) {
  const setPoems = useEverythingState((s) => s.setPoems);
  const setQuotes = useEverythingState((s) => s.setQuotes);
  const setEssays = useEverythingState((s) => s.setEssays);
  const setIsFetching = useEverythingState((s) => s.setIsFetching);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const res = await fetch("/api/portfolio");
        if (!res.ok) throw new Error("unable to fetch data");

        const data = await res.json();

        setEssays(data.essays);
        setPoems(data.poems);
        setQuotes(data.quotes);
      } catch (error) {
        console.log("ERROR OCCURED");
        console.log(error as string);
      } finally {
        setIsFetching(false);
      }
    }

    fetchData();
  }, []);

  return children;
}
