"use client";
import { useState } from "react";
import { buttons } from "@/components/buttonData";
import ExplanationGrid from "@/components/ExplanationGrid";
import { QbuttonData } from "@/components/QuestionButtonData";

interface ButtonItem {
  label: string;
  text: string;
  image?: string;
}

export default function Page() {
  const [selected, setSelected] = useState<ButtonItem | null>(null);

  return (
    <main className="relative min-h-screen w-screen bg-[url('/bg.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-white/60 z-0" />

      <div className="relative z-10 h-full flex flex-col px-4 py-12">
        <h1 className="text-4xl font-bold text-teal mb-6 text-center">REGELBOK</h1>

        <div className="flex flex-1 gap-8">
          {/* Venstre kolonne */}
          <div className="w-1/2 relative z-0">
            <h2 className="font-extrabold text-2xl mb-4">Forklaringer:</h2>
            <ExplanationGrid buttons={buttons} onSelect={setSelected} />
          </div>

          {/* Høyre kolonne */}
          <div className="w-1/2 relative z-0">
            <h2 className="font-extrabold text-2xl mb-4">Mulige spørsmål:</h2>
            <ExplanationGrid buttons={QbuttonData} onSelect={setSelected} />
          </div>
        </div>
      </div>

           {/* Felles popup her – alltid på toppen */}
      {selected && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[9999]">
          <div className="bg-white max-w-md w-full p-6 rounded-xl shadow-lg text-gray-800 space-y-4 overflow-auto max-h-[90vh]">
            <button
              onClick={() => setSelected(null)}
              className="block ml-auto mt-4 text-sm text-teal hover:underline"
            >
              Lukk
            </button>
            <h2 className="text-xl font-bold text-teal">{selected.label}</h2>
            <p dangerouslySetInnerHTML={{ __html: selected.text }} />
          </div>
        </div>
      )}
    </main>
  );
}
