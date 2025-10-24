import { ComponentType, TextInputStyle, } from "discord-api-types/v10";
export class TextInputBuilder {
    constructor() {
        this.type = ComponentType.TextInput;
        this.style = TextInputStyle.Short;
        this.required = true;
    }
    setCustomId(id) {
        Reflect.set(this, "custom_id", id);
        return this;
    }
    setStyle(style) {
        Reflect.set(this, "style", style);
        return this;
    }
    setMinLength(min) {
        Reflect.set(this, "min_length", min);
        return this;
    }
    setMaxLength(max) {
        Reflect.set(this, "max_length", max);
        return this;
    }
    setPlaceholder(text) {
        Reflect.set(this, "placeholder", text);
        return this;
    }
    setRequired(required) {
        Reflect.set(this, "required", required);
        return this;
    }
    setValue(value) {
        Reflect.set(this, "value", value);
        return this;
    }
    toJSON() {
        return {
            type: this.type,
            custom_id: this.custom_id,
            style: this.style,
            min_length: this.min_length,
            max_length: this.max_length,
            placeholder: this.placeholder,
            required: this.required,
            value: this.value,
        };
    }
}
