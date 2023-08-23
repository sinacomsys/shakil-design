/// <reference types="react" />
export type ValueType = string | number | undefined | null;
interface RadioContextProps {
    value: string | number | undefined | null;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name: string | undefined;
}
declare const RadioContext: import("react").Context<RadioContextProps>;
export { RadioContext };
