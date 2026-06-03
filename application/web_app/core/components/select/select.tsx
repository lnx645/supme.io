import React from 'react';
import {
  Select as AriaSelect,
  type SelectProps as AriaSelectProps,
  Button,
  SelectValue,
  Popover,
  ListBox,
  ListBoxItem,
  Label,
  FieldError,
  Text,
  type ListBoxItemProps,
  type ValidationResult
} from 'react-aria-components';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';
import styles from "./module/select.module.css";

export interface SelectProps<T extends object> extends Omit<AriaSelectProps<T>, 'children'> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  items?: Iterable<T>;
  children: React.ReactNode | ((item: T) => React.ReactNode);
  size?: 'xs' | 'sm' | 'md' | 'lg';
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  color?: 'default' | 'success' | 'warning' | 'danger';
}

export function Select<T extends object>({
  label,
  description,
  errorMessage,
  children,
  items,
  size = 'md',
  radius = 'md',
  color = 'default',
  ...props
}: SelectProps<T>) {
  return (
    <AriaSelect {...props} className={styles.wrapper}>
      {/* Container utama input & label */}
      <div 
        className={clsx(
          styles.inputContainer,
          styles[`size-${size}`],
          styles[`radius-${radius}`],
          styles[`color-${color}`]
        )}
      >
        <Button className={styles.trigger}>
          <SelectValue className={styles.value} />
          <ChevronDown aria-hidden className={styles.icon} size={16} />
        </Button>
        
        {/* Floating Label diletakkan setelah button agar bisa ditarget via CSS sibling selector */}
        {label && <Label className={styles.floatingLabel}>{label}</Label>}
      </div>

      {description && <Text slot="description" className={styles.description}>{description}</Text>}
      <FieldError className={styles.errorfield}>{errorMessage}</FieldError>
      
      <Popover className={styles.popover}>
        <ListBox items={items} className={styles.listBox}>
          {children}
        </ListBox>
      </Popover>
    </AriaSelect>
  );
}

export function SelectItem(props: ListBoxItemProps) {
  return (
    <ListBoxItem {...props} className={styles.item}>
      {props.children}
    </ListBoxItem>
  );
}