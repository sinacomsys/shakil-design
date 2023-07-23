import classNames from 'classnames';
import * as React from 'react';
import { BaseText, BaseTextProps, Variant } from './baseText/baseText';
import { fonts, fontWeights, useThemes } from './style';

interface TextProps extends BaseTextProps {
  theme?: keyof typeof fonts;
  weight?: keyof typeof fontWeights | number;
  color?: string;
  size?: number | string;
}

const Text = React.memo(
  React.forwardRef<HTMLDivElement, TextProps>(
    (
      {
        theme = 'Regular',
        className,
        color,
        style,
        size,
        weight,
        variant,
        ...rest
      },
      ref
    ) => {
      const themes = useThemes();

      const fontWeight =
        typeof weight === 'string' ? fontWeights[weight] : weight;
      const setVariant = (): Variant => {
        if (typeof size !== 'number' && size?.match(/h(1|2|3|4|5|6)/g)) {
          return size as Variant;
        }
        return 'p';
      };

      return (
        <BaseText
          ref={ref}
          variant={variant || setVariant()}
          className={classNames(themes[theme], className)}
          style={{
            ...style,
            color,
            fontSize: size,
            fontWeight,
          }}
          {...rest}
        />
      );
    }
  )
);

export { Text, fonts };
export type { TextProps };
