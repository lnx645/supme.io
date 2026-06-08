import {
    CheckboxButton,
    CheckboxField,
    Label,
    Text,
    FieldError,
    type CheckboxFieldProps,
    type ValidationResult
} from "react-aria-components";
import css from "../module/checkbox.module.css";

export interface CheckBoxProps extends Omit<CheckboxFieldProps, 'children'> {
    children: React.ReactNode;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    size?: 'sm' | 'md' | 'lg';
    color?: 'facebook' | 'success' | 'danger';
}

export const CheckBox = ({
    children,
    description,
    errorMessage,
    size = 'md',
    color = 'facebook',
    ...props
}: CheckBoxProps) => {
    return (
        <CheckboxField {...props} className={css['fb-checkbox-field']}>
            <CheckboxButton
                className={css['fb-checkbox-button']}
                data-size={size}
                data-color={color}
            >
                {/* SVG Centang yang disesuaikan ketebalan & rasionya mirip image_75c3c9.png */}
                <svg className={css['fb-checkbox-icon']} viewBox="0 0 12 12" fill="none">
                    <path
                        d="M2.5 6L5 8.5L9.5 3.5"
                        stroke="white"
                        strokeWidth="2.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </CheckboxButton>

            <div className={css['fb-checkbox-text-container']}>
                <Label className={css['fb-checkbox-label']}>{children}</Label>
                {description && (
                    <Text slot="description" className={css['fb-checkbox-description']}>
                        {description}
                    </Text>
                )}
                <FieldError className={css['fb-checkbox-error']}>{errorMessage}</FieldError>
            </div>
        </CheckboxField>
    );
};