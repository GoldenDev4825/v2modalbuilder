import { ComponentType, APITextInputComponent, APISelectMenuComponent, APIMessageComponentEmoji, TextInputStyle } from "discord-api-types/v10";
export declare class V2TextInputBuilder {
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
export interface V2StringSelectOption {
    label: string;
    value: string;
    description?: string;
    emoji?: APIMessageComponentEmoji;
    default?: boolean;
}
export declare class V2StringSelectBuilder {
    readonly type: ComponentType.StringSelect;
    custom_id: string;
    placeholder?: string;
    options: V2StringSelectOption[];
    setCustomId(id: string): this;
    setPlaceholder(text: string): this;
    addOptions(...options: V2StringSelectOption[]): this;
    toJSON(): APISelectMenuComponent;
}
export declare class V2LabelBuilder {
    readonly type: number;
    id?: number;
    label: string;
    description?: string;
    component: V2TextInputBuilder | V2StringSelectBuilder;
    setId(id: number): this;
    setLabel(text: string): this;
    setDescription(desc: string): this;
    setComponent(component: V2TextInputBuilder | V2StringSelectBuilder): this;
    toJSON(): {
        type: number;
        id: number;
        label: string;
        description: string;
        component: Omit<APITextInputComponent, "label"> | APISelectMenuComponent;
    };
}
export declare class V2ModalBuilder {
    custom_id: string;
    title: string;
    components: V2LabelBuilder[];
    setCustomId(id: string): this;
    setTitle(title: string): this;
    addComponents(...labels: V2LabelBuilder[]): this;
    toJSON(): {
        custom_id: string;
        title: string;
        components: {
            type: number;
            id: number;
            label: string;
            description: string;
            component: Omit<APITextInputComponent, "label"> | APISelectMenuComponent;
        }[];
    };
}
