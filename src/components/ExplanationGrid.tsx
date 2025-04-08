"use client";
import { useState } from "react";

interface ButtonItem {
  label: string;
  text: string;
  image?: string;
}

export default function ExplanationGrid({
  buttons,
}: {
  buttons: ButtonItem[];
}) {
  const [selected, setSelected] = useState<ButtonItem | null>(null);

  return (
    <div className="relative z-10">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {buttons.map((btn) => (
          <button
            key={btn.label}
            className="bg-white/70 hover:bg-white text-teal border border-teal font-semibold px-4 py-2 rounded shadow"
            onClick={() => setSelected(btn)}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white max-w-md w-full p-6 rounded-xl shadow-lg text-gray-800 space-y-4">
            <h2 className="text-xl font-bold text-teal">{selected.label}</h2>
            <p dangerouslySetInnerHTML={{ __html: selected.text }} />

            {selected.image && (
              <div className="overflow-hidden rounded-md border mt-2">
                <img
                  src={selected.image}
                  alt={selected.label}
                  className="w-full h-auto object-contain max-h-[680px]"
                />
              </div>
            )}

            <button
              onClick={() => setSelected(null)}
              className="block ml-auto mt-4 text-sm text-teal hover:underline"
            >
              Lukk
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
