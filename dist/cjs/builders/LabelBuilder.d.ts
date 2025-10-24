import { TextInputBuilder } from "./TextInputBuilder";
import { StringSelectBuilder } from "./StringSelectBuilder";
export declare class LabelBuilder {
    readonly type: number;
    id?: number;
    label: string;
    description?: string;
    component: TextInputBuilder | StringSelectBuilder;
    setId(id: number): this;
    setLabel(text: string): this;
    setDescription(desc: string): this;
    setComponent(component: TextInputBuilder | StringSelectBuilder): this;
    toJSON(): {
        type: number;
        id: number;
        label: string;
        description: string;
        component: Omit<import("discord-api-types/v10").APITextInputComponent, "label"> | import("discord-api-types/v10").APISelectMenuComponent;
    };
}
