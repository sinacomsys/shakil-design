import { Group } from "./group";
import { InternalRadio, RadioProps } from "./internalRadio";

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    RadioProps & React.RefAttributes<HTMLElement>
  > {
  Group: typeof Group;
}

const Radio = InternalRadio as CompoundedComponent;

Radio.Group = Group;
export { Radio };
export type { RadioProps };
