
interface ButtonItem {
  label: string;
  text: string;
  image?: string;
}


export default function ExplanationGrid({
  buttons,
  onSelect,
}: {
  buttons: ButtonItem[];
  onSelect: (item: ButtonItem) => void;
}) {
  return (
    <div className="relative">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {buttons.map((btn) => (
          <button
            key={btn.label}
            className="bg-white/70 hover:bg-white text-teal border border-teal font-semibold px-4 py-2 rounded shadow"
            onClick={() => onSelect(btn)}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
}
