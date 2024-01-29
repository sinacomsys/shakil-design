/// <reference types="react" />
interface ManualImportDateContextProps {
    year?: string;
    month?: string;
    day?: string;
    hour?: string;
    minute?: string;
}
export declare const ManualImportDateContext: {
    Provider: ({ children, defaultValues, ...formProps }: {
        children: import("react").ReactNode;
    } & Partial<{
        mode: "all" | "onBlur" | "onChange" | "onSubmit" | "onTouched";
        reValidateMode: "onBlur" | "onChange" | "onSubmit";
        defaultValues: {
            year?: string | undefined;
            month?: string | undefined;
            day?: string | undefined;
            hour?: string | undefined;
            minute?: string | undefined;
        } | ((payload?: unknown) => Promise<ManualImportDateContextProps>);
        values: ManualImportDateContextProps;
        resetOptions: Partial<{
            keepDirtyValues: boolean;
            keepErrors: boolean;
            keepDirty: boolean;
            keepValues: boolean;
            keepDefaultValues: boolean;
            keepIsSubmitted: boolean;
            keepTouched: boolean;
            keepIsValid: boolean;
            keepSubmitCount: boolean;
        }> | undefined;
        resolver: import("react-hook-form").Resolver<ManualImportDateContextProps, any>;
        context: any;
        shouldFocusError: boolean;
        shouldUnregister: boolean;
        shouldUseNativeValidation: boolean;
        criteriaMode: import("react-hook-form").CriteriaMode;
        delayError: number;
    }>) => JSX.Element;
    context: import("react").Context<import("react-hook-form").UseFormReturn<ManualImportDateContextProps, object, undefined>>;
    useWatch: () => ManualImportDateContextProps;
    useFormContext: () => import("react-hook-form").UseFormReturn<ManualImportDateContextProps, object, undefined>;
    useFormState: () => import("react-hook-form").UseFormStateReturn<ManualImportDateContextProps>;
    useFieldArray: <TFieldArrayName extends never = never, TKeyName extends string = "id">({ name, keyName, shouldUnregister, }: {
        name: TFieldArrayName;
        keyName?: TKeyName | undefined;
        shouldUnregister?: boolean | undefined;
    }) => import("react-hook-form").UseFieldArrayReturn<ManualImportDateContextProps, TFieldArrayName, TKeyName>;
    Controller: <TName extends "month" | "year" | "minute" | "day" | "hour" = "month" | "year" | "minute" | "day" | "hour">({ name, ...rest }: Omit<import("react-hook-form").ControllerProps<ManualImportDateContextProps, TName>, "control">) => JSX.Element;
};
export {};
