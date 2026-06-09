import {
    SwitchButton,
    SwitchField,
    Label,
    Text,
    FieldError,
    type SwitchFieldProps,
    type ValidationResult
} from "react-aria-components";

export interface SwitchProps extends Omit<SwitchFieldProps, 'children'> {
    children: React.ReactNode;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    size?: 'sm' | 'md' | 'lg';
    color?: 'facebook' | 'success' | 'danger';
}
import css from "../module/switch.module.css"
import { useId, type ReactNode } from "react";
import clsx from "clsx";
export const Switch = ({
    children,
    description,
    errorMessage,
    size = 'md',
    name,
    className,
    color = 'facebook',
    ...props
}: {
    children?: ReactNode
} & Omit<SwitchProps, "children">) => {
    return (
        <SwitchField   {...props} name={name} className={clsx(css["fb-switch-field"], className)}>
            <div className={css["fb-switch-text-container"]}>
                {children ? <Label htmlFor={name} className={css["fb-switch-label"]}>{children}</Label> : null}
                {description && (
                    <Text slot="description" className={css["fb-switch-description"]}>
                        {description}
                    </Text>
                )}
                <FieldError className={css["fb-switch-error"]}>{errorMessage}</FieldError>
            </div>
            <SwitchButton
                
                className={css['fb-switch-button']}
                data-size={size}
                data-color={color}
            >
                <div className={css['fb-switch-thumb']} />
            </SwitchButton>
        </SwitchField>
    );
};