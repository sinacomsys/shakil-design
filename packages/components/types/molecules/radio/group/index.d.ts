import React from 'react';
import { ModeType, ValueType } from '../context';
interface GroupProps {
    children?: React.ReactNode;
    value?: ValueType;
    name?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    mode?: ModeType;
    onBlur?: React.FocusEventHandler<HTMLDivElement>;
    onFocus?: React.FocusEventHandler<HTMLDivElement>;
    wrapperStyle?: React.CSSProperties;
}
declare const Group: React.ForwardRefExoticComponent<GroupProps & React.RefAttributes<HTMLDivElement>>;
export { Group };
export type { GroupProps };
