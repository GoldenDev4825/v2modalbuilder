import { ComponentType, APISelectMenuComponent, APIMessageComponentEmoji } from "discord-api-types/v10";
export interface StringSelectOption {
    label: string;
    value: string;
    description?: string;
    emoji?: APIMessageComponentEmoji;
    default?: boolean;
}
export declare class StringSelectBuilder {
    readonly type: ComponentType.StringSelect;
    custom_id: string;
    placeholder?: string;
    options: StringSelectOption[];
    setCustomId(id: string): this;
    setPlaceholder(text: string): this;
    addOptions(...options: StringSelectOption[]): this;
    toJSON(): APISelectMenuComponent;
}
