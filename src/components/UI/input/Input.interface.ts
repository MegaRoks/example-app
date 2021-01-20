export interface InputInterface {
    readonly id: string;
    readonly type: string;
    readonly placeholder?: string;
    readonly name?: string;
    readonly value?: React.ReactText;
    onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
}
