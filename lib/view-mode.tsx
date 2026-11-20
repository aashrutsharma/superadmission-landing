"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

interface ViewModeContextType {
  mode: "everyone" | "agent";
  setMode: (mode: "everyone" | "agent") => void;
}

const ViewModeContext = createContext<ViewModeContextType>({
  mode: "everyone",
  setMode: () => {},
});

export function ViewModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<"everyone" | "agent">("everyone");
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const agentParam = searchParams.get("agent");
    if (agentParam === "1" || agentParam === "true") {
      setModeState("agent");
    } else {
      setModeState("everyone");
    }
  }, [searchParams]);

  const setMode = (newMode: "everyone" | "agent") => {
    setModeState(newMode);
    const params = new URLSearchParams(searchParams.toString());
    if (newMode === "agent") {
      params.set("agent", "1");
    } else {
      params.delete("agent");
    }
    const query = params.toString() ? `?${params.toString()}` : "";
    router.replace(`${pathname}${query}`, { scroll: false });
  };

  return (
    <ViewModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ViewModeContext.Provider>
  );
}

export function useViewMode() {
  return useContext(ViewModeContext);
}
