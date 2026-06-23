import { useClickStore } from "./ClickStore";

export function ClickCount() {
  const count = useClickStore((s) => s.count);
  return <div className="text-2xl">{count}</div>;
}
