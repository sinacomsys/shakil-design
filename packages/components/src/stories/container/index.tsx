import { Colors, theming } from "../../theme/context";
import React from 'react';
import "./style.css";

const { ThemeProvider } = theming;

export const StoryContainer   = ({ children }: any) => {
  return (
    <ThemeProvider theme={Colors}>
      <div style={{ width: "100%", height: "100%" }}>{children}</div>
    </ThemeProvider>
  );
};
