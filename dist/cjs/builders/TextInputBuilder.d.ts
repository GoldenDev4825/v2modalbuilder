import { ComponentType, APITextInputComponent, TextInputStyle } from "discord-api-types/v10";
export declare class TextInputBuilder {
    readonly type: ComponentType.TextInput;
    custom_id: string;
    style: TextInputStyle;
    min_length?: number;
    max_length?: number;
    placeholder?: string;
    required: boolean;
    value?: string;
    setCustomId(id: string): this;
    setStyle(style: TextInputStyle): this;
    setMinLength(min: number): this;
    setMaxLength(max: number): this;
    setPlaceholder(text: string): this;
    setRequired(required: boolean): this;
    setValue(value: string): this;
    toJSON(): Omit<APITextInputComponent, "label">;
}
