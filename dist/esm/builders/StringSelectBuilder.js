import { ComponentType, } from "discord-api-types/v10";
export class StringSelectBuilder {
    constructor() {
        this.type = ComponentType.StringSelect;
        this.options = [];
    }
    setCustomId(id) {
        Reflect.set(this, "custom_id", id);
        return this;
    }
    setPlaceholder(text) {
        Reflect.set(this, "placeholder", text);
        return this;
    }
    addOptions(...options) {
        Reflect.set(this, "options", [...this.options, ...options]);
        return this;
    }
    toJSON() {
        return {
            type: this.type,
            custom_id: this.custom_id,
            placeholder: this.placeholder,
            options: this.options,
        };
    }
}
