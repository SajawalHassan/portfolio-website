import { PoemsModal } from "@/components/modals/poems-modal";
import QuoteModal from "@/components/modals/quote-modal";

export const ModalsProvider = () => {
  return (
    <>
      <QuoteModal />
      <PoemsModal />
    </>
  );
};
