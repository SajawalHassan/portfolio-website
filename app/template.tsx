import { LoadingScreen } from "@/components/ui";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LoadingScreen />
      {children}
    </>
  );
}
