"use client";

import { useEffect } from "react";
import { useEverythingState } from "@/store/store";

export function PrententiousGibberishProvider({ children }: { children: React.ReactNode }) {
  const setPoems = useEverythingState((s) => s.setPoems);
  const setQuotes = useEverythingState((s) => s.setQuotes);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/portfolio");
      if (!res.ok) throw new Error("unable to fetch data");

      const data = await res.json();

      setPoems(data.poems);
      setQuotes(data.quotes);
    }

    fetchData();
  }, [setPoems, setQuotes]);

  return children;
}
