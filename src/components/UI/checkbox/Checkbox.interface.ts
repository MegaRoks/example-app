export interface CheckboxInterface {
    readonly id: string;
    readonly name: string;
    readonly label: string | number;
    readonly checked: boolean;
    readonly disabled?: boolean;
    onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}
