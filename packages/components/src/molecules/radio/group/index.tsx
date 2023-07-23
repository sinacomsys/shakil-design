import React, { useEffect, useState } from 'react';
import { ModeType, RadioContext, ValueType } from '../context';

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

const Group = React.forwardRef<HTMLDivElement, GroupProps>(
  (
    {
      children,
      value,
      name,
      onChange,
      mode = 'dark',
      onBlur,
      onFocus,
      wrapperStyle,
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState<ValueType>(undefined);

    useEffect(() => {
      setInternalValue(value);
    }, [value]);

    const hangleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInternalValue(e.target.value);
      onChange?.(e);
    };

    return (
      <div
        style={{ ...wrapperStyle }}
        onBlur={onBlur}
        onFocus={onFocus}
        ref={ref}
      >
        <RadioContext.Provider
          value={{
            value: internalValue,
            onChange: hangleOnChange,
            name,
            mode,
          }}
        >
          {children}
        </RadioContext.Provider>
      </div>
    );
  }
);

Group.displayName = 'Group';

export { Group };
export type { GroupProps };
