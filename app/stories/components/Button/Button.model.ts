export type ButtonType =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps {
    label: string;
    type: ButtonType;
    disabled: boolean;
    size: ButtonSize;
}

export const buttonDefaults: Partial<ButtonProps> = {
    label: 'Click Me',
    type: 'primary',
    disabled: false,
    size: 'medium',
};
