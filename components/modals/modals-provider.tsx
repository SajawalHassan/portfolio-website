import { PoemsModal } from "@/components/modals/poems-modal";
import { ProjectModal } from "@/components/modals/project-modal";
import QuoteModal from "@/components/modals/quote-modal";

export const ModalsProvider = () => {
  return (
    <>
      <QuoteModal />
      <PoemsModal />
      <ProjectModal />
    </>
  );
};
