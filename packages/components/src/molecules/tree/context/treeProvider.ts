import { createContext } from "react";
import { Unit } from "../../../types";
const TreeContext = createContext<{ unit?: Unit }>({ unit: "viewport" });
export { TreeContext };
