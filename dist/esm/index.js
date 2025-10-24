import { ComponentType, TextInputStyle, } from "discord-api-types/v10";
// ---------------- TEXT INPUT ----------------
export class V2TextInputBuilder {
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
export class V2StringSelectBuilder {
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
// ---------------- LABEL ----------------
export class V2LabelBuilder {
    constructor() {
        this.type = 18;
    }
    setId(id) {
        Reflect.set(this, "id", id);
        return this;
    }
    setLabel(text) {
        Reflect.set(this, "label", text);
        return this;
    }
    setDescription(desc) {
        Reflect.set(this, "description", desc);
        return this;
    }
    setComponent(component) {
        Reflect.set(this, "component", component);
        return this;
    }
    toJSON() {
        return {
            type: this.type,
            id: this.id,
            label: this.label,
            description: this.description,
            component: this.component.toJSON(),
        };
    }
}
// ---------------- MODAL ----------------
export class V2ModalBuilder {
    constructor() {
        this.components = [];
    }
    setCustomId(id) {
        Reflect.set(this, "custom_id", id);
        return this;
    }
    setTitle(title) {
        Reflect.set(this, "title", title);
        return this;
    }
    addComponents(...labels) {
        Reflect.set(this, "components", [...this.components, ...labels]);
        return this;
    }
    toJSON() {
        return {
            custom_id: this.custom_id,
            title: this.title,
            components: this.components.map(c => c.toJSON()),
        };
    }
}
