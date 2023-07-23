/// <reference types="react" />
import { Group } from './group';
import { RadioProps } from './internalRadio';
interface CompoundedComponent extends React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLElement>> {
    Group: typeof Group;
}
declare const Radio: CompoundedComponent;
export { Radio };
export type { RadioProps };
