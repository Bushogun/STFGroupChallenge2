import { createContext, useContext, useState, type ReactNode } from "react";
import "./tab-context.css";

type Gender = "mujeres" | "hombres";

interface TabContextType {
  gender: Gender;
  setGender: (g: Gender) => void;
}

const TabsContext = createContext<TabContextType | null>(null);

export function useTabContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("useTabContext must be used inside TabContext");
  }
  return context;
}

interface Props {
  children: ReactNode;
}

export default function TabContext({ children }: Props) {
  const [gender, setGender] = useState<Gender>("mujeres");

  return (
    <TabsContext.Provider value={{ gender, setGender }}>
      <div className="tabs-wrapper">
        <div className="tabs">
          <button
            className={gender === "hombres" ? "active" : ""}
            onClick={() => setGender("hombres")}
          >
            Hombres
          </button>
          <button
            className={gender === "mujeres" ? "active" : ""}
            onClick={() => setGender("mujeres")}
          >
            Mujeres
          </button>
        </div>

        <div className="tabs-content">{children}</div>
      </div>
    </TabsContext.Provider>
  );
}
