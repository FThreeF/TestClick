import { ClickButton } from "@modules/click/ClickButton";
import { ClickCount } from "@modules/click/ClickCount";

export function App() {
  return (
    <div className="flex w-full h-screen flex-col items-center justify-center gap-2">
      <ClickButton />
      <ClickCount />
    </div>
  );
}
