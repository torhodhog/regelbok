import { buttons } from "@/components/buttonData";
import ExplanationGrid from "@/components/ExplanationGrid";
import { QbuttonData } from "@/components/QuestionButtonData";

export default function Page() {
  return (
    <main className="relative h-screen w-screen bg-[url('/bg.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-white/60 z-0" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl font-bold text-teal mb-6">Muntlig skal eies</h1>
        <ExplanationGrid buttons={buttons} />
        <h2 className="font-extrabold text-3xl p-8">Mulige spørsmål:</h2>
        <ExplanationGrid buttons={QbuttonData} />
      </div>
    </main>
  );
}
