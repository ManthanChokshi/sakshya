import { cn } from "@/lib/utils";

export const Hero = () => {
  return (
    <div className={cn("w-full relative h-screen")}>
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 bg-obsidian-950"></div>
      </div>
    </div>
  );
};
