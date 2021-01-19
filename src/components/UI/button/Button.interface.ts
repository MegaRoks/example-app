export interface ButtonInterface {
    readonly id: string;
    readonly type: 'button' | 'submit' | 'reset';
    readonly text: string | number;
    readonly disabled?: boolean;
    onClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}
