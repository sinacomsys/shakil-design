import { createContext } from 'react';

export type ValueType = string | number | undefined | null;
export type ModeType = 'dark' | 'light';

interface RadioContextProps {
  value: string | number | undefined | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string | undefined;
  mode: ModeType;
}
const initialValue: RadioContextProps = {
  value: undefined,
  onChange: () => ({}),
  name: undefined,
  mode: 'dark',
};

const RadioContext = createContext(initialValue);

export { RadioContext };
