import { useClickStore } from "./ClickStore";

export function ClickButton() {
  const add = useClickStore((s) => s.add);

  return (
    <button
      className="active:scale-95 bg-gray-400 w-40 h-40 rounded-full text-2xl font-bold cursor-pointer"
      onClick={() => add(1)}
    >
      Click
    </button>
  );
}
