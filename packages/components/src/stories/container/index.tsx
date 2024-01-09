import { Colors, ShakilDesignThemeProvider } from "../../theme";
import React from "react";
import "./style.css";

export const StoryContainer = ({ children }: any) => {
  return (
    <ShakilDesignThemeProvider unit="pixel" colors={Colors}>
      <div style={{ width: "100%", height: "100%" }}>{children}</div>
    </ShakilDesignThemeProvider>
  );
};
