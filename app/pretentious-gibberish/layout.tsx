import { PrententiousGibberishProvider } from "@/app/pretentious-gibberish/_components/pretentious-gibberish-provider";

export default function PrententiousGibberishLayout({ children }: { children: React.ReactNode }) {
  return <PrententiousGibberishProvider>{children}</PrententiousGibberishProvider>;
}
