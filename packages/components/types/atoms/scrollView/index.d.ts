import React from "react";
export interface ScrollViewProps extends React.HTMLAttributes<HTMLDivElement> {}
declare const ScrollView: React.ForwardRefExoticComponent<
  ScrollViewProps & React.RefAttributes<HTMLDivElement>
>;
export { ScrollView };
