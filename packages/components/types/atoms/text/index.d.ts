import * as React from 'react';
import { BaseTextProps } from './baseText/baseText';
import { fonts, fontWeights } from './style';
interface TextProps extends BaseTextProps {
    theme?: keyof typeof fonts;
    weight?: keyof typeof fontWeights | number;
    color?: string;
    size?: number | string;
}
declare const Text: React.MemoExoticComponent<React.ForwardRefExoticComponent<TextProps & React.RefAttributes<HTMLDivElement>>>;
export { Text, fonts };
export type { TextProps };
