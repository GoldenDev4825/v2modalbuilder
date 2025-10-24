import { LabelBuilder } from "./builders/LabelBuilder";
import { StringSelectBuilder } from "./builders/StringSelectBuilder";
import { TextInputBuilder } from "./builders/TextInputBuilder";
type ModalComponent = LabelBuilder | StringSelectBuilder | TextInputBuilder;
export declare class ModalBuilder {
    custom_id: string;
    title: string;
    components: ModalComponent[];
    setCustomId(id: string): this;
    setTitle(title: string): this;
    setComponents(components: ModalComponent[]): this;
    addComponents(...components: ModalComponent[]): this;
    toJSON(): {
        custom_id: string;
        title: string;
        components: (Omit<import("discord-api-types/v10").APITextInputComponent, "label"> | import("discord-api-types/v10").APISelectMenuComponent | {
            type: number;
            id: number;
            label: string;
            description: string;
            component: Omit<import("discord-api-types/v10").APITextInputComponent, "label"> | import("discord-api-types/v10").APISelectMenuComponent;
        })[];
    };
}
export * from "./builders";
